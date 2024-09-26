import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { fetchProducts, fetchPrices, fetchUsers } from './mock_api'
// import needed mock API functions

function App() {
  // Using the mock API functions, create a function to be used on the front end that 
  // 1.) fetches users from API
  // 2.) sort users alphabetically by last name
  // 3.) display the sorted Users
  const [users, setUsers] = useState([])
  const [productsWithPrices, setProductsWithPrices] = useState([]);

  useEffect(() => {
    const userData = fetchUsers();
    const sortedUsers = userData.sort((a, b) => {
      const lastNameA = a.userInfo.name.split(' ').pop().toLowerCase(); // Get last name of user A
      const lastNameB = b.userInfo.name.split(' ').pop().toLowerCase(); // Get last name of user B
      return lastNameA.localeCompare(lastNameB); // Compare last names
    });
    setUsers(sortedUsers);

    const productsData = fetchProducts();
    const pricesData = fetchPrices();

    const pricesMap = {};
    pricesData.forEach(price => {
      pricesMap[price.product] = price.unit_amount;
    });

    const productsWithPrices = productsData.map(product => ({
      name: product.name,
      price: pricesMap[product.id] || 0,
    }));
    setProductsWithPrices(productsWithPrices);
  }, [])
  // Function to fetch and sort users
  // Using the mock API functions, create a function to be used on the front end that 
  // 1.) fetches products from API
  // 2.) fetches prices from the API
  // 3.) add price to correct product
  // 4.) display product name & price

  return (
    <div className="App">
      <header className="App-header">
        <h1>Users List</h1>
        {users.map((user, index) =>
          <div key={index}>
            <h3>{user.userInfo.name}</h3>
            <p>UserType: {user.userType}</p>
          </div>
        )}

        <h1>Products List</h1>
        <div>
          {productsWithPrices.map((product, index) => (
            <div key={index}>
              <h3>{product.name}</h3>
              <p>Price: ${(product.price / 100).toFixed(2)}</p>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
