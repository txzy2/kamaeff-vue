<script setup>
import {computed} from 'vue';
import {Loader, Cloud} from 'lucide-vue-next';

const props = defineProps({
  isLoading: Boolean,
  iconSize: {
    type: Number,
    default: 24
  },
  title: {
    type: Object,
    default: () => ({
      text: '',
      size: 24
    })
  },
  needSub: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <div class="loader">
    <Loader :size="props.iconSize" class="item" />

    <div class="text">
      <p class="title" :style="{fontSize: `${title.size}px`}">
        {{ props.title.text }}
      </p>

      <p v-show="props.needSub" class="sub">Simple and Fast</p>
    </div>
  </div>
</template>
