import { setDistanceToPlanet } from "./start_mission.js"
import { playerStats } from "./player.js"
import { eventPicker } from "./functions.js"
import { write } from "../Game/utils.js"

export const startMission = async (planet) => {
    setDistanceToPlanet(planet)
    while(playerStats.distanceToPlanet>0){
    checkGameOver()
    if(playerStats.isGameOver == true){
        return
    }
    await serveEvent(planet)
    }
    write("Congratulations, Captain! You have successfully navigated the perils of space and delivered the cargo safely to its destination. However, your mission is not complese, there is still more planets that need to be delivered to.")
}

export const serveEvent = async (planet) =>{
    //chooses a random event from list of availble events
    const eventFunction = eventPicker(planet)
    await eventFunction()
    return
}

export const checkGameOver = () =>{
    if ( playerStats.fuel <= 0 || playerStats.health <= 0){
        write("Game Over. Your health has reached zero, and your journey ends here. The cargo remains undelivered, and the mission has failed. Better luck next time, Captain.")
        playerStats.isGameOver = true;
        return
    }
    return
}
