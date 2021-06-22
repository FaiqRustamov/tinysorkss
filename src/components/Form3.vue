<template>
    <div class="container">
<div class="row">
<div class="col-md-6 ">
    <div class="left">
 <h4 class="acount-text">Mağazanın Qeydiyyatı:</h4>
<form>
    <div class="form-group">
 <label class="text" for="exampleInputEmail1">Mağazanın adı:</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="E-poçtunuzu daxil edin">
  </div>
   <div class="form-group">
 <label class="text" for="exampleInputEmail1">Nömrəniz:</label>
 <input  type="tel"  placeholder=" 345 678 2910" class="form-control" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}">
  </div>
   <div class="form-group">
 <label class="text" for="exampleInputEmail1">İnstagram ünvanınız:</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Hesabınız">
  </div>
   <div class="form-group">
   <label class="btn btn-default photo">
    Logo Əlavə et <input type="file" hidden>
</label>
  </div>

  
   <div class="form-group">
               <a class="cond" href="#">Satıcı Sözləşməsi</a>

    <div class="form-check">
      <input class="form-check-input terms" type="checkbox" value="" id="invalidCheck2" required>
      <label class="form-check-label " for="invalidCheck2">
       Razıyam
      </label>
    </div>
  </div>
 <div  class="container-button">
  <button type="submit" class="btn btn-primary register-btn">Qeydiyyat</button>

 </div>
  <p class="register"><a href="#">Geriyə</a></p>

</form>
    </div>
 
</div>
<div class="col-md-6 right ">
<img class="img-right" src="../assets/magazin.png" alt="Img">
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
   height: auto;
}

#container{
  width: 100%;
   width: 100vw;
  background-color: #8A3FFC;

}
.terms{
    padding-top:0px;
    padding-bottom:0px;
}
.cond{
    text-decoration: none;
    color: #24A4ED;
  display: inline-block ;
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
.register-btn{
    padding: 6px 40px;
    border-radius: 4px;
    background-color:#E36BAE;
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
    color: #4E46A9;
    font-weight: 600;
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
.photo{
    font-size: 20px;
    background: #4E46A9;
    color: white;
}
[hidden] {
  display: none !important;
}
.form-check{
    display: inline-block;
    padding: 0px 30px;
}
</style>
