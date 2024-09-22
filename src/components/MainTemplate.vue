<script setup lang="ts">
import {Github} from 'lucide-vue-next';

import {Logo, Fl, Vk, Telegram} from '@/components/shared';
</script>

<template>
  <main>
    <div class="logo">
      <Logo />

      <div class="stack">
        React
        <br />
        Angular
        <br />
        Vue
      </div>
    </div>

    <div class="text">
      Hi! My name is
      <a href="https://t.me/kamaeff2" target="_blank">Anton.</a>
      <span>
        I am an aspiring frontend developer. I'm just starting my way. During my
        studies I managed to to realize few, but very interesting projects. You
        can see this projects at my
        <a href="https://github.com/kamaeff?tab=repositories" target="_blank"
          >(GitHub)</a
        >
        or go to footer.
      </span>
      <br />
      <br />I am actively learning <span class="gray">JavaScript</span>,
      <span class="gray">TypeScript</span> and frameworks like:
      <span class="gray">React</span>, <span class="gray">Angular</span> and
      <span class="gray">Vue</span>. For practice, I develop telegram bots to
      understand how to work with the backend.
    </div>

    <div class="links">
      <a href="https://t.me/kamaeff2" target="_blank">
        <Telegram />
      </a>

      <a href="https://github.com/txzy2" target="_blank">
        <Github :size="30" class="icon" />
      </a>

      <a href="https://vk.com/antoster2" target="_blank">
        <Vk />
      </a>

      <a href="https://www.fl.ru/users/kamaeff2/" target="_blank">
        <Fl />
      </a>
    </div>
  </main>
</template>
