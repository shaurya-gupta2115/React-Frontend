import React from "react";
import { useId } from "react";

// first we are giving all the props in a destructured format so that what the programmer give as the arguments it get reflect on this component

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = ,
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,

  className = " ",
}) {
  const amountInputId = useId();
  return (
    <div className={`bg-neutral-200 p-3 rounded-lg text-sm flex ${className}`}>
      
      <div className="w-1/2">
     
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block ">
          {label}
          {/* whatever we name here as label which is passed as an argument will reflect here */}
        </label>
        <input
          id={amountInputId}
          type="number"
          className="outline-none w-full bg-transparent"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => {
            onAmountChange && onAmountChange(Number(e.target.value));
          }}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-[0.2px] py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}>
          <option>
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </option>
        </select>
      </div>
    </div>
  );
}

export default InputBox;
