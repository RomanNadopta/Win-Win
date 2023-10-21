<template>
  <div v-if="exchange && exchange.slug" class="page-wrapper exchange-detail">
    <section class="hero">
      <div class="is-black">
        <div class="hero-body">
          <div class="container">
            <div class="columns">
              <div class="column is-9-desktop is-6-tablet">
                <h1 class="title">{{ exchange.title }}</h1>
                <h2 class="subtitle">{{ exchange.type }}</h2>
                <!-- Exchange User Start -->
                <div v-if="!!exchangeUser" class="user-tile">
                  <div class="user-image-wrapper">
                    <div
                      class="user-tile-image is-96x96 image"
                      :style="{
                        'background-image': `url( ${exchangeUser.avatar} )`,
                      }"
                    ></div>
                  </div>
                  <div class="user-tile-author center">
                    <h3 class="user-tile-author-name">
                      by {{ exchangeUser.username }}
                    </h3>
                  </div>
                </div>
                <!-- Exchange User End -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- HEADER -->
    <div class="container">
      <div class="columns exchange-details-article">
        <div
          class="column is-9-desktop is-6-tablet exchange-details-description"
        >
          <div class="section">
            <div class="more-details">
              <div class="more-details-title">Details</div>
              <div class="more-details-item">
                Country: {{ exchange.country }}
              </div>
              <div class="more-details-item">City: {{ exchange.city }}</div>
            </div>
          </div>
          <div class="section product-description p-t-none">
            <div class="product-description-title">Exchange Info</div>
            <div class="product-description-details">
              <p>{{ exchange.description }}</p>
            </div>
          </div>
        </div>
        <div class="column is-3 exchange-detail-card">
          <div class="column-right">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by2">
                  <!-- Exchange Image -->
                  <img :src="exchange.image" alt="Placeholder image" />
                </figure>
              </div>
              <div class="card-content">
                <div class="content m-b-sm">
                  <div class="price">
                    <span class="title is-2">${{ exchange.price }} </span>
                  </div>
                </div>
                <exchange-deal-modal
                  v-if="canCreateExchanges"
                  :exchange="exchange"
                  :availableExchanges="userExchanges"
                ></exchange-deal-modal>
                <button
                  v-if="isExchangeOwner"
                  disabled
                  class="button is-fullwidth is-danger is-outlined"
                >
                  {{ owner }}
                </button>

                <button
                  v-if="isExchangeOwner"
                  :disabled="exchange.status === 'sold'"
                  @click="deleteExchange"
                  class="button is-fullwidth is-danger is-outlined"
                >
                  Delete Exchange
                </button>

                <router-link
                  v-if="!isAuth"
                  to="/login"
                  class="button is-fullwidth is-success is-outlined"
                  >Login to make an offer</router-link
                >
                <div class="content">
                  <ul class="m-t-none">
                    <li>Get item today</li>
                    <li>Learn more</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ExchangeDealModal from '../components/ExchangeDealModal.vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const router = useRouter()
const store = useStore()
const { slug } = route.params
store.dispatch('exchange/GET_EXCHANGE_BY_SLUG', slug)
store.dispatch('opportunity/GET_OPPORTUNITIES')

const user = computed(() => {
  return store.state.user.data
})

const isAuth = computed(() => {
  return store.getters['user/IS_AUTHENTICATED']
})

const exchange = computed(() => {
  return store.state.exchange.item
})

const exchangeUser = computed(() => {
  return exchange.value.user
})

const userExchanges = computed(() => {
  return user.value?.exchanges || []
})

const isExchangeOwner = computed(() => {
  return store.getters['user/isExchangeOwner'](exchangeUser.value.id)
})

const owner = computed(() => {
  if (isExchangeOwner.value === true) {
    return 'You are owner'
  }
})

const canCreateExchanges = computed(() => {
  return isAuth.value && !isExchangeOwner.value
})

const deleteExchange = async () => {
  let id = exchange.value.id
  let opportunities = store.state.opportunity.opportunities

  await opportunities.map((opportunity) => {
    if (opportunity.toExchange.id === id) {
      store.dispatch('opportunity/DELETE_OPPORTUNITY', {
        opportunity,
      })
    }
  })
  await store.dispatch('exchange/DELETE_EXCHANGE', { id })
  store.dispatch('opportunity/GET_OPPORTUNITIES')
  store.dispatch('opportunity/GET_SEND_OPPORTUNITIES')

  router.push('/')
}
</script>

<style scoped lang="scss">
// CARD
.hero .title {
  color: hsl(0, 0%, 100%);
}
.hero .subtitle {
  color: rgba(255, 255, 255, 0.9);
}

.user-tile-image {
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50%;
}

.card {
  z-index: 9999;
  min-width: 294px;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 0 0 1px 1px rgba(20, 23, 28, 0.1),
    0 3px 1px 0 rgba(20, 23, 28, 0.1);
  .title {
    color: gray;
  }
  .subtitle {
    color: gray;
  }
  .product-features {
    font-size: 17px;
  }
  .main-price {
    font-size: 17px;
    color: #7d7d7d;
    text-decoration: line-through;
  }
}
// CARD
// WHOLE HEADER

.hero-img {
  opacity: 0.8;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  filter: sepia(0.1) grayscale(0.1) saturate(0.8);
}

.exchange-detail-card {
  position: relative;
  margin-top: -200px;
  padding-bottom: 80px;
}

.is-black {
  position: relative;
  color: white;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    bottom: 0%;
    background-color: black;
    background: linear-gradient(#29303b, #29303b, #29303b);
    z-index: 0;
  }
}
@media screen and (max-width: 1023px) {
  .columns {
    margin-right: 0;
  }
}
@media only screen and (max-width: 768px) {
  .exchange-detail {
    padding-top: 70px;
  }

  .exchange-details-article {
    display: flex;
    flex-direction: column;
  }

  .exchange-details-description {
    order: 2;
  }

  .exchange-detail-card {
    order: 1;
    padding-bottom: 0;
  }

  .column-right {
    position: relative;
    padding-left: 1em;
    padding-right: 1em;
  }
  .exchange-detail .hero {
    &::after {
      bottom: 0;
    }
  }
  .is-black {
    padding-bottom: 150px;
  }
}

.user-avatar {
  display: inline-block;
}

.title {
  font-weight: bold;
  font-size: 45px;
}
.subtitle {
  font-size: 25px;
}
.author-name {
  font-size: 20px;
  font-weight: bold;
}
.rate {
  font-size: 29px;
  font-style: italic;
}
// WHOLE HEADER END
.more-details {
  background-color: #f9f9f9;
  border: 1px solid #dedfe0;
  padding: 10px 15px;
  &-title {
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  &-items {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  &-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-size: 19px;
  }
}
.product-description {
  padding-top: 0;
  &-title {
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  &-details {
    font-size: 18px;
    ul {
      list-style: disc;
      margin-left: 20px;
    }
    ol {
      margin-left: 20px;
    }
    strong {
      font-size: 20px;
    }
    p {
      min-height: 30px;
    }
  }
}
// USERS
.user-tile {
  display: flex;
  &-author {
    align-self: center;
    margin-left: 10px;
    &-name {
      font-size: 17px;
    }
  }
  .date {
    font-size: 14px;
  }
}
</style>