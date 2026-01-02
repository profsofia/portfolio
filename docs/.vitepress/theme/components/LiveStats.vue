<script setup>
import { ref, onMounted } from 'vue'

const visits = ref(0)

onMounted(() => {
  const key = 'portfolio_visits'
  const current = Number(localStorage.getItem(key) || 0)
  visits.value = current + 1
  localStorage.setItem(key, visits.value)
})
</script>

<template>
  <div class="stats">
    <p><strong>Stack:</strong> VitePress · Vue 3 · Netlify</p>
    <p><strong>Deploy:</strong> automático desde GitHub</p>
    <p><strong>Visitas locales:</strong> {{ visits }}</p>
  </div>
</template>

<style scoped>
.stats {
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  max-width: 420px;
}
</style>

