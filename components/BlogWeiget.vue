<template>
  <div class="w-64 h-96 rounded-lg bg-white shadow-lg m-10">
    <div class="w-64">
      <img class="rounded-lg" src="../assets/images/example.jpg" alt="">
    </div>
    <div class="mt-2 ml-1 h-16">
      <h2 class="text-xl">글 제목 입니다?</h2>
      <p class="text-sm">글 내용 요약본입니다?</p>
    </div>
    <div class="w-5/6 h-16 mx-auto flex justify-between items-center">
      <div class="">
        <p class="">2023 / 12 / 12</p>
      </div>
      <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>