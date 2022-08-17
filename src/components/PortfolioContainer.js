import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolioData, handlePortfolio}) {
  const portfolioStockCards = portfolioData.map((stock)=> <Stock key = {stock.id} stock = {stock} handlePortfolio = {handlePortfolio}/>)
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        portfolioStockCards
      }
    </div>
  );
}

export default PortfolioContainer;
