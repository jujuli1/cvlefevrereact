import React from 'react';
import { Routes, Route } from "react-router-dom"


import Home  from '../../pages/Home';
import Qui  from '../../pages/Qui';
import  Competences  from '../../pages/Competences';
import AuthRouter  from '../../pages/Auth/AuthRouter';
import Layout  from '../../pages/admin/Layout';

import Error from '../../utils/Error';


const PublicRouter = () => {
    return (
        <div>
            <Routes>

                
                <Route index element={<Home />}/>

                <Route path="/home" element={<Home/>}/>
                <Route path="/qui" element={<Qui/>}/>
                <Route path="/competences" element={<Competences />}/>
                <Route path='/auth/*' element={<AuthRouter/>}/>
        
        {/*coordonné a rajouter*/}

        <Route path="*" element={<Error/>}/>


                
                

            </Routes>
        </div>
    );
};

export default PublicRouter;