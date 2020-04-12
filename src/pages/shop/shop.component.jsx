import React, { Component } from 'react';
import SHOP_DATA from "./shop.data";

import CollectionPreview from "../../components/collection-preview/collection-prev";

class ShopPage extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        collections: SHOP_DATA,
    }
    render() {
        const { collections } = this.state;
        return (
            <div className="shop-page">
                {collections.map(({ id, ...otherColProps }) => (
                    <CollectionPreview key={id} {...otherColProps} />
                ))}
            </div>
        );
    }
}

export default ShopPage;

