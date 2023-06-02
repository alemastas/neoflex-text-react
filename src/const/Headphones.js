// shop items headphones
// hdph - wired headphones
// wrls - wireless headphones
export const Headphones = [
    {
        img: 'img/headphones/Image1.png',
        title: 'Apple BYZ S852I', 
        price: 2927,
        rate: 4.7,
        type: 'hdph',
    },
    {
        img: 'img/headphones/Image2.png',
        title: 'Apple EarPods', 
        price: 2327,
        rate: 4.5,
        type: 'hdph',
    },
    {
        img: 'img/headphones/Image3.png',
        title: 'Apple EarPods', 
        price: 2327,
        rate: 4.5,
        type: 'hdph',
    },
    {
        img: 'img/headphones/Image1.png',
        title: 'Apple BYZ S8521', 
        price: 2927,
        rate: 4.7,
        type: 'hdph',
    },
    {
        img: 'img/headphones/Image2.png',
        title: 'Apple EarPods', 
        price: 2327,
        rate: 4.5,
        type: 'hdph',
    },
    {
        img: 'img/headphones/Image3.png',
        title: 'Apple EarPods', 
        price: 2327,
        rate: 4.5,
        type: 'hdph',
    },
    {
        img: 'img/headphones/Image4.png',
        title: 'Apple AirPods', 
        price: 9527,
        rate: 4.7,
        type: 'wrls',
    },
    {
        img: 'img/headphones/Image5.png',
        title: 'GERLAX HG-04', 
        price: 6527,
        rate: 4.7,
        type: 'wrls',
    },
    {
        img: 'img/headphones/Image6.png',
        title: 'BOROFONE B04', 
        price: 7527,
        rate: 4.7,
        type: 'wrls',
    }

];

function addIdCounts(Headphones){ // add types for sort
    Headphones.forEach(el => {
        el.id = (Headphones.indexOf(el))
        el.counts = 1;
    })
    return Headphones;
}
addIdCounts(Headphones);