<template>
  <div>
      <button type="button" :class='btnClass'>
        {{ confProps.label }}
      </button>
  </div>
</template>

<script lang="ts" setup>
import { componentUtil } from '~/utils/translate/designTranslate';



const props = defineProps({
  conf:{
    type: Object as PropType<IButton>,
    default: ()=> {
      return{
        label: '등록'
      }
    }
    
  }
})


const confProps = props.conf


const transClass = componentUtil.translateBtnFunc(confProps)
console.log(transClass)

const btnClass = `rounded-md font-semibold shadow-sm ${transClass.color} ${transClass.size}`

console.log(btnClass)


</script>

<style>

</style>