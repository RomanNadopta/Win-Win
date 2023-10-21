<template>
  <div class="page-wrapper">
    <div class="container has-text-centered">
      <div class="column is-4 is-offset-4">
        <h3 class="title has-text-grey">Login</h3>
        <p class="subtitle has-text-grey">Please login to proceed.</p>
        <div class="box">
          <form>
            <div class="field">
              <div class="control">
                <input
                  v-model="form.email"
                  class="input is-large"
                  type="email"
                  placeholder="Your Email"
                  autofocus=""
                  autocomplete="email"
                />
                <form-errors :errors="v$.email.$errors"></form-errors>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input
                  v-model="form.password"
                  class="input is-large"
                  type="password"
                  placeholder="Your Password"
                  autocomplete="current-password"
                />
                <form-errors :errors="v$.password.$errors"></form-errors>
              </div>
            </div>
            <button
              @click="login"
              :disabled="isProcessing"
              type="button"
              class="button is-block is-info is-large is-fullwidth"
            >
              Sign In
            </button>
          </form>
        </div>
        <p class="has-text-grey">
          <a href="#">Sign In With Google</a>&nbsp;
          <a href="#">Sign Up</a> &nbsp;·&nbsp;
          <a href="#">Need Help?</a>
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import useAuth from '../composition/useAuth'
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import FormErrors from '../components/FormErrors.vue'
import { computed, reactive, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const { isAuthenticated, isProcessing } = useAuth()
const router = useRouter()
const store = useStore()

const form = reactive({
  email: '',
  password: '',
})

const rules = computed(() => {
  return {
    email: { required, email },
    password: { required },
  }
})

const v$ = useVuelidate(rules, form)

watch(isAuthenticated, (isAuth) => {
  if (isAuth) {
    router.push('/')
  }
})

const login = async () => {
  const isValid = await v$.value.$validate()
  if (isValid) {
    store.dispatch('user/LOGIN', form)
  }
}
</script>

<style scoped>
.hero.is-success {
  background: #f2f6fa;
}
.hero .nav,
.hero.is-success .nav {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.box {
  margin-top: 1rem;
}
.avatar {
  margin-top: -70px;
  padding-bottom: 20px;
}
.avatar img {
  padding: 5px;
  background: #fff;
  border-radius: 50%;
  -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.1);
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
}
input {
  font-weight: 300;
}
p {
  font-weight: 700;
}
p.subtitle {
  padding-top: 1rem;
}
</style>