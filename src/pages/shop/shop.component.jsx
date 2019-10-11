import React from 'react';
import CollectionPreview from '../../components/preview/collection-preview.component';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectShopCollections } from '../../redux/shop/shop.selector';

const ShopPage = ({ collections }) => (
    <div className='shop-page'>
        {
            collections.map(({ id, ...otherCollectionData }) => (
                <CollectionPreview key={id}
                    {...otherCollectionData}
                />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
});


export default connect(mapStateToProps)(ShopPage);