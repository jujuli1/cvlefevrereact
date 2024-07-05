import React from 'react';
import { Layout, DashBoard } from './index'
import { User, UserEdit, UserAdd, Parcour, Coordonnees} from './User'

import { Cocktail, Edit } from './Cocktail';
import Error from '../../utils/Error';

import { BrowserRouter, Routes, Route }  from 'react-router-dom';

const AdminRouter = () => {
    return (
        <div>
            <Routes>

                <Route element={<Layout/>}>
                <Route index element={<User/>}/>
                  <Route path='/dashboard' element={<DashBoard/>}/>
                  <Route path='user'>
                    
                    <Route path='index' element={<User/>}/>
                    <Route path='edit/:uid' element={<UserEdit/>}/>
                    <Route path='add' element={<UserAdd/>}/>
                    <Route path='parcour' element={<Parcour/>}/>
                    <Route path='coordonnees' element={<Coordonnees/>}/>
                  </Route>
                  <Route path='cocktail'>
                    <Route path='index' element={<Cocktail/>}/>
                    <Route path='edit' element={<Edit/>}/>
                   
                  </Route>
                  <Route path='*' element={<Error/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default AdminRouter;