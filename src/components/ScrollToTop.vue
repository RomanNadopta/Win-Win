<template>
  <a
    @click="scrollToTop"
    class="scroll-up"
    v-if="isScroll"
    :class="{ show: handleScroll }"
  >
    <svg
      class="arrow-up"
      enable-background="new 0 0 32 32"
      height="32px"
      id="Layer_1"
      version="1.1"
      viewBox="0 0 32 32"
      width="32px"
      xml:space="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M18.221,7.206l9.585,9.585c0.879,0.879,0.879,2.317,0,3.195l-0.8,0.801c-0.877,0.878-2.316,0.878-3.194,0  l-7.315-7.315l-7.315,7.315c-0.878,0.878-2.317,0.878-3.194,0l-0.8-0.801c-0.879-0.878-0.879-2.316,0-3.195l9.587-9.585  c0.471-0.472,1.103-0.682,1.723-0.647C17.115,6.524,17.748,6.734,18.221,7.206z"
        fill="#fff"
      />
    </svg>
  </a>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'

const isScroll = ref(false)

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const handleScroll = () => {
  isScroll.value = window.scrollY >= 300
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss">
.arrow-up {
  position: relative;
  top: 20%;
  animation: arrow-animation 1000ms ease alternate infinite;
}
.scroll-up {
  display: inline-block;
  background-color: #ff9800;
  width: 50px;
  height: 50px;
  text-align: center;
  border-radius: 50px;
  position: fixed;
  bottom: 30px;
  right: 30px;
  transition: background-color 0.3s, opacity 0.5s, visibility 0.5s;
  opacity: 0;
  visibility: hidden;
  z-index: 1000;
}

.scroll-up:hover {
  cursor: pointer;
  background-color: #333;
}
.scroll-up:active {
  background-color: #555;
}
.scroll-up.show {
  opacity: 1;
  visibility: visible;
}

@keyframes arrow-animation {
  0% {
    top: 5%;
  }
  100% {
    top: 20%;
  }
}
</style>