<template>
  <div>
  <Header/>
<Storesview/>
  <Footer/>
  </div>
</template>

<script>
import Footer from '../components/Footer'
import Header from '../components/Header'
import Storesview from '../components/Storesview'
export default {
  components: {
    Footer,
    Header,
    Storesview
  },
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
