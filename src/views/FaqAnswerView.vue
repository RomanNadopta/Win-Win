<template>
  <section
    class="container breadcrump-container"
    v-for="article in articles"
    :key="article.index"
  >
    <nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
      <ul>
        <li><router-link :to="{ name: 'faq' }">Back to FAQ</router-link></li>
        <li class="is-active">
          <a>{{ article.title }}</a>
        </li>
      </ul>
    </nav>
  </section>
  <section class="container answer-container">
    <div
      class="content answer-content"
      v-for="article in articles"
      :key="article.index"
    >
      <div v-for="answer in article.answers" :key="answer.index">
        <div class="first-level">
          <h1 class="is-size-4-mobile has-text-centered-mobile">
            {{ article.subtitle }}
          </h1>
          <div
            class="content"
            v-for="firstLevel in answer.firstLevel"
            :key="firstLevel"
          >
            <h3
              class="is-size-5-mobile has-text-centered-mobile"
              v-if="firstLevel.subtitle"
              v-html="firstLevel.subtitle"
            ></h3>
            <div v-if="firstLevel.paragraphs">
              <p
                v-for="paragraph in firstLevel.paragraphs"
                :key="paragraph.index"
                v-html="paragraph"
              ></p>
            </div>

            <ol v-if="firstLevel.numList" type="1">
              <li
                v-for="listItem in firstLevel.numList"
                :key="listItem.index"
                v-html="listItem"
              ></li>
            </ol>

            <ul v-if="firstLevel.list">
              <li
                :class="{ 'pt-4': firstLevel.listPadding }"
                v-for="listItem in firstLevel.list"
                :key="listItem.index"
                v-html="listItem"
              ></li>
            </ul>

            <div v-if="firstLevel.dropdown">
              <div
                v-for="dropdownItem in firstLevel.dropdown"
                :key="dropdownItem.index"
              >
                <div class="dropdown-trigger">
                  <button
                    class="button is-rounded dropdown-button"
                    @click="dropdownItem.isOpen = !dropdownItem.isOpen"
                  >
                    <strong>{{ dropdownItem.dropdownName }}</strong>
                    <span class="icon">
                      <font-awesome-icon
                        class="rotate-angle-down"
                        icon="fa-angle-up"
                        v-if="dropdownItem.isOpen"
                      />
                      <font-awesome-icon
                        class="rotate-angle-up"
                        icon="fa-angle-up"
                        v-else
                      />
                    </span>
                  </button>
                </div>
                <div v-if="dropdownItem.isOpen">
                  <div v-if="dropdownItem.dropdownParagraphs">
                    <p
                      v-for="paragraph in dropdownItem.dropdownParagraphs"
                      :key="paragraph.index"
                      v-html="paragraph"
                    ></p>
                  </div>
                  <ol v-if="dropdownItem.dropdownList">
                    <li
                      v-for="listItem in dropdownItem.dropdownList"
                      :key="listItem.index"
                      v-html="listItem"
                    ></li>
                  </ol>
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
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

const route = useRoute()
const store = useStore()

const articles = computed(() => {
  const article = store.state.faq.faq
  const { header } = route.params

  return article.filter((item) => {
    if (item.header === header) {
      return item
    }
  })
})
</script>

<style lang="scss">
.breadcrumb {
  padding-top: 10em;
}

.answer-container {
  display: flex;
  justify-content: center;
}

.answer-content {
  padding: 4em 1em;
  width: 60%;
}
.sup-bg {
  padding: 0 5px;

  border-radius: 20px;
}
.star-seller {
  padding-left: 4px;
  color: purple;

  text-decoration: underline dashed;
}
.star-seller-icon {
  display: inline-block;
  height: 16px;
  padding: 4px;
  color: white;
  background-color: purple;
  border-radius: 50%;
}
.fa-truck,
.fa-gifts,
.fa-hourglass-half {
  height: 30px;
}
.dropdown-button {
  margin-top: 30px;
  background: transparent;
  border: none;
}

.dropdown-button .icon:last-child:not(:first-child) {
  margin-top: 0.3em;
}

.dropdown-button:hover {
  background: #d3d3d3;

  transition: all 0.3s ease-in-out;
}
.rotate-angle-up {
  animation: rotation 0.5s ease-in-out;
  transform: rotate(180deg);
}

.rotate-angle-down {
  animation: rotation-reverse 0.5s ease-out;
  transform: rotate(0deg);
}

.content ul.list-circle {
  list-style: circle outside;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
}

@keyframes rotation-reverse {
  0% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@media screen and (max-width: 1023px) {
  .breadcrump-container {
    width: 60%;
    padding: 0 1em;
  }
}

@media screen and (max-width: 768px) {
  .breadcrump-container {
    width: 100%;
    padding: 0 1em;

    .breadcrumb {
      white-space: break-spaces;
    }
  }

  .answer-content {
    padding: 4em 1em;
    width: 100%;
  }
}
</style>