/* Selectors */

const allTabBtn = document.querySelectorAll('.btn-selector');
const allTabContent = document.querySelectorAll('.slider-content-tab');
const btnNext = document.querySelector('.btn-container .next');
const previousBtn = document.querySelector('.btn-container .backBtn');

/* Input selectors */
const nameInput = document.getElementById('name-person');
const emailInput = document.getElementById('email-person')
const numberInput = document.getElementById('phone-person')

const allInput = document.querySelectorAll('.input')
/* Input selectors */

const cardContent = document.querySelectorAll('.card')

const subText = document.querySelectorAll('.sub-text')
const stateSeason = document.querySelectorAll('.season')

const infoListContainers = document.querySelectorAll('.infoList');
const infoCheckboxes = document.querySelectorAll('#addOns');

const headingP = document.querySelectorAll('.headingP')
const subAmountDisplay = document.querySelector('.subAmountDisplay')
const secondLink = document.querySelector('.second-link')
const totalAmountAll = document.querySelector('.totalAmountAll')

// Toggle checking
const checkBox = document.querySelector('#toggle');
const leftBtn = document.querySelector('.leftButton');
const rightBtn = document.querySelector('.rightButton');
const labelToggle = document.querySelector('.label');
let monthlyAmount = document.querySelectorAll('.monthly-amount');
let yearlyAmount = document.querySelectorAll('.yearly-amount');

/* Selectors */



let startIndex = 0;


btnNext.addEventListener('click', nextClick);
previousBtn.addEventListener('click', previousClick);

// Next click + form validation

// Next step click function
function nextClick() {
    const emailPattern = /^[^.]+@[^.]+\.[a-z]{2,3}$/
    const inValid = document.querySelector('p.valid')

    errorMessage()



for(let i = 0; i < allInput.length; i++) {
    if(allInput[i].value == '' ) {
        return
    }
    if(!emailPattern.test(allInput[1].value)) {
        inValid.style.display = 'block'
    return ;
        
    }
    else {
        inValid.style.display = 'none'
    }

    if(!/^[A-Z]/.test(allInput[0].value)) {
        inValid.style.display = 'block'
        return 
    }

    if(allInput[0].value.length <  5) {
        inValid.style.display = 'block'
        return 
    }

}


const allTabBtn = document.querySelectorAll('.btn-selector');

    if (startIndex >= 4) {
        return;
    }

    startIndex++;

    if (startIndex > 0) {
        previousBtn.style.visibility = 'visible';
    }
    if (startIndex >= 3) {
        btnNext.textContent = 'Confirm';
        btnNext.classList.add('confirm');
        btnNext.classList.remove('next');
    }

    if(startIndex >= 4) {
        allTabBtn[3].classList.add('alternative')
        btnNext.style.display  = 'none'
        previousBtn.style.display = 'none'
    }
    if(startIndex ==3) {
        checkOnSelectedCard()
        checkItemsList()
    }


    updateTabs()
}

// Previous click actions
function previousClick() {
    if (startIndex === 0) {
        return;
    }
    startIndex--;


    if (startIndex < 1) {
        previousBtn.style.visibility = 'hidden';
    }
    if(startIndex <= 3) {
        allTabBtn[3].classList.remove('alternative')
    }
    btnNext.textContent = 'Next Step';
    btnNext.classList.remove('confirm');
    btnNext.classList.add('next');

    if(startIndex == 2) {
        clearPrevious()
    }


    updateTabs();
}


// Actions on the cardContent ==> page sections
cardContent.forEach(card => {
    card.addEventListener('click', function () {
        cardContent.forEach(card => {
            card.classList.remove('selected');
        });
        card.classList.add('selected');
    });
});
cardContent.forEach(card => {
    card.addEventListener('click', function () {
        cardContent.forEach(card => {
            card.classList.remove('selected');
        });
        checkOnSelectedCard()

        card.classList.add('selected');
    });
});



// Updatng the tab nav
function updateTabs() {

    allTabContent.forEach((tab, index) => {
        tab.classList.toggle('active', index === startIndex);
    });

    allTabBtn.forEach((btnTab, index) => {
        btnTab.classList.toggle('active', index === startIndex);
    });

}

// error messages
function errorMessage() {
    const inputAll = document.querySelectorAll('.input')
    const allRequired = document.querySelectorAll('span.required')
    const inputs = document.querySelectorAll('.info_content input')

    for(let i = 0; i < inputAll.length; i++) {
        if(inputAll[i].value === '') {
            allRequired[i].style.display = 'block'
            inputs[i].classList.add('errorMessage')
        }
        else {
            allRequired[i].style.display = 'none'
            inputs[i].classList.remove('errorMessage')

        }
    }
}








// Monthly toggle action
leftBtn.addEventListener('click', function () {
    checkBox.checked = false;
    leftBtn.classList.add('activate');
    rightBtn.classList.remove('activate');

    yearlyAmount.forEach(yearly => {
        yearly.style.display = 'none';
    });

    monthlyAmount.forEach(month => {
        month.style.display = 'block';
    });
});


// Yearly toggle action
rightBtn.addEventListener('click', function () {
    checkBox.checked = true;
    leftBtn.classList.remove('activate');
    rightBtn.classList.add('activate');

    monthlyAmount.forEach(month => {
        month.style.display = 'none';
    });

    yearlyAmount.forEach(yearly => {
        yearly.style.display = 'block';
    });
});

const amountYearly = document.querySelectorAll('.amount-year')
const amountMonth = document.querySelectorAll('.amount-month')


// Label toggle Actions
labelToggle.addEventListener('click', function () {
    const allCheckBtns = document.querySelectorAll('.toggle-container p');
    allCheckBtns.forEach(checks => {
        checks.classList.remove('activate');
    });
    if (!checkBox.checked) {
        rightBtn.classList.add('activate');
        monthlyAmount.forEach(month => {
            month.style.display = 'none';
        });
        yearlyAmount.forEach(yearly => {
            yearly.style.display = 'block';
        });
        amountMonth.forEach(mo => {
            mo.style.display = 'none'
        })
        amountYearly.forEach(yr=> {
            yr.style.display = 'block'
        })
    } 
    else {
        leftBtn.classList.add('activate');
        monthlyAmount.forEach(month => {
            month.style.display = 'block';
        });
        yearlyAmount.forEach(yearly => {
            yearly.style.display = 'none';
        });
        amountMonth.forEach(mo => {
            mo.style.display = 'block'
        })
        amountYearly.forEach(yr=> {
            yr.style.display = 'none'
        })

    }
});


// Bar content List BARS
infoListContainers.forEach((container, index) => {
    container.addEventListener('click', function() {
        container.classList.toggle('selected');
        infoCheckboxes[index].checked = container.classList.contains('selected');
    });
    
    infoCheckboxes[index].checked = container.classList.contains('selected');
    });
    
    infoCheckboxes.forEach((checkbox, index) => {
    checkbox.addEventListener('click', function() {
        infoListContainers[index].classList.toggle('selected', checkbox.checked);
    });
    });
    


const optionSelected = document.querySelector('.optionSelected')
const disAmount = document.querySelector('.amountSet')
const heroHead = document.querySelectorAll('.heroHead')

let addAmount = 0

// Function that checks on selected cards and passes actions to them
function checkOnSelectedCard () {
    for(let i = 0; i < cardContent.length; i++) {
        if(cardContent[i].classList.contains('selected')) {

            let newSub = subText[i];
            const amountGet = newSub.querySelectorAll('.digitAmount')
            const season = newSub.querySelectorAll('.season')

            for(let j = 0; j< amountGet.length; j++) {
                if(amountGet[j].style.display !=='none' && season[j].style.display !== 'none' ) {

                    if(season[j].innerHTML == 'mo') {
                        optionSelected.innerHTML = `${heroHead[i].innerHTML}(monthly)`
                    }
                    else if(season[j].innerHTML == 'yr') {
                        optionSelected.innerHTML = `${heroHead[i].innerHTML}(yearly)`

                    }
                    disAmount.innerHTML = `$${amountGet[j].innerHTML}/${season[j].innerHTML}`
                    addAmount = Number(amountGet[j].innerHTML)
                }
            }
        }
    }

}




// A function that checks the content of the previous funtion and passes another a funtion to the next content page
function checkItemsList () {

    for(let c= 0; c< infoListContainers.length; c++){
        if (infoListContainers[c].classList.contains("selected")) {
            let info = infoListContainers[c];
            
            const headTag = info.querySelector('.headingP');
            const selectDigitAmount = info.querySelectorAll('.digitListAmount');
            const hAmount = info.querySelectorAll('.hAmount')
            const listAmount = info.querySelectorAll('.list-amount')

            for(let k = 0; k< listAmount.length; k++) {
                if(listAmount[k].style.display !=='none' ) {
                    const createElement = document.createElement('p')
                    createElement.className = 'inAmount'

                    const addOnFirst = document.createElement('p')
                    addOnFirst.className = 'addOnFirst'

                    addOnFirst.innerHTML = `${headTag.innerHTML}`


                    createElement.innerHTML = `$${selectDigitAmount[k].innerHTML}${hAmount[k].innerHTML}`
                    subAmountDisplay.appendChild(createElement);
                    secondLink.appendChild(addOnFirst)

                    addAmount += Number(selectDigitAmount[k].innerHTML)
                    totalAmountAll.innerHTML = `$${addAmount}${hAmount[k].innerHTML}`
                }
            }
        }
    }

}


// Clear previous actions

function clearPrevious() {
    subAmountDisplay.innerHTML = ''
    secondLink.innerHTML = ''

}


// Sends the content page to the card container for changes
const changeIndex = document.querySelector('.change')

changeIndex.addEventListener('click',function() {
    startIndex = 1
    allTabContent.forEach(content=> {
        content.classList.remove('active')
    })
    allTabBtn.forEach(btn=> {
        btn.classList.remove('active')
    })
    allTabBtn[startIndex].classList.add('active')
    allTabContent[startIndex].classList.add('active')
    clearPrevious()
})


