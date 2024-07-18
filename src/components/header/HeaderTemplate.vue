<script setup>
import { ref } from 'vue';
import { AlignJustify, X } from 'lucide-vue-next';

const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
}

const closeModal = () => {
  isModalOpen.value = false;
};
</script>

<template>
  <header>
    <div class="profile">

      <button type="button"
              @click="openModal">
        <AlignJustify :size="30" />
      </button>

      <div v-if="isModalOpen"
           class="modal"
           @click.stop>

        <button @click="closeModal">
          <X />
        </button>

        <div class="content">
          <h2>Profile</h2>
        </div>
      </div>

    </div>
  </header>
</template>