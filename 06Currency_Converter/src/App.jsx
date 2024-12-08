import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { use } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");

  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  function swap() {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1623911380012-0b6db3fcad54?q=80&w=3386&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      {/* Overlay to apply the blur effect */}
      <div
        className="absolute w-full h-full"
        style={{
          backdropFilter: "blur(20px)", // Adjust blur amount
          WebkitBackdropFilter: "blur(10px)", // For Safari compatibility
          backgroundColor: "rgba(0, 0, 0, 0.3)", // Optional: adds a translucent overlay
        }}></div>

      {/* Foreground content */}
      <div className="w-full z-10">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-xl p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}>
            <div className=" w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-1"
                onClick={swap}>
                Swap
              </button>
            </div>
            <div className="w-full mb-4 mt-1 bg-pink-300">
              <InputBox 
              label="To"
              amount={convertedAmount}currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={from}
              amountDisable
              />
              </div>
              <button type="submit" className="w-full bg-blue-700 text-white px-4 py-3 rounded-lg">{`Convert ${from.toUpperCase()} to ${to.toUpperCase()}`  }</button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
