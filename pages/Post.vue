<template>
  <div>
    <div class="w-full mb-5">
      <h1 class="text-3xl font-bold leading-tight tracking-tight text-gray-900">Blog</h1>
    </div>
    <nav class="flex" aria-label="Breadcrumb">
      <ol role="list" class="flex items-center space-x-4">
        <li>
          <div>
            <a href="#" class="text-gray-400 hover:text-gray-500">
              <HomeIcon class="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span class="sr-only">Home</span>
            </a>
          </div>
        </li>
        <li v-for="page in pages" :key="page.name">
          <div class="flex items-center">
            <ChevronRightIcon class="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
            <a :href="page.href" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700" :aria-current="page.current ? 'page' : undefined">{{ page.name }}</a>
          </div>
        </li>
      </ol>
    </nav>
    <div class="flex justify-end items-center ">
      <NuxtLink to="/edit">
        <PencilIcon class="h-6 w-6 text-gray-500 hover:bg-slate-50 cursor-pointer rounded-lg "/>
      </NuxtLink>
    </div>
    <Card />
  </div>
</template>

<script lang="ts" setup>
import Card from '~/components/Card.vue';
import { ChevronRightIcon, HomeIcon, PencilIcon } from '@heroicons/vue/20/solid'

const pages = [
  { name: 'Projects', href: '#', current: false },
  { name: 'Project Nero', href: '#', current: true },
]

const requestMockServer = async () => {
  const requestUrl = 'http://localhost:8080'

  const postResponse = await $fetch(`${requestUrl}/post`)

  const postData = await postResponse.json()

  return {
    data: postData
  }
}

onMounted(async () => {
  const data = await requestMockServer()

  console.log(data)

})

</script>

<style>

</style>