import { React, useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index.js";
import Loader from "./Loader.jsx";

const Coins = () => {
  const [coindata, setCoindata] = useState([]);
  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios(`${server}/coins/markets?vs_currency=inr`);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCoin();
  }, []);
  return <div>Coins</div>;
};

export default Coins;
