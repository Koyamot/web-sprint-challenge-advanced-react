import React from "react"
import useDarkMode from '../hooks/useDarkMode'

import "./DarkModeToggle.css"

const DarKModeToggle = (props) => {

    const toggleMode = e => {
        e.preventDefault();
        props.setDarkmode(!props.darkMode);
      };

      return (
        <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={props.darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
      )

}

export default DarKModeToggle;