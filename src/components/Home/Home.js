import React from 'react';
import Product from '../Product/Product';
import './styles.css';

function Home() {

  return (

    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="" />

      <div className="home__row">

        <Product
          id="1234"
          title="The Lean Startup"
          price={11.90}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
        />

        <Product
          id="12345"
          title="Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Gray (Latest Model)"
          price={329.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/6162WMQWhVL._AC_UY218_.jpg"
        />

      </div>

      <div className="home__row">

        <Product
          id="12346"
          title="New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage,
          2.6GHz Intel Core i7) - Space Gray"
          price={2099}
          rating={5}
          image="https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY218_.jpg"
        />

        <Product
          id="12347"
          title="HP 15-Inch FHD Laptop, 10th Gen Intel Core i5-1035G1, 8 GB RAM, 
          256 GB Solid-State Drive, Windows 10 Home (15-dy1036nr, Natural Silver)"
          price={579.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/71WSt8D7KFL._AC_UY218_.jpg"
        />

        <Product
          id="12348"
          title="BenQ 24 Inch IPS Monitor | 1080P | Proprietary Eye-Care Tech |
           Ultra-Slim Bezel | Adaptive Brightness for Image Quality | Speakers | 
           GW2480"
          price={11.90}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71BuyRgSzdL._AC_UL160_SR160,160_.jpg"
        />

      </div>

      <div className="home__row">
        <Product
          id="12349"
          title="The Lean Samsung Galaxy Watch (46mm) SM-R800NZSAXAR (Bluetooth) - Silver (Renewed)"
          price={198.00}
          rating={4}
          image="https://m.media-amazon.com/images/I/81OIphx344L._AC_UL320_.jpg"
        />
      </div>

    </div>
  );
}

export default Home;