var throttle = require('lodash.throttle');
const feedbackForm = document.querySelector(".feedback-form");


//создаём ключ
const savedFormDataJSON = localStorage.getItem("feedback-form-state");


//разбирает строку json для дальнейшего помещения в localStorage
const savedFormData = JSON.parse(savedFormDataJSON);


// если разобраная строка не является null тогда считываем значения с инпутов формы.
if (savedFormData !== null) {
    feedbackForm["email"].value = savedFormData.email;
    feedbackForm["message"].value = savedFormData.message;
};


//слушатель через троттл. переменная formdata это у нас значение вписаного контента в поля формы. Которые мы помещаем в переменную formDataJSON и делаем строчным(JSON) значением.
feedbackForm.addEventListener("input", throttle(event => {

    const formData = { email: `${feedbackForm["email"].value}`, message: `${feedbackForm["message"].value}` };
    const formDataJSON = JSON.stringify(formData);

    localStorage.setItem("feedback-form-state", formDataJSON);

}, 500));


//слушатель отслеживает нажатие на кнопку подтверждения и при нажатии удаляет созданый нами ранее ключ 'feedback-form-state' и заменяет значения инпутов на пустую строку.
feedbackForm.addEventListener("submit", event => {
    event.preventDefault();
    
    const formData = { email: `${feedbackForm["email"].value}`, message: `${feedbackForm["message"].value}` };
    console.log(formData);

    //удалаяет данные из localStorage и feedback-form
    localStorage.removeItem("feedback-form-state");
    feedbackForm["email"].value = "";
    feedbackForm["message"].value = "";

});
