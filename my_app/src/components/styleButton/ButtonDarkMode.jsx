import { useContext } from "react";
import portContext from "../../context/portContext";
import { ThemeContext } from "styled-components";
import { ContainerButton } from "./style";
import ReactSwitch from "react-switch";
function ButtonDarkMode() {
  const { darkMode  } = useContext(portContext)
  const { title } = useContext(ThemeContext)
    return (
        <ContainerButton>
        <ReactSwitch 
          className="button-react"
          onChange={darkMode} 
          checked={ title === 'dark'}
          checkedIcon={ false }
          uncheckedIcon={ false}
          height={ 15 }
          width={ 40 }
          handleDiameter={ 20 }
          boxShadow=" 0 0 1px 1px #3bf"
          onColor="#70e000"
          offColor="#3bf"
          />
       </ContainerButton>

    )
  }

export default ButtonDarkMode;
