<script setup>
import {onMounted, ref} from 'vue';

import {Main, Footer} from '@/components';
import {Loader} from '@/components/shared';

const loader = ref(true);

onMounted(() => {
  loader.value = false;
});
</script>

<template>
  <transition name="fade" mode="out-in">
    <Loader
      v-if="loader"
      :title="{text: '', size: 20}"
      :isLoading="true"
      :iconSize="25"
      :needSub="false"
    />
  </transition>

  <div v-show="!loader">
    <Main />
    <Footer />
  </div>
</template>
