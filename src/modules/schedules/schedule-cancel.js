import { apiConfig } from "../../services/api-config";

export async function scheduleCancel({id}) {
    try {
        await fetch (`${apiConfig.baseURL}/schedules/${id}`,{
            method: "DELETE",
            })
    } catch (error) {
        console.log(error)
        alert("nao foi possivel cancelar o agendamento")
    }
}