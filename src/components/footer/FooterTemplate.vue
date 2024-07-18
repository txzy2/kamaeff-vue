<script setup>
import { ChevronsDown } from 'lucide-vue-next'
</script>

<template>
  <footer>
    <ChevronsDown class="show"
                  :size="20" />

    <div class="container">
      <div class="content">
        <p>Projects</p>

        <div class="projects">
          <div class="item">
            <a href="https://github.com/kamaeff/stockhub-client"
               title="StockHub12">
              <img src="/img/stocklogo.png"
                   width="120"
                   height="120"
                   alt="Stock" />
            </a>
          </div>

          <div class="item">
            <a href="https://github.com/kamaeff/searchbottg"
               title="YoKross">
              <img src="/img/yokrosslogo.jpg"
                   width="120"
                   height="120"
                   alt="YoKross" />
            </a>
          </div>

          <div class="item">
            <a href="https://github.com/kamaeff/searchbottg"
               title="jQ Cliker">
              <img src="/img/jq.png"
                   width="120"
                   height="120"
                   alt="JQ" />
            </a>
          </div>

          <!-- TODO: Добавить сюда еще todo на vue -->
        </div>
      </div>
    </div>
  </footer>
</template>
