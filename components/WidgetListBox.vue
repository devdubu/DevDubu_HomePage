<template>
   
  <div class="m-1 flex font-sans">
    <div class="flex-none w-48 relative rounded-lg">
      <img src="../assets//images/example.jpg" alt="" class="rounded-lg absolute inset-0 w-full h-full object-cover" loading="lazy" />
    </div>
    <form class="flex-auto p-6">
      <div class="flex flex-wrap">
        <h1 class="flex-auto text-lg font-semibold text-slate-900">
          글 제목 입니다
        </h1>
        <div class="text-lg font-semibold text-slate-500">
          $110.00
        </div>
        
      </div>
      
      <div class="flex space-x-4 mb-6 text-sm font-medium">
        <div class="flex-auto flex space-x-4">
          <div class="w-full flex-none text-sm font-medium text-slate-900 mt-2">
              글에 간략한 내용입니다.
          </div>
        </div>
        <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
          <svg width="20" height="20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
          </svg>
        </button>
      </div>
    </form>
  </div>
  </template>
  
  <script>
  
  export default {
  
  }
  </script>