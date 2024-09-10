<template>
  <div>
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
    <div class="mt-5 h-24 flex justify-start items-center">
      <img :src="post.imageUrl" class="h-24 ">
    </div>
    <div class="w-full sm:m-5 mt-5 flex justify-between">
      <h1 class="text-3xl font-bold leading-tight tracking-tight text-gray-900">{{ post.title }}</h1>
      <div class="flex justify-center items-center sm:mr-5">
        <img :src="post.author.imageUrl" class="h-10 w-10 rounded-full bg-gray-50" >
        <p class="text-sm leading-6 font-semibold text-gray-900 ml-2 hidden sm:block">{{ post.author.name }}</p>
      </div>
    </div>
    <div class="m-5 p-5 w-full min-h-svh">
      {{ post.content }}
    </div>
    <div class="max-w-3xl mx-auto">
      <Comment/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ChevronRightIcon, HomeIcon } from '@heroicons/vue/20/solid'
import Comment from '~/components/Comment.vue';

const pages = [
  { name: '모바일', href: '#', current: false },
  { name: 'Andriod', href: '#', current: false },
  { name: 'Andriod Studio 설치법', href: '#', current: true },
]

const post =  {
    id: 4,
    title: 'Andriod Studio 설치법',
    href: '/detail',
    content:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
    imageUrl:
      '/image/Android Studio.svg',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '/detail',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  }



</script>

<style>

</style>