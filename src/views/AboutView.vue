<template>
  <section class="page-wrapper">
    <div class="container about">
      <h1
        class="about-title is-size-1 is-size-2-mobile has-text-centered-mobile is-uppercase"
      >
        About Project
      </h1>
      <div class="about-project">
        <div class="about-article">
          <p class="is-size-5 is-size-6-mobile">Example Project</p>
          <p class="is-size-5 is-size-6-mobile">
            <span class="first-letter">A</span>fter completing an online course
            on VueJS, I wrote this project to demonstrate my knowledge. So,
            Win-Win is a SPA where you can register, create your cards with
            things, exchange them with other users, as well as sell and buy. The
            things that surround us tell a lot about our hobbies, preferences
            and our personality.
          </p>
          <p class="is-size-5 is-size-6-mobile">
            This is a flea market where you can get rid of things you don't need
            that take up extra space in your house, or things of your husband or
            wife. Imagine how happy your husband will be when he comes home from
            work and sees your car in the garage instead of next to it. You know
            what I'm talking about, especially if he collected those things for
            years in the garage :) Maybe you always get gifts that you don't
            like, it's a good opportunity to exchange them for something useful.
          </p>
          <p class="is-size-5 is-size-6-mobile">
            Our goal is to save you time and money and help you find what you're
            looking for, as long as it's not illegal of course :)
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1482304651556-cb27a6fb596a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2016&q=80"
          alt="Flea Market"
        />
      </div>
      <div class="about-me"></div>
      <h1
        class="about-title is-size-1 is-size-2-mobile has-text-centered-mobile is-uppercase"
      >
        About Me
      </h1>
      <div class="about-me-article">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/exchange-gallery-4ee55.appspot.com/o/about.jpg?alt=media&token=bd3467ab-23ef-4648-a16c-c9721e49e424"
          alt=""
        />
        <div class="about-me-text">
          <h3>Hi, I'm Roman Nadopta</h3>
          <p class="is-size-5 is-size-6-mobile">
            <span class="first-letter">W</span>hen I graduated from university,
            it became apparent just how much there still was to learn.
            Traditional education had given me specialised knowledge but hadn't
            set me up with the skills needed to succeed in an environment of
            constant change.
          </p>
          <p class="is-size-5 is-size-6-mobile">
            We currently live in an age where information from around the world
            is at our fingertips. However, sifting through the noise to uncover
            genuine knowledge and understanding that can be applied to both life
            and work can prove exceedingly challenging. Over the years, I've
            gained valuable insights through extensive research and engaging in
            conversations with experts in a variety of fields, ranging from IT
            and technology to psychology and business.
          </p>
          <p class="is-size-5 is-size-6-mobile">
            I opted for a career in the IT industry because it's more than just
            a job for me; it's a way of life. I take great pleasure in
            continually expanding my knowledge and acquiring fresh skills that I
            can put into practice in my daily life.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="social">
    <div class="social-background"></div>
    <div class="social-block has-text-centered parallax">
      <h2 class="social-title">Get in touch with me!</h2>
      <p class="is-size-2-desktop is-size-4-tablet is-size-5-mobile">
        I look forward to working on exciting projects and growing within a
        friendly team! <br />
        Here are my contact details: <br />
        <span class="my-email"> Email: romannadopta@gmail.com</span>
      </p>
      <div class="social-icons">
        <a
          href="https://www.facebook.com/roman.nadopta"
          class="social-icon"
          target="_blank"
          title="Facebook"
        >
          <font-awesome-icon
            class="social-icon-brand"
            :icon="['fab', 'facebook']"
          />
        </a>
        <a
          href="www.linkedin.com/in/roman-nadopta-a53525174"
          class="social-icon"
          target="_blank"
          title="LinkedIn"
        >
          <font-awesome-icon
            class="social-icon-brand"
            :icon="['fab', 'linkedin']"
          />
        </a>
        <a
          href="https://t.me/roman_nadopta"
          class="social-icon"
          target="_blank"
          title="Telegram"
        >
          <font-awesome-icon
            class="social-icon-brand"
            :icon="['fab', 'telegram']"
          />
        </a>
        <a
          href="https://Instagram.com/romannadopta"
          class="social-icon"
          target="_blank"
          title="Instagram"
        >
          <font-awesome-icon
            class="social-icon-brand"
            :icon="['fab', 'square-instagram']"
          />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const getImageUrl = (name, ext) => {
  const path = new URL(`../assets/images/${name}.${ext}`, import.meta.url).href
  return path
}
</script>

<style lang="scss">
.about {
  padding: 16em 1em;

  &-title {
    padding-bottom: 20px;
  }

  p {
    font-family: 'Raleway';
  }

  &-project {
    display: flex;

    img {
      width: 50%;
    }
  }

  &-article {
    width: 50%;
    p {
      padding-right: 40px;
    }
  }
}

.about-me {
  padding-top: 16em;

  &-article {
    display: flex;
    width: 100%;

    img {
      padding-right: 40px;
    }
  }
}
.about-project p:not(:nth-child(1)),
.about-me-article p:not(:nth-child(1)) {
  padding-top: 10px;
}

.social {
  position: relative;

  &-background {
    position: absolute;
    width: 100%;
    height: 100%;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(to bottom right, #ffbc8c, #599eed);
    mix-blend-mode: multiply;
  }

  &-block {
    background-attachment: fixed;
    background-position: center;
    background-size: cover;

    width: 100%;
    color: #cccccc;
    display: flex;
    flex-direction: column;
    justify-content: center center;

    p {
      margin: 75px auto;
      width: 48%;

      z-index: 1;
    }
  }

  &-title {
    padding-top: 80px;

    font-size: 60px;
    text-transform: capitalize;
    z-index: 1;
  }

  &-icons {
    z-index: 1;
    padding-bottom: 80px;
    padding-left: 36px;
  }

  &-icon {
    margin-right: 40px;
    color: #ffff;
    &:hover {
      color: #ff9800;
    }

    &-brand {
      height: 40px;
    }
  }
}

.my-email {
  font-size: 20px;
  color: #ff9800;
}

.parallax {
  background-color: #404765;
  background-image: url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80');
}

.first-letter {
  font-weight: 800;
  color: #ff9800;
}

@media screen and (max-width: 1023px) {
  .about {
    padding: 10em 1em;

    &-project {
      flex-direction: column;
      img {
        width: 100%;

        order: 1;
      }
    }
    &-article {
      width: 100%;

      order: 2;
      p {
        padding-right: 0px;
        padding-top: 20px;
      }
    }
  }

  .about-me {
    padding-top: 10em;

    &-article {
      flex-direction: column;
      img {
        padding-right: 0px;
      }
    }
    &-text {
      h3 {
        padding-top: 32px;
      }
    }
  }

  .social {
    &-title {
      font-size: 40px;
    }

    &-block {
      p {
        margin: 50px auto;
      }
    }

    &-icon {
      &-brand {
        height: 36px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .about {
    padding: 6em 1em;
  }

  .about-me {
    padding-top: 6em;
  }

  .social {
    &-title {
      font-size: 30px;
      width: 70%;
      margin: 0 auto;
    }

    &-block {
      p {
        margin: 40px auto;
        width: 84%;
      }
    }
  }
  .my-email {
    font-size: 16px;
  }
}
</style>
