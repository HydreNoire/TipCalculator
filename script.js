let btn = document.querySelectorAll('.tip');
let nbPeople = document.querySelector('#people');
let nbBill = document.querySelector('#bill');
let tipNB = document.querySelector('.tipNB');
let totalNB = document.querySelector('.totalNB');
let custom = document.querySelector('#custom');
let reset = document.querySelector('.reset');

// const activeButton = (btn) => {
//     if (nbBill !== "" || nbPeople !== "") {
//         btn.setAttribute("disabled", "disabled");
//     } else {
//         btn.removeAttribute("disabled");
//     };
// }

// activeButton(reset);
// activeButton(btn);
reset.setAttribute("disabled", "disabled");

btn.forEach(button => {
    //button.setAttribute("disabled", "disabled");

    button.addEventListener('click', (e) => {
        let pourcentage = (parseInt(nbBill.value) * parseInt(button.value.slice(0, -1))) / 100;

        let totalTip = pourcentage / parseInt(nbPeople.value);
        let resTotalTip = totalTip.toFixed(2);
        tipNB.innerText = resTotalTip;

        let totalBill = totalTip + (parseInt(nbBill.value) / parseInt(nbPeople.value));
        let resTotalBill = totalBill.toFixed(2);
        totalNB.innerText = resTotalBill;

        if (reset.getAttribute("disabled")) {
            reset.removeAttribute("disabled");
        }
    });

});

custom.addEventListener('keypress', (e) => {
    if (e.key === 13 || e.key === 'Enter') {

        let totalTipCustom = (parseInt(nbBill.value) * parseInt(custom.value) / 100) / parseInt(nbPeople.value);
        let resTotalTipCustom = totalTipCustom.toFixed(2);
        tipNB.innerText = resTotalTipCustom;

        let totalBillCustom = totalTipCustom + (parseInt(nbBill.value) / parseInt(nbPeople.value));
        let resTotalBillCustom = totalBillCustom.toFixed(2);
        totalNB.innerText = resTotalBillCustom;

        e.preventDefault()
        console.log('Tip custom')
    }
});

