<template>
  <div>
    <div class="mx-auto max-w-2xl lg:mx-0">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"> 토스트 샘플</h2>
      <p class="mt-6 text-lg leading-8 text-gray-600">
        토스트 용도의 샘플 버튼 모음 입니다
      </p>
    </div>
    <div class="w-full mx-auto mt-10 max-w-2xl grid sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6">
      <Notification :conf="infoToast"></Notification>
      <Notification :conf="successToast"></Notification>
      <Notification :conf="warnToast"></Notification>
      <Notification :conf="errorToast"></Notification>
      <Notification :conf="secondaryToast"></Notification>
      <Notification :conf="contrastToast"></Notification>
    </div>
    <div class="mx-auto max-w-2xl lg:mx-0 mt-10">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">모달 샘플</h2>
      <p class="mt-6 text-lg leading-8 text-gray-600">
        모달 용도의 샘플 버튼 모음 입니다
      </p>
    </div>
    <div>

    </div>
  </div>
</template>

<script lang="ts" setup>
import Notification from '~/components/Notification.vue';


// Toast 용도 변수
const infoToast = { severity: 'info', summary: '정보', detail: '정보 토스트 샘플', life: 3000 }
const successToast = { severity: 'success', summary: '성공', detail: '성공 토스트 샘플', life: 3000 }
const warnToast = { severity: 'warning', summary: '경고', detail: '경고 토스트 샘플', life: 3000 }
const errorToast = { severity: 'danger', summary: '에러', detail: '에러 토스트 샘플', life: 3000 }
const secondaryToast = { severity: 'secondary', summary: '화이트', detail: '화이트 토스트 샘플', life: 3000 }
const contrastToast = { severity: 'contrast', summary: '블랙', detail: '블랙 토스트 샘플', life: 3000 }

// Modal 용도 변수


</script>

<style>

</style>