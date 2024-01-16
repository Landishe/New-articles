// Нашли элемент куда падает весь контейнер
const formDone = document.querySelector('.form__done');
let isSaveForm = JSON.parse(localStorage.arrForm)
    console.log(isSaveForm.arrForm)

for(let i of isSaveForm.arrForm){
  
  let newAllBlocks = document.createElement('div');
  newAllBlocks.className = 'form__done__allBlocks'
  formDone.appendChild(newAllBlocks);

  if(i.id == 0){

// Создаем новую разметку если первое сообщение
  let isFormDoneTitle = document.createElement("h2");
    isFormDoneTitle.innerText = i.title;
    isFormDoneTitle.className = "form__done__title";
    newAllBlocks.appendChild(isFormDoneTitle);
  
  let isFormDoneAuthor = document.createElement("h3");
    isFormDoneAuthor.innerText = i.author;
    isFormDoneAuthor.className = "form__done__author";
    newAllBlocks.appendChild(isFormDoneAuthor);
  
  let isFormDateDone = document.createElement("p");
    isFormDateDone.innerText = i.date;
    isFormDateDone.className = "form__date__done";
    newAllBlocks.appendChild(isFormDateDone);

  let isFormDoneText = document.createElement("p");
    isFormDoneText.innerText = i.text;
    isFormDoneText.className = "form__done__text";
    newAllBlocks.appendChild(isFormDoneText);
    
    console.log(i.id)
  
} else {
     
// Создаем новую разметку если второе и последующее сообщение
    newAllBlocks = document.createElement('div');
    newAllBlocks.className = 'form__done__allBlocks'
    formDone.appendChild(newAllBlocks);
  
  let isFormDoneTitle = document.createElement("h2");
    isFormDoneTitle.innerText = i.title;
    isFormDoneTitle.className = "form__done__title";
    newAllBlocks.appendChild(isFormDoneTitle);
  
  let isFormDoneAuthor = document.createElement("h3");
    isFormDoneAuthor.innerText = i.author;
    isFormDoneAuthor.className = "form__done__author";
    newAllBlocks.appendChild(isFormDoneAuthor);
  
  let isFormDateDone = document.createElement("p");
    isFormDateDone.innerText = i.date;
    isFormDateDone.className = "form__date__done";
    newAllBlocks.appendChild(isFormDateDone);

  let isFormDoneText = document.createElement("p");
    isFormDoneText.innerText = i.text;
    isFormDoneText.className = "form__done__text";
    newAllBlocks.appendChild(isFormDoneText);
    
console.log(i.id)
}}