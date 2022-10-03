<script>
import $ from 'jquery';

// Import Swiper Vue.js components
import { Navigation, Pagination, Scrollbar, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import ResultFootprintCard from '@/components/storybloks/ResultFootprintCard.vue';
import ResultOfficeCard from '@/components/storybloks/ResultOfficeCard.vue';
import ResultFinalCard from '@/components/storybloks/ResultFinalCard.vue';

export default {
    props: {
      officeConsumption: {
        type: Number,
      },
      commuteOutput: {
        type: Number,
      },
      savings: {
        type: Number,
      }
    },
    components: {
      Swiper,
      SwiperSlide,
      ResultFootprintCard,
      ResultOfficeCard,
      ResultFinalCard,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, Pagination, Scrollbar, EffectFade]
      };
    },
    computed: {
      drives() {
        //return Math.round((this.savings / 129600) / 100) * 100;
        return Math.round((this.savings / 129600) * 10) / 10;
      },
      flights() {
        return Math.round((this.savings / 489000) * 10) / 10;
      },
      schnitzel() {
        return Math.round((this.savings / 870) * 10) / 10;
      },
      kms() {
        return Math.round(this.savings * 1000 / 216,6); // kg to g, div by 216 because car equivalency, the rest is rounding
      }
    }
  };


</script>



<template>

  <Swiper class="blog-slider"
    :modules="modules"
    loop="true"
    :mousewheel="{ invert: false }"
    :slides-per-view="1"
    :space-between="140"
    :pagination="{ el: '.blog-slider__pagination', clickable: true}"
    :navigation="{ nextEl: '.swipe-button'}"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <SwiperSlide class="blog-slider__item">
      <div class="blog-slider__wrp swiper-wrapper swiper-slide">
        <div class="blog-slider__img">      
          <span class="">{{ commuteOutput }}</span>
          <img src="@/assets/footprint-01.svg" alt="logo">
        </div>
        <div class="blog-slider__content">
          <Suspense>
            <template #default>
              <ResultFootprintCard />
            </template>
        
            <template #fallback>
              <div>Loading...</div>
            </template>
          </Suspense>
          <!--<p>Weniger Pendeln, weniger CO2 Emissionen, mehr Freizeit und Lebensqualität klingt utopisch?</p>
          <p><strong>Gemeindehubs</strong> können einen echten Unterschied machen!</p>-->
        </div>
      </div>
    </SwiperSlide>
    <!--<SwiperSlide class="blog-slider__item">
      <div class="blog-slider__wrp swiper-wrapper swiper-slide">
        <div class="blog-slider__img">
          <span class="">{{ officeConsumption }}</span>
          <img src="@/assets/footprint-01.svg" alt="logo">
        </div>
        <div class="blog-slider__content">
          <Suspense>
            <template #default>
              <ResultOfficeCard />
            </template>
        
            <template #fallback>
              <div>Loading...</div>
            </template>
          </Suspense>
        </div>
      </div>
    </SwiperSlide>-->
    <SwiperSlide class="blog-slider__item">
      <div class="blog-slider__wrp swiper-wrapper swiper-slide">
        <div class="blog-slider__img green">
          <span class="">{{ savings }}</span>
          <img src="@/assets/footprint-01.svg" alt="logo">
        </div>
        <div class="blog-slider__content">
          <Suspense>
            <template #default>
              <ResultFinalCard />
            </template>
        
            <template #fallback>
              <div>Loading...</div>
            </template>
          </Suspense>
          <div class="equivalents">
            <div class="icon-container">
              <a :href="'https://www.facebook.com/share.php?u=www.co2work.at&quote='+ kms +'%20km%20mit%20dem%20(Verbrenner-)auto%20sind%20mein%20Einsparungspotential!%20Lass%20Dir%20den%20CO2%20Fußabdruck%20für%20deinen%20Arbeitsweg%20berechnen'" target="_Blank">
                <div class="icon">
                  <li><span class="fb-icon">f</span></li>
                </div>
              </a>
              <a :href="'https://twitter.com/intent/tweet?text='+ kms +'%20km%20mit%20dem%20(Verbrenner-)auto%20sind%20mein%20Einsparungspotential!%20Lass%20Dir%20den%20CO2%20Fußabdruck%20für%20deinen%20Arbeitsweg%20berechnen'" target="_Blank">
                <div class="icon">
                  <li><span class="fb-icon">t</span></li>        
                </div>
              </a>
            </div>
            <h2><span class="green">{{ kms }}</span> km</h2>
          </div>
          <!--<div class="equivalents">
            <div class="icon-container">
              <a :href="'https://www.facebook.com/share.php?u=www.co2work.at&quote='+ drives +'%20Fahrten%20von%20Wien%20nach%20Bregenz%20sind%20mein%20Einsparungspotential!%20Lass%20Dir%20den%20CO2%20Fußabdruck%20für%20deinen%20Arbeitsweg%20berechnen'" target="_Blank">
                <div class="icon">
                  <li><span class="fb-icon">f</span></li>
                </div>
              </a>
              <a :href="'https://twitter.com/intent/tweet?text='+ drives +'%20Fahrten%20von%20Wien%20nach%20Bregenz%20sind%20mein%20Einsparungspotential!%20Lass%20Dir%20den%20CO2%20Fußabdruck%20für%20deinen%20Arbeitsweg%20berechnen'" target="_Blank">
                <div class="icon">
                  <li><span class="fb-icon">t</span></li>        
                </div>
              </a>
            </div>
            <h2><span class="green">{{ drives }}</span> Autofahrten Wien/Bregenz</h2>
            <h1>oder</h1>
            <div class="icon-container">
              <a :href="'https://www.facebook.com/share.php?u=www.co2work.at&quote='+ flights +'%20Rundreisen%20von%20Salzburg%20nach%20Mallorca%20sind%20mein%20Einsparungspotential!%20Lass%20Dir%20den%20CO2%20Fußabdruck%20für%20deinen%20Arbeitsweg%20berechnen'" target="_Blank">
                <div class="icon">
                  <li><span class="fb-icon">f</span></li>
                </div>
              </a>
              <a :href="'https://twitter.com/intent/tweet?text='+ flights +'%20Rundreisen%20von%20Salzburg%20nach%20Mallorca%20sind%20mein%20Einsparungspotential!%20Lass%20Dir%20den%20CO2%20Fußabdruck%20für%20deinen%20Arbeitsweg%20berechnen'" target="_Blank">
                <div class="icon">
                  <li><span class="fb-icon">t</span></li>        
                </div>
              </a>
            </div>
            <h2><span class="green">{{ flights }}</span> Flüge (Rundreisen) Salzburg/Mallorca</h2>
            <h1>oder</h1>
            <div class="icon-container">
              <a :href="'https://www.facebook.com/share.php?u=www.co2work.at&quote='+ schnitzel +'%20Schnitzel%20sind%20mein%20Einsparungspotential!%20Lass%20Dir%20den%20CO2%20Fußabdruck%20für%20deinen%20Arbeitsweg%20berechnen'" target="_Blank">
                <div class="icon">
                  <li><span class="fb-icon">f</span></li>
                </div>
              </a>
              <a :href="'https://twitter.com/intent/tweet?url=http://co2work.at&amp;text='+ schnitzel +'%20Schnitzel%20sind%20mein%20Einsparungspotential!%20Lass%20Dir%20den%20CO2%20Fußabdruck%20für%20deinen%20Arbeitsweg%20berechnen'" target="_Blank">
                <div class="icon">
                  <li><span class="fb-icon">t</span></li>        
                </div>
              </a>
            </div>
            <h2><span class="green">{{ schnitzel }}</span> Schnitzel</h2>
          </div>-->
        </div>
      </div>
    </SwiperSlide>

     <SwiperPagination class="blog-slider__pagination"></SwiperPagination>
  </Swiper>
</template>

<style lang="scss">

.icon-container-vertical * {
  margin-bottom: 5px;
  background: #22e4ac;
  z-index: 100;
}

.equivalents .icon-container {
  display: flex;
  //justify-content: center;
  float: right;
  margin-right: 10px;
  z-index: 100;
}

.equivalents .icon-container a {
  padding: 2px;
  z-index: 100;
}

.blog-slider__content p {
  font-style: italic;
  font-size: 1.2em;
  color: #062744;
  font-weight: 500;
  margin: 40px 0;
}

.blog-slider__content p strong {
  font-weight: 800;
}

.equivalents h2 {
  color: #4e4a67;
}

.equivalents h2 span {
  font-size: 2em;
}

@import url('https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700,800');

.swiper {
  overflow: visible;
}

.blog-slider {
    width: 90%;
    position: relative;
    max-width: 800px;
    margin: auto;
    background: #fff;
    box-shadow: 0px 8px 5px 2px rgba(34, 35, 58, 0.1);
    padding: 25px;
    border-radius: 25px;
    min-height: 600px;
    height: auto;
    transition: all .3s;
  
   
  @media screen and (max-width: 992px) {
    max-width: 680px;
    //height: 400px;
  }
  
  @media screen and (max-width: 768px) {
    min-height: 500px;
    height: auto;
    margin-top: 180px;
  }
  
  
  @media screen and (max-height: 500px) and (min-width: 992px) {
        height: 350px;
  }
  
  &__item {
    display: flex;
    align-items: center;
    
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
    
    &.swiper-slide-active {
      .blog-slider__img {
        img {
          opacity: 1;
        transition-delay: .3s;
        }
      }
      .blog-slider__content {
        > * {
      
        opacity: 1;
        transform: none;

      @for $i from 0 to 15 {
        &:nth-child(#{$i + 1}) {
          transition-delay: $i * 0.1 + 0.3s;
        }
      }

    }
      }
    }
    
  }
  
  &__img {
     // width: 40%;
    width: 300px;
    flex-shrink: 0;
    height: 300px;
    background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
    box-shadow: 2px 10px 12px 1px rgba(252, 56, 56, 0.2);
    border-radius: 20px;
    transform: translateX(-80px);

    span {
      color: #fff;
      font-family: 'Helvetica Neue', sans-serif; 
      font-size: 4em; 
      font-weight: bold; 
      letter-spacing: -1px; 
      line-height: 1; 
      text-align: center; 

      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 100;
    }
   
    //overflow: hidden;
    
    &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
     
    opacity: 0.8;
}
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      opacity: 0;
      border-radius: 20px;
      transition: all .3s;
    }
    
    
    @media screen and (max-width: 992px) {
      // width: 45%;
    }
    @media screen and (max-width: 768px) {
    transform: translateY(-50%);
      width: 90%;
  }
    @media screen and (max-width: 576px) {
      width: 95%;
    }
     @media screen and (max-height: 500px) and (min-width: 992px) {
        height: 270px;
  }
  }

.green {
  background-image: linear-gradient(147deg, #2af598 0%, #22e4ac 74%);
}
  
  &__content {
    // width: 60%;
    padding-right: 25px;
    clear: both;

    margin-left: -300px;
    margin-top: 310px;

    text-align: left;
    clear: both;
    
    @media screen and (max-width: 992px) {
      // width: 55%;
    }
    @media screen and (max-width: 768px) {
      margin-top: 200px;
      margin-left: -200px;
      text-align: center;
      padding: 0 30px;
    }
    
    @media screen and (max-width: 576px) {
      padding: 0
    }
    > * {
      opacity: 0;
      transform: translateY(25px);
      transition: all .4s;
      
      
    }
    
  }
  
  &__code {
    color: #7b7992;
    margin-bottom: 15px;
    display: block;
    font-weight: 500;
  }
  
  &__title {
    font-size: 24px;
    font-weight: 700;
    color: #0d0925;
    margin-bottom: 20px;
  }
  
  &__text {
    color: #4e4a67;
    margin-bottom: 30px;
    line-height: 1.5em;
  }
  
  &__button {
        display: inline-flex;
    background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
    padding: 15px 35px;
    border-radius: 50px;
    color: #fff;
    box-shadow: 0px 8px 6px rgba(252, 56, 56, 0.2);
    text-decoration: none;
    font-weight: 500;
        justify-content: center;
    text-align: center;
    letter-spacing: 1px;
    @media screen and (max-width: 576px) {
      width: 100%;
    }
    
  }
  .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction {
    bottom: 10px;
    left: 0;
    width: 100%;
    
}
  &__pagination {
   position: absolute;
    z-index: 21;
    right: 20px;
    width: 11px!important;
    text-align: center;
    left: auto!important;
    top: 50%;
    bottom: auto!important;
    transform: translateY(-50%);
    @media screen and (max-width: 768px) {
     transform: translateX(-50%);
          left: 50%!important;
      top: 205px;
    width: 100%!important;
    display: flex;
    justify-content: center;
    align-items: center;
    }
     &.swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 8px 0;
       @media screen and (max-width: 768px) {
         margin: 0 5px;
       }
}
    
    .swiper-pagination-bullet {
    width: 11px;
    height: 11px;
    display: block;
    border-radius: 10px;
    background: #062744;
    opacity: 0.2;
      transition: all .3s;
      &-active {
    opacity: 1;
    background: #fd3838;
    height: 30px;
    box-shadow: 0px 0px 20px rgba(252, 56, 56, 0.3);
        
        @media screen and (max-width: 768px) {
          height: 11px;
          width: 30px;
        }
}
}
    
  }
  
}
</style>
