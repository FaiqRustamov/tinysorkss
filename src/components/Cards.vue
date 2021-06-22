<template>
    <div>
      <div class="container">
        <div class="row">
          <div class="col-3" v-for="item in items" :value="item.val" :key="item.id">
          <img v-bind:src="item.img" alt="">
            <h5>{{ item.name }}</h5>
            <span><img src="../assets/Vector.png" alt=""></span> <samp><img src="../assets/Vector1.png" alt=""></samp> <samp><img src="../assets/Vector2.png" alt=""></samp>
          </div>
        </div>
      </div>
    </div>
</template>
<style scoped>

</style>
<script>
export default {
    data(){
        return {
     items: {
        1: {id: 1, img: '../assets/Rectangle 76.png',name:"Taxta Fil  - 25 Azn"},
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