import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils';
import ShopActionTypes from './shop.types';

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
});

export const fetchCollectionsError = error => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: error
})

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionsRef = firestore.collection('collections');

        dispatch(fetchCollectionsStart());

        collectionsRef.get().then(snapshot => {
            console.log(snapshot, 'snapp');
            
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            dispatch(fetchCollectionsSuccess(collectionsMap));
        })
            .catch(error => dispatch(fetchCollectionsError(error.message)));
    }
}