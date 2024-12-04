

// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template');

// Компоненты, из которых собираю карточку
const cardImage = cardTemplate.querySelector('.card__image');
const cardDelBtn = cardTemplate.querySelector('.card__delete-button');
const cardTitle = cardTemplate.querySelector('.card__title');
const cardLikeBtn = cardTemplate.querySelector('.card__like-button');


// @todo: DOM узлы
// Нахожу и объявляю здесь контейнер, в котором содержится основной контент; в контейнере уже, в свою очередь, контейнер-список для карточек
const container = document.querySelector('.content');
const cardList = container.querySelector('.places__list');


// @todo: Функция создания карточки
// С помощью этой ф-ции обращаюсь к шаблону карточки, клонирую его, собираю карточку из комопнентов, добавляю карточку в конец списка карточек.
function addCard({name,link}, delCard) {
  const cardList = container.querySelector('.places__list');
  const cardTemplate = document.querySelector('#card-template').content;
  const cardItem = cardTemplate.querySelector('.places__item').cloneNode(true);

  cardItem.querySelector('.card__image').src = link;
  cardItem.querySelector('.card__title').textContent = name;
  cardItem.querySelector('.card__image').alt = name;

  const cardDelBtn = cardItem.querySelector('.card__delete-button');
  cardDelBtn.addEventListener('click', delCard);

  function delCard() {
    const cardItemDel = cardDelBtn.closest('.places__item');
    cardItemDel.remove();
    };

  return cardItem;
};


// @todo: Функция удаления карточки
function delCard() {
  const cardItemDel = cardDelBtn.closest('.places__item');
  cardItemDel.remove();
  };


// @todo: Вывести карточки на страницу
// Рендерю карточки в контейнер ul .places__list
function renderCard() {
  const cardList = container.querySelector('.places__list');
  initialCards.forEach(({name,link,alt}) => 
    {
    const cardItem = addCard({name,link,alt}, delCard);
    cardList.append(cardItem);
  });
};

renderCard();
