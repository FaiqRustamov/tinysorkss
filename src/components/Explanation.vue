<template>
    <div class="container-fluid background-pic">
<div class="row">
<div class="col-md-6 left">
    <div class="desc">
<p class="question">Əl İşləri ilə məşğulsan?</p>
<h2 class="heading">O Zaman Bizə Qoşulmağa Tələs</h2>
<p>Əlavə informasiya üçün aşağıdakı butona klikləməyiniz kifayətdir</p>
<button class="btn btn-primary btn-1">Mağaza Yarat</button>
<button class="btn btn-danger">İzlə</button>
    </div>

</div>
<div class="col-md-6">
<img src="../assets/right.png" alt="">
</div>
</div>
    </div>
</template>

<script>

</script>

<style scoped>
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
.background-pic{
    margin:20px 0px;
}
button{
    font-size: 16px;
    padding: 14px 30px;
    border: none;
    margin: 10px;
}
.btn-1{
    background:#FF5252;
   
}
.left h2,p{
    text-align: center;
    color: white;
}
.left{
    background-image: url("../assets/back.png");
       background-repeat: no-repeat;
    background-size:100% 100%;

    
}
.question{
    color: #FF5252;
    font-size: 18px;

}

.heading{
    font-weight: 600;
    font-size: 24px;
    color: white;

}
.desc{
    margin: 40px;
}
</style>