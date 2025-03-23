const inputBox = document.getElementById("input_box"); // get elemetn from HTML ID input_box.
const listContainer = document.getElementById("list_container"); // get element from HTML ID list_container.

// Function for Add task in to-do-list
function addTask() {
    if (inputBox.value === '') {
        alert("Please write some task"); 
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li); 
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData(); // save data for for page refresh and reload.
    }

    inputBox.value = ""; // input box clear after adding task thorugh input filed.
    saveData();
}

// Function for check the task and click the toggle..
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === 'LI') {
            e.target.classList.toggle("checked");
            saveData();
    }
    else if (e.target.tagName === "SPAN") { // else remove the task after completing the task..
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Function for save Data into the browser Memory.
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Fumction for show the full list from Browser local Storage.
function showList() {
    listContainer.innerHTML = localStorage.getItem("data");

}
showList();