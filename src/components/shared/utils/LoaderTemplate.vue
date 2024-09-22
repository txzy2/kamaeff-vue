<script setup lang="ts">
import {Loader} from 'lucide-vue-next';

type LoaderProps = {
  isLoading: boolean;
  iconSize: number;
  title: {
    text: string;
    size: number;
  };
  needSub: boolean;
};

const props = defineProps<LoaderProps>();
</script>
<template>
  <div class="loader">
    <Loader :size="props.iconSize" class="loader__item" />

    <div class="loader__text">
      <p class="loader__text--title" :style="{fontSize: `${title.size}px`}">
        {{ props.title.text }}
      </p>

      <p v-show="props.needSub" class="loader__text--sub">Simple and Fast</p>
    </div>
  </div>
</template>

<style scoped>
.loader {
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 5px;
}

.loader__item {
  animation: rotate 2s linear infinite;
}

.loader__text {
  display: flex;
  flex-direction: column;
}

.loader__text--title {
  padding: 0;
  line-height: 1;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
