<template>
    <div id="cover" class="h-fullpage">
        <img :src="frameUrl" alt="frame" class="absolute h-fullpage inset-0 m-auto flex justify-center items-center p-2 z-10" id="frame">

        <img :src="bgFlower" alt="bg-flower-topleft" width="750" class="fixed z-10" id="bg-flower-top-left">
        <img :src="bgFlower" alt="bg-flower-bottomright" width="750" class="fixed z-10 rotate-180 right-0 bottom-0" id="bg-flower-bottom-right">

        <img :src="flowerTopLeft" alt="flower-topleft" width="500" class="fixed z-10 w-80 lg:w-128" id="flower-top-left">
        <img :src="flowerBottomRight" alt="flower-bottomright" class="fixed z-10 right-0 bottom-0 w-80 lg:w-128" id="flower-bottom-right">

        <!-- <img :src="graphic" alt="graphic" class="fixed z-30 graphic-corner -top-32" :width="graphicWidth" id="graphic-top"> -->
        <!-- <img :src="graphic" alt="graphic" class="fixed z-30 graphic-corner -right-52 rotate-30" :width="graphicWidth" id="graphic-right">
        <img :src="graphic" alt="graphic" class="fixed z-30 graphic-corner -left-52 rotate-30" :width="graphicWidth" id="graphic-left">
        <img :src="graphic" alt="graphic" class="fixed z-30 graphic-corner -bottom-64" :width="graphicWidth" id="graphic-bottom"> -->

        <div class="relative h-fullpage w-full bg-blue-darkest ">
            <div class="z-20 relative h-fullpage flex flex-col justify-between items-center text-base">
                <div class="flex flex-col items-center mt-24 pt-6">
                    <initial colors="#E3F4FB" id="initial"></initial>
                    <div class="flex flex-col" id="title">
                        <span class="font-semibold text-brown my-6">THE WEDDING OF</span>
                        <div class="name font-medium text-5xl flex flex-col items-center">
                            <span class="text-tosca-light z-10">Ainun</span>
                            <span class="text-tosca-lightest -my-3">&</span>
                            <span class="text-tosca-light z-10">Arief</span>
                        </div>
                    </div>
                    
                    
                </div>        
                <div class="flex flex-col items-center mb-40" id="guest">
                    <span class="font-semibold text-brown">KEPADA YTH</span>
                    <span class="font-semibold text-brown">Bapak/Ibu/Saudara/i,</span>
                    <span class="font-semibold text-tosca-light my-3 text-lg">{{ namaTamu }}</span>
                    <button id="open-invitation" class="py-4 px-16 font-semibold text-gray-lightest" @click="closeCover">Buka Undangan</button>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import Initial from "./Initial.vue";
import { gsap } from "gsap";

export default {

    emits: ["closeCover"],

    components:{
        Initial
    },  

    data(){
        return{
            rumagadang: new URL('./assets/rumagadang.png', import.meta.url).href,
            // graphic: new URL('./assets/graphic_red.png', import.meta.url).href,
            frameUrl: new URL('./assets/frame.svg', import.meta.url).href,
            bgFlower: new URL('./assets/flower_one_color.svg', import.meta.url).href,
            flowerTopLeft: new URL('./assets/flower_left_corner.webp', import.meta.url).href,
            flowerBottomRight: new URL('./assets/flower_right_corner.webp', import.meta.url).href,
            namaTamu: '',
            queryString: window.location.search,
            graphicWidth: window.innerWidth * 1.5,
        }
    },

    mounted(){
        let urlParams = new URLSearchParams(this.queryString);
        if( urlParams.has('name') ){
            this.namaTamu = urlParams.get('name');
        }

        gsap.from('#cover', {
            opacity: 0,
            duration: 1.7
        })

        gsap.from('#flower-top-left', {
            x:-80,
            y: -80,
            opacity: 0,
            duration: 1.7
        })

        gsap.from('#flower-bottom-right', {
            x: 80,
            y: 80,
            opacity: 0,
            duration: 1.7
        })

        gsap.from('#bg-flower-top-left', {
            opacity: 0,
            duration: 2.5
        })

        gsap.from('#bg-flower-bottom-right', {
            opacity: 0,
            duration: 2.5
        })

        gsap.from('#frame', {
            opacity: 0,
            duration: 2.5
        })

        gsap.from('#rumagadang', {
            opacity: 0,
            duration: 2.5
        })

        gsap.from('#initial', {
            opacity: 0,
            duration: 3.5
        })

        gsap.from('#title', {
            y: -100,
            opacity: 0,
            duration: 1.7
        })

        gsap.from('#guest', {
            y: 100,
            opacity: 0,
            duration: 1.7
        })
        // setInterval(()=>{
        //     var now = new Date().getTime()
        //     var distance = this.countDownDate - now;

        //     // Time calculations for days, hours, minutes and seconds
        //     this.remaining.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        //     this.remaining.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        //     this.remaining.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        //     this.remaining.seconds = Math.floor((distance % (1000 * 60)) / 1000);

        //     if (distance < 0) {
        //         clearInterval(x);
        //     }

        // }, 1000)
    },

    methods:{
        closeCover(){
            gsap.to('#cover', {
                opacity: 0,
                duration: 1.2
            })
            setTimeout(()=>{
                this.$emit('closeCover')
            }, 1200)
            
        }
    }
}

</script>

<style scoped>
#bg-flower-top-left {
    top: -3rem;
    left: -3rem;
}

#bg-flower-bottom-right {
    margin-right: -3rem;
    margin-bottom: -3rem
}

#flower-top-left {
    top: -1rem;
    left: -1rem;
}

#flower-bottom-right {
    right: -1rem;
    bottom: -1rem
}

#open-invitation {
    border-radius: 62.4375rem;
    border: 3px solid #E8CDBC;  
    background: linear-gradient(266deg, #E5ABB5 -3.39%, #782D41 102.73%);
    box-shadow: 0px 8px 16px 0px rgba(188,166,152,0.16);
}

.name{
    font-family: 'Dancing Script', serif;
}
</style>