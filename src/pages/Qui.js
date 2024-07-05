import React, { useEffect, useState } from 'react';
import Retour from '../components/public/Retour';
import './Qui.css';

const Qui = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsVisible(true);
        }, 0); // Permet de forcer le re-rendu avant d'ajouter la classe

        return () => clearTimeout(timeoutId); // Nettoyage si le composant se démonte
    }, []);
  
    return (
        <div className='qui-container'>
            <Retour/>
            <h1 className={`qui-container ${isVisible ? 'fade-in-qui' : 'hidden'}`}>Madame, Monsieur ...</h1>
            <div className={`qui-container ${isVisible ? 'fade-in-qui2' : 'hidden'}`}>
            
            <p >Actuellement en reconversion professionnel dans les métiers du numérique, et ayant effectué plusieurs formations dans le developpement web avec comme derniere en date, une formation de 6 mois avec l'école O'clock, je suis actuellement à la recherche d'une premiere experience professionnel, d'une formation en alternance ou d'un stage dans ce domaine</p>
            <p >Je suis motivé par la volonté d'effectué un metier dans un domaine que j'affectionne et que je pratique depuis longtemps en tant qu'amateur, l'informatique et les métier du numérique en général</p>
            <p >Je maitrise diverses compétences que je liste dans la partie "compétence" de cette petite application de présentation, spécialisé dans le domaine du developpement d'applications web et web mobile, je désir par la suite, aquérir également des connaissances dans bien d'autres domaines comme la cybersécurité entre autres</p>       
            <div className={`qui-container ${isVisible ? 'fade-in-qui3' : 'hidden'}`}>
            <p> Je vous remercie de l'attention porté à ma réalisation, et, dans l'attente d'une réponse de votre part, je vous adresse mes sincères salutations .</p>
            <p>LEFEVRE Julien</p>
            </div>
            <img src='imgcv.jpg' alt='homme brun cheveux long selfie'></img>
            </div>
            
        </div>
    );
};

export default Qui;