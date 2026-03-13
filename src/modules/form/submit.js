import dayjs from "dayjs";
const form = document.querySelector("form");
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

//data atual para o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

//carrega a data atual
selectedDate.value = inputToday

//define a data minima sendo a data atual
selectedDate.min = inputToday

form.onsubmit = (event) => {
    event.preventDefault()//previne que recarregue a página por padrão
  

    try {
        //recuperando o nome do cliente.
        const name = clientName.value.trim()

        if (!name) {
            return alert("informe o nome nome do cliente")
        }

        //recupera o horario selecionado
        const hourSelect = document.querySelector(".hour-selected");
        if (!hourSelect) {
            return alert("Por favor, selecione o horario desejado.");
        }

        //recupera somente a hora 
        const [hour] = hourSelect.innerText.split(":")
        
        //insere a hora na data
        const when = dayjs(selectedDate.value).add(hour, "hour")

        //gera um ID
        const id = new Date().getTime()

        console.log({id, name, when})

        
    } catch (error) {
        alert("nao foi possivel fazer o agendamento")
        console.log(error)
    }



}