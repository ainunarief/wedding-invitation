<template>
  <Loading v-if="isLoading"></Loading>

  <template v-else>
    <img :src="rumagadang" alt="rumagadang" width="170" class="fixed-elements fixed inset-0 m-auto opacity-20 z-20" id="rumagadang">

    <cover @closeCover="closeCover" v-if="showCover"></cover>

    <Content v-else></Content>

  </template>
</template>

<script>
  import Loading from './Loading.vue';
  import Cover from './Cover.vue';
  import Content from './Content.vue';

  export default {
    components:{
      Loading,
      Cover,
      Content
    },

    data() {
      return {
        isLoading: true,
        rumagadang: new URL('./assets/rumagadang.png', import.meta.url).href,
        showCover: true,
       
      }
    },

    mounted(){
      setTimeout(()=>{
        this.isLoading = false
      },2500)

      console.log(window.devicePixelRatio);

      // let viewport = document.querySelector("meta[name=viewport]");

      // document.querySelector("meta[name=viewport]").setAttribute('content', 'width=device-width, initial-scale='+(1/window.devicePixelRatio)+', maximum-scale=1.0, user-scalable=0');
      // document.body.style.zoom = (1 / window.devicePixelRatio);

      // if(window.devicePixelRatio = 1.5){
      //   console.log('tul');
        
      //   if(!viewport){
      //     viewport = document.createElement('meta');
      //     viewport.name = "viewport";
      //     document.getElementsByTagName('head')[0].appendChild(viewport);
      //   }

      //   const content = "width=device-width, initial-scale=0.5, user-scalable=no"
      //   viewport.setAttribute('content', content);
      //   var scale = 'scale(0.75)';
      //   document.body.style.webkitTransform =  scale;    // Chrome, Opera, Safari
      //   document.body.style.msTransform =   scale;       // IE 9
      //   document.body.style.transform = scale;  
      // }

      // document.body.style.zoom = "100%"
      // var scale = 'scale(1)';
      // document.body.style.webkitTransform =  scale;    // Chrome, Opera, Safari
      // document.body.style.msTransform =   scale;       // IE 9
      // document.body.style.transform = scale;    
     
      // document.addEventListener("keydown", function (e) {
      //   if (
      //     e.ctrlKey &&
      //     (e.keyCode == "61" ||
      //       e.keyCode == "107" ||
      //       e.keyCode == "173" ||
      //       e.keyCode == "109" ||
      //       e.keyCode == "187" ||
      //       e.keyCode == "189")
      //   ) {
      //     e.preventDefault();
      //   }
      // });

      // document.addEventListener(
      //   "wheel", 
      //   function (e) {
      //     if (e.ctrlKey) {
      //       e.preventDefault();
      //     }
      //   },
      //   {
      //     passive: false
      //   }
      // );
    },

    methods:{
      closeCover(){
        this.showCover = false
      },

      
    }
  }
</script>

<style>
html {
  scroll-behavior: smooth;
}

.name{
    font-family: 'Dancing Script', serif;
}

body {
  @apply bg-blue-lightest;
  margin: 0;
  padding: 0;
}

:root {
      zoom: reset;
     color-scheme: light only;
}

@media (prefers-color-scheme: dark) {
  body {
    @apply bg-blue-lightest;
  }
}

/* @media(-webkit-device-pixel-ratio: 1.25) {
  body {
    zoom: 0.8;
  }
}

@media(-webkit-device-pixel-ratio: 1.5) {
  body {
    zoom: 0.6667;
  }
}

@media(-webkit-device-pixel-ratio: 1.75) {
  body {
    zoom: 0.571;
  }
} */
/* 
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #A95576;
  border-radius: 10px;
} */

</style>
