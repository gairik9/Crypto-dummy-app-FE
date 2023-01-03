import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Carousel from "../Carousel/Carousel";
import Particle from "../Particle/Particle";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <Particle />
      <div className="banner">
        <Container className="content">
          <div className="tag">
            <Typography
              variant="h1"
              style={{
                fontWeight: "bold",
                marginBottom: 15,
                fontFamily: "Montserrat",
                color: "#40916c",
              }}
            >
              Trade<span style={{ color: "#b7e4c7" }}>Dynamo</span>
            </Typography>
            <Typography
              variant="p"
              style={{
                color: "#d8f3dc",
                textTransform: "uppercase",
                letterSpacing: 3,
                fontFamily: "Montserrat",
              }}
            >
              Securely buy, sell, and store your cryptocurrencies with us.
            </Typography>
          </div>
          <Carousel/>
        </Container>
      </div>
    </>
  );
};

export default Banner;
