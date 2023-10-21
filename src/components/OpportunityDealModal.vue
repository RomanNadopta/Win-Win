<template>
  <exchange-modal ref="exchangeModal" :headerText="headerText">
    <div>
      <h1>
        User "{{ opportunity.fromUser.username }}" has an amazing offer for you!
      </h1>
      <template v-if="opportunity.fromExchange">
        <div class="card-image">
          <figure class="image">
            <!-- TODO: Display Exchange Image -->
            <img :src="opportunity.fromExchange.image" />
          </figure>
        </div>
        <div class="info-container">
          <div class="info-heading">
            <p class="app-title">{{ opportunity.fromExchange.title }}</p>
            <p class="description">
              {{ opportunity.fromExchange.description }}
            </p>
          </div>
          <div class="info-value">
            <div class="info-value-title">Price:</div>
            <div class="info-value-money">
              ${{ opportunity.fromExchange.price }}
            </div>
          </div>
        </div>
      </template>
      <template v-if="opportunity.price">
        <div class="card-image">
          <figure class="image is-4by3">
            <!-- TODO: Display Exchange Image -->
            <img
              src="https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
            />
          </figure>
        </div>
        <div class="info-container">
          <div class="info-heading">
            <p class="app-title">
              "{{ opportunity.fromUser.username }}" wants to exchange price
            </p>
          </div>
          <div class="info-value">
            <div class="info-value-title">Price:</div>
            <div class="info-value-money">${{ opportunity.price }}</div>
          </div>
        </div>
      </template>
      <hr />
      <h1>For Yours...</h1>
      <div class="card-image">
        <figure class="image">
          <!-- TODO: Display Exchange Image -->
          <img :src="opportunity.toExchange.image" />
        </figure>
      </div>
      <div class="info-container">
        <div class="info-heading">
          <p class="app-title">{{ opportunity.toExchange.title }}</p>
          <p class="description">{{ opportunity.toExchange.description }}</p>
        </div>
        <div class="info-value">
          <div class="info-value-title">Price:</div>
          <div class="info-value-money">
            ${{ opportunity.toExchange.price }}
          </div>
        </div>
      </div>
    </div>
    <template #activator>
      <button class="button is-block is-success is-light is-fullwidth">
        View a deal
      </button>
    </template>
    <template #footerButtons>
      <button @click="acceptOpportunity" class="button is-success">
        Accept Deal
      </button>
      <button @click="declineOpportunity" class="button is-danger">
        Decline Deal
      </button>
    </template>
  </exchange-modal>
</template>

 <script setup>
import { computed, ref } from 'vue'
import ExchangeModal from '../components/ExchangeModal.vue'
import { useStore } from 'vuex'

const store = useStore()

const props = defineProps({
  opportunity: {
    required: true,
    type: Object,
  },
})

const exchangeModal = ref(null)

const modal = computed(() => {
  return exchangeModal.value
})

const headerText = computed(() => {
  return props.opportunity.fromExchange
    ? `Here is an offer for a ${props.opportunity.fromExchange.type}`
    : 'Here is an offer for credits'
})

const acceptOpportunity = () => {
  store.dispatch('opportunity/ACCEPT_OPPORTUNITY', {
    opportunity: props.opportunity,
    onSuccess: () => modal.value.close(),
  })
}

const declineOpportunity = () => {
  store.dispatch('opportunity/DECLINE_OPPORTUNITY', {
    opportunity: props.opportunity,
    onSuccess: () => modal.value.close(),
  })
}
</script>


<style scoped lang="scss">
.info-container {
  display: flex;
  margin: 20px 0;
  .info-heading {
    flex: 1;
    font-size: 20px;
    padding-right: 30px;
    .app-title {
      font-weight: bold;
      font-size: 30px;
    }
  }
  .info-value {
    &-title {
      font-size: 20px;
      text-align: center;
    }
    &-money {
      font-size: 45px;
      font-weight: bold;
    }
  }
}
</style>