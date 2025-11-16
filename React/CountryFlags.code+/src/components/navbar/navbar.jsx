import React, { Component } from 'react';

const continents = ["Africa", "Asia", "Europe", "North America", "South America", "Oceania"];

class Navbar extends Component {
  render() {
    const { selectedContinent, setSelectedContinent } = this.props;

    return (
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          <div className="text-xl font-bold text-blue-600">CountryFlags</div>
          <div className="hidden md:flex space-x-4">
            {continents.map((continent) => (
              <button
                key={continent}
                onClick={() => setSelectedContinent(continent)}
                className={`text-sm font-medium px-3 py-1 rounded 
                  ${selectedContinent === continent
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-700 hover:text-blue-500'}`}
              >
                {continent}
              </button>
            ))}
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
