import React from "react";

function ProductThanks (props) {
        const { id, name, thumbnail, price, sku, units } = props;
        return (
            <div className="single-product">
                <div className="column-image">
                    <a
                        title={name}
                        onClick={() => this.props.selectProduct(id)}
                    >
                        <img
                            className="thumbnail"
                            src={thumbnail}
                            alt={name}
                        />
                    </a>
                </div>
                <div className="column-detail ">
                    <h6>{name}</h6>
                    <p>{sku}</p>
                    <div className="detail-product">
                        <span className="label">qtà</span>
                        <span>{units}</span>
                    </div>
                    <div className="row-price">
                        <div className="price-column">
                            € {price},00
                        </div>
                    </div>
                </div>
            </div>
        );
};

export default ProductThanks;
