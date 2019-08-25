<template>
 <v-content>
   <div class="view-details" v-for="(item,index) in items" :key="index">
     <v-layout v-if="menuId == item.itemId">
      <v-flex xs12 fluid>
        <v-img :src="item.url" height="300">
          <v-content>
           <router-link to="/" class="link">
          <v-btn color="transparent" class="elevation-0 font-weight-bold" dark>
        
          Go back home
          </v-btn>
        </router-link>
            <img/>
          </v-content>
        </v-img>
        <v-layout column align-center py-4>
           <div class='display-1 font-weight-medium '>
            {{ item.title }}
           </div>
        </v-layout>
    <v-layout column>
        <v-flex xs10 md4 ma-4>
          <v-layout column text-xs-left style="margin-left:2%">
            <div class="title">
              {{ item. articleTitle }}
            </div>
              <div class="subtitle">
                {{ item.articleText }}
              </div>
           </v-layout>
        </v-flex>
        <v-flex xs10 md4 ma-4>
          <v-layout column align-center>
            <iframe width="650" height="415" :src="item.video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
          </v-layout>
        </v-flex>
      </v-layout>
          </v-flex>
        </v-layout>
   </div>
 </v-content>
</template>

<script>
 export default{
  name:'menu',
  data(){
   return{
    menuId:this.$route.params.Pid,
     items: [
          {
            itemId:'Beef-samosa',
            url:'https://ik.imagekit.io/qpt2onjfe/playground/Tandoori_Paneer_Samosa_F3c23Ahov.jpg',
            title: 'Beef Samosa Crispy & Delicious',
            type: 'fast-food | fried | chicken',
            description:'Nec ultrices dui sapien eget. Venenatis tellus in metus vulputate.',
            articleTitle:'What is a samosa?',
            articleText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum curabitur vitae nunc sed. In aliquam sem fringilla ut morbi tincidunt. Sit amet risus nullam eget felis. Duis ultricies lacus sed turpis.',
            video:'https://www.youtube-nocookie.com/embed/jfVExMc75FI'
          },

          {
            itemId:'Sweet-hawaiian-pizza',
            url:'https://ik.imagekit.io/qpt2onjfe/playground/It-doesnt-get-much-better-than-Homemade-Hawaiian-Pizza.-Tropical-paradise-for-dinner-2_QAqKnRCmZ.jpg',
            title: 'Sweet hawaiian pizza',
            type: 'fast-food | pizza',
            description:'Ultricies leo integer malesuada nunc vel risus commodo.',
            articleTitle:'What is a samosa?',
            articleText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum curabitur vitae nunc sed. In aliquam sem fringilla ut morbi tincidunt. Sit amet risus nullam eget felis. Duis ultricies lacus sed turpis.',
            video:'https://www.youtube-nocookie.com/embed/jfVExMc75FI'
          },
          {
            itemId:'Dhaba-Chicken-Curry',
            url:'https://ik.imagekit.io/qpt2onjfe/playground/Dhaba-Chicken-Curry-11-05_7SVjGct1u.jpg',
            title: 'Dhaba Chicken Curry',
            type: 'homecooked | indian',
            description:'Ultricies leo integer malesuada nunc vel risus commodo.',
            articleTitle:'Making the best chicken curry chicken?',
            articleText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum curabitur vitae nunc sed. In aliquam sem fringilla ut morbi tincidunt. Sit amet risus nullam eget felis. Duis ultricies lacus sed turpis.',
            video:'https://www.youtube.com/embed/m-CRY9fHn7o'
          },
          {
            itemId:'Honey-dipped-fried-chicken',
            url:'https://ik.imagekit.io/qpt2onjfe/playground/34448_sfs-north-carolina-dipped-fried-chicken-18_lJY449NzG.jpg',
            title: 'Honey dipped fried chicken',
            type: 'Homemade | fried | chicken',
            description:'Dui faucibus in ornare quam viverra orci sagittis eu volutpat.',
            articleTitle:'Making the best chicken curry chicken?',
            articleText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum curabitur vitae nunc sed. In aliquam sem fringilla ut morbi tincidunt. Sit amet risus nullam eget felis. Duis ultricies lacus sed turpis.',
            video:'https://www.youtube.com/embed/XrNZGgxjxCc'
          }
        ]
     }
  }
}
</script>

<style>
.link {
  text-decoration: none;
}
</style>
