<template>
  <section class="hero-section">
    <div class="hero-category">
      <div
        v-for="item in category"
        :key="item.name"
        class="hero background-img is-large"
        :style="{
          'background-image': `url( ${item.image} )`,
        }"
      >
        <div class="hero-body">
          <div class="container has-text-centered category">
            <h1 class="category-title is-size-1-desktop has-text-white">
              {{ item.name }}
            </h1>
            <div class="category-description">
              <h2 class="subtitle has-text-light">
                {{ item.title }}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div class="search-lookup-wrap">
        <div class="search-lookup centered">
          <div class="level">
            <div class="level-left">
              <div class="level-item">
                <span>Search For</span>
              </div>
              <div class="level-item">
                <input
                  @input="handleSearch"
                  type="text"
                  class="input"
                  placeholder="Games"
                />
              </div>
              <div class="level-item">
                <span v-if="searchedValue"
                  >Searching "{{ searchedValue }}"</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="posts exchange-list">
    <div class="container">
      <div v-if="exchanges" class="columns is-multiline">
        <div
          v-for="card in filteredExchanges"
          :key="card.id"
          class="column is-12-mobile is-6-tablet is-4-widescreen is-6-desktop"
        >
          <div
            :class="{
              'card-visibility': card.status === 'sold',
            }"
          >
            <div class="item post-card bottom-border">
              <router-link
                :to="{ name: 'exchangeDetail', params: { slug: card.slug } }"
                class="item-link"
              >
                <figure
                  class="image is-2by1 item-figure background-img"
                  :style="{
                    'background-image': `url(${card.image})`,
                  }"
                  alt=""
                ></figure>
              </router-link>
              <div class="item-tags">
                <a
                  @click="handleTag(tag)"
                  class="button is-rounded"
                  v-for="tag in card.tags"
                  :key="tag"
                  >#{{ tag }}</a
                >
              </div>
              <div class="level exchange-title">
                <div class="level-left">
                  <h2
                    class="title item-title is-size-4 has-text-weight-extra-bold"
                  >
                    {{ card.title }}
                  </h2>
                </div>
                <div class="level-right">
                  <p>${{ card.price }}</p>
                </div>
              </div>

              <div class="level">
                <div class="level-left">
                  <div class="item-author">
                    <p>{{ card.type }}</p>
                  </div>
                </div>
                <div class="level-right">
                  <p>
                    {{ card.createdAt.toDate().toDateString() }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="no-offers" v-if="isCategory">
        <h2 class="has-text-centered">
          No offers yet. Return to the
          <router-link class="is-size-4" :to="{ name: 'home' }"
            >home page</router-link
          >.
        </h2>
      </div>
    </div>
  </section>
</template>


<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()
const route = useRoute()

const getImageUrl = (name) => {
  const path = new URL(`../assets/images/categories/${name}`, import.meta.url)
    .href

  return path
}
const { type } = route.params
store.dispatch('exchange/GET_CATEGORIES_BY_TYPE', type)

const categories = ref([])
categories.value = store.state.exchange.categories

const searchedExchange = ref('')
const handleTag = (value) => {
  searchedExchange.value = value
}

const searchedValue = ref('')
const handleSearch = (e) => {
  const { value } = e.target
  searchedValue.value = value
  filterExchanges(value)
}

const filterExchanges = (searchValue) => {
  searchedExchange.value = searchValue
}

const filteredExchanges = computed(() => {
  return store.getters['exchange/FILTER_EXCHANGES'](searchedExchange.value)
})

const isCategory = ref(false)
const exchanges = computed(() => {
  if (store.state.exchange.items.length > 0) {
    isCategory.value = false
    return store.state.exchange.items
  } else if (store.state.exchange.items.length === 0) {
    return (isCategory.value = true)
  }
})

const category = computed(() => {
  const { type } = route.params
  return categories.value.filter((category) => {
    return category.name.includes(type)
  })
})
</script>


<style lang="scss">
.post-card:hover .image {
  transition: box-shadow 0.3s;
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.4);
}

.exchange-icon {
  color: #f7cd11e0;
  height: 25px;
  width: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.category-description {
  display: flex;
  justify-content: center;
  & h2 {
    width: 500px;
    line-height: 1.5em;
  }
}
.search-lookup {
  max-width: 960px;
  margin: 0 auto;
  background-color: #262d32;
  padding: 20px;
  color: white;
  border-radius: 10px;
}
.search-lookup-wrap {
  width: 100%;
  z-index: 2;
  position: absolute;
  top: auto;
  bottom: -42px;
}

.no-offers a {
  text-decoration: underline;
}
.no-offers a {
  color: #4d4c4c;
  &:hover {
    color: #9a9b9b;
  }
}
.button {
  margin-right: 10px;
  margin-bottom: 6px;
}

.card-visibility {
  cursor: none;
  pointer-events: none;
  position: relative;
  overflow: hidden;

  &::before {
    position: absolute;
    content: 'Sold';
    top: 8%;
    left: 42%;
    width: 100%;

    text-align: center;
    font-weight: bold;
    font-size: 20px;
    letter-spacing: 0.5rem;
    text-transform: uppercase;

    transform: rotate(45deg);
    color: #ffffff;
    opacity: 1;
    background: #ff0000;
    z-index: 2;
  }
  &::after {
    position: absolute;
    content: '';
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    border-radius: 6px;
    background: #c9c9c9;
    z-index: 1;
  }
}

@media only screen and (max-width: 768px) {
  .hero-category .hero::after {
    bottom: 0;
  }
  .hero-category .category-title {
    font-size: 36px;
  }
  .search-lookup-wrap {
    position: inherit;
    bottom: unset;
  }
  .search-lookup {
    width: 100%;
    border-radius: 0px;
  }
  .exchange-list {
    padding: 5em 1em;
  }
}
.search-card-find {
  width: 100%;
  height: 180px;
  position: relative;
  display: block;
  border-radius: 3px;
  text-decoration: none;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.05);
  background-clip: content-box;
  background-size: cover;
  background-position: 50% 20%;
  border: 1px solid rgba(0, 0, 0, 0.12);
  -webkit-tap-highlight-color: transparent;
  &-interest {
    position: absolute;
    bottom: 12px;
    right: 12px;
    > p {
      font-weight: bold;
    }
  }
}
</style>