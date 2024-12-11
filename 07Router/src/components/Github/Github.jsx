import React, { useEffect, useState } from 'react'

function Github() {

    const [data, setData] = useState([])

    useEffect(()=>{
        fetch(
          "https://api.github.com/users/shaurya-gupta2115"
        ).then((res) => (res.json()))
        .then((data) => {
            console.log(data)
            setData(data)})
    },[])

  return (
    <div className="text-center m-9 bg-pink-300 p-14 " >
      Github Name: {data.name}
      <br />
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt={`${data.name} Image`} className='flex mx-auto pt-[34px] shadow-xl rounded-3xl' />
    </div>
  );
}

export default Github