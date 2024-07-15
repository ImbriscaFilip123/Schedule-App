const addName = document.querySelector(".nume");
const addHour = document.querySelector(".ore");
const addTask = document.querySelector(".activitati");
const addDescription = document.querySelector(".description")

const addBtn = document.querySelector(".addCard");
const editNameBtns = document.querySelectorAll(".editName");
const removeBtns = document.querySelectorAll(".remove");
const editHourBtns = document.querySelectorAll(".editHour");


const scheduleContent = document.querySelector(".schedule-content");


addBtn.addEventListener("click", () => {

    let name = addName.value;
    let hour = addHour.value;
    let task = addTask.value;
    let description = addDescription.value;

    if(name && hour && task && description){

    scheduleContent.appendChild(addCard(name, hour, task, description))
     
    }
})


function addCard(name, hour, task, description){

    let newCard = document.createElement("div");

    newCard.classList.add("schedule-card");

    newCard.innerHTML = ` <h6 class="schedule-card-time">${hour}</h6>
                    <h3>${task}</h3>
                    <p>${description}</p>

                    <p class="schedule-card-name" style="color: red;">${name}</p>
                    <button class="editName">Edit name</button>
                    <button class="remove">Remove card</button>
                    <button class="editHour">Edit hour</button>`

    return newCard;
}


scheduleContent.addEventListener("click", (event) => {

    let object = event.target;

    if(object.classList.contains("editName")){

        let card = object.parentNode;

        let nameText = card.querySelector(".schedule-card-name");
        let editBtn = card.querySelector(".editName");
    
        let currentName = nameText.innerText;

       let input = document.createElement("input");
       input.type = "text";
       input.value = currentName;
       input.className = "nameInput";

       card.replaceChild(input, nameText);

       let saveNameBtn = document.createElement("button");
      
        saveNameBtn.textContent = "Save";

        card.replaceChild(saveNameBtn , editBtn);


       saveNameBtn.addEventListener("click", () => {
        card.replaceChild(nameText, input);
        nameText.textContent = input.value;
         card.replaceChild(editBtn , saveNameBtn);
       })
    }

    else if(object.classList.contains("remove")){
        let card = object.parentNode;

        card.style.display = "none" ;
    }

    else if(object.classList.contains("editHour")){
      
        let card = object.parentNode;

        let cardHour = card.querySelector(".schedule-card-time");
        let editHour = card.querySelector(".editHour");

        let input = document.createElement("input");
        input.type = "text";
        input.value = cardHour.innerText;
        input.className = "hourInput";

        card.replaceChild(input , cardHour);

        let saveHourBtn = document.createElement("button");
     
        saveHourBtn.textContent = "Save";

        card.replaceChild(saveHourBtn , editHour);


       saveHourBtn.addEventListener("click", () => {
        card.replaceChild(cardHour, input);
       cardHour.textContent = input.value;
         card.replaceChild(editHour , saveHourBtn);
       })
    }

    

 


})