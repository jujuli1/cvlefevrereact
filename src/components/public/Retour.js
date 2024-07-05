import React from 'react';
import { Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Retour = () => {
    return (
        <div >
            <li><Link to="/home" className='retour'>
            
            <FontAwesomeIcon icon={faArrowLeft} /> Retour
            
            </Link></li>
        </div>
    );
};

export default Retour;