import React from 'react';
import BusinessList from '../BusinessList/BusinessList'
import SearchBar from '../SearchBar/SearchBar'
import './App.css';
let business=
{
  imageSrc: 'https://www.freepngimg.com/thumb/pizza/46-pizza-png-image-thumb.png',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}
const businessArr=[business,business,business,business,business,business];
class App extends React.Component {
  searchYelp(term,location,sortBy)
  {
    console.log("term :"+term+"\nlocation :"+location+"\nsortBy :"+sortBy)
  }
  render()
  {
    return (
    <div className="App-header"> 
    <h1>Ravenous</h1>
    <SearchBar searchYelp={this.searchYelp}/>
    <BusinessList businessArr={businessArr}/> 
    </div>
    );
  }
}

export default App;
