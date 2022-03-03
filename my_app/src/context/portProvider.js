import portContext from "./portContext"
import React from "react"
import dark from "../styles/theme/dark"
import light from "../styles/theme/light"
import persistStore from "../hook/persistStore"
function PortProvider({children}) {
   const { usePersistStore } = persistStore()
    const [ color, setColor ] = usePersistStore('theme', light)
    const darkMode = () => {
      if(color.title === 'light' ) {
         setColor(dark)
      } else {
        setColor(light)
      }
    }
const value = {
    darkMode,
    
    color
}
  
return (
  <portContext.Provider value={ value } >
      {children}
  </portContext.Provider>
    )
}


export default PortProvider;