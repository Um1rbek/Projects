import React from "react";

const CountryItem = ({ country }) => {
  if (!country || !country.flags || !country.name) return null;

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        margin: "10px",
        width: "220px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <img
        src={country.flags.svg || country.flags.png}
        alt={`Flag of ${country.name.common}`}
        style={{
          width: "100%",
          height: "120px",
          objectFit: "cover",
          borderRadius: "6px",
        }}
      />
      <h3 style={{ marginTop: "10px", fontSize: "18px" }}>
        {country.name.common}
      </h3>
      <p style={{ margin: "5px 0", color: "#555" }}>
        🌍 Region: {country.region}
      </p>
      <p style={{ margin: "5px 0", color: "#555" }}>
        👥 Population: {country.population.toLocaleString()}
      </p>
    </div>
  );
};

export default CountryItem;
