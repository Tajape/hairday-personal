import { scheduleFetchByDay } from "../../services/fetch-by-day.js";
import { hoursLoad } from "../form/hours-load.js";
import { schedulesShow } from "./show.js";

const selectDate = document.getElementById("date")

export async function schedulesDay(){
    //obtem a data do input
    const date = selectDate.value

    //busca na API os agendamentos
    const dailySchedules = await scheduleFetchByDay({date})

    //exibe os argumentos
    schedulesShow({dailySchedules})

    //renderiza as horas disponiveis
    hoursLoad({date, dailySchedules})
}