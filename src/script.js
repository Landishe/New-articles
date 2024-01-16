// TODO
// вместо того, чтобы искать каждое поле отдельно ты можешь найти форму и при отправке забрать из нее данные
//https://learn.javascript.ru/formdata  (спасибо, сделал через нее)

// нашли общую форму
const form = document.querySelector('.form')
// нашли куда падает предпросмотр
const formPreview = document.querySelector(".form__preview");
const buttonSend = document.querySelector(".send__form__buttons");
// Объекты инпуты
let inputAuthor = document.querySelector('.form__input__author');
let inputTitle = document.querySelector('.form__input__title');
let inputText = document.querySelector('.form__input__text');
// Переменные для создание массива, проверки создания кнопки и распололжения объектов

let arrForm = [];
let id = 0;
let textMessage = {};
let isButtonTest = true;
let newButtonSend;
let memory
let allBlocks
let authorPreView
let newWindow = true;
// TODO
// ошибка в слове. ЧТоб подсвечивались установи cSpell(не нашел расширение)
const authorAnonumus = "Anonymous";
const titleError = "Ошибка, введите текст заголовка";
const textError = "Ошибка, введите текст статьи";

// создание Предпросмотра
function doPreview(event) {
  event.preventDefault();

// Собираем все с форм в объект
  let newForm = new FormData(form)
  let formDateObject = Object.fromEntries(newForm);
  console.log(formDateObject);
  
// Создание Общего класса предпросмотра
  allBlocks = document.createElement("div");
  allBlocks.className = "form__preview__allBlocks";
  formPreview.appendChild(allBlocks);

// Создание даты
  let date = new Date();
  let formatter = new Intl.DateTimeFormat("ru", {
    hour: "numeric",
    minute: "numeric",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

// добавляем форму в объект
  textMessage = {
    id: id,
    title: formDateObject.title,
    author: formDateObject.author,
    text: formDateObject.text,
    date: formatter.format(date),
  };
  id++;
  arrForm.push(textMessage);
  console.log(textMessage);
  
// Получаем в предпросмотр анонима
  if (textMessage.author === "") {
    textMessage.author = authorAnonumus
    authorPreView = document.createElement("h3");
    authorPreView.innerText = authorAnonumus;
    authorPreView.className = "form__preview__author";
    allBlocks.appendChild(authorPreView);
    console.log (textMessage.author);
// добавляем в предпросмотр дату
    let dateToday = document.createElement("p");
    dateToday.innerText = textMessage.date;
    dateToday.className = "form__preview__date";
    allBlocks.appendChild(dateToday);

  } else {
// Получаем в предпросмотр автора    
    authorPreView = document.createElement("h3");
    authorPreView.innerText = textMessage.author;
    authorPreView.className = "form__preview__author";
    allBlocks.appendChild(authorPreView);
// добавляем в предпросмотр дату
    let dateToday = document.createElement("p");
    dateToday.innerText = textMessage.date;
    dateToday.className = "form__preview__date";
    allBlocks.appendChild(dateToday);
  }

//Если не введен текст и заголовок то выдает ошибку на красном поле
  if (textMessage.title === "" || textMessage.text === "") {
    let newTitleView = document.createElement("h2");
    newTitleView.innerText = titleError;
    newTitleView.className = "preview__title__error";
    allBlocks.prepend(newTitleView);

    let newViewText = document.createElement("p");
    newViewText.innerText = textError;
    newViewText.className = "preview__text__error";
    allBlocks.appendChild(newViewText);
    console.log (textMessage.text);
// Получаем в предпросмотр заголовок и текст
  } else {
    let newTitleView = document.createElement("h2");
    newTitleView.innerText = textMessage.title;
    newTitleView.className = "form__preview__title";
    allBlocks.prepend(newTitleView);

    let newViewText = document.createElement("p");
    newViewText.innerText = textMessage.text;
    newViewText.className = "form__preview__text";
    allBlocks.appendChild(newViewText);
  }
// Получаем в предпросмотр кнопку "Отправить"
  if (isButtonTest === true) {
    isButtonTest = false;
    newButtonSend = document.createElement("button");
    newButtonSend.className = "button__form";
    newButtonSend.textContent = "Отправить";
    allBlocks.appendChild(newButtonSend);
  } else if (isButtonTest === false) {
// Удаляем первую кнопку "Отправить"
    newButtonSend.remove();

// Получаем заного в предпросмотр кнопку "Отправить"
    newButtonSend = document.createElement("button");
    newButtonSend.className = "button__form";
    newButtonSend.textContent = "Отправить";
    allBlocks.appendChild(newButtonSend);
  }
    const buttonForm = document.querySelector(".button__form");
    buttonForm.addEventListener("click", addMessage);
    inputAuthor.value = '';
    inputTitle.value = '';
    inputText.value = '';
}

// Получаем результат на новой странице
function addMessage() {
  if (textMessage.title != "" && textMessage.text != "") {
  localStorage.setItem('isAllMessage', arrForm);
    localStorage.arrForm = JSON.stringify({arrForm})
}}
form.addEventListener('submit', doPreview);