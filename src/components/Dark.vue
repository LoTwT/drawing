<script setup lang="ts">
import { isDark, toggleDark } from "~/composables"
</script>

<template>
  <div top-4 right-4 position-fixed>
    <button class="icon-btn !outline-none" @click="toggleDark()">
      <div v-if="isDark" i-carbon-moon />
      <div v-else i-carbon-sun />
    </button>
  </div>
</template>
