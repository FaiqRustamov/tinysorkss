<template>
    <div>
      <div class="container">
        <div class="row">
          <div class="col-md-3" v-for="item in items" :value="item.val" :key="item.id">
          <img v-bind:src="item.img" alt="">
            <h5>{{ item.name }}</h5>
          
              <div class="text-center footer-social  col-md-4 mb-4 mb-md-0 ">
  
          <ul class="list-unstyled mb-0 grid-columfooter-icon " >
            <li style="margin-left:0px;margin-right: 0px !important;" >
              <a href="https://www.facebook.com/faaorg/" class="bottom-picture text-dark"><i  class="fab fa-facebook-f"></i></a>
            </li>
            <li style="margin-left:0x;margin-right: 0px !important;">
              <a href="https://twitter.com/faa_us" class="text-dark"><i  class="fab fa-twitter"></i></a>
            </li>
            <li style="margin-left:0px;margin-right: 0px !important;">
              <a href="https://www.linkedin.com/company/faa-us-org" class="text-dark"><i  class="fab fa-linkedin"></i></a>
            </li>
            <li style="margin-left:0px;margin-right: 0px !important;">
              <a href="mailto:contact@faa-us.org" class="text-dark"> <i class="fas fa-envelope"></i></a>
            </li>
          </ul>
        </div>
        <!--   <span><img src="../assets/Vector.png" alt=""></span> <samp><img src="../assets/Vector1.png" alt=""></samp> <samp><img src="../assets/Vector2.png" alt=""></samp> -->
          </div>
        </div>
      </div>
    </div>
</template>
<style scoped>
 #stay-in-touch{
      margin-bottom: 24px;
      font-weight: 600;
      text-align: center;
    }
    
.grid-columfooter-icon {
        display: inline-flex;
      }
      .grid-columfooter-icon>li>a{
        padding: 0 22px;
      }

      .copyright-text{
        margin-top: 90px;
      }
      .fab, .fas{
        font-size: 20px;
      }
i{
      color: purple;
    font-size: 36px;
    margin: 0px 5px;
}
</style>
<script>
export default {
    data(){
        return {
     items: {
        1: {id: 1, img: './Rectangle 76.png',name:"Taxta Fil  - 25 Azn"},
        2: {id: 2, img: 'item1',name:"Oyuncaq Zürafə  - 12 Azn"},
        3: {id: 3,img: 'item1',name:"Taxta Fil  - 25 Azn  "},
        4: {id: 4, img: 'item1',name:"Oyuncaq Zürafə  - 12 Azn  "},
        5: {id: 5, img: 'item1',name:"Taxta Fil  - 25 Azn"},
        6: {id: 6, img: 'item1',name:"Oyuncaq Zürafə  - 12 Azn"},
        7: {id: 7,img: 'item1',name:"Oyuncaq Zürafə  - 12 Azn"},
        8: {id: 8,img: 'item1',name:"Taxta Fil  - 25 Azn"},
        9: {id: 9, img: 'item1',name:"Oyuncaq Zürafə  - 12 Azn"},
        10: {id:10,img: 'item1',name:"Oyuncaq Zürafə  - 12 Azn"},
        11: {id:11,img: 'item1',name:"Taxta Fil  - 25 Azn"},
        12: {id:12,img: 'item1',name:"Oyuncaq Zürafə  - 12 Azn"},
       }
        }
    }
}
</script>