// import React, { useState } from 'react'

// export const ThemeProviderContext = React.createContext();

// export const ThemeProvider  = (props) => {

//   const initState = "light"
//   const [themeState, setThemeState] = useState(initState)

//   function toggleDarkLight(e){
//     if(themeState === "Light"){
//       setThemeState(themeState? "Dark" : "Light")
//     } else if (themeState === "Dark"){
//       setThemeState(themeState? "Light" : "Dark")
//     } else setThemeState("Dark")
// }
  
//   function changeColor(e){
//       setThemeState(e.target.value)
//   }

//     return (
//         <ThemeProviderContext.Provider 
//           value={{
//             ...themeState,
//             changeColor,
//             toggleDarkLight,
//             }}>
//             {props.children}
//         </ThemeProviderContext.Provider>
//     )
// }
