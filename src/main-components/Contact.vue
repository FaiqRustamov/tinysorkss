<template>
<div>

<Header/>
  <div class="container">
 <div class="row">
<div class="col-md-6 left"> 
<img class="img-left" src="../assets/contact.png" alt="">
</div>
<div class="col-md-6">
<p class="text-1">
  Sualınız, təklifiniz vəya iradınız var ?
</p>
<p class="text-2">
  Gəlin birlikdə həll edək!
</p>
   <div class="social-accounts">
<i class="fab fa-instagram-square"></i>
<i class="fab fa-facebook-square"></i>
<i class="fab fa-linkedin"></i>
<i class="fab fa-twitter-square"></i>
    </div>

</div>
 </div>
  </div>
  <Footer/>
</div>
</template>

<script>
import Footer from  '../components/Footer'
import Header from '../components/Header'

export default{
  components:{
    Header,
    Footer
  }
}
</script>

<style scoped>
*{
  margin:0px;
  padding: 0px;
  box-sizing: border-box;
}
.left{
  padding:20px;
  margin-bottom: 20px;
}
.img-left{
  width: 100%;
  height:100%;
  
}
.fab{
    color:#6C63FF;
    font-size: 36px;
    margin:0px 5px;
}
.text-1{
  color:#CD3EFF;
  font-size: 36px;
  font-weight: bold;

}
.text-2{
  color:#4E46A9;
  font-size: 36px;
  font-weight: bold;
}
</style>
