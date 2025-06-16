
const nameInput = document.getElementById("name-input");
const bookInput = document.getElementById("book-input");
const priceInput = document.getElementById("price-input");
const timeInput = document.getElementById("time-input");
const dateInput = document.getElementById("date-input");
const bellInput = document.getElementById("bell-input");
const Add = document.getElementById('add');
const slipContiner = document.getElementById('slips-continer');

Add.addEventListener("click", () => {

    const name = document.querySelector(".name");
    const book = document.querySelector(".book");
    const price = document.querySelector(".price");
    const time = document.querySelector(".time");
    const date = document.querySelector(".date");
    const bell = document.getElementById("bell-input");


    



    const slip = document.createElement("div");;'a'
    slip.classList.add("slip");
    slipContiner.appendChild(slip);
    const ul = document.createElement("ul");
    slip.appendChild(ul);
    
    const fields = {
        Name: nameInput.value,
        Book: bookInput.value,
        Price: priceInput.value,
        Time: timeInput.value,
        Date: dateInput.value,
        Bell: bellInput.value,
    };

    for (const key in fields) {
        const li = document.createElement("li");
        li.textContent = `${key}: ${fields[key]}`;
        ul.appendChild(li);
    }
   
   nameInput.value = "";
   bookInput.value = "";
   priceInput.value = "";
   timeInput.value = "";
   dateInput.value = "";
   bellInput.value = "";

   const remove = document.createElement("span");
   remove.innerHTML = "\u00d7";
   slip.appendChild(remove);

   saveData();

})

slipContiner.addEventListener("click", (e) => {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    } else if (e.target.tagName === "DIV") {
        e.target.classList.toggle("highlight");
        saveData();
    }
 
})

const saveData = () => {
    localStorage.setItem("data", slipContiner.innerHTML);
}

const showData = () => {
    slipContiner.innerHTML = localStorage.getItem("data");
}

showData();