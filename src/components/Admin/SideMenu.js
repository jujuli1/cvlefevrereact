import React from 'react';
import { Link } from 'react-router-dom';
import Retour from '../public/Retour';

const SideMenu = () => {
    return (
        <div className='sidemenu'>
            
            <ul>

                <Retour/>
                <li>
                    User
                    <ul>
                    <li><Link to='/admin/user/index'>Présentation</Link></li>
                    <li><Link to='/admin/user/parcour'>Mon parcour</Link></li>
                    <li><Link to='/admin/user/add'>Compétences</Link></li>
                    <li><Link to='/admin/user/coordonnees'>Mes coordonnees</Link></li>
                    </ul>
                </li>
                
            </ul>
        </div>
    );
};

export default SideMenu;