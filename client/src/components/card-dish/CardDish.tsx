import React from "react";
import modules from './CardDish.module.scss';
import img from './../../img/img 1.jpg';

const CardDish = () => {
    return <div className={modules.cardDish}>
        <h4 className={modules.title}>Курица в соевом соусе</h4>

        <div className={modules.slider}>
            <div className={modules.currentImgInfo}>
                <img className={modules.currentImg} src={img} width={200} height={200}/>
                <div className={modules.info}>
                    <div className={modules.infoItem}><span className={modules.key}>Тип:</span> Завтрак</div>
                    <div className={modules.infoItem}><span className={modules.key}>Отписание:</span> Норм штука, хорошо зашла</div>
                </div>
            </div>

            <div className={modules.carousel}>
                <div className={modules.arrow}>&lt;</div>
                <div className={modules.otherImg}>
                    <img className={modules.currentImg} src={img} width={70} height={70}/>
                    <img className={modules.currentImg} src={img} width={70} height={70}/>
                    <img className={modules.currentImg} src={img} width={70} height={70}/>
                    <img className={modules.currentImg} src={img} width={70} height={70}/>
                </div>
                <div className={modules.arrow}>&gt;</div>
            </div>

        </div>

    </div>
}

export default CardDish;