<template>
  <div class="grid grid-cols-2">
      <MainWeigetVue />
      <MainWeigetVue />
      <MainWeigetVue />
      <MainWeigetVue />
  </div>
  
</template>

<script>
import MainWeigetVue from '~/components/MainWeiget.vue';

export default {
    components: { MainWeigetVue }
}
</script>