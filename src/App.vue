<template>
  <div id="app">
    <header>
      <router-link to="/">You </router-link>
      <nav>
        <ul>
          <li>
            <router-link to="/" class="header-item">nav01</router-link>
          </li>
          <li>
            <router-link to="/story" class="header-item">店舗一覧</router-link>
          </li>
          <li>
            <router-link to="/service" class="header-item">サービス</router-link>
          </li>
          <li>
            <router-link to="#" class="header-item">nav04</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}
header {
  margin: 10px;
  padding: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #e8eaed;
}
header .logo {
  padding: 10px 20px;
}
nav ul {
  margin: 0;
  display: flex;
}
nav li {
  margin: 0 30px;
  list-style-type: none;
  max-width: 10px;
  min-width: 70px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
