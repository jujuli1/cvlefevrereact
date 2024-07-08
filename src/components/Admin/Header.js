import React from 'react';
import { Link} from 'react-router-dom'


const Header = () => {
    return (
        <div className='header'>

        header admin
        {/*Header admin*/}
          <Link to="/auth/login" className='link'>Connexion</Link>
            
        </div>
    );
};

export default Header;