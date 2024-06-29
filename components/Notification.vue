<template>
  <div>
    <Toast />
    <Button :label="toastConf.summary" @click="show()" :severity="toastConf.severity"/>
  </div>
</template>

<script lang="ts" setup>
import { useToast } from 'primevue/usetoast';

interface IToast {
  severity: any
  summary: string
  detail: string
  life: number
}


const toast = useToast();

const props = defineProps({
  conf:{
    type:  Object as PropType<IToast>
  }
})

const toastConf = props.conf ?? { severity: 'info', summary: '정보', detail: '정보 토스트 샘플', life: 3000 }

const show = () => {
    toast.add(toastConf);
};

</script>

<style>

</style>