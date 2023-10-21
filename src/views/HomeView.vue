
<template>
  <div id="exchange-gallery">
    <exchange-hero></exchange-hero>
    <exchange-latest-posts :exchanges="exchanges"></exchange-latest-posts>
    <exchange-category></exchange-category>
  </div>
</template>
<script setup>
import ExchangeList from '../components/ExchangeList.vue'
import ExchangeLatestPosts from '../components/ExchangeLatestPosts.vue'
import ExchangeHero from '../components/ExchangeHero.vue'
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import ExchangeCategory from '../components/ExchangeCategory.vue'

const store = useStore()

const exchanges = computed(() => {
  return store.state.exchange.exchanges
})

const isFetchingMoreData = computed(() => {
  store.state.exchange.pagination.isFetchingData
})

onMounted(() => {
  store.dispatch('exchange/GET_EXCHANGES')
})
</script>


<style lang='scss' >
#button {
  display: inline-block;
  background-color: #ff9800;
  width: 50px;
  height: 50px;
  text-align: center;
  border-radius: 4px;
  position: fixed;
  bottom: 30px;
  right: 30px;
  transition: background-color 0.3s, opacity 0.5s, visibility 0.5s;
  opacity: 0;
  visibility: hidden;
  z-index: 1000;
}
#button::after {
  content: '\f077';
  font-family: FontAwesome;
  font-weight: normal;
  font-style: normal;
  font-size: 2em;
  line-height: 50px;
  color: #fff;
}
#button:hover {
  cursor: pointer;
  background-color: #333;
}
#button:active {
  background-color: #555;
}
#button.show {
  opacity: 1;
  visibility: visible;
}
</style>





