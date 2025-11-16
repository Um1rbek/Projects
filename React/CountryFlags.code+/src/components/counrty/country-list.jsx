import React from "react";
import CountryItem from "../countryitem/CountryItem";

const CountryList = ({ countries }) => {
  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {countries.length ? (
          countries.map((item, index) => <CountryItem key={index} country={item} />)
        ) : (
          <h1>Loading....</h1>
        )}
      </div>
    </div>
  );
};

export default CountryList;
