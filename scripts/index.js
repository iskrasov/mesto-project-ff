// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template');


// @todo: DOM узлы
// Нахожу и объявляю здесь контейнер, в котором содержится основной контент; в контейнере уже, в свою очередь, контейнер-список для карточек
const container = document.querySelector('.content');
const cardsContainer = container.querySelector('.places__list');


// @todo: Функция создания карточки
// С помощью этой ф-ции обращаюсь к шаблону карточки, клонирую его, собираю карточку из комопнентов, добавляю карточку в конец списка карточек.
function createCard({name,link}, delCard) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardItem = cardTemplate.querySelector('.places__item').cloneNode(true);
  const cardImage = cardItem.querySelector('.card__image');

  cardImage.src = link;
  cardImage.alt = name;
  cardItem.querySelector('.card__title').textContent = name;

  const cardDelBtn = cardItem.querySelector('.card__delete-button');
  cardDelBtn.addEventListener('click', delCard);

  return cardItem;
};


// @todo: Функция удаления карточки
function delCard() {
  const cardItem = document.querySelector('.places__item');
  const cardDelBtn = cardItem.querySelector('.card__delete-button');
  const cardItemDel = cardDelBtn.closest('.places__item');
  cardItemDel.remove();
  };


// @todo: Вывести карточки на страницу
// Рендерю карточки в контейнер ul .places__list
function renderCard() {
  initialCards.forEach(({name,link}) => 
    {
    const cardItem = createCard({name,link}, delCard);
    cardsContainer.append(cardItem);
  });
};

renderCard();
