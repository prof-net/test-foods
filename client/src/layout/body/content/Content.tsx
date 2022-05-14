import React from "react";
import modules from './Content.module.scss';
import ListDishes from "../../../pages/list-dishes/ListDishes";
import AddDish from "../../../pages/add-dish/AddDish";
import {Route, Routes} from 'react-router-dom';

const Content = () => {
    return <div className={modules.content}>
        <Routes>
            <Route path='/' element={<ListDishes />} />
            <Route path='/add-dish' element={<AddDish />} />
        </Routes>
    </div>
}

export default Content;