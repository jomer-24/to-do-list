let addTaskBtn = document.getElementById("add-task");
let inputTask = document.getElementById("input");
let taskList = document.getElementById("list");
let markBtns = document.querySelectorAll(".btns");
let removeBtns = document.querySelectorAll(".rm-btn");


addTaskBtn.addEventListener("click", ()=> {
    if(inputTask.value != ""){
        taskList.innerHTML += 
        `<div class="card-body" id="list">
            <div class="list">
                <button class="btns">✅</button>
                <span class="list-content">${inputTask.value}</span>
                <button class="rm-btn">Remove</button>
            </div>
        </div>`;
    }else{
        alert("Field cannot be empty. 😡")
    }

    inputTask.value = "";
    markBtns = document.querySelectorAll(".btns");
    markBtns.forEach(markBtn => {
        markBtn.addEventListener("click", (j)=>{
            j.target.nextElementSibling.style = "text-decoration: line-through; color: red; font-weight: bold;";
            j.target.remove();
        });
    });


    removeBtns = document.querySelectorAll(".rm-btn");
    removeBtns.forEach(removeBtn => {
        removeBtn.addEventListener("click", (e)=> {
            e.target.parentElement.remove();
        });
    });


});


    