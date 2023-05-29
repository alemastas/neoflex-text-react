const basketArray = []; // work sample

export function isBasketExist() { // check basket in local storage. create new empty if basket is empty
    if (getTempBasket() === null) {
        setTempBasket(basketArray);
    }
}

export function getTempBasket() {
    return JSON.parse(sessionStorage.getItem('basketArray'));
}
  
export function setTempBasket(temp_basket) {
    sessionStorage.setItem('basketArray', JSON.stringify(temp_basket));
}

export function basketIndicatorFunction(){ // show sum of basketArray items in sessionStorage
    let sumOfCounts = 0;
    (JSON.parse( sessionStorage.getItem('basketArray'))).map(el => { 
        sumOfCounts += el.counts
    })
    return sumOfCounts;
}

export function updateIndicator(){ // show global counts of items in basket
    const indicator = document.getElementById('basket_indicator');
    indicator.innerHTML = basketIndicatorFunction();
}

const lang = 'eng';

export function getLang() {
    return JSON.parse(sessionStorage.getItem('lang'));
}
  
export function setLang(lang) { // rus or eng
    sessionStorage.setItem('lang', JSON.stringify(lang));
}

export function checkLang(){
    if(getLang() == null){ setLang('eng')}
}