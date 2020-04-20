<template>
  <div id="store">
    <h2>店舗検索</h2>
    <div class="serch">
      <input id="email" type="email" v-model="email" />
      <input type="button" value="検索" />
    </div>
    <div class="store">
      <h3>五右衛門</h3>
      <ul>
        <li  v-for="store in stores" :key="store.url">
          <img v-bind:src="store.url">
        </li>        
      </ul>
      <div class="detail">
        <h4>営業時間/11:00~19:00</h4>
        <h4>定休日/水曜日</h4>
        <h4>tel/080-1234-4567</h4>
      </div>
    </div>
  </div>
</template>


<style scoped>
.store {
  border-bottom: 1px solid #e8eaed;
}
.store h3 {
  margin-left: 70px;
  text-align: left;
}
.detail {
  margin-top: 20px;
  margin-bottom: 20px;
}
.store h4 {
  margin: 2px 2px;
  margin-left: 70px;
  text-align: left;
}
.store ul {
  margin: 0;
  display: flex;
  justify-content: flex-start;
}
.store li {
  margin: 0 30px;
  list-style-type: none;
  max-width: 100%;
  min-width: 285px;
}
</style>



<script>
export default {
  name: "store",
  data() {
    return {

      stores: [
        {
          business_hours: '',//店舗詳細もJSの配列側で設定した方が運用が楽なのではないか
          url:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Lagopus_muta_japonica_Mount_Tsubakuro.jpg/320px-Lagopus_muta_japonica_Mount_Tsubakuro.jpg"
        },
        {
          url:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Lagopus_muta_japonica_Mount_Tsubakuro.jpg/320px-Lagopus_muta_japonica_Mount_Tsubakuro.jpg"
        },
        {
          url:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Lagopus_muta_japonica_Mount_Tsubakuro.jpg/320px-Lagopus_muta_japonica_Mount_Tsubakuro.jpg"
        }
      ]
    };
  }
};
</script>