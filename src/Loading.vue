<template>
    <div class="fixed z-50 bg-blue-lightest h-dvh w-full flex flex-col justify-center items-center">   
        <Vue3Lottie :animationData="heart" :height="160" :width="160" />

        <div id="loving" class="text-slate-500 text-3xl font-semibold text-blue-darkest">Loving...</div>
    </div>
</template>

<script>
import { Vue3Lottie } from 'vue3-lottie'

import heart from './assets/heart.json'

export default {
  components: {
    Vue3Lottie,
  },

  data() {
    return {
        heart,
    }
  },
}
</script>

<style scoped>
#loving{
    font-family: 'Dancing Script', serif;
}

#base{
	-webkit-transform-style:preserve-3d;   
  position:absolute;
  top:50%;
  left:50%;
  height:100px;
  width:100px;
  background-color:black;
  -webkit-transform : translate(-50%,-50%) rotateX(90deg);
  -webkit-animation : anim 3s infinite linear;
}
@-webkit-keyframes anim {
  0%{-webkit-transform : translate(-50%,-50%) rotateX(90deg) rotateZ(0deg);}
  15%{-webkit-transform : translate(-50%,-50%) rotateX(90deg) rotateZ(0deg);}
  25%{-webkit-transform : translate(-50%,-50%) rotateX(90deg) rotateZ(90deg);}
  40%{-webkit-transform : translate(-50%,-50%) rotateX(90deg) rotateZ(90deg);}
  50%{-webkit-transform : translate(-50%,-50%) rotateX(90deg) rotateZ(180deg);}
  65%{-webkit-transform : translate(-50%,-50%) rotateX(90deg) rotateZ(180deg);}
   75%{-webkit-transform : translate(-50%,-50%) rotateX(90deg) rotateZ(270deg);}
  90%{-webkit-transform : translate(-50%,-50%) rotateX(90deg) rotateZ(270deg);}
 100%{-webkit-transform : translate(-50%,-50%) rotateX(90deg) rotateZ(360deg);}
}

.f11{
	
	position: absolute;
	left:50%;
  top:50%;
	height:70px;
	width:32px;
	overflow:hidden;
	-webkit-transform-style:preserve-3d;
  -webkit-transform-origin: 0 50%;
  -webkit-transform: translate(0%,-50%) rotateX(-90deg);
}

.f11:after{
	content:"";
	position:absolute;
	left:-15px;
	border-top-left-radius:30px;
	border-top-right-radius:50px;
  width: 40px;
	height: 60px;
	-webkit-transform: rotate(45deg);
  
  -webkit-animation: c1 3s infinite linear;
}

@-webkit-keyframes c1 {
  0%{background-color:#64748b;}
  15%{background-color:#475569;}
  25%{background-color:#334155;}
  30%{background-color:#ec4899;}
  40%{background-color:#db2777;}
  50%{background-color:#db2777;}
  65%{background-color:#be185d;}
  75%{background-color:#9d174d;}
  90%{background-color:#64748b;}
  100%{background-color:#475569;}

}

@-webkit-keyframes c2 {
    0%{background-color:#67e8f9;}
  15%{background-color:#22d3ee;}
  25%{background-color:#22d3ee;}
  30%{background-color:#06b6d4;}
  40%{background-color:#0891b2;}
  50%{background-color:#ec4899;}
  65%{background-color:#db2777;}
  75%{background-color:#be185d;}
  90%{background-color:#9d174d;}
  100%{background-color:#475569;}
}

.f12{
	
	position: absolute;
	left:50%;
  top:50%;
	height:70px;
	width:32px;
	overflow:hidden;
	-webkit-transform-style:preserve-3d;
  -webkit-transform-origin: 0 50%;
  -webkit-transform: translate(0%,-50%) rotateX(-90deg) rotateY(90deg);
}

.f12:after{
	content:"";
	position:absolute;
	left:-15px;
	border-top-left-radius:30px;
	border-top-right-radius:50px;
  width: 40px;
	height: 60px;
	-webkit-transform: rotate(45deg);
  
  -webkit-animation: c2 3s infinite linear;

}

.f13{
	
	position: absolute;
	left:50%;
  top:50%;
	height:70px;
	width:32px;
	overflow:hidden;
	-webkit-transform-style:preserve-3d;
  -webkit-transform-origin: 0 50%;
  -webkit-transform: translate(0%,-50%) rotateX(-90deg) rotateY(180deg);
}

.f13:after{
	content:"";
	position:absolute;
	left:-15px;
	border-top-left-radius:30px;
	border-top-right-radius:50px;
  width: 40px;
	height: 60px;
	-webkit-transform: rotate(45deg);
  
-webkit-animation: c1 3s infinite linear;
}

.f14{
	
	position: absolute;
	left:50%;
  top:50%;
	height:70px;
	width:32px;
	overflow:hidden;
	-webkit-transform-style:preserve-3d;
  -webkit-transform-origin: 0 50%;
  -webkit-transform: translate(0%,-50%) rotateX(-90deg) rotateY(270deg);
}

.f14:after{
	content:"";
	position:absolute;
	left:-15px;
	border-top-left-radius:30px;
	border-top-right-radius:50px;
  width: 40px;
	height: 60px;
	-webkit-transform: rotate(45deg);
  
-webkit-animation: c2 3s infinite linear;
}
</style>