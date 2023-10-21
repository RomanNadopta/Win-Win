<template>
  <section class="container categories">
    <h2
      class="category-header has-text-centered-mobile is-size-1 is-size-2-mobile is-uppercase"
    >
      Categories
    </h2>
    <div class="category">
      <div class="category-list">
        <div
          class="category-item"
          v-for="category in categories"
          :key="category"
        >
          <router-link
            :to="{ name: 'categoryList', params: { type: category.name } }"
          >
            <div
              class="category-image mb-6 box"
              :style="{
                'background-image': `url( ${category.image} )`,
              }"
            >
              <p class="category-title">
                {{ category.name }}
              </p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const categories = computed(() => {
  return store.state.exchange.categories
})
// const getImageUrl = (name) => {
//   const path = new URL(`../assets/images/categories/${name}`, import.meta.url)
//     .href
//   return path
// }
</script>



<style lang="scss">
.categories {
  padding: 0 1em;
}
.category {
  padding-top: 80px;

  &-image {
    width: 100%;
    height: 300px;
    position: relative;
    display: inline-block;
    margin: 0 auto;
    padding: 1em;
    overflow: hidden;

    background-size: 110% 268%;

    background-position: center center;
    transition-duration: 0.4s;

    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
    &:hover {
      background-size: 100% 250%;
    }
  }

  &-image:before,
  &-image:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    background: linear-gradient(
      0deg,
      rgba(253, 212, 45, 1) 11%,
      rgba(27, 14, 210, 1) 86%
    );
    opacity: 0.5;
    -webkit-transition: all 0.45s ease;
    transition: all 0.45s ease;
  }

  &-image:before {
    -webkit-transform: skew(30deg) translateX(80%);
    transform: skew(30deg) translateX(0%);
  }

  &-image:after {
    -webkit-transform: skew(-30deg) translateX(70%);
    transform: skew(-30deg) translateX(0%);
  }

  &-image:hover:before {
    -webkit-transform: skew(30deg) translateX(30%);
    transform: skew(30deg) translateX(80%);
    -webkit-transition-delay: 0.05s;
    transition-delay: 0.05s;

    background-color: blue;
    opacity: 0.5;
    -webkit-transition: all 0.45s ease;
    transition: all 0.45s ease;
  }

  &-image:hover:after {
    -webkit-transform: skew(-30deg) translateX(20%);
    transform: skew(-30deg) translateX(80%);
  }

  &-title {
    margin: 0;
    position: relative;
    font-size: 50px;
    color: white;
    font-weight: bold;
    text-align: center;
    top: 50%;
    text-transform: uppercase;
    letter-spacing: 0.5rem;
    transform: translateY(-50%);
    z-index: 1;
  }
  .category-image:hover .category-title {
    background: linear-gradient(
      0deg,
      rgba(253, 212, 45, 1) 11%,
      rgb(210, 70, 14) 86%
    );
    animation: wave 1500ms ease alternate infinite;
    transition: all 0.8s ease;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 0.1rem;
  }

  @keyframes wave {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 50vw 10px;
    }
  }
}
@media screen and (max-width: 1023px) {
  .categories {
    -webkit-text-stroke-width: 0.1rem;
  }
  .category {
    &-image {
      height: 200px;
    }

    &-image:before {
      -webkit-transform: skew(30deg) translateX(80%);
      transform: skew(30deg) translateX(90%);
    }

    &-image:after {
      -webkit-transform: skew(-30deg) translateX(70%);
      transform: skew(-30deg) translateX(90%);
    }

    &-title {
      font-size: 46px;
    }
  }
  .category-image:hover .category-title,
  .category-image .category-title {
    -webkit-text-fill-color: #d3450d;
  }
}
@media only screen and (max-width: 768px) {
  .category {
    &-image {
      height: 150px;

      background-size: 150% 250%;
    }

    &-title {
      font-size: 36px;
    }
  }
}
</style>