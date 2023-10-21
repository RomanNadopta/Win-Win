<template>
  <exchange-modal
    ref="exchangeModal"
    :onModalSubmit="buyCredit"
    :headerText="headerText"
  >
    <h2>Dummy credit card</h2>
    <p class="mb-4">Do not use real credit card*</p>
    <form>
      <div class="card-form">
        <div class="card-list">
          <CreditCard :valueFields="valueFields" />
          <div class="card-form-inner">
            <div class="card-input">
              <label for="cardNumber" class="card-input-label">Money</label>
              <input
                type="number"
                title="Money"
                class="card-input-input"
                autocomplete="off"
                v-model="valueFields.money"
                placeholder="0"
              />
              <form-errors :errors="v$.money.$errors"></form-errors>
            </div>

            <div class="card-input">
              <label for="cardNumber" class="card-input-label"
                >Card Number</label
              >
              <input
                type="tel"
                :id="inputFields.cardNumber"
                title="Number"
                class="card-input-input"
                :value="valueFields.cardNumber"
                @input="changeNumber"
                data-card-field
                autocomplete="off"
                :maxlength="cardNumberMaxLength"
              />
              <form-errors :errors="v$.cardNumber.$errors"></form-errors>
            </div>
            <div class="card-input">
              <label for="cardName" class="card-input-label">Card Holder</label>
              <input
                type="text"
                :id="inputFields.cardName"
                title="Name"
                class="card-input-input"
                :value="valueFields.cardName"
                @input="changeName"
                data-card-field
                autocomplete="off"
              />
              <form-errors :errors="v$.cardName.$errors"></form-errors>
            </div>
            <div class="card-form-row">
              <div class="card-form-col">
                <div class="card-form-group">
                  <label
                    for="cardMonth"
                    class="card-input-label"
                    aria-label="Expiration Date"
                    >Expiration Date</label
                  >

                  <select
                    class="card-input-input -select"
                    :id="inputFields.cardMonth"
                    aria-label="Card Month"
                    title="Month"
                    v-model="valueFields.cardMonth"
                    data-card-field
                  >
                    <option value disabled selected>Month</option>
                    <option
                      v-bind:value="n < 10 ? '0' + n : n"
                      v-for="n in 12"
                      v-bind:disabled="n < minCardMonth"
                      v-bind:key="n"
                    >
                      {{ generateMonthValue(n) }}
                    </option>
                  </select>

                  <select
                    class="card-input-input -select"
                    :id="inputFields.cardYear"
                    aria-label="Card year"
                    title="Year"
                    v-model="valueFields.cardYear"
                    data-card-field
                  >
                    <option value disabled selected>Year</option>
                    <option
                      v-bind:value="$index + minCardYear"
                      v-for="(n, $index) in 12"
                      v-bind:key="n"
                    >
                      {{ $index + minCardYear }}
                    </option>
                  </select>
                </div>
                <form-errors
                  v-if="!valueFields.cardYear"
                  :errors="v$.cardYear.$errors"
                ></form-errors>
                <form-errors
                  v-else
                  :errors="v$.cardMonth.$errors"
                ></form-errors>
              </div>
              <div class="card-form-col -cvv">
                <div class="card-input">
                  <label
                    for="cardCvv"
                    class="card-input-label"
                    aria-label="Card CVV"
                    >CVV</label
                  >
                  <input
                    type="tel"
                    title="CVV"
                    class="card-input-input"
                    :id="inputFields.cardCvv"
                    maxlength="4"
                    :value="valueFields.cardCvv"
                    @input="changeCvv"
                    data-card-field
                    autocomplete="off"
                  />
                  <form-errors :errors="v$.cardCvv.$errors"></form-errors>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    <template #closeModalIcon>
      <button @click="cancel" class="delete" aria-label="close"></button>
    </template>
    <template #activator>
      <button class="button is-block is-success is-light is-fullwidth">
        Buy Credits
      </button>
    </template>
    <template #footerButtons>
      <button type="button" class="button is-success" @click="buyCredit">
        Submit
      </button>
      <button type="button" class="button" @click="cancel">Cancel</button>
    </template>
  </exchange-modal>
</template>



<script setup>
import CreditCard from './CreditCard.vue'
import ExchangeModal from './ExchangeModal.vue'
import { useVuelidate } from '@vuelidate/core'
import { required, minValue, minLength } from '@vuelidate/validators'
import FormErrors from '../components/FormErrors.vue'
import { computed, reactive, ref, watch } from 'vue'
import { useStore } from 'vuex'

const emit = defineEmits([
  'get-type',
  'input-card-number',
  'input-card-month',
  'input-card-year',
  'input-card-cvv',
])
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
})

const store = useStore()

const userProfile = ref({ ...props.user })
const headerText = ref('Payment Window')
const minCardYear = ref(new Date().getFullYear())
const mainCardNumber = ref('')
const cardNumberMaxLength = ref(19)

const valueFields = reactive({
  cardName: '',
  cardNumber: '',
  cardMonth: null,
  cardYear: null,
  cardCvv: null,
  money: null,
})

const rules = computed(() => {
  return {
    money: {
      minValue: minValue(1),
      required,
    },
    cardName: { required },
    cardNumber: { required, minLength: minLength(15) },
    cardMonth: { required },
    cardYear: { required },
    cardCvv: { required },
  }
})

const v$ = useVuelidate(rules, valueFields)

const inputFields = reactive({
  cardNumber: 'v-card-number',
  cardName: 'v-card-name',
  cardMonth: 'v-card-month',
  cardYear: 'v-card-year',
  cardCvv: 'v-card-cvv',
})

const minCardMonth = computed(() => {
  if (valueFields.cardYear === minCardYear.value)
    return new Date().getMonth() + 1
  return 1
})

const exchangeModal = ref(null)
const modal = computed(() => {
  return exchangeModal.value
})

watch(
  () => valueFields.cardYear,
  () => {
    if (valueFields.cardMonth < minCardMonth.value) {
      valueFields.cardMonth = null
    }
  }
)
const buyCredit = async () => {
  const isValid = await v$.value.$validate()
  if (isValid) {
    v$.value.$reset()
    userProfile.value.credit = valueFields.money

    store.dispatch('user/BUY_CREDIT', {
      data: userProfile.value,
      onSuccess: () => modal.value.close(),
    })
    valueFields
    valueFields.cardName = ''
    valueFields.cardNumber = ''
    valueFields.cardMonth = null
    valueFields.cardYear = null
    valueFields.cardCvv = null
    valueFields.money = null
  }
}

const cancel = () => {
  valueFields
  valueFields.cardName = ''
  valueFields.cardNumber = ''
  valueFields.cardMonth = null
  valueFields.cardYear = null
  valueFields.cardCvv = null
  valueFields.money = null

  modal.value.close()
}

const changeName = (e) => {
  valueFields.cardName = e.target.value
  emit('input-card-month', valueFields.cardName)
}

const changeNumber = (e) => {
  valueFields.cardNumber = e.target.value
  const value = valueFields.cardNumber.replace(/\D/g, '')
  // american express, 15 digits
  if (/^3[47]\d{0,13}$/.test(value)) {
    valueFields.cardNumber = value
      .replace(/(\d{4})/, '$1 ')
      .replace(/(\d{4}) (\d{6})/, '$1 $2 ')
    cardNumberMaxLength.value = 17
  } else if (/^3(?:0[0-5]|[68]\d)\d{0,11}$/.test(value)) {
    // diner's club, 14 digits
    valueFields.cardNumber = value
      .replace(/(\d{4})/, '$1 ')
      .replace(/(\d{4}) (\d{6})/, '$1 $2 ')
    cardNumberMaxLength.value = 16
  } else if (/^62[0-9]\d*/.test(value)) {
    valueFields.cardNumber = value
      .replace(/(\d{6})/, '$1 ')
      .replace(/(\d{6}) (\d{7})/, '$1 $2 ')
      .replace(/(\d{6}) (\d{7}) (\d{6})/, '$1 $2 $3 ')
      .replace(/(\d{5}) (\d{5}) (\d{5}) (\d{4})/, '$1 $2 $3 $4')
    cardNumberMaxLength.value = 21
  } else if (/^\d{0,16}$/.test(value)) {
    // regular cc number, 16 digits
    valueFields.cardNumber = value
      .replace(/(\d{4})/, '$1 ')
      .replace(/(\d{4}) (\d{4})/, '$1 $2 ')
      .replace(/(\d{4}) (\d{4}) (\d{4})/, '$1 $2 $3 ')
    cardNumberMaxLength.value = 19
  }
  // eslint-disable-next-line
  if (e.inputType == 'deleteContentBackward') {
    const lastChar = valueFields.cardNumber.substring(
      valueFields.cardNumber.length,
      valueFields.cardNumber.length - 1
    )
    // eslint-disable-next-line
    if (lastChar == ' ') {
      valueFields.cardNumber = valueFields.cardNumber.substring(
        0,
        valueFields.cardNumber.length - 1
      )
    }
  }
  emit('input-card-number', valueFields.cardNumber)
}

const changeMonth = () => {
  emit('input-card-month', valueFields.cardMonth)
}

const changeYear = () => {
  emit('input-card-year', valueFields.cardYear)
}

const changeCvv = (e) => {
  valueFields.cardCvv = e.target.value
  emit('input-card-cvv', valueFields.cardCvv)
}

const generateMonthValue = (n) => {
  return n < 10 ? `0${n}` : n
}

const toggleMask = () => {
  isCardNumberMasked.value = !isCardNumberMasked.value
  if (isCardNumberMasked.value) {
    maskCardNumber()
  } else {
    unMaskCardNumber()
  }
}

const maskCardNumber = () => {
  valueFields.cardNumberNotMask = valueFields.cardNumber
  mainCardNumber.value = valueFields.cardNumber
  const arr = valueFields.cardNumber.split('')
  arr.forEach((element, index) => {
    if (index > 4 && index < 14 && element.trim() !== '') {
      arr[index] = '*'
    }
  })
  valueFields.cardNumber = arr.join('')
}

const unMaskCardNumber = () => {
  valueFields.cardNumber = mainCardNumber.value
}
</script>


<style lang="scss">
.card-form {
  max-width: 570px;
  margin: auto;
  width: 100%;

  @media screen and (max-width: 576px) {
    margin: 0 auto;
  }

  &-inner {
    background: #fff;
    box-shadow: 0 30px 60px 0 rgba(90, 116, 148, 0.4);
    border-radius: 10px;
    padding: 35px;
    padding-top: 180px;
    margin-top: -150px;

    @media screen and (max-width: 480px) {
      padding: 25px;
      padding-top: 165px;
    }
    @media screen and (max-width: 360px) {
      padding: 15px;
      padding-top: 165px;
    }
  }

  &-row {
    display: flex;
    align-items: flex-start;
    @media screen and (max-width: 480px) {
      flex-wrap: wrap;
    }
  }

  &-col {
    flex: auto;
    margin-right: 35px;

    &:last-child {
      margin-right: 0;
    }

    @media screen and (max-width: 480px) {
      margin-right: 0;
      flex: unset;
      width: 100%;
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    &.-cvv {
      max-width: 150px;
      @media screen and (max-width: 480px) {
        max-width: initial;
      }
    }
  }

  &-group {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;

    .card-input-input {
      flex: 1;
      margin-right: 15px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
}

.card-list {
  @media screen and (max-width: 480px) {
    margin-bottom: -120px;
  }
}

.card-input {
  margin-bottom: 20px;
  &-label {
    font-size: 14px;
    margin-bottom: 5px;
    font-weight: 500;
    color: #1a3b5d;
    width: 100%;
    display: block;
    user-select: none;
  }
  &-input {
    width: 100%;
    height: 50px;
    border-radius: 5px;
    box-shadow: none;
    border: 1px solid #ced6e0;
    transition: all 0.3s ease-in-out;
    font-size: 18px;
    padding: 5px 15px;
    background: none;
    color: #1a3b5d;
    font-family: 'Source Sans Pro', sans-serif;

    &:hover,
    &:focus {
      border-color: #3d9cff;
    }

    &:focus {
      box-shadow: 0px 10px 20px -13px rgba(32, 56, 117, 0.35);
    }
    &.-select {
      -webkit-appearance: none;
      background-image: url('../assets/images/angle-down-solid.svg');
      background-size: 16px;
      background-position: 90% center;
      background-repeat: no-repeat;
      padding-right: 30px;
    }
  }
}
</style>