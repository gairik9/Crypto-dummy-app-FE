import axios from "axios";
import create from "zustand";

const Store = create((set) => ({
  coins: [],

  list: [],

  fetchCoins: async () => {
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/search/trending`
    );

    const coins = res.data.coins.map((coin) => {
      return {
        name: coin.item.name,
        img: coin.item.large,
        id: coin.item.id,
        price_btc: coin.item.price_btc.toFixed(5),
      };
    });

    set({ coins });

    console.log(coins);
  },

  coinsList: async () => {
    const result = await axios.get(`https://api.coingecko.com/api/v3/coins/list`);

    const lists = result.data.coins.map((list) => {
      return {
        // name: coin.item.name,
        // img: coin.item.large,
        id: list.id,
      };
    });

    set({ lists });

    console.log(lists);
  },
}));

export default Store;
