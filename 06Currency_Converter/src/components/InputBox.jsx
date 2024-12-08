import React from "react";

// first we are giving all the props in a destructured format so that what the programmer give as the arguments it get reflect on this component

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,

  className = " ",
}) {
  return (
    <div className={`bg-neutral-200 p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block ">
          {label} // whatever we name here as label which is passed as an
          argument will reflect here
        </label>
      </div>
    </div>
  );
}

export default InputBox;
