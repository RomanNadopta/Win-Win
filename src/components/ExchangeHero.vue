<template>
  <div class="hero-section">
    <section class="hero background-img is-large">
      <video
        src="https://firebasestorage.googleapis.com/v0/b/exchange-gallery-4ee55.appspot.com/o/video%2Fvideo_hero.mp4?alt=media&token=95ca8056-a6de-4f65-bc7b-90f1352cfebd"
        type="video/mp4"
        id="background-video"
        autoplay
        muted
        loop
        playsinline
        poster="https://images.unsplash.com/photo-1517457210348-703079e57d4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
      ></video>
      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-size-1 is-size-3-mobile has-text-white">
            Let's Exchange!
          </h1>
          <h2 class="subtitle has-text-light">
            Products and Services we can exchange together
          </h2>
        </div>
      </div>
    </section>
  </div>
</template>


<style lang="scss">
.hero-section {
  position: relative;
}
.hero {
  z-index: 1;
}

#background-video {
  width: 100vw;
  height: 100%;
  object-fit: cover;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.search-card-find {
  width: 100%;
  height: 180px;
  position: relative;
  display: block;
  border-radius: 3px;
  text-decoration: none;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.05);
  background-clip: content-box;
  background-size: cover;
  background-position: 50% 20%;
  border: 1px solid rgba(0, 0, 0, 0.12);
  -webkit-tap-highlight-color: transparent;
  &-interest {
    position: absolute;
    bottom: 12px;
    right: 12px;
    > p {
      font-weight: bold;
    }
  }
  .title {
    color: white;
  }
  .subtitle {
    color: white;
  }
  &-content {
    &-date {
      margin: 10px;
      width: 70px;
      text-align: center;
      border-radius: 50%;
      .day {
        display: block;
        font-size: 21px;
        color: white;
        font-weight: bold;
      }
      .month {
        display: block;
        color: #ff5050;
        font-weight: bold;
        font-size: 23px;
        margin-bottom: -5px;
      }
    }
    &-info {
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 15px;
      width: 100%;
    }
  }
}
@media only screen and (max-width: 768px) {
  #background-video {
    height: 80%;
  }
  .hero::after {
    bottom: 20%;
  }
}
@media only screen and (min-width: 770px) and (max-width: 1023px) {
  .hero.is-large .hero-body {
    padding: 10em 6em;
  }
}
</style>