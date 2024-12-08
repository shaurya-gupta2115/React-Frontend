// import React, { useState } from "react";

// const App = () => {
//   const [bgcolor, setbgColor] = useState("violet");

//   return (
//     <div className="h-screen w-full m-0" style={{ backgroundColor: bgcolor }}>
//       <div className="flex justify-center content-center font-bold text-lg ">Welcome to BG_CHANGER</div>
//       {/* in this div we just took the position of the whole rounded container */}
//       <div className="fixed flex flex-wrap justify-center bottom-11 inset-x-0 px-2">
//         {/* //Now we will define the whole bar */}
//         <div
//           id="button"
//           className=" rounded-3xl shadow-2xl flex justify-center items-stretch border-double gap-3 border-2 hover:border-dotted bg-white">
//           <button
//             onClick={() => setbgColor("red")}
//             className="outline-none px-4 py-2 my-4 mx-3 bg-white rounded-full shadow-2xl"
//             style={{ backgroundColor: "red" }}>
//             RED
//           </button>
//           <button
//             onClick={() => setbgColor("green")}
//             className="outline-none px-4 py-2 my-4 mx-3 bg-white rounded-full shadow-2xl"
//             style={{ backgroundColor: "green" }}>
//             GREEN
//           </button>
//           <button
//             onClick={() => setbgColor("purple")}
//             className="outline-none px-4 py-2 my-4 mx-3 bg-white rounded-full shadow-2xl"
//             style={{ backgroundColor: "purple" }}>
//             PURPLE
//           </button>
//           <button
//             onClick={() => setbgColor("pink")}
//             className="outline-none px-4 py-2 my-4 mx-3 bg-white rounded-full shadow-2xl"
//             style={{ backgroundColor: "pink" }}>
//             PINK
//           </button>
//           <button
//             onClick={() => setbgColor("blue")}
//             className="outline-none px-4 py-2 my-4 mx-3 bg-white rounded-full shadow-2xl"
//             style={{ backgroundColor: "blue" }}>
//             BLUE
//           </button>
//           <button
//             onClick={() => setbgColor("violet")}
//             className="outline-none px-4 py-2 my-4 mx-3 bg-white rounded-full shadow-2xl"
//             style={{ backgroundColor: "violet" }}>
//             VIOLET
//           </button>
//           <button
//             onClick={() => setbgColor("white")}
//             className="outline-none px-4 py-2 my-4 mx-3 bg-white rounded-full shadow-2xl"
//             style={{ backgroundColor: "white" }}>
//             WHITE
//           </button>
//           <button
//             onClick={() => setbgColor("olive")}
//             className="outline-none px-4 py-2 my-4 mx-3 bg-white rounded-full shadow-2xl"
//             style={{ backgroundColor: "olive" }}>
//             OLIVE
//           </button>
//           <button
//             onClick={() => setbgColor("yellow")}
//             className="outline-none px-4 py-2 my-4 mx-3 bg-white rounded-full shadow-2xl"
//             style={{ backgroundColor: "yellow" }}>
//             YELLOW
//           </button>
//           <button
//             onClick={() => setbgColor("brown")}
//             className="outline-none px-4 py-2 my-4 mx-3 bg-white rounded-full shadow-2xl"
//             style={{ backgroundColor: "brown" }}>
//             BROWN
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // onclik hmesha ek function ko demand krta haii and due to which {setbgColor} bs to chal jata but jo parameter pss krne the wo nhi ho paenge 
// // to uske liye hume setbgColor("red") type krna pdega since ye ek value return krta hai ... to wo onclick nhi lena chahega...for this we have to give and
// // treat such that it will be like function by just using arrow function 

// export default App;


import React, { useState } from "react";

const App = () => {
  const [bgcolor, setbgColor] = useState("violet");

  return (
    <div className="h-screen w-full m-0" style={{ backgroundColor: bgcolor }}>
      {/* Centering the text */}
      <div className="flex justify-center items-center  h-full font-bold text-[50px] text-red-300">
        Welcome to BG_CHANGER
      </div>
      {/* Button bar */}
      <div className="fixed flex flex-wrap justify-center bottom-11 inset-x-0 px-2">
        <div
          id="button"
          className="rounded-3xl shadow-2xl flex justify-center items-stretch border-double gap-3 border-2 hover:border-dotted hover:border-rose-500 transition-all duration-900 bg-white">
          <button
            onClick={() => setbgColor("red")}
            className="outline-none px-4 py-2 my-4 mx-3  text-white bg-white rounded-full shadow-2xl"
            style={{ backgroundColor: "red" }}>
            RED
          </button>
          <button
            onClick={() => setbgColor("green")}
            className="outline-none px-4 py-2 my-4 mx-3  text-white bg-white rounded-full shadow-2xl"
            style={{ backgroundColor: "green" }}>
            GREEN
          </button>
          <button
            onClick={() => setbgColor("purple")}
            className="outline-none px-4 py-2 my-4 text-white mx-3 bg-white rounded-full shadow-2xl"
            style={{ backgroundColor: "purple" }}>
            PURPLE
          </button>
          <button
            onClick={() => setbgColor("pink")}
            className="outline-none px-4 py-2 my-4 mx-3 bg-white rounded-full shadow-2xl"
            style={{ backgroundColor: "pink" }}>
            PINK
          </button>
          <button
            onClick={() => setbgColor("blue")}
            className="outline-none px-4 py-2 my-4 mx-3 bg-white rounded-full shadow-2xl"
            style={{ backgroundColor: "blue" }}>
            BLUE
          </button>
          <button
            onClick={() => setbgColor("violet")}
            className="outline-none px-4 py-2 my-4 mx-3  bg-white rounded-full shadow-2xl"
            style={{ backgroundColor: "violet" }}>
            VIOLET
          </button>
          <button
            onClick={() => setbgColor("white")}
            className="outline-none px-4 py-2 my-4 mx-3 bg-white rounded-full shadow-2xl"
            style={{ backgroundColor: "white" }}>
            WHITE
          </button>
          <button
            onClick={() => setbgColor("olive")}
            className="outline-none px-4 py-2 my-4 mx-3 bg-white rounded-full shadow-2xl"
            style={{ backgroundColor: "olive" }}>
            OLIVE
          </button>
          <button
            onClick={() => setbgColor("yellow")}
            className="outline-none px-4 py-2 my-4 mx-3 bg-white rounded-full shadow-2xl"
            style={{ backgroundColor: "yellow" }}>
            YELLOW
          </button>
          <button
            onClick={() => setbgColor("brown")}
            className="outline-none px-4 py-2 my-4 mx-3 bg-white rounded-full shadow-2xl"
            style={{ backgroundColor: "brown" }}>
            BROWN
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
