import React from 'react';
import './collections-overview.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../preview/collection-preview.component';
import { selectCollectionForPreview } from '../../redux/shop/shop.selector';

const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
        {collections.map(({ id, ...otherCollectionData }) => (
            <CollectionPreview key={id}
                {...otherCollectionData}
            />
        ))}
    </div >
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);