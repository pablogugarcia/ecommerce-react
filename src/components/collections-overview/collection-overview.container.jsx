import { connect } from 'react-redux';
import { compose } from 'redux';
import { selectCollectionsIsFetching } from '../../redux/shop/shop.selector';
import WithSpinner from '../with-spinner/with-spinner.component';
import collectionsOverviewComponent from './collections-overview.component';


const mapStateToProps = () => ({
    isLoading: selectCollectionsIsFetching
})

// const CollectionOverviewContainer = connect(mapStateToProps)(WithSpinner(collectionsOverviewComponent));
const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(collectionsOverviewComponent)

export default CollectionOverviewContainer;