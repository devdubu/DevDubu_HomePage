<template>
  <div>
    
    <div class="flex justify-between items-center mb-5">
      <div class="flex-1 mr-10">
        <input v-model='title' type="text" class=" w-full h-14 border-b-2 text-2xl p-2" placeholder="제목을 입력하세요">
      </div>
      <div>
        <MultiSelect 
          v-model="seletedCategory" 
          display="chip" 
          :options="category" 
          option-label="name" 
          placeholder="Select Cities"
          :max-selected-labels="3" 
          class="w-full md:w-[20rem]" 
        />
      </div>
    </div>
    <div>
      <MdEditor v-model="text" language="us-US"/>
    </div>
    <div class="flex w-full justify-end items-center mt-8"> 
      <ConfirmButton :conf='cancelBtnConfig' />
      <ConfirmButton :conf='saveBtnConfig' />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { MdEditor } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import MultiSelect from 'primevue/multiselect';
import Button from 'primevue/button';





// Editor 데이터
const title = ref('')
const text = ref('Hello Editor!');
const seletedCategory = ref([])

const saveBtnConfig = {
  text: '저장',
  style: 'success',
  dialog: {
    title: '저장',
    message:'저장하시겠습니까?'
  },
  toast:{
    accept:{
      title: '저장',
      message:'저장 하였습니다.'
    },
  }
  
}

const cancelBtnConfig = {
  text: '취소',
  style: 'secondary',
  dialog: {
    title: '취소',
    message:'취소하시겠습니까?'
  },
  toast:{
    accept:{
    title: '취소',
    message:'취소 하였습니다.'
  },
  }
  
}


const category = [
  {
    name: '프론트엔드'
  },
  {
    name: '백엔드'
  }
]

</script>

<style>
.md-editor{
  height: 800px;
}
</style>