
import { useEffect, useState } from "react";
import React from "react";

const CurrencyList = () => {
  const [currencyValues, setCurrencyValues] = useState([]); // State to store currency values

  useEffect(() => {
    // Fetching the data
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json`
    )
      .then((response) => response.json())
      .then((data) => {
        setCurrencyValues(Object.values(data)); // Extract only values and store them
      })
      .catch((error) => console.error("Error fetching currency list:", error));
  }, []);

  return (
    <div className="w-full max-w-xs mx-auto mt-10 z-20">
      <label
        htmlFor="currency"
        className="block text-sm font-medium text-gray-700">
        Select a Currency
      </label>
      <select
        id="currency"
        name="currency"
        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        {/* Map through the fetched currency values */}
        {currencyValues.map((name, index) => (
          <option key={index} value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyList;
