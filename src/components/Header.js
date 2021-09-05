import PropTypes from 'prop-types'
import { useLocation } from 'react-router';

import Button from "./Button"

const Header = ({title, text, color, onToggle, showAdd}) => {
    const location = useLocation();

    return (
        <div>
          <header className="header">
              <h1>{title}</h1>
              {location.pathname === "/" &&
              <Button 
              text={showAdd ? "Close" : "Add"} 
              color={showAdd ? "red" : "blue"} 
              onClick={onToggle} />
              }
          </header>  
        </div>
    )
}

Header.defaultProps = {
    title: "Day Schedule"
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

export default Header
