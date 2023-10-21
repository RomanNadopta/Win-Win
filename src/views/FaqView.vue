<template>
  <section class="hero-section faq-page">
    <div class="hero-faq">
      <div
        class="hero background-img is-large"
        :style="{
          'background-image': `url(https://images.unsplash.com/photo-1503551723145-6c040742065b-v2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80 )`,
        }"
      >
        <div class="hero-body">
          <div class="container has-text-centered faq">
            <h1 class="faq-title has-text-white">FAQ</h1>
            <div class="faq-description">
              <h2 class="subtitle has-text-light">
                Here you will find answers to frequently asked questions.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="container question">
    <div class="tabs is-centered">
      <ul>
        <li
          @click="selectedCategory = 'shopping'"
          :class="{ 'is-active': selectedCategory === 'shopping' }"
        >
          <a>Shopping on Win-Win</a>
        </li>
        <li
          @click="selectedCategory = 'selling'"
          :class="{ 'is-active': selectedCategory === 'selling' }"
        >
          <a>Selling with WIn-Win</a>
        </li>
      </ul>
    </div>
    <div class="tile is-ancestor">
      <div
        class="tile is-4 is-parent"
        v-for="question in questions"
        :key="question.index"
      >
        <router-link
          class="tile"
          :to="{ name: 'faqAnswer', params: { header: question.header } }"
        >
          <article class="tile is-child box">
            <p class="question-title is-size-6 has-text-grey-light">
              {{ question.title }}
            </p>
            <p class="subtitle">{{ question.subtitle }}</p>
          </article>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const selectedCategory = ref('shopping')

const questions = computed(() => {
  let questions = store.state.faq.faq

  return questions.filter((question) => {
    if (question.category === selectedCategory.value) {
      return question
    }
  })
})
</script>

<style lang="scss">
.hero-faq {
  .hero.is-large .hero-body {
    padding: 16em 6em;
  }
  .background-img {
    background-position: top;
  }
}
.faq {
  &-title {
    font-size: 8rem;
    letter-spacing: 1rem;
  }
}
.question {
  padding: 10em 1em;

  .box {
    background-color: transparent;
    cursor: pointer;
    &:hover {
      transition: all 0.25s ease-in-out;
      box-shadow: none;
    }
  }
}
.is-ancestor {
  flex-wrap: wrap;
}

@media screen and (max-width: 1023px) {
  .hero-faq {
    .hero.is-large .hero-body {
      padding: 8em 6em;
    }
  }
  .question {
    padding: 6em 1em;

    .tile.is-4 {
      width: 50%;
    }
  }
  .faq {
    top: 40px;
    &-title {
      font-size: 4rem;
      letter-spacing: 1rem;
    }
  }
}

@media screen and (max-width: 768px) {
  .hero-faq {
    .hero.is-large .hero-body {
      padding: 4em 4em;
    }

    .hero::after {
      bottom: 0;
    }
  }

  .question {
    .tabs li {
      font-size: 0.8rem;
    }

    .tile.is-4 {
      width: 100%;
    }
  }
}
</style>