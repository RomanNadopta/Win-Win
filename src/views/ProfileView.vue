<template>
  <div class="page-wrapper">
    <div class="">
      <div class="container profile">
        <div class="section profile-heading">
          <div class="columns is-mobile is-multiline">
            <div class="column is-2-desktop is-4-tablet is-2-mobile">
              <div
                class="profile-avatar is-128x128 image header-icon user-image"
                :style="{ 'background-image': `url( ${user?.avatar} )` }"
              ></div>
            </div>
            <div class="column is-4-desktop is-7-tablet is-7-mobile name">
              <div class="user-info">
                <p>
                  <span class="title is-bold">{{ user?.username }}</span>
                  <br />
                </p>
                <p class="tagline">{{ user?.info }}</p>
              </div>
              <div class="profile-card">
                <profile-modal v-if="user" :user="user"></profile-modal>

                <!-- Credit card -->
                <credit-card-form
                  class="mt-4"
                  v-if="user"
                  :user="user"
                  @input-card-number="updateCardNumber"
                  @input-card-name="updateCardName"
                  @input-card-month="updateCardMonth"
                  @input-card-year="updateCardYear"
                  @input-card-cvv="updateCardCvv"
                ></credit-card-form>
              </div>
            </div>
            <div
              @click="selectedOpportunities = 'received'"
              :class="{ 'is-active': selectedOpportunities === 'received' }"
              class="received stats-tab stats-tab-interactive column is-2-desktop is-4-tablet is-6-mobile has-text-centered"
            >
              <p class="stat-val">Received</p>

              <p class="stat-key">
                <span class="has-text-weight-bold has-text-success">{{
                  opportunities.length
                }}</span>
                <br />
                Opportunity
              </p>
            </div>
            <div
              @click="selectedOpportunities = 'sent'"
              :class="{ 'is-active': selectedOpportunities === 'sent' }"
              class="stats-tab stats-tab-interactive column is-2-desktop is-4-tablet is-6-mobile has-text-centered"
            >
              <p class="stat-val">Sent</p>
              <p class="stat-key">
                <span class="has-text-weight-bold has-text-info">{{
                  sendOpportunities.length
                }}</span>
                <br />
                Opportunity
              </p>
            </div>
            <div
              class="stats-tab column is-2-desktop is-3-tablet is-6-mobile has-text-centered"
            >
              <p class="stat-val">{{ user?.credit }}</p>
              <p class="stat-key">Credits</p>
            </div>
          </div>
        </div>
        <!-- received opp -->
        <div
          v-if="selectedOpportunities === 'received'"
          class="columns is-mobile is-multiline"
        >
          <template v-if="isShowCard">
            <div
              v-for="opportunity in opportunities"
              :key="opportunity.id"
              class="column is-3-desktop is-6-tablet is-12-mobile"
            >
              <div class="card">
                <div v-if="opportunity.fromExchange" class="card-image">
                  <figure class="image">
                    <img :src="opportunity.fromExchange.image" />
                  </figure>
                </div>
                <div v-else class="card-image">
                  <figure class="image is-4by3">
                    <img
                      src="https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                    />
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p v-if="opportunity.fromExchange" class="title is-6">
                        <b>Offer:</b> {{ opportunity.fromExchange.title }}
                      </p>
                      <p v-else class="title is-6">
                        <b>Offer:</b> {{ opportunity.price }}$
                      </p>
                      <p class="title is-6">
                        <b>Request:</b> {{ opportunity.title }}
                      </p>
                      <p class="subtitle is-6">
                        <span
                          :class="[
                            { 'is-success': opportunity.status === 'accepted' },
                            { 'is-danger': opportunity.status === 'declined' },
                            { 'is-warning': opportunity.status === 'pending' },
                          ]"
                          class="tag subtitle"
                          >{{ opportunity.status }}</span
                        >
                      </p>
                    </div>
                  </div>
                  <div class="content">
                    <p v-if="opportunity.fromExchange">
                      {{ opportunity.fromExchange.description }}
                    </p>
                    <p v-else>User want to exchange your item for money</p>
                  </div>
                </div>
                <footer class="card-footer">
                  <opportunity-deal-modal
                    v-if="opportunity.status === 'pending'"
                    :opportunity="opportunity"
                  ></opportunity-deal-modal>
                  <opportunity-result-modal
                    v-else
                    :opportunity="opportunity"
                  ></opportunity-result-modal>

                  <button
                    :disabled="opportunity.status === 'pending'"
                    type="button"
                    class="button"
                    @click="deleteExchange(opportunity)"
                  >
                    Delete
                  </button>
                </footer>
              </div>
              <br />
            </div>
          </template>
        </div>

        <!-- sent opp -->
        <div
          v-if="selectedOpportunities === 'sent'"
          class="columns is-mobile is-multiline"
        >
          <template v-if="sendOpportunities && sendOpportunities.length > 0">
            <div
              v-for="sendOpportunity in sendOpportunities"
              :key="sendOpportunity.id"
              class="column is-3-desktop is-6-tablet is-12-mobile"
            >
              <div class="card">
                <div v-if="sendOpportunity.toExchange" class="card-image">
                  <figure class="image">
                    <img :src="sendOpportunity.toExchange.image" />
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-6">
                        <b>Request:</b> {{ sendOpportunity.title }}
                      </p>

                      <p v-if="sendOpportunity.fromExchange" class="title is-6">
                        <b>Offer:</b> {{ sendOpportunity.fromExchange.title }}
                      </p>
                      <p v-else class="title is-6">
                        <b>Offer:</b> {{ sendOpportunity.price }}$
                      </p>
                      <p class="subtitle is-6">
                        <span
                          :class="[
                            {
                              'is-success':
                                sendOpportunity.status === 'accepted',
                            },
                            {
                              'is-danger':
                                sendOpportunity.status === 'declined',
                            },
                            {
                              'is-warning':
                                sendOpportunity.status === 'pending',
                            },
                          ]"
                          class="tag is-dark subtitle"
                          >{{ sendOpportunity.status }}</span
                        >
                      </p>
                    </div>
                  </div>
                  <div class="content">
                    <p v-if="sendOpportunity.fromExchange">
                      {{ sendOpportunity.fromExchange.description }}
                    </p>
                    <p v-else>Price Exchange</p>
                  </div>
                </div>
              </div>
              <br />
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import useAuth from '../composition/useAuth'
import ProfileModal from '../components/ProfileModal.vue'
import OpportunityDealModal from '../components/OpportunityDealModal.vue'
import OpportunityResultModal from '../components/OpportunityResultModal.vue'
import CreditCardForm from '../components/CreditCardForm.vue'
import { computed, reactive, ref, watch } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const { isAuthenticated, user } = useAuth()
const router = useRouter()

store.dispatch('opportunity/GET_OPPORTUNITIES')
store.dispatch('opportunity/GET_SEND_OPPORTUNITIES')

const selectedOpportunities = ref('received')

const opportunities = computed(() => {
  return store.state.opportunity.opportunities
})

const sendOpportunities = computed(() => {
  return store.state.opportunity.sendOpportunities
})

const isShowCard = computed(() => {
  if (opportunities.value && opportunities.value.length > 0) {
    return true
  }
  return false
})

watch(isAuthenticated, (isAuth) => {
  if (!isAuth) {
    router.push('/')
  }
})

const deleteExchange = async (opportunityId) => {
  if (
    opportunityId.status === 'accepted' ||
    opportunityId.status === 'declined'
  ) {
    await store.dispatch('opportunity/DELETE_OPPORTUNITY', {
      opportunityId,
    })
    store.dispatch('opportunity/GET_OPPORTUNITIES')
    store.dispatch('opportunity/GET_SEND_OPPORTUNITIES')
  }
  if (opportunityId.status === 'accepted') {
    let id = opportunityId.toExchange.id
    await store.dispatch('exchange/DELETE_EXCHANGE', { id })
    if (opportunityId.fromExchange) {
      let id = opportunityId.fromExchange.id
      await store.dispatch('exchange/DELETE_EXCHANGE', { id })
    }
  }
}

const updateCardNumber = (val) => {}
const updateCardName = (val) => {}
const updateCardMonth = (val) => {}
const updateCardYear = (val) => {}
const updateCardCvv = (val) => {}
</script>


<style lang='scss'>
.profile {
  .column {
    padding: 8px;
  }

  &-avatar {
    background-size: cover;
    background-repeat: no-repeat;
  }
}
.user-image {
  border-radius: 50%;
  overflow: hidden;
}
.link {
  font-weight: 500;
  color: rgb(79, 79, 172);
  text-decoration: underline;
}
.user-info {
  margin-bottom: 10px;
}
.stats-error {
  font-size: 40px;
  font-weight: bold;
  margin-top: 30px;
}
.delete-item {
  color: red;
}
.stats-tab {
  border-bottom: 2px solid transparent;
  transition: 0.5s;
}
.stats-tab:hover {
  cursor: pointer;
  border-bottom: 2px solid black;
}
.stats-tab.is-active {
  border-bottom: 2px solid black;
}
.stat-val {
  font-size: 2em;
  padding-top: 20px;
  font-weight: bold;
}
.stat-key {
  font-size: 1.4em;
  font-weight: 200;
}
.section.profile-heading
  .column.is-2-desktop.has-text-centered
  + .has-text-centered {
  border-left: 1px dotted rgba(0, 0, 0, 0.2);
}
.container.profile {
  margin-top: 1%;
}
.control.is-pulled-left span.select {
  margin-right: 5px;
  border-radius: 2px;
}
.modal-card .content h1 {
  padding: 40px 10px 10px;
  border-bottom: 1px solid #dadada;
}
.container.profile .profile-options .tabs ul li.link a {
  margin-bottom: 20px;
  padding: 20px;
  background-color: #f1f1f1;
}
.card-footer {
  justify-content: center;
  padding: 5px;
}
.result-button {
  display: block;
  margin: 0 auto;
}

@media screen and (max-width: 1023px) {
  .profile .columns {
    margin-left: 0;
    margin-right: 0;
  }
  .container.profile {
    padding-left: 60px;
    padding-right: 60px;
  }
}
@media screen and (max-width: 768px) {
  .container.profile {
    padding-left: 10px;
    padding-right: 10px;
  }
  .profile-heading .columns {
    margin-left: 0em;
    margin-right: 0em;
    justify-content: center;
  }

  .image.is-128x128 {
    height: 96px;
    width: 96px;
  }
  .user-info {
    margin-bottom: 30px;
  }

  .name {
    margin-left: 60px;
  }
  .profile-card {
    display: flex;
    position: relative;
    justify-content: center;
    right: 40px;
  }

  .profile .section {
    padding: 3rem 0rem;
  }
  .section.profile-heading
    .column.is-2-desktop.has-text-centered
    + .has-text-centered:nth-last-child(1) {
    border-right: 1px dotted rgba(0, 0, 0, 0.2);
  }
}
</style>
