<template>
  <header class="header">
    <nav class="navbar" :class="$route.path === '/' ? '' : 'with-background'">
      <div class="container">
        <div class="navbar-brand">
          <router-link
            class="navbar-item has-text-white is-size-2 is-size-3-mobile has-text-weight-bold"
            :to="{ name: 'home' }"
          >
            {{ title }}
          </router-link>
          <span
            @click="menuToggle"
            :class="{ 'is-active': isMenuOpen }"
            role="button"
            tabindex="0"
            class="navbar-burger mt-2 burger has-text-white"
            data-target="navbar-menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div
          :class="{ 'is-active': isMenuOpen }"
          id="navbar-menu"
          class="navbar-menu"
        >
          <div @click="isMenuOpen = false" class="navbar-end">
            <div v-if="isAuthenticated" class="navbar-item">
              {{ user.email }}
            </div>
            <!-- Loop through the navigation items -->
            <router-link
              class="navbar-item nav-home"
              v-for="menuItem in menuItems"
              :key="menuItem.text"
              :to="menuItem.link"
              >{{ menuItem.text }}
            </router-link>
            <template v-if="isAuthenticated">
              <router-link class="navbar-item" :to="'/exchanges/new'"
                >New exchange
              </router-link>
              <router-link class="navbar-item" :to="'/profile'"
                >Profile
              </router-link>
              <div @click="logout" class="navbar-item clickable">Logout</div>
            </template>
            <template v-else>
              <router-link class="navbar-item" :to="'/login'"
                >Login
              </router-link>
              <router-link class="navbar-item" :to="'/register'"
                >Register
              </router-link>
            </template>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { onUnmounted, ref } from 'vue'
import { useStore } from 'vuex'
import useAuth from '../composition/useAuth'

const store = useStore()

const { user, isAuthenticated } = useAuth()
const props = defineProps({
  title: {
    type: String,
    default: 'Brand Name',
  },
  menuItems: {
    type: Array,
    required: true,
  },
})

const isMenuOpen = ref(false)

const menuToggle = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const logout = () => {
  store.dispatch('user/LOGOUT')
}

const handleWindowResizing = (e) => {
  if (isMenuOpen.value && e.target.innerWidth > 1020) {
    isMenuOpen.value = false
  }
}
window.addEventListener('resize', handleWindowResizing)

onUnmounted(() => {
  window.removeEventListener('resize', handleWindowResizing)
})
</script>

