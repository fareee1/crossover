import React from 'react'

export default function Root() {
  return (
    <div className="App">
      <div className="backgroundContainer">
         <div class="logoWrapper">
           <img src={logo} className="logo" alt="logo" />
         </div>
         <Searchbar 
           setSearchTag={setSearchTag} 
          setSearchCity={setSearchCity}  
         />
         <Links />
       </div>
       <Restaurants 
         searchTag={searchTag}
         searchCity={searchCity}
       />
    </div>
  )
}
