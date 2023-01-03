import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Store from "../Store/Store";
import "./CoinsTable.css";

const CoinsTable = () => {
  const store = Store();

  useEffect(() => {
    store.fetchCoins();
  }, []);

  const item = store.coins.map((coin) => (
    <div className="mainTable" >
      <table>
        <Link to={`/coins/${coin.id}`}>
          <tr>
            <td>
              <img src={coin.img} alt="" width={"30px"} />
            </td>
            <td>
              <p style={{ color: "#74c69d" }}>{coin.name}</p>
            </td>
            <td>
              <p style={{ color: "#FFFF" }}>${coin.price_btc}</p>
            </td>
          </tr>
        </Link>
      </table>
    </div>
  ));

  return (
    <div className="container">
      <Typography
        variant="h3"
        textAlign={"center"}
        color={"#40916c"}
        marginBottom={"100px"}
      >
      Trending Cryptocurrency Prices
      </Typography>
      <div> {item}</div>
    </div>
  );
};

export default CoinsTable;
