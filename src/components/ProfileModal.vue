<template>
  <exchange-modal
    ref="exchangeModal"
    :onModalSubmit="updateProfile"
    :headerText="headerText"
  >
    <form>
      <div class="field">
        <label class="title">Username</label>
        <input class="input" v-model="userProfile.username" />
      </div>
      <div class="field">
        <label class="title">Avatar</label>
        <div class="file has-name">
          <label class="file-label">
            <input
              @change="handleUpload"
              class="file-input"
              type="file"
              name="resume"
            />
            <span class="file-cta">
              <span class="file-icon">
                <font-awesome-icon icon="upload" />
              </span>
              <span class="file-label"> Choose a file… </span>
            </span>
          </label>
        </div>
        <progress class="progress" :value="progressBar" max="100">
          {{ progressBar }}%
        </progress>
        <img
          v-if="userProfile.avatar"
          class="image-preview"
          :src="userProfile.avatar"
          alt=""
        />
      </div>
      <div class="field">
        <label class="title">Info about user</label>
        <input class="input" v-model="userProfile.info" />
      </div>
      <div class="field">
        <label class="title">Address</label>
        <input class="input" v-model="userProfile.address" />
      </div>
      <div class="field">
        <label class="title">Country</label>
        <input class="input" v-model="userProfile.country" />
      </div>
      <div class="field">
        <label class="title">Phone</label>
        <input class="input" v-model="userProfile.phone" />
      </div>
    </form>

    <template #activator>
      <button class="button is-block is-success is-light is-fullwidth">
        Update Profile
      </button>
    </template>
  </exchange-modal>
</template>

<script setup>
import ExchangeModal from './ExchangeModal.vue'
import { useStore } from 'vuex'
import { computed, ref, onMounted, reactive } from 'vue'

const { user } = defineProps({
  user: {
    type: Object,
    required: true,
  },
})
const userProfile = ref({ ...user })
const progressBar = ref(0)

const headerText = ref('User Profile')

const store = useStore()

const updateProfile = () => {
  store.dispatch('user/UPDATE_PROFILE', {
    data: userProfile.value,
    onSuccess: () => modal.value.close(),
  })
}

const handleUpload = (e) => {
  const file = e.target.files[0]
  const reader = new FileReader()
  reader.readAsArrayBuffer(file)
  reader.onload = function () {
    store.dispatch('user/UPLOAD_IMAGE', {
      bytes: reader.result,
      name: file.name,
      onSuccess: (url) => {
        userProfile.value.avatar = url
      },
      onProgress: (progress) => {
        progressBar.value = progress
      },
    })
  }
}

const exchangeModal = ref(null)

const modal = computed(() => {
  return exchangeModal.value
})
</script>

 

<style scoped>
.image-preview {
  height: 200px;
}
.progress {
  margin-top: 15px;
}
</style>