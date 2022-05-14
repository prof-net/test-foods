import React from "react";
import modules from './ListDishes.module.scss';
import CardDish from "../../components/card-dish/CardDish";

const ListDishes = () => {
    return <div className={modules.listDishes}>
        <h3 className={modules.title}>Список блюд</h3>

        <div className={modules.listCard}>
            <CardDish/>
            <CardDish/>
            <CardDish/>
            <CardDish/>
            <CardDish/>
        </div>

    </div>
}

export default ListDishes;