<template>
    <img :src="flowerOneSide" alt="flower-left-top" class="fixed -left-7 -top-5 opacity-50 z-10" width="190" id="flower-left-top" fetchpriority="high">
    <img :src="flowerOneSide" alt="flower-right-top" class="fixed -right-7 -top-5 opacity-50 flip-verticaly z-10" width="190" id="flower-right-top" fetchpriority="high">
    <img :src="flowerOneSide" alt="flower-left-bottom" class="fixed -left-7 -bottom-5 opacity-50 flip-and-rotate z-10" width="190" id="flower-left-bottom" fetchpriority="high">
    <img :src="flowerOneSide" alt="flower-right-bottom" class="fixed -right-7 -bottom-5 opacity-50 rotate-180 z-10" width="190" id="flower-right-bottom" fetchpriority="high">

    <img :src="graphic" alt="graphic" class="fixed z-30 graphic-corner -left-52 -top-64" :width="graphicWidth" id="graphic-top-left">
    <img :src="graphic" alt="graphic" class="fixed z-30 graphic-corner -right-52 -top-64" :width="graphicWidth" id="graphic-top-right">
    <img :src="graphic" alt="graphic" class="fixed z-30 graphic-corner -left-52 -bottom-64" :width="graphicWidth" id="graphic-bottom-left">
    <img :src="graphic" alt="graphic" class="fixed z-30 graphic-corner -right-52 -bottom-64" :width="graphicWidth" id="graphic-bottom-right">

    <img :src="graphicBlueLighter" alt="graphic-blue-lighter" class="fixed inset-x-0 m-auto opacity-60 -top-2/3 lg:top-full z-10" :width="graphicWidth" id="graphic-blue-lighter-top">
    <img :src="graphicBlueLighter" alt="graphic-blue-lighter" class="fixed inset-x-0 m-auto opacity-60 -bottom-2/3 lg:bottom-full z-10" :width="graphicWidth" id="graphic-blue-lighter-bottom">

    <img :src="graphicPlain" alt="graphic-plain" class="fixed inset-0 m-auto flex justify-center items-center w-full lg:w-1/3 px-1 opacity-0 z-10" id="graphic-plain">

    <img :src="flowerDecor" alt="flower-top" class="fixed inset-0 m-auto -top-80 w-full lg:w-1/3 px-3 opacity-0 z-10" id="flower-top">

    <img :src="flowerDecor" alt="flower-bottom" class="fixed inset-0 m-auto -bottom-80 w-full lg:w-1/3 px-3 rotate-180 opacity-0 z-10" id="flower-bottom">

    <img :src="frameUrl" alt="frame" class="fixed h-dvh inset-0 m-auto flex justify-center items-center p-2 z-10 opacity-0" id="frame">

    <img :src="bgFlower" alt="bg-flower-topleft" width="700" class="fixed -left-28 -top-28 z-10 opacity-0" id="bg-flower-top-left">
    <img :src="bgFlower" alt="bg-flower-bottomright" width="700" class="fixed -right-28 -bottom-28 z-10 rotate-180 opacity-0" id="bg-flower-bottom-right">

    <img :src="flowerTopLeft" alt="flower-left-corner" class="fixed -left-20 -top-20 opacity-0 z-10" width="350" id="flower-left-corner" fetchpriority="high">
    <img :src="flowerBottomRight" alt="flower-right-corner" class="fixed -right-20 -bottom-20 opacity-0 z-10" width="350" id="flower-right-corner" fetchpriority="high">

    <!-- Content -->
    <div class="relative overflow-x-hidden flex flex-col items-center">
        <!-- Ar-Rum -->
        <div class="panel h-screen flex flex-col justify-center items-center mx-12 lg:w-1/2 z-20" id="ar-rum">
            <span class="font-bold text-red-darkest mb-4">Q.S. Ar Rum: 21</span>
            <p class="font-semibold text-blue-darkest text-center">Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.</p>
        </div>

        <!-- Salam -->
        <div class="panel h-screen flex flex-col justify-center items-center mx-12 z-20" id="salam">
            <span class="font-bold text-red-darkest mb-4">Assalamu'alaikum Wr Wb</span>
            <p class="font-semibold text-blue-darkest text-center">Tanpa mengurangi rasa hormat,<br/> kami bermaksud mengundang Bapak/Ibu/Saudara/i pada acara pernikahan kami</p>
        </div>

        <!-- Couple -->
        <div class="panel h-screen flex flex-col justify-between items-center z-20" id="couple">
            <initial colors="#782D41" id="initial-couple" class="mt-14 opacity-0"></initial>

            <div class="flex flex-col h-auto items-center mb-20 relative">
                <!-- Bride Info -->
                <div class="flex flex-col items-center mb-8 static -ml-40 opacity-0" id="bride-info">

                    <div class="relative">
                        <span class="name text-2xl text-red-darkest font-semibold z-10">Ainun Rahmania</span>
                        <span class="absolute bottom-0 left-0 -ml-28 name text-7xl font-bold text-red-darkest opacity-30" id="bride-nickname">Ainun</span>
                    </div>

                    <span class="text-sm text-gray-darkest font-semibold text-center my-2">Putri dari Bpk. H. Mhd. Hasymi SE, Akt, MSi, CA, ACPA<br/>& Ibu Dra. Hj. Herlina</span>
                    <button class="bg-brown p-1 rounded-md" @clik="openIG('nia_arahmania')">
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
                <div class="flex flex-col items-center mt-10 -mr-40 opacity-0" id="groom-info">

                    <div class="relative">
                        <span class="name text-2xl text-red-darkest font-semibold z-10">Arief Trifianto Nurichsan</span>
                        <span class="absolute bottom-0 right-0 -mr-16 name text-7xl font-bold text-brown-darkest opacity-30" id="groom-nickname">Arief</span>
                    </div>

                    <span class="text-sm text-gray-darkest font-semibold text-center my-2">Putra dari Bpk. (Alm) Drs. H. Sudarman<br/>& Ibu Hj. Yenni Fatia Riyani</span>
                    <button class="bg-brown p-1 rounded-md" @clik="openIG('arieftrifianto')">
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.125 2.1875C3.95038 2.1875 2.1875 3.95038 2.1875 6.125V14.875C2.1875 17.0496 3.95038 18.8125 6.125 18.8125H14.875C17.0496 18.8125 18.8125 17.0496 18.8125 14.875V6.125C18.8125 3.95038 17.0496 2.1875 14.875 2.1875H6.125ZM1.3125 6.125C1.3125 3.46713 3.46713 1.3125 6.125 1.3125H14.875C17.5329 1.3125 19.6875 3.46713 19.6875 6.125V14.875C19.6875 17.5329 17.5329 19.6875 14.875 19.6875H6.125C3.46713 19.6875 1.3125 17.5329 1.3125 14.875V6.125Z" fill="#98877B"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9871 7.43279C10.3499 7.3383 9.69912 7.44714 9.12735 7.74382C8.55558 8.0405 8.09192 8.50991 7.80231 9.08529C7.51271 9.66068 7.4119 10.3127 7.51424 10.9487C7.61658 11.5847 7.91684 12.1722 8.37233 12.6277C8.82782 13.0832 9.41533 13.3834 10.0513 13.4858C10.6873 13.5881 11.3393 13.4873 11.9147 13.1977C12.4901 12.9081 12.9595 12.4444 13.2562 11.8727C13.5529 11.3009 13.6617 10.6501 13.5672 10.0129C13.4708 9.36299 13.168 8.76126 12.7034 8.29665C12.2387 7.83203 11.637 7.52917 10.9871 7.43279ZM8.72435 6.96715C9.45948 6.5857 10.2962 6.44577 11.1154 6.56725C11.9511 6.69117 12.7247 7.08057 13.3221 7.67793C13.9194 8.27529 14.3088 9.04894 14.4328 9.8846C14.5542 10.7038 14.4143 11.5405 14.0329 12.2757C13.6514 13.0108 13.0479 13.6069 12.3081 13.9793C11.5683 14.3516 10.73 14.4812 9.9123 14.3497C9.09461 14.2181 8.33924 13.832 7.75361 13.2464C7.16799 12.6608 6.78193 11.9054 6.65035 11.0877C6.51878 10.27 6.64838 9.43168 7.02073 8.6919C7.39308 7.95212 7.98922 7.34859 8.72435 6.96715Z" fill="#98877B"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.875 5.6875C14.875 5.44588 15.0709 5.25 15.3125 5.25H15.3213C15.5629 5.25 15.7587 5.44588 15.7587 5.6875C15.7587 5.92912 15.5629 6.125 15.3213 6.125H15.3125C15.0709 6.125 14.875 5.92912 14.875 5.6875Z" fill="#98877B"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Akad -->
        <div class="panel h-screen flex flex-col justify-start items-center relative w-full z-20" id="akad">
            <span class="name mt-16 text-3xl text-red-darkest font-semibold opacity-0" id="akad-nikah">Akad Nikah</span>

            <div class="absolute inset-0 flex flex-col justify-center items-center z-20">
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

        </div>

        <!-- Resepsi -->
        <div class="panel h-screen flex flex-col justify-start items-center relative w-full z-20" id="resepsi">
            <span class="name mt-16 text-3xl text-red-darkest font-semibold opacity-0" id="resepsi-nikah">Resepsi Pernikahan</span>

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

            <div class="absolute inset-0 flex flex-col justify-center items-center -mt-12 z-20">
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
        </div>

        <!-- Gift -->
        <div class="panel bg-red-lightest h-screen flex flex-col justify-center items-center relative w-full" id="gift">
            <!-- Gift Header -->
            <div class="absolute top-0 w-full z-20 -left-40 opacity-0" id="gift-header">
                <div id="rectangle-top" class="box-gift top-0 absolute w-full h-44 rounded-br-10xl z-20"></div>
                <img :src="giftHeader" alt="gift-header" class="top-0 absolute rounded-br-10xl z-20" id="gift-header-photo"/>
            </div>


            <div class="flex flex-col justify-center items-center mx-6 z-10">
                <span class="name text-3xl text-red-darkest font-semibold opacity-0" id="wedding-gift" >Wedding Gift</span>

                <p class="text-red-darkest font-medium text-center my-7 lg:w-1/3 z-30 opacity-0" id="gift-ins">
                    Bagi bapak/ibu/saudara/i yang ingin mengirimkan hadiah pernikahan dapat melalui rekening di bawah ini:
                </p>

                <div class="box-gift flex flex-col p-5 rounded-2xl text-blue-darkest w-full lg:w-1/3  opacity-0" id="gift-info">
                    <span class="font-bold">BCA</span>
                    <div class="flex my-2">
                        <span class="text-lg font-semibold">108 477 2413</span>
                    </div>
                    <span class="font-semibold">a.n Arief Trifianto Nurichsan</span>
                </div> 
            </div>

            <!-- Gift Footer -->
            <div class="absolute bottom-0 w-full z-20 -right-40 opacity-0" id="gift-footer">
                <div id="rectangle-bottom" class="box-gift bottom-0 absolute w-full h-44 rounded-tl-10xl z-20"></div>
                <img :src="giftBottom" alt="gift-footer" class="bottom-0 absolute rounded-tl-10xl z-20" id="gift-footer-photo"/>
            </div>
        </div>

        <!-- Wishes -->
        <div class="panel bg-red-lightest h-screen flex flex-col justify-center items-center relative w-full" id="wishes">
            <div class="flex flex-col items-center my-5 z-20 w-full lg:w-1/2 px-6">
                <initial colors="#5E2131" id="initial-wishes" class="opacity-80"></initial>

                <span class="name text-red-darkest text-4xl font-semibold my-3 opacity-100">Wedding Wishes</span>

                <input type="text" v-model="namaTamu"  placeholder="Nama" id="nama" 
                    class="w-full h-10 px-3 bg-field border border-blue rounded-lg focus:ring-1 focus:outline-none focus:border-red-dark text-blue-darkest" />

                <textarea type="text" id="wishes" v-model="wishes" cols="30" rows="4" 
                    placeholder="Tulis Harapan dan Doa terbaik untuk kedua mempelai"
                    class="my-3 w-full p-3 bg-field border border-blue rounded-lg focus:ring-1 focus:outline-none focus:border-red-dark text-blue-darkest">
                </textarea>

                <button id="send-wishes" class="w-full py-3 font-semibold text-gray-lightest" @click="sendWishes">Kirim</button>

                <img :src="border" alt="border" class="my-2 w-full" height="18" id="border">

                <!-- wishes -->
                <div class="w-full overflow-y-auto h-96 flex flex-col" id="list-wishes">
                    <div 
                        class="flex flex-col w-full p-2 border border-red-light border-2 bg-wishes backdrop-blur rounded-xl mb-2"
                        v-for="wish in listWishes">
                        <p class="text-base text-blue-darkest whitespace-pre-wrap">{{ wish.wish }}</p>
                        <span class="mt-1 text-base font-semibold text-brown-darkest">- {{ wish.name }} -</span>
                    </div>
                </div>

            </div>
        </div>

        <!-- Gallery -->
        <div class="panel bg-gray-lightest h-screen flex flex-col justify-center items-center relative w-full" id="gallery">

            <initial colors="#5E2131" id="initial-gallery" class="opacity-80"></initial>

            <span class="name mt-3 text-3xl text-red-darkest font-semibold" id="our-gallery">Our Galley</span>

            <div class="flex h-4/5 justify-center items-center mt-8 font-black w-full"> 
                BELOM ADA 
            </div>

        </div>

        <!-- Thank You -->
        <div class="panel bg-gray-lightest h-screen flex flex-col justify-center items-center relative w-full" id="thank-you">
            
            <div class="flex flex-col h-screen justify-center items-center z-20 opacity-0 w-full lg:w-1/3" id="thank-you-words">
                <span class="name text-brown text-3xl font-semibold">Terima Kasih</span>
                <p class="mt-3 px-7 text-brown-lightest text-base text-center">
                    Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan do’a restu kepada kami.
                </p>
                <span class="mt-2 text-brown-dark font-semibold">Wassalamu‘alaikum Wr Wb</span>
            </div>

        </div>


        <!-- Closing -->
        <div class="panel bg-blue-darkest h-screen flex flex-col justify-center items-center relative w-full" id="closing">

            <div class="flex flex-col justify-center items-center my-8 text-brown font-semibold z-10 text-lg">
                <span>Kami yang berbahagia</span>
                <span >Keluarga Besar</span>
            </div>

            <div class="text-brown text-lg font-semibold mt-24">
                 AINUN & ARIEF 
            </div>
            <initial colors="#E5ABB5" id="initial-wishes" class="mt-4 opacity-80"></initial>
        
        </div>

    </div>

</template>

<script>
import Initial from "./Initial.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { databases, DATABASE_ID, COLLECTION_ID } from './plugins/appwrite';

  export default {
    components:{
        Initial
    }, 
    
    data() {
        return {
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
            queryString: window.location.search,
            listWishes: [],
            totalWishes: 0,

            bgFlower: new URL('./assets/flower_one_color.svg', import.meta.url).href,
            frameUrl: new URL('./assets/frame.svg', import.meta.url).href,
        }
        
    },
    mounted(){
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

        let panels = gsap.utils.toArray(".panel");
        this.observer = ScrollTrigger.normalizeScroll(true)
        
        document.addEventListener("touchstart", e => {
            // console.log(this.scrollTween);
            // console.log(e);
            if (this.scrollTween) {
                e.preventDefault();
                e.stopImmediatePropagation();
            }
        }, {capture: true, passive: false})

        panels.forEach((panel, i) => {
            ScrollTrigger.create({
                trigger: panel,
                start: "top bottom",
                end: "+=199%",
                onToggle: self => {
                    console.log("onToggle", self);
                    self.isActive && !this.scrollTween && this.goToSection(i)
                },
                // onUpdate: self => {
                //     console.log("onUpdate", self.trigger.offsetParent);
                // }
            });
        });

        ScrollTrigger.create({
            start: 0, 
            end: "max",
            snap: 1 / (panels.length - 1)
        })

        // let sections = gsap.utils.toArray(".panel");
        // sections.forEach((eachPanel,i) => {
        //     ScrollTrigger.create({
        //         trigger: eachPanel,
        //         start: "top bottom-=1",
        //         end: "bottom top+=1",
        //         onEnter: () => this.goToSection(eachPanel),
        //         onEnterBack: () => this.goToSection(eachPanel)
        //     });
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
        openIG(user){
            const a = document.createElement("a");
            let url = `https://www.instagram.com/${user}`
            a.setAttribute('href', url);
            a.setAttribute('target', '_blank');
            a.click()
        },

        goToSection(i) {
            console.log(i);
            this.scrollTween = gsap.to(window, {
                scrollTo: {y: i * innerHeight, autoKill: false},
                onStart: () => {
                    this.observer.disable(); // for touch devices, as soon as we start forcing scroll it should stop any current touch-scrolling, so we just disable() and enable() the normalizeScroll observer
                    this.observer.enable();
                },
                duration: 1,
                onComplete: () => this.scrollTween = null,
                overwrite: true
            });
        },
    //     goToSection(section) {
    //     if (this.scrolling.enabled) {
    //       this.disableScroll();
    //       gsap.to(window, {
    //       scrollTo: {
    //           y: section,
    //           // y: isBack && i===0 ? sections[0].offsetTop : sections[i+1]?.offsetTop, // Scroll to the top of the panel
    //           autoKill: false
    //       },
    //       onComplete: this.enableScroll,
    //       duration: 1
    //       });
    //     }
    //   },

      disableScroll() {
        if (this.scrolling.enabled) {
          this.scrolling.enabled = false;
          window.addEventListener("scroll", gsap.ticker.tick, {passive: true});
          this.scrolling.events.forEach((e, i) => (i ? document : window).addEventListener(e, this.scrolling.prevent, {passive: false}));
        }
      },

      enableScroll() {
        if (!this.scrolling.enabled) {
          this.scrolling.enabled = true;
          window.removeEventListener("scroll", gsap.ticker.tick);
          this.scrolling.events.forEach((e, i) =>
          (i ? document : window).removeEventListener(e, this.scrolling.prevent)
          );
        }
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
                },
                (err) => {
                console.log(err);
                }
            );
        },

        sendWishes(){
            if(this.namaTamu === '' || this.wishes === ''){
                return
            }
            let payload = {
                name : this.namaTamu,
                wish : this.wishes,
                date : new Date()
            }
            const promise = databases.createDocument(DATABASE_ID, COLLECTION_ID, 'unique()', payload);
            promise.then(
                () => {
                this.fetchComments();
                this.wishes = '';
                },
                (err) => {
                console.log(err);
                }
            );
        }
    }
  }
</script>

<style scoped>
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
    /* #graphic-blue-lighter-top {
        width: 450px;
        top: -60%;
    }
    #graphic-blue-lighter-bottom {
        width: 450px;
        bottom: -60%;
    } */
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