<template>
  <div>
    <Button label="Primary" :severity='confProps?.style ?? "" ' class="h-8 ml-3" @click="confirmAction">{{ confProps?.text ?? '등록'}}</Button>
  </div>
</template>

<script lang="ts" setup>

import { useToast } from "primevue/usetoast";

interface IConfirmButton{
  text: string
  style?: string
  dialog?:IMessageConfig
  toast?:{
    accept?:IMessageConfig
    cancel?:IMessageConfig
  }
}

interface IMessageConfig
  {
      title?: string
      message?: string
    }


const confirm = useConfirm();
const toast = useToast();

const props = defineProps({
  conf:{
    type: Object as PropType<IConfirmButton>,
  }
})

const emits = defineEmits(['acceptAction', 'denyAction'])

const confProps = props.conf

const confirmToast = confProps?.toast ?? {}
const confirmDialog = confProps?.dialog ?? {}

const confirmAction = () => {

    confirm.require({
        message: confirmDialog?.message ?? '저장하시겠습니까?',
        header: confirmDialog?.title ?? '저장?',
        rejectLabel: 'Cancel',
        acceptLabel: 'Save',
        accept: acceptFunc,
        reject: denyFunc,
        acceptClass: 'rounded-md px-2.5 py-1.5 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300',
        rejectClass: 'rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-black shadow-sm ring-1 ring-inset ring-gray-300 hover:text-white '
    });
};

const acceptFunc = ()=>{
  if(confirmToast?.accept){
    emits('acceptAction')


    toast.add({ severity: 'info', summary: confirmToast.accept.title ?? '승인', detail: confirmToast.accept.message ?? '저장 했습니다.', life: 3000 });
  }
}

const denyFunc = () =>{
  if(confirmToast?.cancel) {
    toast.add({ severity: 'error', summary: confirmToast.cancel.title ?? '취소', detail: confirmToast.cancel.message ?? '취소 했습니다.', life: 3000 })
  };
}

</script>

<style>
.acceptBtn{
  
}

</style>