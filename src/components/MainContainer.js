import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stockData, setStockData] = useState([])
  const [portfolioData, setPortfolioData] = useState([])
  const [filterBy, setFilter] = useState("All")
  const [sortBy, setSortBy] = useState(null)

  useEffect(()=>{
    fetch ("http://localhost:3001/stocks")
    .then (res => res.json())
    .then (data => setStockData(data))
  },
  [])

  const addInPortfolio = (stock) => {
    setPortfolioData([...portfolioData, stock])
  }

  const removeFromPortfolio = (stock) => {
    const newPortfolio = portfolioData.filter((item)=> item.id !== stock.id)
    setPortfolioData(newPortfolio)
  }

  function onFilterChange (e) {
    let newFilter = e.target.value
    setFilter(newFilter)
  }

  function onSortChange (e) {
    const newSort = e.target.value
    setSortBy(newSort)
  }
  console.log(sortBy)

  let filteredData = stockData.filter((stock)=> {
    if(filterBy === "All"){
      return true
    } else {
      return stock.type === filterBy
    }
  })

  switch(sortBy){
    case "Alphabetically":
      filteredData.sort((a,b)=>(a.name > b.name)? 1 : -1)
      break;
    case "Price":
      filteredData.sort((a,b)=>(a.price>b.price)? 1: -1)
      break;
    default:
  }


  return (
    <div>
      <SearchBar handleFilterChange = {onFilterChange} handleSortBy = {onSortChange}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stockData = {filteredData} handlePortfolio = {addInPortfolio}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioData = {portfolioData} handlePortfolio = {removeFromPortfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
