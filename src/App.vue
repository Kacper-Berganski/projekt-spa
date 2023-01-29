<script setup>
import {RouterLink, RouterView} from 'vue-router'
import TopBar from "@/components/TopBar.vue";

</script>
<template>
  <div>
    <TopBar/>
  </div>
  <div>
    <RouterView/>
    <section id="contact" class="contact py-5">

      <div class="container">
        <div class="contact-us">
          <div class="contact-item">
            <h2>główna siedziba</h2>
            <p>ul. Leśna 9</p>
            <p>80-007 Gdynia</p>
            <p>+48 120 360 930</p>
            <p>kopa-rex@gmail.com</p>
          </div>

          <div class="contact-item">
            <h2 class="social-media-title">social media</h2>
            <div class="social-media">
              <a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a>
              <a href="https://twitter.com/?lang=pl" target="_blank"><i class="fab fa-twitter"></i></a>
              <a href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          <div class="contact-item">
            <h2>siedziba w warszawie</h2>
            <p>ul. Polna 172</p>
            <p>90-460 warszawa</p>
            <p>+48 123 456 789</p>
            <p>kopa-rex.w@gmail.pl</p>
          </div>
        </div>
      </div>

      <div class="contact-shadow"></div>
    </section>

    <footer>
      <p class="footer-title">&copy; 2023 | Kacper Bergański</p>
    </footer>
  </div>
</template>

<style>
img {
  width: 60px;
  height: 60px;
}

.contact-title {
  font-size: 1.5rem;
}

.social-media-title {
  margin-bottom: 0.8rem;
}

.contact-us {
  font-size: 1.1rem;
  text-align: center;
  justify-content: space-between;
}

footer {
  background-color: rgb(34, 34, 34);
  color: #fff;
  padding: 0.7rem;
  text-align: center;
}

#social {
  display: flex;
}

#social a {
  color: #fff;
  font-size: 2em;
  margin-right: 0.5em;
  text-decoration: none;
}

#contact-info p {
  margin: 0;
}

@media (max-width: 420px) {
  .contact-us {
    display: block;
    font-size: .8rem;
    margin: 0 5px;
  }
}

</style>
