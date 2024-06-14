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
