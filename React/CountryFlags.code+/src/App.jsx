

import React, { Component } from "react"; // <-- MUHIM!
import './App.css';

import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import CountryList from "./components/counrty/country-list"; // <- counrty to'g'rimi?

import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://restcountries.com/v3.1/all?fields=name,flags,region,population")
      .then((response) => {
        if (response.data.length) {
          this.setState({ countries: response.data });
        }
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }

  render() {
    return (
      <div>
        <Navbar />
        <CountryList countries={this.state.countries} />
        <Footer />
      </div>
    );
  }
}

export default App;
