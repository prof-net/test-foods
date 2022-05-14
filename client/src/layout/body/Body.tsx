import React from "react";
import modules from './Body.module.scss';
import Content from "./content/Content";

const Body = () => {
    return <div className={modules.body}>
        <Content />
    </div>
}

export default Body;