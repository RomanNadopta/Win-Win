<template>
  <exchange-modal
    :onModalSubmit="createOpportunity"
    :isDisabled="!isAllowedPrice || hasNotEnoughCredit"
  >
    <div class="deal">
      <div class="deal-highlight">{{ exchange.user.username }}'s Offer</div>
      <div class="deal-wrapper">
        <div>Offering {{ exchange.type }}</div>
        <div>{{ exchange.title }}</div>
      </div>
      <div class="deal-highlight">Your Offer</div>
      <div class="counter-offer">
        <div class="field">
          Would you prefer to exchange credit ?
          <label class="checkbox is-large">
            <input v-model="isPriceExchange" type="checkbox" />
            Yes
          </label>
        </div>
        <div class="field">
          <label class="label">How Much Credit ?</label>
          <div class="control">
            <input
              v-model="selectedPrice"
              :disabled="!isPriceExchange"
              class="input"
              type="number"
              placeholder="40"
            />
            <i> You don't have enough of credit </i>
          </div>
        </div>
        <div class="field">
          <label class="label">Exchange</label>
          <div class="control">
            <div class="select">
              <select :disabled="isPriceExchange" v-model="selectedExchange">
                <option
                  v-for="exchange in availableExchanges"
                  :key="exchange.slug"
                  :value="exchange"
                >
                  {{ exchange.title }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div v-if="offeredPrice">
          <span>Your price is:</span>
          <span class="deal-highlight"> ${{ offeredPrice }}</span>
        </div>
        <div
          v-if="percentageDifference !== null"
          :class="`mb-1 message is-small ${percentageDifferClass}`"
        >
          <div class="message-body">
            <p>
              {{ priceDifferenceText }}
            </p>
          </div>
        </div>
        <div v-if="hasNotEnoughCredit" class="message is-danger is-small">
          <div class="message-body">
            <p>
              You don't have enough credit for this transaction. Remaining
              credit:
              {{ user.credit }}$
            </p>
          </div>
        </div>
        <i>Allowed difference is not less than {{ ALLOWED_PRICE_DIFFER }}%</i>
      </div>
    </div>
    <template #activator>
      <button class="button is-block is-success is-outlined is-fullwidth">
        Make a deal
      </button>
    </template>
  </exchange-modal>
</template>


<script setup>
import { computed, ref, watch } from 'vue'
import { useStore } from 'vuex'

import ExchangeModal from './ExchangeModal.vue'

const store = useStore()

const props = defineProps({
  exchange: {
    type: Object,
    required: true,
  },
  availableExchanges: {
    type: Array,
    required: true,
  },
})
const isPriceExchange = ref(false)
const selectedExchange = ref(null)
const selectedPrice = ref(null)
const ALLOWED_PRICE_DIFFER = ref(20)

watch(isPriceExchange, (value) => {
  if (value) {
    selectedExchange.value = null
  } else {
    selectedPrice.value = null
  }
})

const createOpportunity = ({ onSuccess }) => {
  const data = {
    title: props.exchange.title,
    fromUserId: user.value.id,
    fromExchangeId: selectedExchange.value?.id,
    toExchangeId: props.exchange.id,
    toUserId: props.exchange.user.id,
    price: selectedPrice.value,
  }
  store.dispatch('opportunity/CREATE_OPPORTUNITY', {
    data,
    onSuccess,
  })
}

const user = computed(() => {
  return store.state.user.data
})

const hasNotEnoughCredit = computed(() => {
  if (!isPriceExchange.value) {
    return false
  }
  return user.value.credit < selectedPrice.value
})

const offeredPrice = computed(() => {
  if (isPriceExchange.value) {
    return selectedPrice.value
  } else if (selectedExchange.value) {
    return selectedExchange.value.price
  }
  return null
})

const percentageDifference = computed(() => {
  if (offeredPrice.value === null || offeredPrice.value === '') {
    return null
  }
  const priceDifference = offeredPrice.value - props.exchange.price
  return (priceDifference / props.exchange.price) * 100
})

const priceDifferenceText = computed(() => {
  if (percentageDifference.value === null) {
    return ''
  }
  if (percentageDifference.value === 0) {
    return 'You are offerring the exact same amount'
  }
  const roundedPerceDiffer = Math.round(percentageDifference.value * 100) / 100

  const differenceText = percentageDifference.value > 0 ? 'higher' : 'lower'
  return `Offered price is ${Math.abs(
    roundedPerceDiffer
  )}% ${differenceText} than exchange price`
})

const isAllowedPrice = computed(() => {
  if (!offeredPrice.value) {
    return false
  }
  return (
    percentageDifference.value <= ALLOWED_PRICE_DIFFER.value &&
    percentageDifference.value >= -ALLOWED_PRICE_DIFFER.value
  )
})

const percentageDifferClass = computed(() => {
  return isAllowedPrice.value ? 'is-success' : 'is-danger'
})
</script> 


<style scoped lang="scss">
.price {
  padding: 7px;
  &-allowed {
    background-color: #cdeacd;
  }
  &-declined {
    background-color: #ffc2c2;
  }
}
.deal-wrapper {
  margin-bottom: 10px;
}
.counter-offer,
.deal-wrapper {
  border: 2px solid grey;
  padding: 10px;
  margin-top: 10px;
  &-title {
    font-size: 21px;
    margin: 5px 0;
    font-weight: bold;
  }
}
.deal {
  font-size: 19px;
  &-highlight {
    font-size: 19px;
    font-weight: bold;
  }
}
.disabled {
  &.field {
    input,
    textarea,
    select {
      pointer-events: none;
      color: grey;
    }
    label {
      color: grey;
    }
  }
}
</style>