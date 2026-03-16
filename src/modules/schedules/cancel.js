import { schedulesDay } from "./load";
import { scheduleCancel } from "./schedule-cancel";

const periods = document.querySelectorAll(".period");

// gerar evento de click para cada lista (manhã, tarde e noite)
periods.forEach((period) => {
    // captura o evento de clique na lista
    period.addEventListener("click", async (event) => {
        if (event.target.classList.contains("cancel-icon")){

            //obtem li pai do elemento clicado
            const item = event.target.closest("li");
            
            //pega o id do agendamento para remover
            const {id} = item.dataset;

            //confirma que o ID foi selecionado
            if (id){
                //confirma se o usuario quer remover ou cancelar
                const isConfirm = confirm("tem certeza que deseja cancelar o agendamento?")

                if (isConfirm) {
                    //faz a requisição na API para cancelar
                    await scheduleCancel({id})

                    //recarrega os agendamentos
                    schedulesDay()
                }
            }
        };
    });
});