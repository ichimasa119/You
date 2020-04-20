<template>
  <div id="app">
    <h1>ご自宅でお店の味を、すべての方に。</h1>
    <button @click="nextSlide">Next</button>
    <transition name="slide" mode="out-in">
      <p :key="products[product]">{{ products[product]}}</p>
    </transition>
    <button @click="offTimer">{{ btnString }}</button>
    <p> {{ this.timer }}</p>
    <p>{{ product }}</p>
  </div>
</template>


<style scoped>
.slide-enter-active, .slide-leave-active {
  transition: transform .5s
}
.slide-enter {
  transform: translateX(300px)
}
.slide-leave-active {
  transform: translateX(-300px)
}
.p {
  position: absolute;
  margin: 0;
  font-size: 3em;
}
</style>

<script>
export default {
  name: "app",
  data() {
    return {
      product: 0,
      products: ["画像1", "画像2", "画像3", "画像4", "画像5", "画像6"],
      timer: null
    };
  },
  computed: {
    btnString() {
      return this.timer === null ? "Move" : "Stop";
    }
  },
  mounted() {
    this.onTimer();
  },
  methods: {
    nextSlide() {
      this.product = this.product < this.products.length - 1 ? this.product += 1: 0;
    },
    onTimer() {
      this.timer = setInterval(() => {
        this.nextSlide();
      }, 2000)
    },
    offTimer() {
      if(this.timer === null) {
        this.onTimer();
      }else {
        clearInterval(this.timer);
        this.timer = null;
      }
    }
  }
};
</script>