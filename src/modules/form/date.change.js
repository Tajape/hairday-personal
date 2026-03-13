import {schedulesDay} from "../schedules/load"

//selecionar o input

const selectedDate = document.getElementById("date")

//recarregar a lista de horarios quando o input de data mudar
selectedDate.onchange = () => schedulesDay()
