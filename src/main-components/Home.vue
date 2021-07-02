<template>
  <div>
  <Header/>
  <Banner/>
  <Filter/>
  <Cards/>
  <Explanation/>
  <Feedback/>
  <Footer/>
  </div>
</template>

<script>
import Banner from "../components/Banner"
import Footer from '../components/Footer'
import Header from '../components/Header'
import Filter from '../components/Filter'
import Cards from '../components/Cards'
import Explanation from "../components/Explanation"
import Feedback from "../components/Feedback"
export default {
  components: {
    Footer,
    Header,
    Filter,
    Cards,
    Banner,
    Explanation,
    Feedback
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
.contact-class{
  color:#4E46A9;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 23px;
  line-height: 28px;
  text-align:center;
}
.formClassElement{
  background: #E36BAE;
  border-radius: 8px;
  color:white;
  border: 2px solid #E36BAE;
}
.hand{
  width:100%;
  height:100%;
}
</style>
