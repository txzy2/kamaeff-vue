<script setup>
import LogoTemplate from '@/components/icons/LogoTemplate.vue'
import TelegramIcon from '@/components/icons/TelegramIcon.vue'
import VkIcon from '@/components/icons/VkIcon.vue'

import { Github } from 'lucide-vue-next'
</script>

<!-- TODO: Сделать как то стак и обыграть это все -->
<template>
  <main>
    <LogoTemplate />

    <div class="stack">
      <code>
        <div>
          <p class="typingEffect">
            Stack
          </p>
        </div>
      </code>

      <div class="info">
        React
        <br />
        Angular
        <br />
        Vue
      </div>
    </div>

    <div class="text">
      Hi! My name is <a href="https://t.me/kamaeff2"
         target="_blank">Anton.</a>
      <span>
        I am an aspiring frontend developer. I'm just starting my way. During my studies I managed
        to to realize few, but very interesting projects. You can see this projects at my
        <a href="https://github.com/kamaeff?tab=repositories"
           target="_blank">(GitHub)</a> or go to
        footer.
      </span>
      <br />
      <br />I am actively learning <span class="gray">JavaScript</span>,
      <span class="gray">TypeScript</span> and frameworks like: <span class="gray">React</span>,
      <span class="gray">Angular</span> and <span class="gray">Vue</span>. For practice, I develop
      telegram bots to understand how to work with the backend.
    </div>

    <div class="links">
      <a href="https://t.me/kamaeff2"
         target="_blank">
        <TelegramIcon />
      </a>

      <a href="https://github.com/kamaeff"
         target="_blank">
        <Github :size="30"
                class="icon" />
      </a>

      <a href="https://github.com/kamaeff"
         target="_blank">
        <VkIcon />
      </a>
    </div>
  </main>
</template>
