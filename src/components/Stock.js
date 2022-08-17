import React from "react";

function Stock({stock, handlePortfolio}) {
  const{ticker, name, price} = stock
  return (
    <div>
      <div className="card">
        <div className="card-body" onClick = {()=>handlePortfolio(stock)}>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}:{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
