<template>
  <div
    class="card-item"
    :class="{ '-active': isCardFlipped }"
    v-if="labels && inputFields"
  >
    <div class="card-item-side -front">
      <div
        :class="{ '-active': focusElementStyle }"
        :style="focusElementStyle"
        class="card-item-focus"
        ref="focusElement"
      ></div>
      <div class="card-item-cover">
        <img
          :src="creditCardImages.image"
          class="card-item-bg"
          alt="Background image"
        />
      </div>
      <div class="card-item-wrapper">
        <div class="card-item-top">
          <img
            :src="creditCardImages.chip"
            class="card-item-chip"
            alt="Card chip image"
          />
          <div class="card-item-type">
            <transition name="slide-fade-up">
              <img
                v-if="cardType"
                :src="getCreditCardImage"
                :key="cardType"
                :alt="`${cardType} brand image`"
                class="card-item-typeImg"
              />
            </transition>
          </div>
        </div>
        <label
          :for="inputFields.cardNumber"
          ref="inputFieldCardNumber"
          aria-label="Card number"
          class="card-item-number"
        >
          <span v-for="(n, $index) in currentPlaceholder" :key="$index">
            <transition name="slide-fade-up">
              <div
                v-if="getIsNumberMasked($index, n)"
                class="card-item-numberItem"
              >
                *
              </div>
              <div
                v-else-if="valueFields.cardNumber.length > $index"
                :class="{ '-active': n.trim() === '' }"
                :key="currentPlaceholder"
                class="card-item-numberItem"
              >
                {{ valueFields.cardNumber[$index] }}
              </div>
              <div
                v-else
                :class="{ '-active': n.trim() === '' }"
                :key="currentPlaceholder + 1"
                class="card-item-numberItem"
              >
                {{ n }}
              </div>
            </transition>
          </span>
        </label>
        <div class="card-item-content">
          <label
            :for="inputFields.cardName"
            ref="inputFieldCardName"
            aria-label="Card name"
            class="card-item-info"
          >
            <div class="card-item-holder">
              {{ labels.cardHolder || 'Card Holder' }}
            </div>
            <transition name="slide-fade-up">
              <div
                v-if="valueFields.cardName.length"
                class="card-item-name"
                key="1"
              >
                <transition-group name="slide-fade-right">
                  <span
                    v-for="(n, key) in valueFields.cardName.replace(
                      /\s\s+/g,
                      ' '
                    )"
                    :key="key + 1"
                    class="card-item-nameItem"
                    >{{ n }}</span
                  >
                </transition-group>
              </div>
              <div class="card-item-name" v-else key="2">
                {{ labels.cardName || 'Full Name' }}
              </div>
            </transition>
          </label>
          <div class="card-item-date" ref="cardDate">
            <label
              :for="inputFields.cardMonth"
              class="card-item-dateTitle"
              aria-label="Expiration date"
              >{{ labels.cardExpires || 'Expires' }}</label
            >
            <label
              :for="inputFields.cardMonth"
              class="card-item-dateItem"
              aria-label="Card month"
            >
              <transition name="slide-fade-up">
                <span
                  v-if="valueFields.cardMonth"
                  :key="valueFields.cardMonth"
                  >{{ valueFields.cardMonth }}</span
                >
                <span v-else key="2">{{ labels.cardMonth || 'MM' }}</span>
              </transition>
            </label>
            /
            <label
              :for="inputFields.cardYear"
              class="card-item-dateItem"
              aria-label="Card year"
            >
              <transition name="slide-fade-up">
                <span v-if="valueFields.cardYear" :key="valueFields.cardYear">{{
                  String(valueFields.cardYear).slice(2, 4)
                }}</span>
                <span v-else key="2">{{ labels.cardYear || 'YY' }}</span>
              </transition>
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="card-item-side -back">
      <div class="card-item-cover">
        <img
          :src="creditCardImages.image"
          class="card-item-bg"
          alt="Background image"
        />
      </div>
      <div class="card-item-band"></div>
      <div class="card-item-cvv">
        <label :for="inputFields.cardCvv" aria-label="Card CVV">
          <div class="card-item-cvvTitle">{{ labels.cardCvv }}</div>
          <div class="card-item-cvvBand">
            <span v-for="n in valueFields.cardCvv" :key="n">*</span>
          </div>
        </label>
        <div class="card-item-type">
          <img
            v-if="cardType"
            :src="getCreditCardImage"
            class="card-item-typeImg"
            alt="Dark bar image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  computed,
  ref,
  watch,
  onMounted,
  onBeforeUnmount,
  nextTick,
  reactive,
} from 'vue'
import { useStore } from 'vuex'
const store = useStore()

const emit = defineEmits(['get-type'])

const props = defineProps({
  valueFields: {
    type: Object,
    required: true,
  },
  inputFields: {
    type: Object,
    default: () => ({
      cardNumber: 'v-card-number',
      cardName: 'v-card-name',
      cardMonth: 'v-card-month',
      cardYear: 'v-card-year',
      cardCvv: 'v-card-cvv',
    }),
  },
  labels: {
    type: Object,
    default: () => ({
      cardName: 'Full Name',
      cardHolder: 'Card Holder',
      cardMonth: 'MM',
      cardYear: 'YY',
      cardExpires: 'Expires',
      cardCvv: 'CVV',
    }),
  },
  isCardNumberMasked: {
    type: Boolean,
    default: true,
  },
  hasRandomBackgrounds: {
    type: Boolean,
    default: true,
  },
  backgroundImage: {
    type: [String, Number],
    default: '',
  },
  setType: {
    type: String,
    default: '',
  },
})

const focusElementStyle = ref(null)
const currentFocus = ref(null)
const isFocused = ref(false)
const isCardFlipped = ref(false)

const amexCardPlaceholder = '#### ###### #####'
const fifteenCardPlaceholder = '#### #### #### ###'
const dinersCardPlaceholder = '#### ###### ####'
const unionPayCardPlaceholder = '###### ####### ######'
const defaultCardPlaceholder = '#### #### #### ####'
const currentPlaceholder = ref(defaultCardPlaceholder)

const jcbCardPlaceholder = computed(() => {
  const number = props.valueFields.cardNumber.replace(/\s+/g, '')

  return number.startsWith('2131') || number.startsWith('1800')
    ? fifteenCardPlaceholder
    : defaultCardPlaceholder
})

const cardType = computed(() => {
  const acceptedTypes = [
    'visaelectron',
    'visa',
    'elo',
    'amex',
    'mastercard',
    'discover',
    'unionpay',
    'troy',
    'dinersclub',
    'jcb',
    'laser',
    'dankort',
    'uatp',
    'mir',
    'hipercard',
    'aura',
    'maestro',
  ]
  const setType = props.setType?.toLowerCase()?.replace(/ /g, '')
  if (setType?.length && acceptedTypes.includes(setType)) return setType

  const number = props.valueFields.cardNumber.replace(/\s+/g, '')

  if (number.match(/^4(026|17500|405|508|844|91[37])/)) {
    return 'visaelectron'
  }
  if (number.match(/^4\d{12}(\d{3})?$/)) return 'visa'
  if (
    number.match(
      /^((509091)|(636368)|(636297)|(504175)|(438935)|(40117[8-9])|(45763[1-2])|(457393)|(431274)|(50990[0-2])|(5099[7-9][0-9])|(50996[4-9])|(509[1-8][0-9][0-9])|(5090(0[0-2]|0[4-9]|1[2-9]|[24589][0-9]|3[1-9]|6[0-46-9]|7[0-24-9]))|(5067(0[0-24-8]|1[0-24-9]|2[014-9]|3[0-379]|4[0-9]|5[0-3]|6[0-5]|7[0-8]))|(6504(0[5-9]|1[0-9]|2[0-9]|3[0-9]))|(6504(8[5-9]|9[0-9])|6505(0[0-9]|1[0-9]|2[0-9]|3[0-8]))|(6505(4[1-9]|5[0-9]|6[0-9]|7[0-9]|8[0-9]|9[0-8]))|(6507(0[0-9]|1[0-8]))|(65072[0-7])|(6509(0[1-9]|1[0-9]|20))|(6516(5[2-9]|6[0-9]|7[0-9]))|(6550(0[0-9]|1[0-9]))|(6550(2[1-9]|3[0-9]|4[0-9]|5[0-8])))/
    )
  ) {
    return 'elo'
  }
  if (number.match(/^3[47]\d{13}$/)) return 'amex'
  if (number.match(/^(5[1-5]\d{4}|677189)\d{10}$/)) return 'mastercard'
  if (number.match(/^6(?:011|5[0-9]{2})[0-9]{12}$/)) return 'discover'
  if (number.match(/^62[0-9]\d{14,17}$/)) return 'unionpay'
  if (number.match(/^9792\d{12}$/)) return 'troy'
  if (number.match(/^3(0[0-5]|[68]\d)\d{11,16}/)) return 'dinersclub'
  if (number.match(/(?:2131|1800|35[0-9]{3})[0-9]{11}$/)) return 'jcb'
  if (number.match(/^(6304|6706|6709|6771)[0-9]{12,15}$/)) return 'laser'
  if (number.match(/^5019\d{12}$/)) return 'dankort'
  if (number.match(/^1\d{14}$/)) return 'uatp'
  if (number.match(/^220[0-4]\d{12}$/)) return 'mir'
  if (number.match(/^(606282\d{10}(\d{3})?)|(3841\d{15})$/)) {
    return 'hipercard'
  }
  if (number.match(/^((?!504175))^((?!5067))(^50[0-9])/)) return 'aura'
  if (number.match(/(?:5[0678]\d\d|6304|6390|67\d\d)\d{8,15}$/)) {
    return 'maestro'
  }

  return ''
})

const creditCardImages = computed(() => {
  return store.state.exchange.creditCardImg
})

const getCreditCardImage = computed(() => {
  const creditCardImage = store.state.exchange.creditCardImg
  const path = creditCardImage[cardType.value]
  return path
})
store.dispatch('exchange/GET_CREDIT_CARD_IMAGES')

const addOrRemoveFieldListeners = (event = 'addEventListener') => {
  const fields = document.querySelectorAll('[data-card-field]')
  fields.forEach((element) => {
    element[event]('focus', () => {
      isFocused.value = true
      if (
        element.id === props.inputFields.cardYear ||
        element.id === props.inputFields.cardMonth
      ) {
        currentFocus.value = 'cardDate'
      } else {
        currentFocus.value = element.id
      }
      isCardFlipped.value = element.id === props.inputFields.cardCvv
    })
    element[event]('blur', () => {
      isCardFlipped.value = !element.id === props.inputFields.cardCvv
      const timeout = setTimeout(() => {
        if (!isFocused.value) {
          currentFocus.value = null
        }
        clearTimeout(timeout)
      }, 300)
      isFocused.value = false
    })
  })
}

const init = () => {
  addOrRemoveFieldListeners()
}
onMounted(() => {
  init()
})

const destroy = () => {
  addOrRemoveFieldListeners('removeEventListener')
}
onBeforeUnmount(() => {
  destroy()
})

const inputFieldCardNumber = ref(null)
const inputFieldCardName = ref(null)
const cardDate = ref(null)

const focus = computed(() => {
  switch (currentFocus.value) {
    case props.inputFields.cardName:
      return inputFieldCardName
    case props.inputFields.cardNumber:
      return inputFieldCardNumber
    case 'cardDate':
      return cardDate
    default:
      return null
  }
})

const changeFocus = () => {
  if (focus.value) {
    const focusElement = focus.value
    const target = focusElement.value

    focusElementStyle.value = target
      ? {
          width: `${target.offsetWidth}px`,
          height: `${target.offsetHeight}px`,
          transform: `translateX(${target.offsetLeft}px) translateY(${target.offsetTop}px)`,
        }
      : null
  }
}

const getIsNumberMasked = (index, n) => {
  const numbers = cardType.value === 'amex' ? 13 : 14

  return (
    index < numbers &&
    props.valueFields.cardNumber.length > index &&
    n.trim() !== '' &&
    props.isCardNumberMasked
  )
}

const changePlaceholder = () => {
  const cardsPlaceholder = {
    amex: amexCardPlaceholder,
    dinersclub: dinersCardPlaceholder,
    jcb: jcbCardPlaceholder,
    uatp: fifteenCardPlaceholder,
    unionpay: unionPayCardPlaceholder,
  }

  currentPlaceholder.value =
    cardsPlaceholder[cardType.value] || defaultCardPlaceholder
  nextTick(() => {
    changeFocus()
  })
}

watch(cardType, (val) => {
  emit('get-type', val)
  changePlaceholder()
})

watch(currentFocus, () => {
  if (currentFocus.value) {
    changeFocus()
  } else {
    focusElementStyle.value = null
  }
})
</script>







<style lang="scss">
.card-item {
  max-width: 430px;
  height: 270px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 2;
  width: 100%;

  @media screen and (max-width: 480px) {
    max-width: 310px;
    height: 220px;
    width: 90%;
  }

  @media screen and (max-width: 360px) {
    height: 180px;
  }

  &.-active {
    .card-item-side {
      &.-front {
        transform: perspective(1000px) rotateY(180deg) rotateX(0deg)
          rotateZ(0deg);
      }
      &.-back {
        transform: perspective(1000px) rotateY(0) rotateX(0deg) rotateZ(0deg);
      }
    }
  }

  &-focus {
    position: absolute;
    z-index: 3;
    border-radius: 5px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: all 0.35s cubic-bezier(0.71, 0.03, 0.56, 0.85);
    opacity: 0;
    pointer-events: none;
    overflow: hidden;
    border: 2px solid rgba(255, 255, 255, 0.65);

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      background: rgb(8, 20, 47);
      height: 100%;
      border-radius: 5px;
      filter: blur(25px);
      opacity: 0.5;
    }

    &.-active {
      opacity: 1;
    }
  }

  &-side {
    border-radius: 15px;
    overflow: hidden;

    box-shadow: 0 20px 60px 0 rgba(14, 42, 90, 0.55);
    transform: perspective(2000px) rotateY(0deg) rotateX(0deg) rotate(0deg);
    transform-style: preserve-3d;
    transition: all 0.8s cubic-bezier(0.71, 0.03, 0.56, 0.85);
    backface-visibility: hidden;
    height: 100%;

    &.-back {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      transform: perspective(2000px) rotateY(-180deg) rotateX(0deg) rotate(0deg);
      z-index: 2;
      padding: 0;

      height: 100%;

      .card-item-cover {
        transform: rotateY(-180deg);
      }
    }
  }
  &-bg {
    max-width: 100%;
    display: block;
    max-height: 100%;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  &-cover {
    height: 100%;
    background-color: #1c1d27;
    position: absolute;
    height: 100%;
    background-color: #1c1d27;
    left: 0;
    top: 0;
    width: 100%;
    border-radius: 15px;
    overflow: hidden;
    &:after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(6, 2, 29, 0.45);
    }
  }

  &-top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 40px;
    padding: 0 10px;

    @media screen and (max-width: 480px) {
      margin-bottom: 25px;
    }
    @media screen and (max-width: 360px) {
      margin-bottom: 15px;
    }
  }

  &-chip {
    width: 60px;
    @media screen and (max-width: 480px) {
      width: 50px;
    }
    @media screen and (max-width: 360px) {
      width: 40px;
    }
  }

  &-type {
    height: 45px;
    position: relative;
    display: flex;
    justify-content: flex-end;
    max-width: 100px;
    margin-left: auto;
    width: 100%;

    @media screen and (max-width: 480px) {
      height: 40px;
      max-width: 90px;
    }
    @media screen and (max-width: 360px) {
      height: 30px;
    }
  }

  &-typeImg {
    max-width: 100%;
    object-fit: contain;
    max-height: 100%;
    object-position: top right;
  }

  &-info {
    color: #fff;
    width: 100%;
    max-width: calc(100% - 85px);
    padding: 10px 15px;
    font-weight: 500;
    display: block;

    cursor: pointer;

    @media screen and (max-width: 480px) {
      padding: 10px;
    }
  }

  &-holder {
    opacity: 0.7;
    font-size: 13px;
    margin-bottom: 6px;
    @media screen and (max-width: 480px) {
      font-size: 12px;
      margin-bottom: 5px;
    }
  }

  &-wrapper {
    font-family: 'Source Code Pro', monospace;
    padding: 25px 15px;
    position: relative;
    z-index: 4;
    height: 100%;
    text-shadow: 7px 6px 10px rgba(14, 42, 90, 0.8);
    user-select: none;
    @media screen and (max-width: 480px) {
      padding: 20px 10px;
    }
  }

  &-name {
    font-size: 18px;
    line-height: 1;
    white-space: nowrap;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: uppercase;
    @media screen and (max-width: 480px) {
      font-size: 16px;
    }
  }
  &-nameItem {
    display: inline-block;
    min-width: 8px;
    position: relative;
  }

  &-number {
    font-weight: 500;
    line-height: 1;
    color: #fff;
    font-size: 27px;
    margin-bottom: 35px;
    display: inline-block;
    padding: 10px 15px;
    cursor: pointer;

    @media screen and (max-width: 480px) {
      font-size: 21px;
      margin-bottom: 15px;
      padding: 10px 10px;
    }

    @media screen and (max-width: 360px) {
      font-size: 19px;
      margin-bottom: 10px;
      padding: 10px 10px;
    }
  }

  &-numberItem {
    width: 16px;
    display: inline-block;
    &.-active {
      width: 30px;
    }

    @media screen and (max-width: 480px) {
      width: 13px;

      &.-active {
        width: 16px;
      }
    }

    @media screen and (max-width: 360px) {
      width: 12px;

      &.-active {
        width: 8px;
      }
    }
  }

  &-content {
    color: #fff;
    display: flex;
    align-items: flex-start;
  }

  &-date {
    flex-wrap: wrap;
    font-size: 18px;
    margin-left: auto;
    padding: 10px;
    display: inline-flex;
    width: 80px;
    white-space: nowrap;
    flex-shrink: 0;
    cursor: pointer;

    @media screen and (max-width: 480px) {
      font-size: 16px;
    }
  }

  &-dateItem {
    position: relative;
    span {
      width: 22px;
      display: inline-block;
    }
  }

  &-dateTitle {
    opacity: 0.7;
    font-size: 13px;
    padding-bottom: 6px;
    width: 100%;

    @media screen and (max-width: 480px) {
      font-size: 12px;
      padding-bottom: 5px;
    }
  }
  &-band {
    background: rgba(0, 0, 19, 0.8);
    width: 100%;
    height: 50px;
    margin-top: 30px;
    position: relative;
    z-index: 2;
    @media screen and (max-width: 480px) {
      margin-top: 20px;
    }
    @media screen and (max-width: 360px) {
      height: 40px;
      margin-top: 10px;
    }
  }

  &-cvv {
    text-align: right;
    position: relative;
    z-index: 2;
    padding: 15px;
    .card-item-type {
      opacity: 0.7;
    }

    @media screen and (max-width: 360px) {
      padding: 10px 15px;
    }
  }
  &-cvvTitle {
    padding-right: 10px;
    font-size: 15px;
    font-weight: 500;
    color: #fff;
    margin-bottom: 5px;
  }
  &-cvvBand {
    height: 45px;
    background: #fff;
    margin-bottom: 30px;
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10px;
    color: #1a3b5d;
    font-size: 18px;
    border-radius: 4px;
    box-shadow: 0px 10px 20px -7px rgba(32, 56, 117, 0.35);

    @media screen and (max-width: 480px) {
      height: 40px;
      margin-bottom: 20px;
    }

    @media screen and (max-width: 360px) {
      margin-bottom: 15px;
    }
  }
  .card-list {
    margin-bottom: -130px;

    @media screen and (max-width: 480px) {
      margin-bottom: -120px;
    }
  }
  .slide-fade-up-enter-active {
    transition: all 0.25s ease-in-out;
    transition-delay: 0.1s;
    position: relative;
  }
  .slide-fade-up-leave-active {
    transition: all 0.25s ease-in-out;
    position: absolute;
  }
  .slide-fade-up-enter {
    opacity: 0;
    transform: translateY(15px);
    pointer-events: none;
  }
  .slide-fade-up-leave-to {
    opacity: 0;
    transform: translateY(-15px);
    pointer-events: none;
  }

  .slide-fade-right-enter-active {
    transition: all 0.25s ease-in-out;
    transition-delay: 0.1s;
    position: relative;
  }
  .slide-fade-right-leave-active {
    transition: all 0.25s ease-in-out;
    position: absolute;
  }
  .slide-fade-right-enter {
    opacity: 0;
    transform: translateX(10px) rotate(45deg);
    pointer-events: none;
  }
  .slide-fade-right-leave-to {
    opacity: 0;
    transform: translateX(-10px) rotate(45deg);
    pointer-events: none;
  }
}
</style>