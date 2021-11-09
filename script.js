let popup = document.querySelector('.popup'),
closeButton = popup.querySelector('.popup__close'),
popupTitle = popup.querySelector('.popup__title'),
cards = document.querySelector('.projects__cards'),
moreButtons = cards.querySelectorAll('.cards__title'), 
cardsContainers = cards.querySelectorAll('.cards__item');

  
 function closePopup() { 
      popup.classList.remove('popup_opened'); 
    } 

  moreButtons.forEach(element => { 
    element.addEventListener('click', (event) => { 
        popup.classList.add('popup_opened'); 
        popupTitle.textContent = event.target.textContent;
        popup.style.backgroundImage = getComputedStyle(event.target.parentNode).backgroundImage;
    }); 
  });

  closeButton.addEventListener('click', closePopup); 