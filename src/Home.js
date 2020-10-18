import React from "react";
import Product from './Product'
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="Amazon Banner"
      />
<div className="home__row">
      <Product 
      id='ac91f92cj77'
      title='Cheap Shot'
      author='by Ace Atkins'
      price={21.99}
      rating={5}
      image='https://images-na.ssl-images-amazon.com/images/I/81TzU35P1DL.__BG0,0,0,0_FMpng_AC_UL474_SR474,450_.jpg' />
 
      <Product 
      id='ayo7nv5t5vy'
      title='Air Jordan 1 Chicago Mid White Heel Toe Black Red Retro 554724-173'
      price={146.99}
      rating={5}
      image='https://www.vhv.rs/dpng/d/170-1703363_retro-high-og-se-air-jordan-1-png.png' />
         </div>
      <div className="home__row">
      <Product 
      id='ag761ecs7os'
      title='Bose Solo 5 TV Sound System - Factory Renewed'
      price={221.99}
      rating={5}
      image='https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/speakers/bose_solo_5_tv_sound_system/product_silo_images/solo_5_EC_hero.psd/jcr:content/renditions/cq5dam.web.600.600.png' />
      <Product 
      id='apx0apqw3zk'
      title='Acer Predator Helios 300 - 15.6" Intel i7-9750H 2.6GHz 16GB Ram 512GB SSD W10H'
      price={1421.99}
      rating={4}
      image='https://static.acer.com/up/Resource/Acer/Laptops/Predator_Helios_300/Images/20200430/Predator-Helios-300_PH315-53_modelpreview.png' />
      <Product 
      id='av8mzvoaggf'
      title='Acer Predator XB3 - 27" Monitor 4K UHD 3840x2160 120Hz 16:9 4ms GTG 350 Nit IPS'
      price={749.99}
      rating={4}
      image='https://static.acer.com/up/Resource/Acer/Monitors/Predator_XB3/Images/20180726/Predator-monitor-XB-series-XB273K-preview.png' />
      </div>
      <div className="home__row">
      <Product 
      id='aj838t22dfh'
      title='BISSELL Pet Hair Eraser Lift-Off Upright Bagless Vacuum Cleaner | 20878 Refurbished'
      price={199.99}
      rating={4}
      image='https://www.bissell.com/dw/image/v2/BDKV_PRD/on/demandware.static/-/Sites-master-catalog-bissell/default/dw84b8c4ba/hi-res/Product%20Images/2087/2087_Pet_Hair_Eraser_Lift-Off_Riley.png?sw=800&sh=800&sm=fit' />
      <Product 
      id='act3ynbcrae'
      title='Bose Wave SoundTouch Music System IV...FREE SHIPPING! Buy direct from Bose.'
      price={599.95}
      rating={4}
      image='https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/speakers/wave_music_system_iv/product_silo_images/WMS_IV_black_EC_hero.psd/jcr:content/renditions/cq5dam.web.320.320.png' />
      <Product 
      id='anu9i90jyxh'
      title='Ping Zing Epic Golf Club Set'
      price={1399.99}
      rating={5}
      image='https://emailtuna.com/images/newsletter/373/37367fca60d6fa946d3f0855a95e7d94.png' />
      </div>
      <div className="home__row">
      <Product 
      id='a4g69r9hdpn'
      title='Samsung 85″ Class Q70R QLED Smart 4K UHD TV'
      price={5999.99}
      rating={4}
      image='https://www.thebigscreenstore.com/wp-content/uploads/2019/06/QN65Q70RAFXZX_001_Front1_Black.png' />
      </div>
    </div>

    
  );
};

export default Home;
