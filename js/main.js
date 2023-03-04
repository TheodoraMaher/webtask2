let taskinput = document.querySelectorAll('#taskinput');
let addtaskbtn = document.getElementById('addtaskbtn');
let alltasks = document.getElementById('alltasks');
let notask = document.getElementById('notask');
let validationMessage = document.getElementById('validationMessage');
let closeValidationMessageBtn= document.getElementById('closeValidationMessageBtn');

let noTasksShow = () => {
    if (alltasks.childElementCount == 0) {
        notask.classList.remove('none');
    }
}


let addtask = (name, image , date) => {
   
    // let taskvalue = taskinput.value;
    // let TaskLength = taskinput.value.length;
    if(name.trim() =="" || image.trim() ==""  || date.trim() =="" ){
        validationMessage.classList.remove('none');
    
        if (name.trim() =="") {
            validationMessage.innerHTML = "You must enter name ";
        } else if (image.trim() =="" ) {
            validationMessage.innerHTML = "You must enter image";
        } else if (date.trim() =="") {
            validationMessage.innerHTML = "You must enter date";
        }
    
    }else{
        notask.classList.add('none');
        validationMessage.classList.add('none');
        alltasks.innerHTML += `
        <div class='alert alert-info'> ${name}
        <img width='30' src='${image}'>
        <i class="delete text-danger float-right fa-solid fa-rectangle-xmark"></i>

        <p class='float-right'>  ${date} </p>
        </div>  `;       
        showModelFunction();
       
       
    //     let divNewTask = document.createElement('div');
    // divNewTask.classList="alert alert-info";
    // divNewTask.append(taskvalue)

    // alltasks.append(divNewTask)

        // alltasks.innerHTML += `
        // <div class='alert alert-info> ${taskvalue}
        //   <i class="bi bi-x-circle"></i>
        //    </div>
        //    `

    }  
    taskinput.value = "";  
    
}
let renderTask = () => {
    let allTask = {
        taskName: taskinput[0].value,
        image: taskinput[1].value,
        date: taskinput[2].value
    }
    addtask(allTask.taskName, allTask.image, allTask.date);
}


addtaskbtn.addEventListener('click', renderTask);
closeValidationMessageBtn.addEventListener('click',function (){
    validationMessage.classList.add('none');
});



document.addEventListener('click', function (t) {
    if (t.target.classList.contains('delete')) {
        t.target.parentElement.remove();
        noTasksShow();
    }
})