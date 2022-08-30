import React from 'react'

export const MenuCard = ({menuData}) => {

    // console.log(menuData);

  return (
    <>
    <section className= "main-card_container">
        {menuData.map((curElem) => {
            const { id,image, name, category,price,description} = curElem;

            return(
                <>
                <div className="card-container" key={id}>
                <div className="card">
                    <div className="card-body">
                        <span className="card-number card-circle subtle">{id}</span>
                        <span className="card-author  subtle">{category}</span>
                        <span className="card-price  subtle">{price}</span>
                        <h2 className="card-title">{name}</h2>
                        <span className="card-description subtle">{description}</span>
                        <div className="card-read">Read</div>
                    </div>
                     <img src={image} alt="images" className="card-media"/> 
                    <span className="card-tag subtle">Order now</span>
    
                </div>
                </div>
                 </>
            );
        })}
    </section>
    </>
  );
};

export default MenuCard;
