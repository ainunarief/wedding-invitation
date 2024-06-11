<template>
    <img :src="flowerOneSide" alt="flower-left-top" class="fixed-elements fixed -left-7 -top-5 opacity-50 z-10" width="190" id="flower-left-top" fetchpriority="high">
    <img :src="flowerOneSide" alt="flower-right-top" class="fixed-elements fixed -right-7 -top-5 opacity-50 flip-verticaly z-10" width="190" id="flower-right-top" fetchpriority="high">
    <img :src="flowerOneSide" alt="flower-left-bottom" class="fixed-elements fixed -left-7 -bottom-5 opacity-50 flip-and-rotate z-10" width="190" id="flower-left-bottom" fetchpriority="high">
    <img :src="flowerOneSide" alt="flower-right-bottom" class="fixed-elements fixed -right-7 -bottom-5 opacity-50 rotate-180 z-10" width="190" id="flower-right-bottom" fetchpriority="high">

    <img :src="graphic" alt="graphic" class="fixed-elements fixed z-30 graphic-corner -left-52 -top-64" :width="graphicWidth" id="graphic-top-left">
    <img :src="graphic" alt="graphic" class="fixed-elements fixed z-30 graphic-corner -right-52 -top-64" :width="graphicWidth" id="graphic-top-right">
    <img :src="graphic" alt="graphic" class="fixed-elements fixed z-30 graphic-corner -left-52 -bottom-64" :width="graphicWidth" id="graphic-bottom-left">
    <img :src="graphic" alt="graphic" class="fixed-elements fixed z-30 graphic-corner -right-52 -bottom-64" :width="graphicWidth" id="graphic-bottom-right">

    <img :src="graphicBlueLighter" alt="graphic-blue-lighter" class="fixed-elements fixed inset-x-0 m-auto opacity-60 -top-2/3 lg:top-full z-10" :width="graphicWidth" id="graphic-blue-lighter-top">
    <img :src="graphicBlueLighter" alt="graphic-blue-lighter" class="fixed-elements fixed inset-x-0 m-auto opacity-60 -bottom-2/3 lg:bottom-full z-10" :width="graphicWidth" id="graphic-blue-lighter-bottom">

    <img :src="graphicPlain" alt="graphic-plain" class="fixed-elements fixed inset-0 m-auto flex justify-center items-center w-full lg:w-1/3 px-1 opacity-0 z-10" id="graphic-plain">

    <img :src="flowerDecor" alt="flower-top" class="fixed-elements fixed inset-0 m-auto -top-80 w-full lg:w-1/3 px-3 opacity-0 z-10" id="flower-top">

    <img :src="flowerDecor" alt="flower-bottom" class="fixed-elements fixed inset-0 m-auto -bottom-80 w-full lg:w-1/3 px-3 rotate-180 opacity-0 z-10" id="flower-bottom">

    <img :src="frameUrl" alt="frame" class="fixed-elements fixed h-dvh inset-0 m-auto flex justify-center items-center p-2 z-10 opacity-0" id="frame">

    <img :src="bgFlower" alt="bg-flower-topleft" width="700" class="fixed-elements fixed -left-28 -top-28 z-10 opacity-0" id="bg-flower-top-left">
    <img :src="bgFlower" alt="bg-flower-bottomright" width="700" class="fixed-elements fixed -right-28 -bottom-28 z-10 rotate-180 opacity-0" id="bg-flower-bottom-right">

    <img :src="flowerTopLeft" alt="flower-left-corner" class="fixed-elements fixed -left-20 -top-20 opacity-0 z-10" width="350" id="flower-left-corner" fetchpriority="high">
    <img :src="flowerBottomRight" alt="flower-right-corner" class="fixed-elements fixed -right-20 -bottom-20 opacity-0 z-10" width="350" id="flower-right-corner" fetchpriority="high">

    <div class="fixed bottom-0 left-0 mb-6 ml-6 w-10 h-10 flex flex-col justify-center items-center z-50 bg-brown rounded-full opacity-0" id="music-player" @click="playStopMusic">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="isMusicPlaying">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 4C5.5 3.72386 5.72386 3.5 6 3.5H10C10.2761 3.5 10.5 3.72386 10.5 4V20C10.5 20.2761 10.2761 20.5 10 20.5H6C5.72386 20.5 5.5 20.2761 5.5 20V4ZM6.5 4.5V19.5H9.5V4.5H6.5Z" fill="#5E2131"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 4C13.5 3.72386 13.7239 3.5 14 3.5H18C18.2761 3.5 18.5 3.72386 18.5 4V20C18.5 20.2761 18.2761 20.5 18 20.5H14C13.7239 20.5 13.5 20.2761 13.5 20V4ZM14.5 4.5V19.5H17.5V4.5H14.5Z" fill="#5E2131"/>
        </svg>

        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-else>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.76041 2.56114C4.92094 2.4735 5.11652 2.4805 5.27038 2.57941L19.2704 11.5794C19.4135 11.6714 19.5 11.8299 19.5 12C19.5 12.1701 19.4135 12.3286 19.2704 12.4206L5.27038 21.4206C5.11652 21.5195 4.92094 21.5265 4.76041 21.4389C4.59987 21.3512 4.5 21.1829 4.5 21V3C4.5 2.8171 4.59987 2.64879 4.76041 2.56114ZM5.5 3.91583V20.0842L18.0754 12L5.5 3.91583Z" fill="#666666"/>
        </svg>
    </div>

    <!-- Back to top -->
    <div class="fixed bottom-0 right-0 mb-6 mr-6 w-12 h-12 flex flex-col justify-center items-center rounded-full z-50 opacity-0" @click="scrollToTop" id="scroll-to-top">
        <svg width="100%" height="100%" viewBox="0 0 148 128" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
            <g transform="matrix(1,0,0,1,-6715.77,-4140.13)">
                <g transform="matrix(-0.999822,-0.0188613,0.0188613,-0.999822,13504.3,8567.48)">
                    <g transform="matrix(-0.248652,0.968593,-0.968593,-0.248652,12654.2,-1356.55)">
                        <text x="6853.26px" y="4229.74px" style="font-family:'Poppins-Medium', 'Poppins';font-weight:500;font-size:25px;fill:rgb(94,33,49);">B</text>
                    </g>
                    <g transform="matrix(-0.519441,0.854506,-0.854506,-0.519441,14035,600.731)">
                        <text x="6848.6px" y="4246.9px" style="font-family:'Poppins-Medium', 'Poppins';font-weight:500;font-size:25px;fill:rgb(94,33,49);">a</text>
                    </g>
                    <g transform="matrix(-0.753854,0.657042,-0.657042,-0.753854,14794.2,2983.39)">
                        <text x="6838.26px" y="4262.85px" style="font-family:'Poppins-Medium', 'Poppins';font-weight:500;font-size:25px;fill:rgb(94,33,49);">c</text>
                    </g>
                    <g transform="matrix(-0.909195,0.41637,-0.41637,-0.909195,14810.4,5317.65)">
                        <text x="6825.34px" y="4273.8px" style="font-family:'Poppins-Medium', 'Poppins';font-weight:500;font-size:25px;fill:rgb(94,33,49);">k</text>
                    </g>
                    <g transform="matrix(-0.998328,0.0578109,-0.0578109,-0.998328,13844.2,8163.31)">
                        <text x="6804.02px" y="4281.91px" style="font-family:'Poppins-Medium', 'Poppins';font-weight:500;font-size:25px;fill:rgb(94,33,49);">T</text>
                    </g>
                    <g transform="matrix(-0.975024,-0.222101,0.222101,-0.975024,12455.3,9966.07)">
                        <text x="6788.03px" y="4282.7px" style="font-family:'Poppins-Medium', 'Poppins';font-weight:500;font-size:25px;fill:rgb(94,33,49);">o</text>
                    </g>
                    <g transform="matrix(-0.807419,-0.589979,0.589979,-0.807419,9703.32,11717.6)">
                        <text x="6764.1px" y="4275.12px" style="font-family:'Poppins-Medium', 'Poppins';font-weight:500;font-size:25px;fill:rgb(94,33,49);">T</text>
                    </g>
                    <g transform="matrix(-0.612087,-0.79079,0.79079,-0.612087,7510.45,12215.3)">
                        <text x="6751.26px" y="4265.57px" style="font-family:'Poppins-Medium', 'Poppins';font-weight:500;font-size:25px;fill:rgb(94,33,49);">o</text>
                    </g>
                    <g transform="matrix(-0.332464,-0.943116,0.943116,-0.332464,4971.94,12021.3)">
                        <text x="6740.28px" y="4251.06px" style="font-family:'Poppins-Medium', 'Poppins';font-weight:500;font-size:25px;fill:rgb(94,33,49);">p</text>
                    </g>
                </g>
                <g transform="matrix(1.31026,0,0,1.31026,-2090.32,-1296.44)">
                    <circle cx="6778.75" cy="4208.09" r="38.311" style="fill:rgb(232,205,188);"/>
                </g>
                <g transform="matrix(0.748954,0,0,0.748954,1661.19,1019.22)">
                    <g transform="matrix(4.16667,0,0,4.16667,6800.04,4219.99)">
                        <path d="M12,4.74C12.276,4.74 12.74,4.964 12.74,5.24L12.74,19C12.74,19.276 12.276,19.5 12,19.5C11.724,19.5 11.26,19.276 11.26,19L11.26,5.24C11.26,4.964 11.724,4.74 12,4.74Z" style="fill:rgb(94,33,49);"/>
                    </g>
                    <g transform="matrix(4.16667,0,0,4.16667,6800.04,4219.99)">
                        <path d="M11.646,4.646C11.842,4.451 12.158,4.451 12.354,4.646L19.354,11.646C19.549,11.842 19.693,12.424 19.498,12.619C19.303,12.815 18.842,13.029 18.646,12.834L12,6.187L5.354,12.834C5.158,13.029 4.758,12.828 4.563,12.633C4.367,12.437 4.451,11.842 4.646,11.646L11.646,4.646Z" style="fill:rgb(94,33,49);"/>
                    </g>
                </g>
            </g>
        </svg>
    </div>
    

    <!-- Content -->
    <div id="container" class="w-full relative overflow-x-hidden">   

        <!-- Ar-Rum -->
        <section class="page s1 h-screen flex justify-center items-center" id="ar-rum">
            <div class="flex flex-col mx-12 lg:w-1/2 justify-center items-center relative h-screen">
                <span class="font-bold text-red-darkest mb-4 z-20" id="surat">Q.S. Ar Rum: 21</span>
                <p class="font-semibold text-blue-darkest text-center z-20">Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.</p>
                
                <div class="absolute bottom-0 mx-auto z-30 mb-24">
                    <span class="text-red font-semibold">scroll down</span>
                    <Vue3Lottie :animationData="scrollDown" :height="60" :width="60" class="-mt-3"/>
                    
                </div>
            </div>
        </section>

        <!-- Salam -->
        <section class="page s2 h-screen flex flex-col justify-center items-center mx-12 z-20" id="salam">
            <span class="font-bold text-red-darkest mb-4 z-20" id="assalam">Assalamu'alaikum Wr Wb</span>
            <p class="font-semibold text-blue-darkest text-center z-20">Tanpa mengurangi rasa hormat,<br/> kami bermaksud mengundang Bapak/Ibu/Saudara/i pada acara pernikahan kami</p>
        </section>

        <!-- Couple -->
        <section class="page s3 h-screen flex flex-col justify-center items-center z-20" id="couple">
            <initial colors="#782D41" id="initial-couple" class="opacity-0 z-20"></initial>

            <div class="flex flex-col h-auto items-center mt-4 relative">
                <!-- Bride Info -->
                <div class="flex flex-col items-center mb-8 static -ml-40 opacity-0 z-20" id="bride-info">

                    <div class="relative">
                        <span class="name text-2xl text-red-darkest font-semibold z-10">Ainun Rahmania</span>
                        <span class="absolute bottom-0 left-0 -ml-28 name text-7xl font-bold text-brown-darkest opacity-30" id="bride-nickname">Ainun</span>
                    </div>

                    <span class="text-sm text-gray-darkest font-semibold text-center my-2">Putri dari Bpk. H. Mhd. Hasymi SE, Akt, MSi, CA, ACPA<br/>& Ibu Dra. Hj. Herlina</span>
                    <button class="bg-brown p-1 rounded-md" @click="openIG('nia_arahmania')">
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.125 2.1875C3.95038 2.1875 2.1875 3.95038 2.1875 6.125V14.875C2.1875 17.0496 3.95038 18.8125 6.125 18.8125H14.875C17.0496 18.8125 18.8125 17.0496 18.8125 14.875V6.125C18.8125 3.95038 17.0496 2.1875 14.875 2.1875H6.125ZM1.3125 6.125C1.3125 3.46713 3.46713 1.3125 6.125 1.3125H14.875C17.5329 1.3125 19.6875 3.46713 19.6875 6.125V14.875C19.6875 17.5329 17.5329 19.6875 14.875 19.6875H6.125C3.46713 19.6875 1.3125 17.5329 1.3125 14.875V6.125Z" fill="#98877B"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9871 7.43279C10.3499 7.3383 9.69912 7.44714 9.12735 7.74382C8.55558 8.0405 8.09192 8.50991 7.80231 9.08529C7.51271 9.66068 7.4119 10.3127 7.51424 10.9487C7.61658 11.5847 7.91684 12.1722 8.37233 12.6277C8.82782 13.0832 9.41533 13.3834 10.0513 13.4858C10.6873 13.5881 11.3393 13.4873 11.9147 13.1977C12.4901 12.9081 12.9595 12.4444 13.2562 11.8727C13.5529 11.3009 13.6617 10.6501 13.5672 10.0129C13.4708 9.36299 13.168 8.76126 12.7034 8.29665C12.2387 7.83203 11.637 7.52917 10.9871 7.43279ZM8.72435 6.96715C9.45948 6.5857 10.2962 6.44577 11.1154 6.56725C11.9511 6.69117 12.7247 7.08057 13.3221 7.67793C13.9194 8.27529 14.3088 9.04894 14.4328 9.8846C14.5542 10.7038 14.4143 11.5405 14.0329 12.2757C13.6514 13.0108 13.0479 13.6069 12.3081 13.9793C11.5683 14.3516 10.73 14.4812 9.9123 14.3497C9.09461 14.2181 8.33924 13.832 7.75361 13.2464C7.16799 12.6608 6.78193 11.9054 6.65035 11.0877C6.51878 10.27 6.64838 9.43168 7.02073 8.6919C7.39308 7.95212 7.98922 7.34859 8.72435 6.96715Z" fill="#98877B"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.875 5.6875C14.875 5.44588 15.0709 5.25 15.3125 5.25H15.3213C15.5629 5.25 15.7587 5.44588 15.7587 5.6875C15.7587 5.92912 15.5629 6.125 15.3213 6.125H15.3125C15.0709 6.125 14.875 5.92912 14.875 5.6875Z" fill="#98877B"/>
                        </svg>
                    </button>
                </div>

                <!-- Couple Photo -->
                <div class="my-10 flex flex-row z-20 ">
                    <!-- <img :src="bridePhoto" alt="bride" width="115" height="180"> -->
                    <div class="relative mr-6 -left-20 opacity-0" id="bride-photo">
                        <div class="bg-brides w-36 h-56 bg-center bg-no-repeat bg-cover border-4 border-brown-dark rounded-xl"></div>
                        <img :src="flowerTopLeft" alt="flower-topleft" class="absolute top-0 left-0 -mt-7 -ml-7 z-10 w-40 lg:w-128 opacity-0" id="flower-top-left-bride">
                        <img :src="flowerBottomRight" alt="flower-topleft" class="absolute bottom-0 right-0 -mr-7 -mb-7 z-10 w-40 lg:w-128 opacity-0" id="flower-bottom-right-bride">
                    </div>

                    <div class="relative ml-6 -right-20 opacity-0" id="groom-photo">
                        <div class="bg-groom w-36 h-56 bg-center bg-no-repeat bg-cover border-4 border-brown-dark rounded-xl"></div>
                        <img :src="flowerTopLeft" alt="flower-topleft" class="absolute top-0 left-0 -mt-7 -ml-7 z-10 w-40 lg:w-128 opacity-0" id="flower-top-left-groom">
                        <img :src="flowerBottomRight" alt="flower-topleft" class="absolute bottom-0 right-0 -mr-7 -mb-7 z-10 w-40 lg:w-128 opacity-0" id="flower-top-left-groom">
                    </div>
                </div>
                <!-- Groom Info -->
                <div class="flex flex-col items-center mt-10 -mr-40 opacity-0 z-20" id="groom-info">

                    <div class="relative">
                        <span class="name text-2xl text-red-darkest font-semibold z-10">Arief Trifianto Nurichsan</span>
                        <span class="absolute bottom-0 right-0 -mr-16 name text-7xl font-bold text-brown-darkest opacity-30" id="groom-nickname">Arief</span>
                    </div>

                    <span class="text-sm text-gray-darkest font-semibold text-center my-2">Putra dari Bpk. (Alm) Drs. H. Sudarman<br/>& Ibu Hj. Yenni Fatia Riyani</span>
                    <button class="bg-brown p-1 rounded-md" @click="openIG('arieftrifianto')">
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.125 2.1875C3.95038 2.1875 2.1875 3.95038 2.1875 6.125V14.875C2.1875 17.0496 3.95038 18.8125 6.125 18.8125H14.875C17.0496 18.8125 18.8125 17.0496 18.8125 14.875V6.125C18.8125 3.95038 17.0496 2.1875 14.875 2.1875H6.125ZM1.3125 6.125C1.3125 3.46713 3.46713 1.3125 6.125 1.3125H14.875C17.5329 1.3125 19.6875 3.46713 19.6875 6.125V14.875C19.6875 17.5329 17.5329 19.6875 14.875 19.6875H6.125C3.46713 19.6875 1.3125 17.5329 1.3125 14.875V6.125Z" fill="#98877B"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9871 7.43279C10.3499 7.3383 9.69912 7.44714 9.12735 7.74382C8.55558 8.0405 8.09192 8.50991 7.80231 9.08529C7.51271 9.66068 7.4119 10.3127 7.51424 10.9487C7.61658 11.5847 7.91684 12.1722 8.37233 12.6277C8.82782 13.0832 9.41533 13.3834 10.0513 13.4858C10.6873 13.5881 11.3393 13.4873 11.9147 13.1977C12.4901 12.9081 12.9595 12.4444 13.2562 11.8727C13.5529 11.3009 13.6617 10.6501 13.5672 10.0129C13.4708 9.36299 13.168 8.76126 12.7034 8.29665C12.2387 7.83203 11.637 7.52917 10.9871 7.43279ZM8.72435 6.96715C9.45948 6.5857 10.2962 6.44577 11.1154 6.56725C11.9511 6.69117 12.7247 7.08057 13.3221 7.67793C13.9194 8.27529 14.3088 9.04894 14.4328 9.8846C14.5542 10.7038 14.4143 11.5405 14.0329 12.2757C13.6514 13.0108 13.0479 13.6069 12.3081 13.9793C11.5683 14.3516 10.73 14.4812 9.9123 14.3497C9.09461 14.2181 8.33924 13.832 7.75361 13.2464C7.16799 12.6608 6.78193 11.9054 6.65035 11.0877C6.51878 10.27 6.64838 9.43168 7.02073 8.6919C7.39308 7.95212 7.98922 7.34859 8.72435 6.96715Z" fill="#98877B"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.875 5.6875C14.875 5.44588 15.0709 5.25 15.3125 5.25H15.3213C15.5629 5.25 15.7587 5.44588 15.7587 5.6875C15.7587 5.92912 15.5629 6.125 15.3213 6.125H15.3125C15.0709 6.125 14.875 5.92912 14.875 5.6875Z" fill="#98877B"/>
                        </svg>
                    </button>
                </div>
            </div>
        </section>

        <!-- Akad -->
        <section class="page s4 h-screen flex flex-col justify-center items-center relative w-full z-20" id="akad">
            <span class="absolute name top-16 text-3xl text-red-darkest font-semibold opacity-0" id="akad-nikah">Akad Nikah</span>

            <div class="inset-0 flex flex-col justify-center items-center z-20">
                <!-- Akad Date -->
                <div class="flex flex-col justify-center items-center static mt-20 opacity-0" id="event-akad">
                    <span class="font-semibold text-brown text-base">Sabtu</span>
                    <div class="flex relative items-center my-1">
                        <span class="absolute left-0 -ml-10 px-1 text-brown font-medium border-y border-brown-light">Juli</span>
                        <span class="text-4xl text-brown font-bold">20</span>
                        <span class="absolute right-0 -mr-14 px-1 text-brown font-medium border-y border-brown-light">2024</span>
                    </div>
                    <div class="flex items-center">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_250_44501)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 1.66667C4.5022 1.66667 1.66667 4.5022 1.66667 8C1.66667 11.4978 4.5022 14.3333 8 14.3333C11.4978 14.3333 14.3333 11.4978 14.3333 8C14.3333 4.5022 11.4978 1.66667 8 1.66667ZM1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8Z" fill="#E8CDBC" stroke="#E8CDBC" stroke-linecap="round" stroke-linejoin="round"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00001 3.66663C8.1841 3.66663 8.33334 3.81586 8.33334 3.99996V7.79395L10.8157 9.03515C10.9804 9.11748 11.0471 9.3177 10.9648 9.48236C10.8825 9.64702 10.6823 9.71376 10.5176 9.63143L7.85093 8.2981C7.73801 8.24164 7.66667 8.12622 7.66667 7.99996V3.99996C7.66667 3.81586 7.81591 3.66663 8.00001 3.66663Z" fill="#E8CDBC" stroke="#E8CDBC" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_250_44501">
                                    <rect width="16" height="16" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>

                        <span class="font-semibold text-brown text-base ml-2">08:00 AM</span>
                    </div>
                </div>
                <!-- Akad Location -->
                <div class="flex flex-col justify-center items-center mt-2 opacity-0" id="location-akad">
                    <span class="text-tosca-light font-semibold text-base">Masjid Al-Jihad Makodam Jaya</span>
                    <p class="text-tosca-lightest text-sm text-center my-1">Jl. Mayjen Sutoyo No.5, Cawang, Kramat Jati,<br />Jakarta Timur</p>
                    <button class="bg-red-light py-2 px-4 rounded-lg flex items-center" @click="openAkadMap">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.16795 1.04392C5.26472 0.988624 5.38271 0.985349 5.4824 1.03519L10.6562 3.62208L15.1679 1.04392C15.2711 0.984966 15.3979 0.985389 15.5006 1.04503C15.6034 1.10467 15.6667 1.21451 15.6667 1.33333V12C15.6667 12.1196 15.6026 12.2301 15.4987 12.2894L10.832 14.9561C10.7353 15.0114 10.6173 15.0147 10.5176 14.9648L5.34382 12.3779L0.832041 14.9561C0.728874 15.015 0.602124 15.0146 0.499353 14.955C0.396581 14.8953 0.333328 14.7855 0.333328 14.6667V4C0.333328 3.88038 0.397424 3.76993 0.501282 3.71059L5.16795 1.04392ZM5.34382 1.71126L0.999995 4.19344V14.0923L5.16795 11.7106C5.26472 11.6553 5.38271 11.652 5.4824 11.7019L10.6562 14.2887L15 11.8066V1.90773L10.832 4.28941C10.7353 4.34471 10.6173 4.34799 10.5176 4.29814L5.34382 1.71126Z" fill="#5E2131"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.33333 1C5.51743 1 5.66667 1.14924 5.66667 1.33333V12C5.66667 12.1841 5.51743 12.3333 5.33333 12.3333C5.14924 12.3333 5 12.1841 5 12V1.33333C5 1.14924 5.14924 1 5.33333 1Z" fill="#5E2131"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6667 3.66675C10.8508 3.66675 11 3.81599 11 4.00008V14.6667C11 14.8508 10.8508 15.0001 10.6667 15.0001C10.4826 15.0001 10.3333 14.8508 10.3333 14.6667V4.00008C10.3333 3.81599 10.4826 3.66675 10.6667 3.66675Z" fill="#5E2131"/>
                        </svg>
                        <span class="ml-2 text-red-darkest text-sm font-medium">Google Maps</span>
                    </button>
                </div>
            </div>

        </section>

        <!-- Resepsi -->
        <section class="page s5 h-screen flex flex-col justify-center items-center relative w-full z-20" id="resepsi">
            <div class="flex flex-col absolute top-16 justify-center items-center">
                <span class="name text-3xl text-red-darkest font-semibold opacity-0" id="resepsi-nikah">Resepsi Pernikahan</span>

                <div class="grid grid-cols-4 gap-3 lg:gap-4 my-10 text-red opacity-0" id="timespan">
                    <div class="flex h-12 w-16 lg:h-24 lg:w-24">
                        <span class="font-bold text-xl lg:text-2xl">{{ remaining.days }}</span>
                        <span class="font-semibold text-xs lg:text-base ml-1">hari</span>
                    </div>
                    <div class="flex h-12 w-16 lg:h-24 lg:w-24">
                        <span class="font-bold text-xl lg:text-2xl">{{ remaining.hours }}</span>
                        <span class="font-semibold text-xs lg:text-base ml-1">jam</span>
                    </div>
                    <div class="flex h-12 w-16 lg:h-24 lg:w-24">
                        <span class="font-bold text-xl lg:text-2xl">{{ remaining.minutes }}</span>
                        <span class="font-semibold text-xs lg:text-base ml-1">menit</span>
                    </div>
                    <div class="flex h-12 w-16 lg:h-24 lg:w-24">
                        <span class="font-bold text-xl lg:text-2xl">{{ remaining.seconds }}</span>
                        <span class="font-semibold text-xs lg:text-base ml-1">detik</span>
                    </div>
                </div> 
            </div>
            

            <div class="absolute inset-0 flex flex-col justify-center items-center -mt-12 z-20 fixed top-0 left-0 right-0 ">
                <!-- Resepsi Date -->
                <div class="flex flex-col justify-center items-center static mt-20 opacity-0" id="event-resepsi">
                    <span class="font-semibold text-brown text-base">Sabtu</span>
                    <div class="flex relative items-center my-1">
                        <span class="absolute left-0 -ml-10 px-1 text-brown font-medium border-y border-brown-light">Juli</span>
                        <span class="text-4xl text-brown font-bold">20</span>
                        <span class="absolute right-0 -mr-14 px-1 text-brown font-medium border-y border-brown-light">2024</span>
                    </div>
                    <div class="flex items-center">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_250_44501)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 1.66667C4.5022 1.66667 1.66667 4.5022 1.66667 8C1.66667 11.4978 4.5022 14.3333 8 14.3333C11.4978 14.3333 14.3333 11.4978 14.3333 8C14.3333 4.5022 11.4978 1.66667 8 1.66667ZM1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8Z" fill="#E8CDBC" stroke="#E8CDBC" stroke-linecap="round" stroke-linejoin="round"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00001 3.66663C8.1841 3.66663 8.33334 3.81586 8.33334 3.99996V7.79395L10.8157 9.03515C10.9804 9.11748 11.0471 9.3177 10.9648 9.48236C10.8825 9.64702 10.6823 9.71376 10.5176 9.63143L7.85093 8.2981C7.73801 8.24164 7.66667 8.12622 7.66667 7.99996V3.99996C7.66667 3.81586 7.81591 3.66663 8.00001 3.66663Z" fill="#E8CDBC" stroke="#E8CDBC" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_250_44501">
                                    <rect width="16" height="16" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>

                        <span class="font-semibold text-brown text-base ml-2">11:00 AM</span>
                    </div>
                </div>
                <!-- Resepsi Location -->
                <div class="flex flex-col justify-center items-center mt-2 opacity-0" id="location-resepsi">
                    <span class="text-tosca-light font-semibold text-base">Aula Sudirman Makodam Jaya</span>
                    <p class="text-tosca-lightest text-sm text-center my-1">Jl. Mayjen Sutoyo No.5, Cawang, Kramat Jati,<br />Jakarta Timur</p>
                    <button class="bg-red-light py-2 px-4 rounded-lg flex items-center" @click="openResepsiMap">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.16795 1.04392C5.26472 0.988624 5.38271 0.985349 5.4824 1.03519L10.6562 3.62208L15.1679 1.04392C15.2711 0.984966 15.3979 0.985389 15.5006 1.04503C15.6034 1.10467 15.6667 1.21451 15.6667 1.33333V12C15.6667 12.1196 15.6026 12.2301 15.4987 12.2894L10.832 14.9561C10.7353 15.0114 10.6173 15.0147 10.5176 14.9648L5.34382 12.3779L0.832041 14.9561C0.728874 15.015 0.602124 15.0146 0.499353 14.955C0.396581 14.8953 0.333328 14.7855 0.333328 14.6667V4C0.333328 3.88038 0.397424 3.76993 0.501282 3.71059L5.16795 1.04392ZM5.34382 1.71126L0.999995 4.19344V14.0923L5.16795 11.7106C5.26472 11.6553 5.38271 11.652 5.4824 11.7019L10.6562 14.2887L15 11.8066V1.90773L10.832 4.28941C10.7353 4.34471 10.6173 4.34799 10.5176 4.29814L5.34382 1.71126Z" fill="#5E2131"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.33333 1C5.51743 1 5.66667 1.14924 5.66667 1.33333V12C5.66667 12.1841 5.51743 12.3333 5.33333 12.3333C5.14924 12.3333 5 12.1841 5 12V1.33333C5 1.14924 5.14924 1 5.33333 1Z" fill="#5E2131"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6667 3.66675C10.8508 3.66675 11 3.81599 11 4.00008V14.6667C11 14.8508 10.8508 15.0001 10.6667 15.0001C10.4826 15.0001 10.3333 14.8508 10.3333 14.6667V4.00008C10.3333 3.81599 10.4826 3.66675 10.6667 3.66675Z" fill="#5E2131"/>
                        </svg>
                        <span class="ml-2 text-red-darkest text-sm font-medium">Google Maps</span>
                    </button>
                </div>
            </div>
        </section>

        <!-- Gift -->
        <section class="page s6 h-screen bg-red-lightest flex flex-col justify-center items-center relative w-full" id="gift">
            <!-- Gift Header -->
            <div class="absolute top-0 w-full z-20 -left-40 opacity-0" id="gift-header">
                <div id="rectangle-top" class="box-gift top-0 absolute w-full h-44 rounded-br-10xl z-20"></div>
                <img :src="giftHeader" alt="gift-header" class="top-0 absolute rounded-br-10xl z-20" id="gift-header-photo"/>
            </div>


            <div class="flex flex-col justify-center items-center mx-6 z-30">
                <span class="name text-3xl text-red-darkest font-semibold opacity-0" id="wedding-gift" >Wedding Gift</span>

                <p class="text-red-darkest font-medium text-center my-3 z-30 opacity-0" id="gift-ins">
                    Bagi bapak/ibu/saudara/i yang ingin mengirimkan hadiah pernikahan dapat melalui rekening di bawah ini:
                </p>

                <div class="box-gift flex flex-col p-5 rounded-2xl text-blue-darkest w-full opacity-0 mb-3 z-40" id="gift-info">
                    <span class="font-bold">Bank Mandiri</span>
                    <div class="flex my-2 items-center">
                        <span class="text-lg font-semibold mr-2">101 000 7248 253</span>
                        <div class="w-7 h-7 flex flex-col justify-center items-center bg-blue-darkest text-brown-lightest rounded-lg font-bold" @click="copyToClipboard('1010007248253')">
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.92985 6.33341C7.37757 6.33341 6.92985 6.78113 6.92985 7.33341V13.3334C6.92985 13.8857 7.37757 14.3334 7.92985 14.3334H13.9298C14.4821 14.3334 14.9298 13.8857 14.9298 13.3334V7.33341C14.9298 6.78113 14.4821 6.33341 13.9298 6.33341H7.92985ZM6.26318 7.33341C6.26318 6.41294 7.00938 5.66675 7.92985 5.66675H13.9298C14.8503 5.66675 15.5965 6.41294 15.5965 7.33341V13.3334C15.5965 14.2539 14.8503 15.0001 13.9298 15.0001H7.92985C7.00938 15.0001 6.26318 14.2539 6.26318 13.3334V7.33341Z" fill="#E1C782"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.26316 1.66667C2.99795 1.66667 2.74359 1.77202 2.55606 1.95956C2.36852 2.1471 2.26316 2.40145 2.26316 2.66667V8.66667C2.26316 8.93188 2.36852 9.18624 2.55606 9.37377C2.74359 9.56131 2.99795 9.66667 3.26316 9.66667H3.92983C4.11392 9.66667 4.26316 9.8159 4.26316 10C4.26316 10.1841 4.11392 10.3333 3.92983 10.3333H3.26316C2.82114 10.3333 2.39721 10.1577 2.08465 9.84518C1.77209 9.53262 1.5965 9.10869 1.5965 8.66667V2.66667C1.5965 2.22464 1.77209 1.80072 2.08465 1.48816C2.39721 1.17559 2.82114 1 3.26316 1H9.26316C9.70519 1 10.1291 1.17559 10.4417 1.48816C10.7542 1.80072 10.9298 2.22464 10.9298 2.66667V3.33333C10.9298 3.51743 10.7806 3.66667 10.5965 3.66667C10.4124 3.66667 10.2632 3.51743 10.2632 3.33333V2.66667C10.2632 2.40145 10.1578 2.1471 9.97027 1.95956C9.78273 1.77202 9.52838 1.66667 9.26316 1.66667H3.26316Z" fill="#E1C782"/>
                            </svg>
                        </div>
                        
                    </div>
                    <span class="font-semibold">a.n Ainun Rahmania</span>
                </div> 


                <div class="box-gift flex flex-col p-5 rounded-2xl text-blue-darkest w-full  opacity-0 z-30" id="gift-info">
                    <span class="font-bold">BCA</span>
                    <div class="flex my-2 items-center">
                        <span class="text-lg font-semibold mr-2">108 477 2413</span>
                        <div class="w-7 h-7 flex flex-col justify-center items-center bg-blue-darkest text-brown-lightest rounded-lg font-bold" @click="copyToClipboard('1084772413')">
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.92985 6.33341C7.37757 6.33341 6.92985 6.78113 6.92985 7.33341V13.3334C6.92985 13.8857 7.37757 14.3334 7.92985 14.3334H13.9298C14.4821 14.3334 14.9298 13.8857 14.9298 13.3334V7.33341C14.9298 6.78113 14.4821 6.33341 13.9298 6.33341H7.92985ZM6.26318 7.33341C6.26318 6.41294 7.00938 5.66675 7.92985 5.66675H13.9298C14.8503 5.66675 15.5965 6.41294 15.5965 7.33341V13.3334C15.5965 14.2539 14.8503 15.0001 13.9298 15.0001H7.92985C7.00938 15.0001 6.26318 14.2539 6.26318 13.3334V7.33341Z" fill="#E1C782"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.26316 1.66667C2.99795 1.66667 2.74359 1.77202 2.55606 1.95956C2.36852 2.1471 2.26316 2.40145 2.26316 2.66667V8.66667C2.26316 8.93188 2.36852 9.18624 2.55606 9.37377C2.74359 9.56131 2.99795 9.66667 3.26316 9.66667H3.92983C4.11392 9.66667 4.26316 9.8159 4.26316 10C4.26316 10.1841 4.11392 10.3333 3.92983 10.3333H3.26316C2.82114 10.3333 2.39721 10.1577 2.08465 9.84518C1.77209 9.53262 1.5965 9.10869 1.5965 8.66667V2.66667C1.5965 2.22464 1.77209 1.80072 2.08465 1.48816C2.39721 1.17559 2.82114 1 3.26316 1H9.26316C9.70519 1 10.1291 1.17559 10.4417 1.48816C10.7542 1.80072 10.9298 2.22464 10.9298 2.66667V3.33333C10.9298 3.51743 10.7806 3.66667 10.5965 3.66667C10.4124 3.66667 10.2632 3.51743 10.2632 3.33333V2.66667C10.2632 2.40145 10.1578 2.1471 9.97027 1.95956C9.78273 1.77202 9.52838 1.66667 9.26316 1.66667H3.26316Z" fill="#E1C782"/>
                            </svg>
                        </div>
                    </div>
                    <span class="font-semibold">a.n Arief Trifianto Nurichsan</span>
                </div> 
            </div>

            <!-- Gift Footer -->
            <div class="absolute bottom-0 w-full z-20 -right-40 opacity-0" id="gift-footer">
                <div id="rectangle-bottom" class="box-gift bottom-0 absolute w-full h-44 rounded-tl-10xl z-20"></div>
                <img :src="giftBottom" alt="gift-footer" class="bottom-0 lg:right-0 absolute rounded-tl-10xl z-20 " id="gift-footer-photo"/>
            </div>
        </section>

        <!-- Wishes -->
        <section class="page s7 h-screen bg-red-lightest flex flex-col justify-center items-center relative w-full" id="wishes">
            <div class="flex flex-col justify-center items-center z-20 w-full lg:w-1/2 px-6">
                <initial colors="#5E2131" id="initial-wishes" class="opacity-80"></initial>

                <span class="name text-red-darkest text-4xl font-semibold my-1 opacity-100">Wedding Wishes</span>

                <input type="text" v-model="namaTamu"  placeholder="Nama" id="nama" 
                    class="w-full h-10 px-3 bg-field border border-blue rounded-lg focus:ring-1 focus:outline-none focus:border-red-dark text-blue-darkest" />

                <textarea type="text" id="wishes" v-model="wishes" cols="30" rows="2" 
                    placeholder="Tulis Harapan dan Doa terbaik untuk kedua mempelai"
                    class="my-2 w-full p-3 bg-field border border-blue rounded-lg focus:ring-1 focus:outline-none focus:border-red-dark text-blue-darkest">
                </textarea>

                <div class="flex flex-col w-full items-start text-red">
                    <span class="text-red">Apakah Anda Berkenan Hadir?</span>
                    <div class="grid w-1/2 grid-cols-2 gap-2 rounded-xl bg-brown-light p-1">
                        <div>
                            <input type="radio" name="hadir" id="true" value="true" class="peer hidden" v-model="hadir"  checked />
                            <label for="true" class="block cursor-pointer select-none rounded-xl p-1 text-center peer-checked:bg-red peer-checked:font-bold peer-checked:text-brown-lightest">Ya</label>
                        </div>
                        <div>
                            <input type="radio" name="hadir" id="false" value="false" class="peer hidden" v-model="hadir" />
                            <label for="false" class="block cursor-pointer select-none rounded-xl p-1 text-center peer-checked:bg-red peer-checked:font-bold peer-checked:text-brown-lightest">Tidak</label>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col w-full items-start mt-1 text-red">
                    <span class="text-red">Jumlah Tamu</span>
                    <div class="grid w-1/2 grid-cols-2 gap-2 rounded-xl bg-brown-light p-1">
                        <div>
                            <input type="radio" name="jumlah" id="1" value="1" class="peer hidden" v-model="jumlah"  checked />
                            <label for="1" class="block cursor-pointer select-none rounded-xl p-1 text-center peer-checked:bg-red peer-checked:font-bold peer-checked:text-brown-lightest">1</label>
                        </div>
                        <div>
                            <input type="radio" name="jumlah" id="2" value="2" class="peer hidden" v-model="jumlah" />
                            <label for="2" class="block cursor-pointer select-none rounded-xl p-1 text-center peer-checked:bg-red peer-checked:font-bold peer-checked:text-brown-lightest">2</label>
                        </div>
                    </div>
                </div>

                <button id="send-wishes" class="w-full mt-2 py-3 font-semibold text-gray-lightest" @click="sendWishes" :disabled="disabledWishes">{{ wishesButton }}</button>

                <img :src="border" alt="border" class="my-1 w-full" height="18" id="border">

                <!-- wishes -->
                <div class="w-full overflow-y-auto h-1/4 flex flex-col z-30" id="list-wishes">
                    <div 
                        class="wish flex flex-col w-full p-2 border border-red-light border-2 bg-wishes backdrop-blur rounded-xl mb-2"
                        v-for="wish in listWishes">
                        <p class="text-base text-blue-darkest whitespace-pre-wrap">{{ wish.wish }}</p>
                        <span class="mt-1 text-base font-semibold text-brown-darkest">- {{ wish.name }} -</span>
                    </div>
                </div>

            </div>
        </section>

        <!-- Gallery -->
        <section class="page s8 h-screen bg-gray-lightest flex flex-col justify-center items-center relative w-full" id="gallery">

            <initial colors="#5E2131" id="initial-gallery" class="opacity-80"></initial>

            <span class="name mt-3 text-3xl text-red-darkest font-semibold" id="our-gallery">Our Galley</span>

            <div class="flex flex-col h-4/5 justify-center items-center mt-2 font-black w-full lg:w-1/2 z-30"> 
                <!-- <div :style="{ backgroundImage: `${photoShowed.image}` }"> -->
                    <div class="px-3 h-2/3 lg:h-4/5 flex">
                        <img :src="photoShowed.url" alt="photoShowed" id="photo-showed" class="block m-auto max-w-full max-h-full">
                    </div>
                    <div class="mt-6 flex h-20 overflow-x-auto px-3">
                        <div v-for="(photo, i) in gallery" class="flex-none h-full w-auto mr-3 cursor-pointer" :id="i" @click="chosePhoto(photo)">
                            <img :src="photo.url" class="h-full w-full">
                        </div>
                    </div>
                    
                <!-- </div> -->
                
            </div>

        </section>

        <!-- Thank You -->
        <section class="page s9 h-screen bg-gray-lightest flex flex-col justify-center items-center relative w-full" id="thank-you">
            
            <div class="flex flex-col h-screen justify-center items-center z-20 opacity-0 w-full lg:w-1/3 -mt-5" id="thank-you-words">
                <span class="name text-brown text-3xl font-semibold">Terima Kasih</span>
                <p class="mt-3 px-7 text-brown-lightest text-base text-center">
                    Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan do’a restu kepada kami.
                </p>
                <span class="mt-2 text-brown-dark font-semibold">Wassalamu‘alaikum Wr Wb</span>
            </div>

        </section>


        <!-- Closing -->
        <section class="page s10 h-screen bg-blue-darkest flex flex-col justify-center items-center relative w-full" id="closing">

            <div class="flex flex-col justify-center items-center my-8 text-brown font-semibold z-10 text-lg">
                <span>Kami yang berbahagia</span>
                <span >Keluarga Besar</span>
            </div>

            <div class="text-brown text-lg font-semibold mt-24">
                 AINUN & ARIEF 
            </div>
            <initial colors="#E5ABB5" id="initial-wishes" class="mt-4 opacity-80"></initial>
        
        </section>

    </div>

</template>

<script>
import Initial from "./Initial.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { databases, DATABASE_ID, COLLECTION_ID } from './plugins/appwrite';

import { Vue3Lottie } from 'vue3-lottie'

import scrollDown from './assets/scroll_down.json'

import music from './assets/music/music.mp3'

// import "./plugins/fullpage-scroll"
// import "./plugins/onepagescroll.css"
// import { onepagescroll } from "./plugins/onepagescroll.js"

  export default {
    components:{
        Initial,
        Vue3Lottie
    }, 
    
    data() {
        return {
            scrollDown,
            isMusicPlaying: false,

            scrolling :{
                enabled: true,
                events: "scroll,wheel,touchmove,pointermove".split(","),
                prevent: e => e.preventDefault(),
            },
            observer : null,
            scrollTween: null,
            
            flowerOneSide: new URL('./assets/flower_one_side.webp', import.meta.url).href,
            graphic: new URL('./assets/graphic.png', import.meta.url).href,
            graphicWidth: window.innerWidth,
            flowerTopLeft: new URL('./assets/flower_left_corner.webp', import.meta.url).href,
            flowerBottomRight: new URL('./assets/flower_right_corner.webp', import.meta.url).href,
            graphicBlueLighter: new URL('./assets/graphic_blue_lighter.png', import.meta.url).href,
            flowerDecor: new URL('./assets/flower_decor.webp', import.meta.url).href,
            graphicPlain: new URL('./assets/graphic_plain.png', import.meta.url).href,

            urlAkadMap: 'https://maps.app.goo.gl/7Tma5U5bH5D6Tbc87',

            countDownDate : new Date("Jul 20, 2024 10:00:00").getTime(),
            remaining:{
                days: null,
                hours: null,
                minutes: null,
                seconds: null
            },
            urlResepsiMap: 'https://maps.app.goo.gl/7Tma5U5bH5D6Tbc87',

            giftHeader: new URL('./assets/photo/wed-gift-1.png', import.meta.url).href,
            giftBottom: new URL('./assets/photo/wed-gift-2.png', import.meta.url).href,

            border: new URL('./assets/border_wishes.svg', import.meta.url).href,
            namaTamu: '',
            wishes: '',
            hadir: true,
            jumlah: 1,
            queryString: window.location.search,
            listWishes: [],
            totalWishes: 0,
            disabledWishes: false,
            wishesButton: 'Kirim',

            bgFlower: new URL('./assets/flower_one_color.svg', import.meta.url).href,
            frameUrl: new URL('./assets/frame.svg', import.meta.url).href,

            photoShowed: { id: '1', url: new URL('./assets/photo/gallery/1.jpg', import.meta.url).href },
            gallery: [
                { id: '1', url: new URL('./assets/photo/gallery/1.jpg', import.meta.url).href },
                { id: '2', url: new URL('./assets/photo/gallery/2.jpg', import.meta.url).href },
                { id: '3', url: new URL('./assets/photo/gallery/3.jpg', import.meta.url).href },
                { id: '4', url: new URL('./assets/photo/gallery/4.jpg', import.meta.url).href },
                { id: '5', url: new URL('./assets/photo/gallery/5.jpg', import.meta.url).href },
                { id: '6', url: new URL('./assets/photo/gallery/6.jpg', import.meta.url).href },
                { id: '7', url: new URL('./assets/photo/gallery/7.jpg', import.meta.url).href },
                { id: '8', url: new URL('./assets/photo/gallery/8.jpg', import.meta.url).href },
                { id: '9', url: new URL('./assets/photo/gallery/9.jpg', import.meta.url).href },
                { id: '10', url: new URL('./assets/photo/gallery/10.jpg', import.meta.url).href },
                { id: '11', url: new URL('./assets/photo/gallery/11.jpg', import.meta.url).href },
                { id: '12', url: new URL('./assets/photo/gallery/12.jpg', import.meta.url).href },
                { id: '13', url: new URL('./assets/photo/gallery/13.jpg', import.meta.url).href },
                { id: '14', url: new URL('./assets/photo/gallery/14.jpg', import.meta.url).href },
                { id: '15', url: new URL('./assets/photo/gallery/15.jpg', import.meta.url).href },
                { id: '16', url: new URL('./assets/photo/gallery/16.jpg', import.meta.url).href },
                { id: '17', url: new URL('./assets/photo/gallery/17.jpg', import.meta.url).href },
                { id: '18', url: new URL('./assets/photo/gallery/18.jpg', import.meta.url).href },
                { id: '19', url: new URL('./assets/photo/gallery/19.jpg', import.meta.url).href },
                { id: '20', url: new URL('./assets/photo/gallery/20.jpg', import.meta.url).href },
                { id: '21', url: new URL('./assets/photo/gallery/21.jpg', import.meta.url).href },
                { id: '22', url: new URL('./assets/photo/gallery/22.jpg', import.meta.url).href },
                { id: '23', url: new URL('./assets/photo/gallery/23.jpg', import.meta.url).href },
            ],

            audioElement : new Audio(music),
        }
        
    },
    mounted(){
        // onepagescroll('div#container');

        // var fps = new FullPageScroll('container', { 
        //     goToTopOnLast: false,
        //     // options here
        //     // slideSelector: "section",
        // });


        setInterval(()=>{
            var now = new Date().getTime()
            var distance = this.countDownDate - now;
            // Time calculations for days, hours, minutes and seconds
            this.remaining.days = Math.floor(distance / (1000 * 60 * 60 * 24));
            this.remaining.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            this.remaining.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            this.remaining.seconds = Math.floor((distance % (1000 * 60)) / 1000);
            if (distance < 0) {
                clearInterval(x);
            }
        }, 1000)

        this.fetchComments()

        setInterval(() => {
            this.fetchComments()
        }, 10000);

        let urlParams = new URLSearchParams(this.queryString);
        if( urlParams.has('name') ){
            this.namaTamu = urlParams.get('name');
        }

        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
        
        ScrollTrigger.defaults({
            // toggleActions: "restart pause resume pause",
            scroller: "#container",
            // markers: true
        });

        // const salamElement = document.getElementById('assalam'); 

        // const suratElement = document.getElementById('surat'); 

        var vol  = 0.70;
        var interval = 200;

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.target.id === 'surat' && entry.isIntersecting) {
                    var fadeout = setInterval(
                        () => {
                            // Reduce volume by 0.05 as long as it is above 0
                            // This works as long as you start with a multiple of 0.05!
                            if (vol >= 0.10) {
                                vol -= 0.10;
                                this.audioElement.volume = vol;
                            }
                            else {
                                // Stop the setInterval when 0 is reached
                                this.audioElement.pause()
                                this.isMusicPlaying=false
                                clearInterval(fadeout);
                            }
                        }, interval);
                } else {
                    vol = 0.7
                    this.audioElement.volume = vol
                    this.audioElement.play()
                    this.isMusicPlaying=true
                    // audioElement.play();
                }
            });
        });

        const suratElement = document.getElementById('surat');
        observer.observe(suratElement);

        

        // const container = document.getElementById('container');


        // container.addEventListener('scroll', () => { 
        //     if (this.isVisible(salamElement)) { 
        //         this.audioElement.volume = vol
        //         this.audioElement.play()
        //         this.isMusicPlaying=true
        //     } else { 
        //         vol  = 0.70;
        //         var interval = 200;
        //         if (this.isVisible(suratElement)) {
        //             var fadeout = setInterval(
        //                 () => {
        //                     // Reduce volume by 0.05 as long as it is above 0
        //                     // This works as long as you start with a multiple of 0.05!
        //                     vol -= 0.10;
        //                     if (vol > 0) {
        //                         this.audioElement.volume = vol;
        //                     }
        //                     else {
        //                         // Stop the setInterval when 0 is reached
        //                         this.audioElement.pause()
        //                         this.isMusicPlaying=false
        //                         clearInterval(fadeout);
        //                     }
        //                 }, interval);
        //         } 
        //     } 
        // }); 

        
        // Ar-Rum transition
        gsap.from(['#flower-left-top', '#flower-right-top'], {
            y: -180,
            delay: 0.3,
            opacity: 0,
            duration: 1.7
        })

        gsap.from(['#flower-left-bottom', '#flower-right-bottom'], {
            y: 180,
            delay: 0.3,
            opacity:0,
            duration: 1.7
        })

        gsap.from('#graphic-top-left', {
            x:-180,
            y: -180,
            duration: 1.7
        })
        
        gsap.from('#graphic-top-right', {
            x: 180,
            y: -180,
            duration: 1.7
        })

        gsap.from('#graphic-bottom-left', {
            x: -180,
            y: 180,
            duration: 1.7
        })

        gsap.from('#graphic-bottom-right', {
            x: 180,
            y: 180,
            duration: 1.7
        })

        gsap.from('#ar-rum', {
            opacity: 0,
            duration: 1.7
        })

        // Salam transition
        let tlSalam = gsap.timeline({
            scrollTrigger:{
                trigger: '#salam',
                start: "top bottom",  
                end: "bottom bottom", 
                scrub: true
            },
        })

        tlSalam.to('#graphic-top-left', {
            xPercent: -50,
            right:"50%",
            left:"50%",
            yPercent: 10,
            rotate: 60
        }, 0)

        tlSalam.to('#graphic-top-right', {
            xPercent: 35,
            yPercent: -50,
            top:"50%",
            bottom:"50%",
            rotate: 90
        }, 0)

        tlSalam.to('#graphic-bottom-left', {
            xPercent: -35,
            yPercent: 50,
            bottom:"50%",
            rotate: 90
        }, 0)

        tlSalam.to('#graphic-bottom-right', {
            xPercent: -50,
            yPercent: -10,
            right:"50%",
            left:"50%",
            rotate: 60
        }, 0)

        tlSalam.to(['#scroll-to-top', '#music-player'], {
            opacity: 1
        }, 0)

        // Couple transition
        let tlCouple = gsap.timeline({
            scrollTrigger:{
                trigger: '#couple',
                start: "top bottom",  
                end: "bottom bottom", 
                scrub: true
            },
        })

        tlCouple.to(['#flower-left-top', '#flower-right-top'], {
            duration: 1.7,
            yPercent: -120,
        })

        tlCouple.to(['#flower-left-bottom', '#flower-right-bottom'], {
            duration: 1.7,
            yPercent: 120,
        }, "<")

        tlCouple.to('#graphic-top-left', {
            duration: 1.7,
            top: "-100%",
        }, "<")

        tlCouple.to('#graphic-top-right', {
            duration: 1.7,
            right: "-100%",
        }, "<")

        tlCouple.to('#graphic-bottom-left', {
            duration: 1.7,
            left: "-100%",
        }, "<")

        tlCouple.to('#graphic-bottom-right', {
            duration: 1.7,
            bottom: "-100%",
        }, "<")

        tlCouple.to("#graphic-blue-lighter-top", {
            duration: 1.7,
            top: "-22%",
        }, "+=0.15")

        tlCouple.to("#graphic-blue-lighter-bottom", {
            duration: 1.7,
            bottom: "-22%",
        }, "<")

        let tlCoupleInfo = gsap.timeline({
            scrollTrigger:{
                trigger: '#couple',
                start: "top center",  
                end: "+=100%",
                toggleActions: "play none none reverse"
            },
        })

        tlCoupleInfo.fromTo('#initial-couple', {
            opacity: 0
        }, {
            opacity: 0.8, 
            duration: 0.5,
            immediateRender: false, 
            ease: "back"
        }, 0)

        tlCoupleInfo.fromTo('#bride-info', { 
            opacity: 0,
        }, {
            marginLeft: 0,
            opacity: 1,
            duration: 1.7,
            immediateRender: false,
            ease: "power1.inOut"
        }, "-=0.25")

        tlCoupleInfo.to('#groom-info', {
            marginRight: 0,
            opacity: 1,
            duration: 1.7,
            immediateRender: false,
            ease: "power1.inOut"
        }, "<")

        tlCoupleInfo.to("#bride-photo", {
            opacity: 1,
            left: 0,
            duration: 1,
            immediateRender: false
        }, "-=1")

        tlCoupleInfo.to("#groom-photo", {
            opacity: 1,
            right: 0,
            duration: 1,
            immediateRender: false
        }, "-=1")

        tlCoupleInfo.to(["#flower-top-left-bride", "#flower-bottom-right-bride", "#flower-top-left-groom", "#flower-bottom-right-groom"], {
            opacity: 1,
            duration: 0.5,
            immediateRender: false
        }, "-=0.25")

        // Akad transition
        let tlAkad = gsap.timeline({
            scrollTrigger:{
                trigger: '#akad',
                start: "top bottom",  
                end: "bottom bottom", 
                scrub: true
            },
        })

        tlAkad.to(['#graphic-plain', '#flower-top'], {
            opacity: 1
        })

        gsap.to(['#graphic-blue-lighter-top', '#graphic-blue-lighter-bottom'], {
            scrollTrigger:{
                trigger: '#akad',
                start: "top bottom",   
            },
            rotation: "60",
            duration: 3,
            ease: "none",
            repeat:-1
        })

        let tlAkadInfo = gsap.timeline({
            scrollTrigger:{
                trigger: '#akad',
                start: "top center",  
                end: "+=100%",
                toggleActions: "play none none reverse"
            },
        })

        tlAkadInfo.to('#akad-nikah', {
            duration: 1.2,
            opacity: 1
        })

        tlAkadInfo.to('#event-akad', {
            duration: 1.2,
            opacity: 1,
            marginTop: 0
        }, "-=1")

        tlAkadInfo.to('#location-akad', {
            duration: 1.2,
            opacity: 1
        }, "-=0.5")
        
        // Resepsi transition
        let tlResepsi = gsap.timeline({
            scrollTrigger:{
                trigger: '#resepsi',
                start: "top bottom",  
                end: "bottom bottom", 
                scrub: true
            },
        })

        tlResepsi.to(['#flower-top', '#akad-nikah', '#event-akad', '#location-akad'], {
            opacity: 0
        })

        tlResepsi.to('#graphic-plain', {
            duration: 1.2,
            rotate: -60
        }, "<")  

        tlResepsi.to(['#flower-bottom'], {
            opacity: 1
        }, "-=0.5")
        
        let tlResepsiInfo = gsap.timeline({
            scrollTrigger:{
                trigger: '#resepsi',
                start: "top center",  
                end: "+=100%",
                toggleActions: "play none none reverse"
            },
        })

        tlResepsiInfo.to(['#resepsi-nikah', '#timespan'], {
            duration: 1.2,
            opacity: 1
        })

        tlResepsiInfo.to('#event-resepsi', {
            duration: 1.2,
            opacity: 1,
            marginTop: 0
        }, "-=1")

        tlResepsiInfo.to('#location-resepsi', {
            duration: 1.2,
            opacity: 1
        }, "-=0.5")

        // Gift transition
        let tlGift = gsap.timeline({
            scrollTrigger:{
                trigger: '#gift',
                start: "top bottom",  
                end: "bottom bottom", 
                scrub: true
            },
        })

        tlGift.to(['#graphic-plain', '#flower-bottom', '#rumagadang'], {
            duration: 1.7,
            opacity: 0
        })

        tlGift.to('#graphic-blue-lighter-top', {
            duration: 1.7,
            top: "-66.66%",
            rotation: "0",
        }, "<")

        tlGift.to('#graphic-blue-lighter-bottom', {
            duration: 1.7,
            bottom: "-66.66%",
            rotation: "0",
        }, "<")

        tlGift.to("#flower-left-top",{
            yPercent: 35,
            duration: 2
        }, "+=0.5")

        tlGift.to("#flower-right-bottom",{
            yPercent: -35,
            duration: 2
        }, "<")

        let tlGiftInfo = gsap.timeline({
            scrollTrigger:{
                trigger: '#gift',
                start: "top center",  
                end: "+=100%",
                toggleActions: "play none none reverse"
            },
        })

        tlGiftInfo.to(["#gift-header", "#gift-footer"], {
            left: 0,
            right: 0,
            opacity: 1,
            duration: 1.2
        })

        tlGiftInfo.to(["#gift-header-photo", "#gift-footer-photo"], {
            opacity: 1,
            duration: 1.2
        }, "<")
        
        tlGiftInfo.to(["#rectangle-top", "#rectangle-bottom"], {
            opacity: 1,
            backdropFilter: "blur(10px)",
            duration: 1.2
        }, "<")

        tlGiftInfo.to(["#wedding-gift", "#gift-ins", "#gift-info"], {
            opacity: 1,
            zIndex: 20,
            duration: 0.7,
        }, "-=0.15")

        tlGiftInfo.to("#gift-info", {
            duration: 0.7,
            backdropFilter: "blur(10px)",
        }, "<")
        
        // Wishes transition
        let tlWishes = gsap.timeline({
            scrollTrigger:{
                trigger: '#wishes',
                start: "top bottom",  
                end: "bottom bottom", 
                scrub: true
            },
        })

        tlWishes.to("#flower-left-top",{
            yPercent: -100,
            duration: 1.7
        })

        tlWishes.to("#flower-right-bottom",{
            yPercent: 100,
            duration: 1.7
        }, "<")

        tlWishes.to("#flower-left-corner",{
            opacity: 0.5,
            y: 40,
            x: 40,
            duration: 1.7
        }, "+=0.25")

        tlWishes.to("#flower-right-corner",{
            opacity: 0.5,
            y: -40,
            x: -40,
            duration: 1.7
        }, "<")

        // Gallery transition
        let tlGallery = gsap.timeline({
            scrollTrigger:{
                trigger: '#gallery',
                start: "top bottom",  
                end: "bottom bottom", 
                scrub: true
            },
        })

        tlGallery.to("#flower-left-corner", {
            opacity: 0,
            y: -40,
            x: -40,
            duration: 1.7
        })

        tlGallery.to("#flower-right-corner", {
            opacity: 0,
            y: 40,
            x: 40,
            duration: 1.7
        }, "<")

        tlGallery.to("#flower-left-top", {
            yPercent: 80,
            xPercent: -15,
            duration: 1.7
        })

        tlGallery.to("#flower-right-top", {
            yPercent: 80,
            xPercent: 15,
            duration: 1.7
        }, "<")

        // Thank You transition
        let tlThankYou = gsap.timeline({
            scrollTrigger:{
                trigger: '#thank-you',
                start: "top bottom",  
                end: "bottom bottom", 
                scrub: true
            },
        })

        tlThankYou.to("#flower-left-top", {
            xPercent: -100,
            duration: 1.7
        })

        tlThankYou.to("#flower-right-top", {
            xPercent: 100,
            duration: 1.7
        }, "<")

        tlThankYou.to(["#graphic-plain", "#flower-top", "#flower-bottom", "#thank-you-words"], {
            opacity: 1,
            duration: 1.7
        }, "+=0.5")

        tlThankYou.to(["#rumagadang"], {
            opacity: 0.2,
            duration: 1.7
        }, "<")

        tlThankYou.to('#graphic-blue-lighter-top', {
            duration: 1.7,
            top: "-22%",
        }, "<")

        tlThankYou.to('#graphic-blue-lighter-bottom', {
            duration: 1.7,
            bottom: "-22%",
        }, "<")

        // Closing transition
        let tlClosing = gsap.timeline({
            scrollTrigger:{
                trigger: '#closing',
                start: "top bottom",  
                end: "bottom bottom", 
                scrub: true
            },
        })

        tlClosing.to('#graphic-blue-lighter-top', {
            duration: 1.7,
            top: "-66%",
        })

        tlClosing.to('#graphic-blue-lighter-bottom', {
            duration: 1.7,
            bottom: "-66%",
        }, "<")

        tlClosing.to(["#graphic-plain", "#flower-top", "#flower-bottom"], {
            opacity: 0,
            duration: 1.7
        }, "<")

        tlClosing.to('#bg-flower-top-left', {
            duration: 1.7,
            opacity: 1,
            top: -50,
            left: -50
        }, ">")

        tlClosing.to('#bg-flower-bottom-right', {
            duration: 1.7,
            opacity: 1,
            bottom: -50,
            right: -50
        }, "<")

        tlClosing.to('#flower-left-corner', {
            duration: 1.7,
            opacity: 1,
            top: 0,
            left: 0
        }, "<")

        tlClosing.to('#flower-right-corner', {
            duration: 1.7,
            opacity: 1,
            bottom: 0,
            right: 0
        }, "<")

        tlClosing.to('#frame', {
            duration: 1.7,
            opacity: 1,
        }, "<")

        

    },
    methods:{
        isVisible(value){
            const item = value.getBoundingClientRect(); 
            return ( 
                item.top >= 0 && 
                item.left >= 0 && 
                item.bottom <= ( 
                    window.innerHeight || 
                    document.documentElement.clientHeight) && 
                item.right <= ( 
                    window.innerWidth || 
                    document.documentElement.clientWidth) 
            ); 
        },

        playStopMusic() {
            this.isMusicPlaying = !this.isMusicPlaying
            if(this.isMusicPlaying ){
                this.audioElement.play()
            } else {
                this.audioElement.pause()
            }
        },

        scrollToTop(){
            const container = document.getElementById('container');

            container.scrollTo({
                top:0,
                left: 0,
                behavior: 'smooth'
            });
        },  

        copyToClipboard(text){
            console.log(text);
            navigator.clipboard.writeText(text).then(() => {
                console.log('Content copied to clipboard');
                /* Resolved - text copied to clipboard successfully */
            },() => {
                console.error('Failed to copy');
                /* Rejected - text failed to copy to the clipboard */
            });
        },

        chosePhoto(photo) {
            this.photoShowed = photo
        },

        openIG(user){
        console.log('aa');
            const a = document.createElement("a");
            let url = `https://www.instagram.com/${user}`
            a.setAttribute('href', url);
            a.setAttribute('target', '_blank');
            a.click()
        },

      openAkadMap() {
            // window.open(this.urlAkadMap, '_blank').focus();
            const a = document.createElement("a");
            a.setAttribute('href', this.urlAkadMap);
            a.setAttribute('target', '_blank');
            a.click();
        },

        openResepsiMap(){
            const a = document.createElement("a");
            a.setAttribute('href', this.urlResepsiMap);
            a.setAttribute('target', '_blank');
            a.click();
        },

        fetchComments() {
            let promise = databases.listDocuments(DATABASE_ID, COLLECTION_ID);
            promise.then((res) => {
                this.listWishes = res.documents.reverse();
                this.totalWishes = res.total;
                // this.observer = ScrollTrigger.normalizeScroll({
                //     ignore: "#list-wishes, .wish"
                // })
                },
                (err) => {
                console.log(err);
                }
            );
        },

        sendWishes(){
            console.log('aaa');
            if(this.namaTamu === '' || this.wishes === ''){
                return
            }
            this.disabledWishes = true
            this.wishesButton = 'Mengirim...'
            let payload = {
                name : this.namaTamu,
                wish : this.wishes,
                date : new Date(),
                hadir: this.hadir == 'true' ? true : false,
                jumlah: parseInt(this.jumlah)
            }
            const promise = databases.createDocument(DATABASE_ID, COLLECTION_ID, 'unique()', payload);
            promise.then(
                () => {
                    this.fetchComments();
                    this.wishes = '';
                    this.disabledWishes = false
                    this.wishesButton = 'Kirim'
                },
                (err) => {
                    console.log(err);
                    this.disabledWishes = false
                    this.wishesButton = 'Gagal, Silahkan Kirim Ulang'
                }
            );
        }
    }
  }
</script>

<style>
 #container {
    height: 100dvh; /* Ensure the container fills the viewport */
    overflow-y: scroll; /* Enable vertical scrolling */
    scroll-snap-type: y mandatory; /* Enable snapping on the y-axis */
 }

 .page {
    /* height: 100dvh;  */
    scroll-snap-align: start; /* Snap each section to the top of the viewport */
    scroll-behavior: smooth; /* Enable smooth scrolling */
    scroll-snap-stop: always; /* Ensure smooth snap even when user manually scrolls */
    transition-timing-function: ease-in-out; /* Use ease-in-out timing function for smoother transition */
}

.fixed-elements {
    pointer-events: none;
}

/* #container {
  max-height: 100vh;
    overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

.page {
    scroll-snap-align: start;
} */

.flip-verticaly {
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
}

.flip-and-rotate {
    -webkit-transform: rotate(180deg) scaleX(-1);
    transform: rotate(180deg) scaleX(-1);
}

.bg-brides {
    background-image:  url("Bride.png");;
}

.bg-groom {
    background-image:  url("Groom.png");;
}

.button-download {
    background: linear-gradient(266deg, #EFBFEF 0%, #D698D6 101.13%);
    border: 3px solid #E8CDBC;
    box-shadow: 0px 8px 16px 0px rgba(8, 43, 75, 0.16);
}

.box-gift {
    border: 1px solid rgba(208, 203, 203, 0.60);
    background: linear-gradient(123deg, rgba(187, 182, 182, 0.20) 21.82%, rgba(226, 223, 223, 0.10) 71.63%);
    box-shadow: 0px 4px 24px -1px rgba(208, 203, 203, 0.20);
    backdrop-filter: blur(10px);
}

.rounded-br-10xl {
    border-bottom-right-radius: 5rem;
}

.rounded-tl-10xl {
    border-top-left-radius: 5rem;
}
.bg-field{
    background-color: rgba(255, 255, 255, 0.6);
}

.bg-wishes{
    background-color: rgba(255, 237, 255, 0.2);
}

#send-wishes {
    border-radius: 62.4375rem;
    border: 3px solid #E8CDBC;  
    background: linear-gradient(266deg, #E5ABB5 -3.39%, #782D41 102.73%);
    box-shadow: 0px 8px 16px 0px rgba(188,166,152,0.16);
}

@media (min-width: 1024px) {
    .graphic-corner {
        width: 450px;
    }
    #graphic-blue-lighter-top {
        width: 450px;
        top: -60%;
    }
    #graphic-blue-lighter-bottom {
        width: 450px;
        bottom: -60%;
    } 
}

@media (max-width: 1024px) {
    /* #graphic-blue-lighter-top {
        top: -60%;
    }
    #graphic-blue-lighter-bottom {
        bottom: -60%;
    } */
}
</style>