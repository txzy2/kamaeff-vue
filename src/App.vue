<script setup>
import {onMounted, ref} from 'vue';
import {Loader} from 'lucide-vue-next';
import MainTemplate from '@/components/main/MainTemplate.vue';
import FooterTemplate from '@/components/footer/FooterTemplate.vue';
import LogoTemplate from '@/shared/icons/LogoTemplate.vue';
import LoaderTemplate from '@/shared/utils/LoaderTemplate.vue';
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
    <LoaderTemplate
      v-if="loader"
      :title="{text: '#Kamaeff', size: 20}"
      :isLoading="true"
      :iconSize="25"
      :needSub="false"
    />
  </transition>

  <div v-show="!loader">
    <!--<HeaderTemplate />-->
    <MainTemplate />
    <FooterTemplate />
  </div>
</template>
