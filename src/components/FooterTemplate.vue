<script setup>
import {ChevronsDown} from 'lucide-vue-next';
</script>

<template>
  <footer>
    <ChevronsDown :size="20" class="show" />
    <!-- <div class="show">Projects</div> -->

    <div class="container">
      <div class="content">
        <p>Projects</p>

        <div class="projects">
          <div class="item">
            <a
              href="https://github.com/kamaeff/stockhub-client"
              title="StockHub12"
            >
              <img
                alt="Stock"
                height="120"
                src="/img/stocklogo.png"
                width="120"
              />
            </a>
          </div>

          <div class="item">
            <a href="https://github.com/kamaeff/searchbottg" title="YoKross">
              <img
                alt="YoKross"
                height="120"
                src="/img/yokrosslogo.jpg"
                width="120"
              />
            </a>
          </div>

          <div class="item">
            <a href="https://github.com/kamaeff/searchbottg" title="jQ Cliker">
              <img alt="JQ" height="120" src="/img/jq.png" width="120" />
            </a>
          </div>

          <!-- TODO: Добавить сюда еще todo на vue -->
        </div>
      </div>
    </div>
  </footer>
</template>
