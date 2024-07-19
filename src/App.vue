<script setup>
import {onMounted, ref} from 'vue';
import {Loader} from 'lucide-vue-next';
import MainTemplate from '@/components/main/MainTemplate.vue';
import FooterTemplate from '@/components/footer/FooterTemplate.vue';
import LogoTemplate from '@/components/icons/LogoTemplate.vue';
// import HeaderTemplate from '@/components/header/HeaderTemplate.vue';

const loader = ref(true);

onMounted(() => {
  const timeout = setTimeout(() => {
    loader.value = false;
  }, 1500);

  return () => clearTimeout(timeout);
});
</script>

<template>
  <transition name="fade" mode="out-in">
    <div v-if="loader" class="loader">
      <div class="container">
        <LogoTemplate />

        <div class="text">
          <Loader class="item" :size="28" />
          <span>#Loading</span>
        </div>
      </div>
    </div>
  </transition>

  <div v-show="!loader">
    <!--<HeaderTemplate />-->
    <MainTemplate />
    <FooterTemplate />
  </div>
</template>
