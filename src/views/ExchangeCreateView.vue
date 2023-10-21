<template>
  <div class="page-wrapper">
    <div class="container create-exchange">
      <div class="form-container">
        <form>
          <div class="field">
            <label class="label">Type</label>
            <div class="control">
              <div class="select">
                <select v-model="form.type">
                  <option
                    v-for="category in categories"
                    :key="category.name"
                    :value="category.name"
                  >
                    {{ category.name }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div class="field">
            <label class="label">Title</label>
            <div class="control">
              <input
                v-model="form.title"
                class="input"
                type="text"
                placeholder="Some Nice Product"
              />
              <form-errors :errors="v$.title.$errors"></form-errors>
            </div>
          </div>
          <div class="field">
            <label class="label">Description</label>
            <div class="control">
              <textarea
                v-model="form.description"
                class="textarea"
                placeholder="Some catchy description about product"
              >
              </textarea>
              <form-errors :errors="v$.description.$errors"></form-errors>
            </div>
          </div>
          <div class="field">
            <label class="label">Image Link</label>
            <div class="control">
              <input
                v-model="form.image"
                class="input"
                type="text"
                placeholder="https://unsplash...."
              />
              <form-errors :errors="v$.image.$errors"></form-errors>
            </div>
          </div>
          <div class="field">
            <label class="label">Price</label>
            <div class="control">
              <input
                v-model="form.price"
                class="input"
                type="number"
                placeholder="249"
              />
              <form-errors :errors="v$.price.$errors"></form-errors>
            </div>
          </div>
          <div class="field">
            <label class="label">Country</label>
            <div class="control">
              <input
                v-model="form.country"
                class="input"
                type="text"
                placeholder="Slovakia"
              />
              <form-errors :errors="v$.country.$errors"></form-errors>
            </div>
          </div>
          <div class="field">
            <label class="label">City</label>
            <div class="control">
              <input
                v-model="form.city"
                class="input"
                type="text"
                placeholder="Bratislava"
              />
              <form-errors :errors="v$.city.$errors"></form-errors>
            </div>
          </div>

          <!-- TODO: provide tags inputs -->
          <div class="field">
            <label class="label">Tags</label>
            <div class="control">
              <input
                @input="handleTags"
                class="input"
                type="text"
                placeholder="programming"
              />
              <div
                v-for="tag in form.tags"
                :key="tag"
                class="tag is-primary is-medium"
              >
                #{{ tag }}
              </div>
            </div>
          </div>
          <div class="field is-grouped">
            <div class="control">
              <button
                @click.prevent="createExchange"
                class="button is-link is-success"
              >
                Submit
              </button>
            </div>
            <div class="control">
              <button class="button is-text">Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useVuelidate } from '@vuelidate/core'
import {
  required,
  minLength,
  minValue,
  url,
  helpers,
} from '@vuelidate/validators'
import { computed, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import FormErrors from '../components/FormErrors.vue'

const store = useStore()

const form = reactive({
  title: '',
  description: '',
  type: 'games',
  image: '',
  price: null,
  country: '',
  city: '',
  tags: [],
})

const rules = computed(() => {
  return {
    title: {
      required: helpers.withMessage('Title cannot be empty!', required),
    },
    description: {
      required,
      minLength: helpers.withMessage(
        'Description length should be at least 10!',
        minLength(10)
      ),
    },
    type: { required },
    image: {
      required,
      url,
    },
    price: { required, minValue: minValue(1) },
    country: { required },
    city: { required },
  }
})

const v$ = useVuelidate(rules, form)

const createExchange = async () => {
  const isValid = await v$.value.$validate()
  if (isValid) {
    v$.value.$reset()
    store.dispatch('exchange/CREATE_EXCHANGES', {
      data: form,
      onSuccess: () => {
        form.title = ''
        form.description = ''
        form.type = 'games'
        form.image = ''
        form.price = null
        form.country = ''
        form.city = ''
        form.tags = []
      },
    })
  }
}

const handleTags = (event) => {
  const { value } = event.target
  if (
    (value && value.trim().length > 1 && value.substr(-1) === ',') ||
    value.substr(-1) === ' '
  ) {
    const _value = value.split(',')[0].trim()
    if (!form.tags.includes(form.type)) {
      form.tags.push(form.type)
    }
    if (!form.tags.includes(_value)) {
      form.tags.push(_value)
    }
    event.target.value = ''
  }
}
const categories = computed(() => {
  return store.state.exchange.categories
})
</script>

<style scoped>
.create-exchange {
  padding-top: 80px;
  padding-bottom: 80px;
}
.form-container {
  max-width: 960px;
  margin: 0 auto;
  margin-top: 40px;
}
.tag {
  margin: 3px;
}

@media screen and (max-width: 1023px) {
  .create-exchange {
    padding: 0px 10px;
  }
}
</style>