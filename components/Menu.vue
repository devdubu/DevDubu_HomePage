<template>
  <div>
    <header class="bg-white">
      <nav class="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-6" aria-label="Global">
        <div class="flex flex-1">
          <NuxtLink to="/" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-16 w-auto" :src="Logo" alt="" />
          </NuxtLink>
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-start rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup class="hidden lg:flex lg:gap-x-12">
          <div v-for="menu in menuData" :key="menu.id">
            <Popover class="relative" v-if="menu.child">
              <PopoverButton class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                {{ menu.name }}
                <ChevronDownIcon class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
              </PopoverButton>

              <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
                <PopoverPanel class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div class="p-4">
                    <div v-for="item in menu.child" :key="item.name" class="group relative flex gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                      <div class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <component :is="item.icon" class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div class="flex-auto">
                        <NuxtLink :to="item.href" class="block font-semibold text-gray-900">
                          {{ item.name }}
                          <span class="absolute inset-0" />
                        </NuxtLink>
                        <p class="mt-1 text-gray-600">{{ item.description }}</p>
                      </div>
                    </div>
                  </div>
                  <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                    <NuxtLink v-for="item in callsToAction" :key="item.name" :to="item.href" class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100">
                      <component :is="item.icon" class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                      {{ item.name }}
                    </NuxtLink>
                  </div>
                </PopoverPanel>
              </transition>
            </Popover>
            <NuxtLink v-else :to="menu.href" class="text-sm font-semibold leading-6 text-gray-900">{{ menu.name }}</NuxtLink>
          </div>
        </PopoverGroup>
        
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <NuxtLink to="/login" class="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></NuxtLink>
        </div>
      </nav>
      <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-10" />
        <DialogPanel class="fixed inset-y-0 right-0 z-10 flex w-full flex-col justify-between overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="p-6">
            <div class="flex items-center justify-between">
              <NuxtLink to="/" class="-m-1.5 p-1.5">
                <span class="sr-only">Your Company</span>
                <img class="h-16 w-auto" :src="Logo" alt="" />
              </NuxtLink>
              <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
                <span class="sr-only">Close menu</span>
                <XMarkIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div class="mt-6 flow-root">
              <div v-for="menu in menuData" :key="menu.id">
                <div class="-my-6 divide-y divide-gray-500/10" v-if="menu.child">
                  <p class="-mx-3 mt-5 block rounded-lg py-2 text-base font-semibold leading-7 text-gray-900 ">{{ menu.name }}</p>
                  <div class="space-y-2 py-6" >
                    <NuxtLink v-for="item in menu.child" :key="item.name" :to="item.href" class="group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <component :is="item.icon" class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      {{ item.name }}
                    </NuxtLink>
                  </div>
                </div>
                <div v-else class="space-y-2 py-3">
                    <NuxtLink :to="menu.href" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{ menu.name }}</NuxtLink>
                  </div>
              </div>
                <div class="py-6">
                  <NuxtLink to="/login" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</NuxtLink>
                </div>
            </div>
          </div>
          <div class="sticky bottom-0 grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 text-center">
            <NuxtLink v-for="item in callsToAction" :key="item.name" :to="item.href" class="p-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100">{{ item.name }}</NuxtLink>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  </div>
</template>

<script lang="ts" setup>
import { Dialog, DialogPanel, Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'
import { ref } from 'vue';
import '~/assets/css/tailwind.css'
import Logo from '/image/Logo.png'

const devops = [
  { name: 'Container', description: 'Get a better understanding of your traffic', href: '/post', icon: ChartPieIcon },
  { name: 'CI/CD', description: 'Speak directly to your customers', href: '/post', icon: CursorArrowRaysIcon },
  { name: 'AWS', description: 'Your customers’ data will be safe and secure', href: '/post', icon: FingerPrintIcon },
  { name: 'Infra', description: 'Connect with third-party tools', href: '/post', icon: SquaresPlusIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]
const application = [
  { name: '프론트 엔드', href: '/post', description: 'Learn more about our company values and mission to empower others',icon: ChartPieIcon },
  { name: '백엔드', href: '/post', description: 'Looking for you next career opportunity? See all of our open positions', icon: ChartPieIcon },
  {
    name: '모바일',
    href: '/post',
    description: 'Get in touch with our dedicated support team or reach out on our community forums',
    icon: ChartPieIcon
  },
  { name: '기타', href: '/post', description: 'Read our latest announcements and get perspectives from our team', icon: ChartPieIcon },
]

const menuData = [
  {
    id:1,
    name: 'DevOps',
    href: null,
    icon: null,
    description: null,
    child:[
      { name: 'Container', description: 'Get a better understanding of your traffic', href: '/post', icon: ChartPieIcon },
      { name: 'CI/CD', description: 'Speak directly to your customers', href: '/post', icon: CursorArrowRaysIcon },
      { name: 'AWS', description: 'Your customers’ data will be safe and secure', href: '/post', icon: FingerPrintIcon },
      { name: 'Infra', description: 'Connect with third-party tools', href: '/post', icon: SquaresPlusIcon },
    ]
  },
  {
    id:2,
    name: 'Application',
    href: null,
    icon: null,
    description: null,
    child:[
      { name: 'Container', description: 'Get a better understanding of your traffic', href: '/post', icon: ChartPieIcon },
      { name: 'CI/CD', description: 'Speak directly to your customers', href: '/post', icon: CursorArrowRaysIcon },
      { name: 'AWS', description: 'Your customers’ data will be safe and secure', href: '/post', icon: FingerPrintIcon },
      { name: 'Infra', description: 'Connect with third-party tools', href: '/post', icon: SquaresPlusIcon },
    ]
  },
  {
    id:3,
    name: '이력',
    href: '/career',
    icon: null,
    description: null,
    child: null
  },
  {
    id:4,
    name: '샘플',
    href: '/sample',
    icon: null,
    description: null,
    child: null
  },

]

const mobileMenuOpen = ref(false)

</script>

<style>

</style>