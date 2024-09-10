<template>
  <div>
    
    <Button  label="Primary" :severity='confProps?.style ?? "" ' class="h-8 ml-3" @click="confirmAction">{{ confProps?.text ?? '등록'}}</Button>
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

const confProps = props.conf

const confirmToast = confProps?.toast ?? {}
const confirmDialog = confProps?.dialog ?? {}

const confirmAction = () => {

    confirm.require({
        message: confirmDialog?.message ?? '저장하시겠습니까?',
        header: confirmDialog?.title ?? '저장?',
        icon: 'pi pi-exclamation-triangle',
        rejectProps: {
            label: 'Cancel',
            severity: 'secondary',
            outlined: true
        },
        acceptProps: {
            label: 'Save'
        },
        accept: () => {
          if(confirmToast?.accept) toast.add({ severity: 'info', summary: confirmToast.accept.title ?? '승인', detail: confirmToast.accept.message ?? '저장 했습니다.', life: 3000 });
          // else return
        },
        reject: () => {
          if(confirmToast?.cancel) toast.add({ severity: 'error', summary: confirmToast.cancel.title ?? '취소', detail: confirmToast.cancel.message ?? '취소 했습니다.', life: 3000 });
          // else return
        }
    });
};

</script>

<style>

</style>