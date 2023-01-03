import React from "react";
import TradeViewChart from "react-crypto-chart";
import "./Coin.css";

const Coin = () => {
  return (
    <>
      <div className="parent">
        <TradeViewChart
          interval="1m"
          containerStyle={{
            minHeight: "100vh",
            minWidth: "100%",
            marginBottom: "30px",
          }}
          chartLayout={{
            layout: {
              backgroundColor: "white",
              textColor: "black",
            },
            grid: {
              vertLines: {
                color: "#none",
                // style: LineStyle.SparseDotted,
              },
              horzLines: {
                color: "none",
                // style: LineStyle.SparseDotted,
              },
            },
            priceScale: {
              borderColor: "none",
            },
            timeScale: {
              borderColor: "#485c7b",
              timeVisible: true,
              secondsVisible: false,
            },
          }}
          candleStickConfig={{
            upColor: "yellow",
            downColor: "red",
            borderDownColor: "transparent",
            borderUpColor: "transparent",
            wickDownColor: "gray",
            wickUpColor: "gray",
          }}
          pair="ETHUSDT"
        />
      </div>
    </>
  );
};

export default Coin;
