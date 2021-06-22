<template>
  <div>
  <Header/>
  <Storeview/>
  <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import Storeview from '../components/Storeview.vue'
export default {
components:{
  Header,
  Footer,
  Storeview
}
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
