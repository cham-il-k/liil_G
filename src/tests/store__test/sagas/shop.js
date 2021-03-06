import { takeEvery, take, put , call, takeLatest } from 'redux-saga/effects'
import {firestore} from './../../util/auth.firebase'
import { fetchCollectionSuccess, fetchCollectionsFail} from './../actions/shop'
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const PAY_PRODUCT = 'PAY_PRODUCT'
export const PAY_PRODUCT_FAIL = 'PAY_PRODUCT_FAIL'
export const VALID_PRODUCT = 'VALID_PRODUCT'
export const SHIP_PRODUCT = 'SHIP_PRODUCT'
export const SEARCH_CHANGE = 'SEARCH_CHANGE'
export const FETCH_COLLECTIONS_START = 'FETCH_COLLECTIONS_START'


export function* fetchCollectionsStart() {
    yield takeLatest(FETCH_COLLECTIONS_START, fetchCollectionAsync)
}

export function* fetchCollectionAsync( ) {
    try {
        const collectionRef = yield firestore.collection('collections')
        const snapShot = yield collectionRef.get();
         yield put(fetchCollectionSuccess(snapShot))   
    }catch (error) {
      yield put(fetchCollectionsFail(error.message))  
     }
}

export function* validProduct( product ){
    yield take(VALID_PRODUCT)
}
export function* payProduct( id ){
yield take( PAY_PRODUCT)
}
export function* shipProduct(checkout){
 yield take(SHIP_PRODUCT)
}