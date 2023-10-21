<template>
  <div class="app-vue">
    <exchange-navbar
      :title="brandName"
      :menuItems="menuItems"
    ></exchange-navbar>
    <router-view></router-view>
  </div>
  <exchange-footer :title="brandName"></exchange-footer>
  <scroll-to-top></scroll-to-top>
</template>
<script setup>
import ExchangeNavbar from './components/ExchangeNavbar.vue'
import ScrollToTop from './components/ScrollToTop.vue'
import ExchangeFooter from './components/ExchangeFooter.vue'

const brandName = 'Win - Win'
const menuItems = [
  { text: 'Home', link: '/' },
  { text: 'About', link: '/about' },
  { text: 'Faq', link: '/faq' },
]
</script>


<style lang='scss' >
@import 'assets/styles/variables.scss';
@import 'bulma/bulma.sass';
@import 'assets/styles/main.scss';
</style>



