<template>
  <Loading v-if="isLoading"></Loading>

  <div v-else>
    <img :src="rumagadang" alt="rumagadang" width="170" class="fixed inset-0 m-auto opacity-20 z-20" id="rumagadang">

    <cover @closeCover="closeCover" v-if="showCover"></cover>

    <Content v-else></Content>

  </div>
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
  /* white-space:pre-wrap;
  margin:0;
  padding:0;
  width:100%;
  height:100% */
}

/* #app {
  position:absolute;
  width:100%;
  height:100%;
  overflow:scroll;
} */
</style>
