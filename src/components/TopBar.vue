<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="@/img/koparka.webp" style="width:50px;">
        <h1 class="title">KOPA-REX</h1>
      </a>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" @click="showMenuBurger(showMobileMenu)">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" :class="{ 'show-burger': showMobileMenu }">
      <div class="navbar-start">
        <div class="navbar-start">
          <RouterLink class="navbar-item" to="/">O nas</RouterLink>
          <RouterLink class="navbar-item" to="/jak-pracujemy">Jak pracujemy</RouterLink>
          <RouterLink class="navbar-item" to="/nasz-sprzet">Nasz sprzęt</RouterLink>
          <RouterLink class="navbar-item" to="/kontakt">Kontakt</RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TopBar",
  data() {
    return {
      showMobileMenu: false
    }
  },

  methods: {
    showMenuBurger(state) {
      this.showMobileMenu = !state
      console.log(this.showMobileMenu)
    }
  }
}
</script>

<style scoped>
.navbar-item img {
  max-height: unset;
}

.navbar-item:hover {
  color: black;
}

.show-burger {
  display: block;
}

.title {
  margin-left: 15px;
}
</style>