import firebaseInstance from '../';
import database from "firebase/database";

function getRef(options) {
    return firebaseInstance.firebase.database().ref(`users/${window.user.uid}/data/${options.entity}`)
}

function read(options) {
    return firebaseInstance.firebase.database().ref(`users/${window.user.uid}/data/${options.entity}`).once('value')
        .then(res => {
           const arr = []
           const map = res.val();
            for (const key in map) {
               const item = map[key];
               item.id = key;
               arr.push(item)
            }
            return arr;
        })
}

function getById(options) {
    return firebaseInstance.firebase.database()
        .ref(`users/${window.user.uid}/data/${options.entity}/${options.id}`).once('value')
        .then(res => {
            return res.val();
        })
}

function create(options) {
    return firebaseInstance.firebase.database().ref(`users/${window.user.uid}/data/${options.entity}`)
        .push(options.item);
}

function remove(options) {
    return firebaseInstance.firebase.database().ref(`users/${window.user.uid}/data/${options.entity}/${options.id}`).remove();
}

function update(options) {
    return firebaseInstance.firebase.database().ref(`users/${window.user.uid}/data/${options.entity}/${options.id}`)
        .update(options.item);
}



export default {
    read,
    create,
    remove,
    getRef,
    getById,
    update,
}