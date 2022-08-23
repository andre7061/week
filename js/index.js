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
}
function closePopup() {
  btnBurger.classList.remove('change');
  btnBurger2.classList.remove('change');
  popupHeader.classList.remove('popup_activ');
}
popupHeader.addEventListener('click', (e) => {
  if (e.target.classList.contains('popup')) {
    closePopup();
  }
});
btnBurger.addEventListener('click', () => {
  openPopup();
  document.querySelector('.popup__wrapper').classList.add('popup__wrapper_activ');
});
btnBurger2.addEventListener('click', closePopup);

clickHeader('.item', document);
clickHeader('.item-popup', popupHeader);
