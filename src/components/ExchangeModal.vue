<template>
  <div class="exchange-modal">
    <template v-if="$slots.activator">
      <div @click="open" class="flex">
        <slot name="activator"> </slot>
      </div>
    </template>
    <teleport to="#modals" v-if="isOpen">
      <div :class="['modal', { 'is-active': isOpen }]">
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">{{ headerText }}</p>
            <template v-if="$slots.closeModalIcon">
              <slot name="closeModalIcon"></slot>
            </template>
            <button
              v-else
              @click="close"
              class="delete"
              aria-label="close"
            ></button>
          </header>
          <section class="modal-card-body">
            <!-- Modal body -->
            <slot></slot>
          </section>
          <footer class="modal-card-foot">
            <template v-if="$slots.footerButtons">
              <slot name="footerButtons"></slot>
            </template>
            <div v-else>
              <button
                @click="submitModal"
                class="button is-success"
                :disabled="isDisabled"
              >
                Save changes
              </button>
              <button @click="close" class="button">Cancel</button>
            </div>
          </footer>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
export default {
  props: {
    onModalSubmit: {
      type: Function,
      required: false,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    headerText: {
      type: String,
      default: 'Confirmation Window',
    },
  },
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    submitModal() {
      this.onModalSubmit({
        onSuccess: this.close,
      })
    },
    open() {
      this.isOpen = true
    },
    close() {
      this.isOpen = false
    },
  },
}
</script>

<style lang="scss">
.flex {
  display: flex;
}
</style>