import firebaseInstance from '../';
import firestore from "firebase/firestore";

async function insertCal(options) {

    options.id = firebaseInstance.firebase.firestore().collection('users').doc(window.user.uid)
        .collection("sum-cal").doc().id

    let sumCal = {
        income: options.cal.income,
        expense: options.cal.expense,
        familyMembers: options.cal.familyMembers,
        loan: options.cal.loan,
        loanDuration: options.cal.loanDuration,
        result: options.item.result
    }

    await firebaseInstance.firebase.firestore().collection('users').doc(window.user.uid)
        .collection("sum-cal").doc(options.id).set(sumCal)

}

function PMT(ir, np, pv) {
    /*
     * ir   - interest rate per month
     * np   - number of periods (months)
     * pv   - present value
     */
    let pmt, pvif;
let mir = ir/12

    pvif = Math.pow(1 + mir, np);
    pmt = Math.floor( mir * (pv * pvif) / (pvif - 1));


    return pmt;
}

export default {
    insertCal,
    PMT
}