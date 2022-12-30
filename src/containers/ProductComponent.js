import React from 'react';
import { useSelector } from 'react-redux';

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    console.log("sad :",products);
    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product;
        return (
            <div className="four colum wide" key={id}>
                <div className="ui link cards"> 
                    <div className="card">
                        <div className="image" >
                            <img src={image} alt={title} />
                            <div className="content">
                                <div className="header"></div>
                                <div className="meta price">${price}</div>
                                <div className="meta">{category}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
    });
    return (
        <>{renderList}</>
    )
};

export default ProductComponent;