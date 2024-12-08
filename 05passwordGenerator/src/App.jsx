import { useCallback, useState, useEffect, useRef} from "react";
function App() {
  {
    /* we are going to make random password generator and this we are using useCallback() hooks  */
  }
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const [password, setPassword] = useState("");

  // usecallback is used for memoisation just to retain that in the cache memory


  //ref hook

  const passwordRef = useRef(null)

  const copyPasswordToClipboard  = useCallback(() => {
    passwordRef.current?.select();
    // to give the range upto which we want to select we give it range like below 
    // passwordRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password)
  },[password])

  const passwordGenerator = useCallback(() => {
    let pass = "";

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "~!@#$%^&*()`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char); //here we will concatenate the str instead overwriting it...
      setPassword(pass);
    }
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);
  return (
    <>
      <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 mt-8 pb-4 text-amber-400 bg-red-900">
        <h1 className="text-center pt-3 font-bold">Password Generator</h1>
        <div className="flex shadow-lg  rounded-sm gap-1 overflow-hidden mb-4 ">
          <input
            type="text"
            value={password}
            className="outline-none w-full  my-3 py-1 px-3 bg-cyan-100 rounded-lg font-semibold"
            placeholder="Password"
            ref={passwordRef}
            readOnly
          />
          <button 
          onClick={copyPasswordToClipboard}
          className="bg-blue-300 shadow-lg px-3 py-2 my-3 rounded-lg text-black shrink-0 hover:bg-blue-800 hover:text-amber-400 transi duration-300 ease-in-out">
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex text-sm gap-x-1">
            <input
              type="range"
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label> Length : {length} </label>
          </div>
          <div className="flex items-center  gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center  gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Special Characters</label>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default App;
