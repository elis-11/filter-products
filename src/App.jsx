import { useState } from "react";
import carsData from "./cars.json";
import "./App.css";

function App() {
  const [cars, setCars] = useState(carsData);
  const [productName, setProductName] = useState("");
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(0);
  const [filteredCategory, setFilteredCategory] = useState();

  let filteredCars = cars;
  if (productName) {
    filteredCars = filteredCars.filter((car) => {
      return car.name.toLowerCase().includes(productName.toLowerCase());
    });
  }

  if (priceMin) {
    filteredCars = filteredCars.filter((car) => {
      return car.price >= priceMin;
    });
  }

  if (priceMax) {
    filteredCars = filteredCars.filter((car) => {
      return car.price <= priceMax;
    });
  }
  if (filteredCategory) {
    filteredCars = filteredCars.filter((car) => {
      return car.category === filteredCategory;
    });
  }



  return (
    <div className="App">
      <div className="search">
        <div className="input">
          <div className="productName">
            Car name:{" "}
            <input
              type="text"
              value={productName}
              onChange={(e) => {
                setProductName(e.target.value);
              }}
            />
          </div>
          <div className="priceMin">
            Price Min:{" "}
            <input
              type="number"
              value={priceMin}
              onChange={(e) => {
                setPriceMin(e.target.value);
              }}
            />
            {priceMin >= 10 && <button>button</button>}
          </div>
          <div className="priceMax">
            Price Max:{" "}
            <input
              type="number"
              value={priceMax}
              onChange={(e) => setPriceMax(e.target.value)}
            />
          </div>
        </div>
        <div className="categories">
          <h4>Category:</h4>
          <div className="filterByCategory">
            <input
              type="checkbox"
              name="categories"
              value="Toyota"
              onChange={filteredCategory}
            />
            <span>Toyota</span>
          </div>
          <div className="filterByCategory">
            <input
              type="checkbox"
              name="categories"
              value="BMW"
              onChange={filteredCategory}
            />
            <span>BMW</span>
          </div>
          <div className="filterByCategory">
            <input
              type="checkbox"
              name="categories"
              value="Lexus"
              onChange={filteredCategory}
            />
            <span>Lexus</span>
          </div>
        </div>
      </div>

      <div className="cars">
        {filteredCars.map((car) => (
          <div key={car._id} className="car">
            <img src={car.image} alt={car.name} />
            <div className="name">{car.name}</div>
            <div className="price">price: {car.price} €</div>
            <div className="year">{car.year} year</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
