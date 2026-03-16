import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";
import { hoursClick } from "./hours-click.js";
const hours = document.getElementById("hours")

export function hoursLoad({date, dailySchedules}){
    //limpa a lista de horarios
    hours.innerHTML = ""

    //obtém a lista de todos os horários ocupados 
    const unavailablesHours = dailySchedules.map((schedule) =>
        dayjs(schedule.when).format("H:mm")
    )

    const opening = openingHours.map((hour)=> {
        //recupera somente a hora
        const [scheduleHour] = hour.split(":")

        //verifica hora na date e verificar se está no passado.
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())

        const available = !unavailablesHours.includes(hour) && !isHourPast
        
        return{
            hour,
            available,
        }
    })

    //renderizar os horários
    
    opening.forEach(({hour, available}) => {
        const li = document.createElement("li")
        
        li.classList.add("hour")
        li.classList.add(available ? "hour-available" : "hour-unavailable")
        
        li.textContent = hour
        
        if(hour==="9:00"){
            hourHeaderAdd("Manhã")
        } else if (hour === "13:00"){
            hourHeaderAdd("Tarde")
        } else if (hour=== "18:00"){
            hourHeaderAdd("noite")
        }
        
        hours.append(li)
    })
    hoursClick()
}

function hourHeaderAdd(title){
    const header = document.createElement("li")
    header.classList.add("hour-period")
    header.textContent = title
    
    //adiciona o evento de clique nos horarios disponiveis
    hours.append(header)
}