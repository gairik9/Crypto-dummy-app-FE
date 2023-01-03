import React from "react";
import CoinsTable from "../../Components/CoinsTable/CoinsTable";
import Banner from "../../Components/Banner/Banner";

const Home = () => {
  return (
  <>
      <Banner/>
      <div style={{marginTop:'250px',background:'transparent'}}>
      <CoinsTable/>
      </div>
  </>
  )
};

export default Home;
