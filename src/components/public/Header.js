import React from 'react';
import { Link} from 'react-router-dom'
import '../public/Header'

const Header = () => {
    return (
        <div className='Header'>
            <header>
                <nav>
                    <ul>
                        
                        
                        <li><Link to="/auth/login">Connexion</Link></li>
                        
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;