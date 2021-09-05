import PropTypes from 'prop-types'
import React from 'react'

const Button = ({text, color, onClick}) => {

    // const onClick = () => {
    //     console.log("Clicked");
    // }
    return (
        <div>
          <button 
          style={{backgroundColor: color}}
          className="btn"
          onClick={onClick}
          >{text}</button>  
        </div>
    )
}

Button.defaultProps = {
    color: "blue"
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string
}

export default Button
