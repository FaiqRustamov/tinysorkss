<template>
    <div class="container-fluid banner">
        <div class="row  " >
        <div class="col-6">
        </div>
        <div class="col-6">
        <h1 class="title">Tinyworks</h1>
        <p class="text-about">startup-ının məqsədi əl işləri ilə məşğul olan şəxsləri vahid bir platformada cəmləməkdir.</p>
        </div>
        </div>
    </div>
</template>

<script>


</script>

<style scoped>
.banner{
    background-image: url('../assets/banner.png');
    background-repeat: no-repeat;
    background-size:100% 100%;
    height:500px;
    margin-bottom:90px;
}
.title{
    margin-top:30px;
    text-align: left;
    color: #FF5252;
    font-family:'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 36px;
}
.text-about{
    font-weight: 600;
    color: white;
    text-align: left;
    font-size: 36px;
}
@media only screen and (max-width: 600px) {
  .title{
      font-size: 24px;
  }
  .text-about{
      font-size: 30px;
  }
  .navbar-light .navbar-toggler {
    color: purple !important;
   
}
}
@media only screen and (max-width: 375px) {
.text-about{
    font-size: 21px;
}
}

</style>