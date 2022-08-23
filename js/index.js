// Добавление актив класса линкам
function clickHeader(item, doc) {
  const btnHeader = document.querySelectorAll(item);
  btnHeader.forEach((link) => {
    link.addEventListener('click', (e) => {
      doc.querySelector('.link_activ').classList.remove('link_activ');
      e.target.classList.add('link_activ');
      closePopup();
    });
  });
}

const btnBurger = document.querySelector('.burger');
const popupHeader = document.querySelector('.popup');
const popupHeaderWrapper = document.querySelector('.popup__wrapper');

const btnBurger2 = popupHeader.querySelector('.burger');

function openPopup() {
  btnBurger.classList.add('change');
  popupHeader.classList.add('popup_activ');
  btnBurger2.classList.add('change');
  document.querySelector('.popup__wrapper').classList.add('popup__wrapper_activ');
}
function closePopup() {
  btnBurger.classList.remove('change');
  btnBurger2.classList.remove('change');
  popupHeader.classList.remove('popup_activ');
  document.querySelector('.popup__wrapper').classList.remove('popup__wrapper_activ');
}
popupHeader.addEventListener('click', (e) => {
  if (e.target.classList.contains('popup')) {
    document.querySelector('.popup__wrapper').classList.remove('popup__wrapper_activ');
    closePopup();
  }
});
btnBurger.addEventListener('click', () => {
  openPopup();
});
btnBurger2.addEventListener('click', () => {
  //closePopup();
  document.querySelector('.popup__wrapper').classList.remove('popup__wrapper_activ');
  setTimeout(closePopup, 2000);
});

clickHeader('.item', document);
clickHeader('.item-popup', popupHeader);
