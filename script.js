let bookmarkToggle = document.querySelector('.bookmark');
let bookmarkText = document.getElementById('bookmark-text');
let bookmark = document.querySelector('.bookmark');
const tipButton = document.querySelector('.backproject');
const modalBackground = document.querySelector('.background-modal');
const modal = document.querySelector('.modal-container');
const noRewardButton1 = document.getElementById('noreward');
const noRewardButton2 = document.getElementById('noreward2');
const noRewardButton3 = document.getElementById('noreward3');
const modalButton = document.querySelector('.modal-button');
const priceContainer1 = document.querySelector('.button-price-container');
const priceContainer2 = document.querySelector('.button-price-container-2');
const confirmButton = document.querySelector('.confirm-button');
const confirmModal = document.querySelector('.confirm-modal');
const donateButton = document.querySelector('.modal-button-2');
const blackDonateButton = document.querySelector('.modal-button-3')
let backersInput = document.getElementById('backers');
let donated = 88914;
let backers = 5007

// Donation box one

donateButton.addEventListener('click', function () {
    const bambooPledgeOne = document.querySelector('.bamboo-pledge-1');
    let totalMoney = document.getElementById('total-money');
    let totalValue = donated += parseInt(bambooPledgeOne.value);
    totalMoney.innerText = totalValue;
    backers++;
    backersInput.innerText = backers;
    confirmationModal();
});

// Donation box two 

blackDonateButton.addEventListener('click', function () {
    const bambooPledgeTwo = document.querySelector('.bamboo-pledge-2');
    let totalMoney = document.getElementById('total-money');
    let totalValue = donated += parseInt(bambooPledgeTwo.value);
    totalMoney.innerText = totalValue;
    backers++;
    backersInput.innerText = backers;
    confirmationModal();
});

noRewardButton1.addEventListener('change', function () {
    modalButton.style.display = 'block';
    priceContainer1.style.display = 'none';
    priceContainer2.style.display = 'none';
})

noRewardButton2.addEventListener('change', function () {
    modalButton.style.display = 'none';
    priceContainer1.style.display = 'flex';
    priceContainer2.style.display = 'none';
})

noRewardButton3.addEventListener('change', function () {
    modalButton.style.display = 'none';
    priceContainer1.style.display = 'none';
    priceContainer2.style.display = 'flex';
})

// Confirmation modal pop up
function confirmationModal() {
        modal.style.display = 'none';
        confirmModal.style.display = 'flex';
}

// Confirm Tip Button 
confirmButton.addEventListener('click', function () {
    modalBackground.style.display = 'none';
    confirmModal.style.display = 'none'
});

// opens initial modal
tipButton.addEventListener('click', function () {
    modalBackground.style.display = 'block';
    modal.style.display = 'flex';
})

modalBackground.addEventListener('click', function () {
    modalBackground.style.display = 'none';
    modal.style.display = 'none'
    confirmModal.style.display = 'none'
})

bookmarkToggle.addEventListener('click', function () {
    bookmarkToggle.classList.toggle('bookmarked');
    bookmarkText.classList.toggle('bookmarkclick');
    if (bookmarkText.classList.contains('bookmarkclick')) {
        bookmarkText.innerHTML = 'Bookmarked';
        bookmarkText.style.color = 'white'
        bookmark.style.backgroundColor = 'green'

    } else {
        bookmarkText.innerHTML = 'Bookmark';
        bookmarkText.style.color = 'gray'
        bookmark.style.backgroundColor = '#ededed'
    }
})