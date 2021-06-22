<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light ">
    <div class="container">
        <a class="navbar-brand" href="#"><router-link to="/" tag="button"> <img :src="require('../assets/MainLogo.png')" alt=""></router-link></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        </ul>
        <form class="d-flex">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"> <router-link to="/" tag="button">Ana səhifə</router-link></a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#"><router-link to="/products" tag="button">Məhsullar</router-link></a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#"><router-link to="/stores" tag="button">Mağazalar</router-link></a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#"><router-link to="/about" tag="button">Haqqımızda</router-link></a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#"><router-link to="/contact" tag="button">Bizimlə əlaqə </router-link></a>
            </li>
             <li class="nav-item">
            <a class="nav-link" href="#"><router-link to="/userprofile" tag="button">Profile </router-link></a>
            </li>
          </ul>
          <div class="mine-button mine-button-bg"><a href=""><router-link to="/login" tag="button">Daxil Ol</router-link></a></div>
          <div class="mine-button mine-button-bg-q"><a href=""><router-link to="/register" tag="button">Qeydiyyat</router-link></a></div>
        </form>
        </div>
    </div>
    </nav>
  </div>
</template>

<script>
import logo from '../assets/MainLogo.png'
export default {
data() {
   return {
          logo
    }
}
}
</script>

<style scoped>
.nav-link{
  font-weight: 600;
  margin:0px 5px;

}
.mine-button{
  height:40px;
  color: white;
  padding: 8px;
  border-radius: 5px;
    margin:0px 5px;

}
.mine-button a{
  color: white!important;
  text-decoration: none;
  font-weight: 600;
}
.mine-button-bg{
background: rgb(160, 63, 205);
}
.mine-button-bg-q{
  background: orchid;
}
a{
  color:purple;
}
a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
  color:purple;
}

a:hover {
  text-decoration: none;
  color:rgb(133, 22, 129);
}

a:active {
  text-decoration: none;
}

</style>
