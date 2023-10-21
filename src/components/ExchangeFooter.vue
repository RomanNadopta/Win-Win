<template>
  <section class="page-footer">
    <div class="container">
      <div class="navbar-brand">
        <router-link
          class="navbar-item has-text-white is-size-2 is-size-3-mobile has-text-weight-bold"
          :to="{ name: 'home' }"
        >
          {{ title }}
        </router-link>
      </div>
      <div class="created-by">
        <p>&copy; 2023 Created by Roman Nadopta</p>
      </div>
    </div>
  </section>
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Brand Name',
  },
})
</script>

<style lang="scss">
.page-footer {
  background: #404765;

  .container {
    display: flex;
    justify-content: space-between;
  }
}
.created-by {
  display: flex;
  align-items: center;
  color: white;
}

@media screen and (max-width: 768px) {
  .created-by {
    font-size: 1rem;
  }
}
</style>