<template>
  <section class="posts latest-posts">
    <div class="container latest-posts-list">
      <h2
        class="posts-title is-size-1 is-uppercase has-text-centered-mobile is-size-2-mobile"
      >
        Latest Posts
      </h2>
      <div v-if="exchanges" class="columns is-multiline">
        <div
          v-for="card in exchanges"
          :key="card.id"
          class="column is-12-mobile is-6-tablet is-4-widescreen is-6-desktop"
        >
          <div :class="{ 'card-visibility': card.status === 'sold' }">
            <div class="item post-card latest-post-card bottom-border">
              <router-link
                :to="{ name: 'exchangeDetail', params: { slug: card.slug } }"
                class="item-link"
              >
                <figure
                  class="image is-2by1 item-figure background-img"
                  :style="{
                    'background-image': `url(${card.image})`,
                  }"
                  alt=""
                ></figure>
                <div class="item-featured">
                  <div class="exchange-icon">
                    <font-awesome-icon icon="star" />
                  </div>
                </div>
                <div class="level exchange-title">
                  <div class="level-left">
                    <h2
                      class="title item-title is-size-4 has-text-weight-extra-bold"
                    >
                      {{ card.title }}
                    </h2>
                  </div>
                  <div class="level-right">
                    <p>${{ card.price }}</p>
                  </div>
                </div>
              </router-link>
              <div class="level">
                <div class="level-left">
                  <div class="item-author">
                    <p>{{ card.type }}</p>
                  </div>
                </div>
                <div class="level-right">
                  <p>{{ card.createdAt.toDate().toDateString() }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
const props = defineProps({
  exchanges: {
    type: Array,
    required: true,
  },
})
</script>


<style lang="scss">
.latest-posts .columns {
  padding-top: 60px;
}

@media screen and (max-width: 1023px) {
  .latest-posts {
    padding-top: 6em;
    padding-bottom: 6em;
  }
}
.exchange-title .level-left {
  flex-shrink: 1;
  padding-right: 20px;
}

@media only screen and (max-width: 768px) {
  .latest-posts {
    padding-top: 0px;
  }
}
</style>

