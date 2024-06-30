<template>
  <div>
    <!-- 댓글 작성 -->
    <div class="flex items-start space-x-4 mt-5">
      <div class="flex-shrink-0">
        <img class="inline-block h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
      </div>
      <div class="min-w-0 flex-1">
        <form action="#" class="relative">
          <div class="overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
            <label for="comment" class="sr-only">Add your comment</label>
            <textarea rows="3" name="comment" id="comment" class="block pl-3 w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Add your comment..." />

            <!-- Spacer element to match the height of the toolbar -->
            <div class="py-2" aria-hidden="true">
              <!-- Matches height of button in toolbar (1px border + 36px content height) -->
              <div class="py-px">
                <div class="h-9" />
              </div>
            </div>
          </div>

          <div class="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
            <div class="flex items-center space-x-5">
              <div class="flex items-center">
                
              </div>
            </div>
            <div class="flex-shrink-0">
              <button type="submit" class="inline-flex items-center rounded-md bg-main-color-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-main-color-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main-color">Post</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  <!-- 댓글 리스트 -->
    <ul role="list" class="divide-y divide-gray-100 mt-5">
    <li v-for="item in activityItems" :key="item.commit" class="py-4">
      <div class="flex items-center gap-x-3">
        <img :src="item.user.imageUrl" alt="" class="h-6 w-6 flex-none rounded-full bg-gray-800" />
        <h3 class="flex-auto truncate text-sm font-semibold leading-6 text-gray-900">{{ item.user.name }}</h3>
        <time :datetime="item.dateTime" class="flex-none text-xs text-gray-500">{{ item.date }}</time>
      </div>
      <p class="mt-3 truncate text-sm text-gray-500">
        Pushed to <span class="text-gray-700">{{ item.projectName }}</span> (<span class="font-mono text-gray-700">{{ item.commit }}</span> on <span class="text-gray-700">{{ item.branch }}</span
        >)
      </p>
    </li>
  </ul>
  </div>
</template>

<script lang="ts" setup>
import {
  PaperClipIcon,
} from '@heroicons/vue/20/solid'


const activityItems = [
  {
    user: {
      name: 'Michael Foster',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    projectName: 'ios-app',
    commit: '2d89f0c8',
    branch: 'main',
    date: '1h',
    dateTime: '2023-01-23T11:00',
  },
  {
    user: {
      name: 'Lindsay Walton',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    projectName: 'mobile-api',
    commit: '249df660',
    branch: 'main',
    date: '3h',
    dateTime: '2023-01-23T09:00',
  },
  {
    user: {
      name: 'Courtney Henry',
      imageUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    projectName: 'ios-app',
    commit: '11464223',
    branch: 'main',
    date: '12h',
    dateTime: '2023-01-23T00:00',
  },
  {
    user: {
      name: 'Courtney Henry',
      imageUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    projectName: 'tailwindui.com',
    commit: 'dad28e95',
    branch: 'main',
    date: '2d',
    dateTime: '2023-01-21T13:00',
  },
  {
    user: {
      name: 'Michael Foster',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    projectName: 'relay-service',
    commit: '624bc94c',
    branch: 'main',
    date: '5d',
    dateTime: '2023-01-18T12:34',
  },
]
</script>

<style>

</style>