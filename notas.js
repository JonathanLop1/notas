const numero = document.getElementById("numero");
const mes = document.getElementById("mes");
const año = document.getElementById("año");
const dia = document.getElementById("dia");
const sec2 = document.getElementById("sec2");
const hora = document.getElementById("hora");
const fecha = () =>{
    const date = new Date();
    hora.textContent=date.toLocaleString("es", {our:"numeric"})
}
fecha()

const addNewTask = (event)  => {
    event.preventDefault();
    const{value} = event.target.taskText;
    if(!value)return;
    const task = document.createElement("div");
    task.classList.add("task", "roundBorder");
    task.addEventListener("click", changeTaskState);
    task.textContent = value;
    sec2.prepend(task);
    event.target.reset();
}