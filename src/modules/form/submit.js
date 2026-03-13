import dayjs from "dayjs";
const form = document.querySelector("form");
const selectedDate = document.getElementById("date")

//data atual para o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

//carrega a data atual
selectedDate.value = inputToday

//define a data minima sendo a data atual
selectedDate.min = inputToday

form.onsubmit = (event) => {
    event.preventDefault()//previne que recarregue a página por padrão
    console.log("enviado!")



}