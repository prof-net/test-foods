import React from "react";
import modules from './Header.module.scss';
import { Link } from "react-router-dom";

const Header = () => {
    return <div className={modules.header}>
        <Link to="/"  className={modules.menuItems}>
            Список блюд
        </Link>
        <Link to="/add-dish"  className={modules.menuItems}>
            Добавить блюдо
        </Link>
    </div>
}

export default Header;