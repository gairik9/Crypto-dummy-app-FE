import React, { useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
import Store from "../Store/Store";
import "./Carousel.css";

const carouselItem = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  textTransform: "uppercase",
  textAlign: "center",
  gap: "20px",
};

const Image = {
  maxWidth: "100px",
};

const Carousel = () => {
  const store = Store();

  useEffect(() => {
    store.fetchCoins();
  }, []);

  const item = store.coins.map((coin) => {
    return (
      <div key={coin.id} style={carouselItem}>
        <Link to={`/coins/${coin.id}`}>
          <p style={{ color: "#74c69d", }}>{coin.name}</p>
          <br />
          <img src={coin.img} alt="" style={Image} />
          <br/><br/>
          <p style={{ color: "#FFFF" }}>${coin.price_btc}</p>
        </Link>
      </div>
    );
  });

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 3,
    },
  };

  return (
    <div className="carousel">
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        autoPlay
        items={item}
        responsive={responsive}
      />
    </div>
  );
};

export default Carousel;
