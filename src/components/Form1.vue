<template>
    <div class="container">
<div class="row">
<div class="col-md-6 ">
    <div class="left">
 <h4 class="acount-text">Hesabınıza daxil olun</h4>
<form>
  <div class="form-group">
    <label class="text" for="exampleInputEmail1">E-poçt:</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="E-poçtunuzu daxil edin">
  </div>
  <div class="form-group">
    <label class="text" for="exampleInputPassword1">Şifrə:</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Şifrənizi daxil edin">
  </div>
   <p class="password"> <a href="#"> </a> Şifrəni unutmusan?</p>

 <div  class="container-button">
  <button type="submit" class="btn btn-primary login-btn">Daxil ol</button>

 </div>
  <p class="register">Hesabınız yoxdur? <span><a href="#">Qeydiyyat</a></span></p>

</form>
    </div>
 
</div>
<div class="col-md-6 right ">
<img class="img-right" src="../assets/cat.png" alt="Img">
</div>
</div>
 </div>
</template>

<script>

</script>
<style scoped>
.container-button{
    display: flex;
    align-items: center;
}

input{
    border:2px solid #8A3FFC;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 12px;
    border-radius: 8px;
}
.acount-text{
    font-weight: bold;
    margin-top:20px;
}
.left{
    margin-top: 40px;
    padding: 20px;
    background: white;
    border-radius: 28px;
   height: 510px;
}

#container{
  width: 100%;
   width: 100vw;
  background-color: #8A3FFC;

}
.text{
    font-size: 20px;
}
form{
  text-align: left!important;
}
*{

  box-sizing: border-box;
}
.img-right{
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  display: block;
}
.right{
    display: flex;
    align-items: center;
}
body{
background-color: #8A3FFC;
}
.login-btn{
    padding: 6px 40px;
    border-radius: 4px;
    background-color:#9F9DF4;
    text-align: center;
    margin:26px auto;
    top: 50%;
    left: 50%;
  
    border: none;
    font-size:20px
}
.register{
    text-align: center;
        color:#857E7E;
        margin-bottom: 20px;

}
.register a{
    text-decoration: none;
    color: #24A4ED;
}
.password{
    margin-bottom: 5px;
    right: 0;
    text-align: right;
    color: #24A4ED;
    margin-top: 5px;
    margin-right: 20px;
}
.form-group{
    margin:20px;
}

@media only screen and (max-width: 326px) {
 .password{
     text-align: center;
 }
}
</style>
