<template class="white">
  <v-content>
    <TopPage />
    <!--------------------------->
      <v-content style="margin-top:5%;">
        <v-layout column align-center>
          <div class="headline font-weight-medium">
            The best food blog in the market
          </div>
          <div class="subtitle ma-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </div>
        </v-layout>

      <div class="menuCards" style="margin-bottom:5%; margin-left:2%;">
        <v-layout column align-left style="margin-left:6%;">
          <div class="headline font-weight-medium">
            Featured Posts
          </div>
        </v-layout>
        <v-layout row justify-center>
          <v-hover v-slot:default="{ hover }" v-for="(item,index) in items" :key="index">
             <v-card
               width="300px"
               :elevation="hover ? 12 : 2"
               style="margin-top:2%; margin-right:2%;"
               @click="toMenu(item.itemId)"
             >
               <v-img :src="item.url" height="200px">
               </v-img>
               <v-card-title primary-title>
                  <div class="headline mb-3 green--text text--darken-4">
                    {{ item.title }}
                  </div>
                </v-card-title>
                <v-card-text>
                  <div class="subtitle text-uppercase">
                    {{ item.type }}
                  </div>
                  <div style="margin-top:5%">{{ item.description }}</div>
                </v-card-text>
              </v-card>
           </v-hover>
        </v-layout>
      </div>

      <div class="footerimage">
      <v-flex xs12 fluid>
        <v-parallax :src="imageUrl" height="170"></v-parallax>
      </v-flex>
      </div>
    </v-content>
    <!--------------------------->

  </v-content>
</template>

<script>
import TopPage from '../components/main/TopPage'

  export default {
    name: 'home',
    components: {
      TopPage
    },
    data() {
      return {
        itemId:1,
        imageUrl: 'https://ik.imagekit.io/qpt2onjfe/playground/1534351055603_0WsNgtzt5.jpeg',

        items: [
          {
            itemId:'Beef-samosa',
            url:'https://ik.imagekit.io/qpt2onjfe/playground/Tandoori_Paneer_Samosa_F3c23Ahov.jpg',
            title: 'Beef Samosa Crispy & Delicious',
            type: 'fast-food | fried | chicken',
            description:'Nec ultrices dui sapien eget. Venenatis tellus in metus vulputate.'
          },
          {
            itemId:'Dhaba-Chicken-Curry',
            url:'https://ik.imagekit.io/qpt2onjfe/playground/Dhaba-Chicken-Curry-11-05_7SVjGct1u.jpg',
            title: 'Dhaba Chicken Curry',
            type: 'homecooked | indian',
            description:'Ultricies leo integer malesuada nunc vel risus commodo.',
         },
          {
            itemId:'Sweet-hawaiian-pizza',
            url:'https://ik.imagekit.io/qpt2onjfe/playground/It-doesnt-get-much-better-than-Homemade-Hawaiian-Pizza.-Tropical-paradise-for-dinner-2_QAqKnRCmZ.jpg',
            title: 'Sweet hawaiian pizza',
            type: 'fast-food | pizza',
            description:'Ultricies leo integer malesuada nunc vel risus commodo. '
          },

          {
            itemId:'Honey-dipped-fried-chicken',
            url:'https://ik.imagekit.io/qpt2onjfe/playground/34448_sfs-north-carolina-dipped-fried-chicken-18_lJY449NzG.jpg',
            title: 'Honey dipped fried chicken',
            type: 'Homemade | fried | chicken',
            description:'Dui faucibus in ornare quam viverra orci sagittis eu volutpat.'
          }
        ]
      }
    },
    methods: {
      toMenu(menuId) {
        this.$router.push({name:'menu',params:{Pid:menuId}})
      },
  }
  }
</script>

<style scoped>
.centered-text {
  margin-top:10%;
}

</style>
