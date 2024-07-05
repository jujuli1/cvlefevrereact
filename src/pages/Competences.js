import React, { useEffect, useState } from 'react';
import Retour from '../components/public/Retour'
import './Competences.css'

const Competences = () => {

    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsVisible(true);
        }, 0); // Permet de forcer le re-rendu avant d'ajouter la classe

        return () => clearTimeout(timeoutId); // Nettoyage si le composant se démonte
    }, []);
    return (
        <div className={`qui-container ${isVisible ? 'fade-in' : 'hidden'}`}>
            <div>

            <Retour/>
            
            Competences page comp
            </div>
            
        </div>
    );
};

export default Competences;