<template>
  <div>
    <div class="flex justify-between items-center mb-5">
      <div class="flex-1 mr-10">
        <input type="text" class=" w-full h-14 border-b-2 text-2xl p-2" placeholder="제목을 입력하세요"/>
      </div>
      <div>
        <MultiSelect 
          v-model="seletedCategory" 
          display="chip" 
          :options="category" 
          optionLabel="name" 
          placeholder="Select Cities"
          :maxSelectedLabels="3" 
          class="w-full md:w-[20rem]" 
        />
      </div>
    </div>
    <div>
      <MdEditor v-model="text" language="us-US"/>
    </div>
    <div class="flex w-full justify-end items-center mt-8"> 
      <Button label="cancel" severity="secondary" class="mr-3 h-8">취소</Button>
      <Button label="submit" class="h-8">등록</Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { MdEditor } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import MultiSelect from 'primevue/multiselect';
import Button from 'primevue/button';



const text = ref('Hello Editor!');
const seletedCategory = ref([])
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