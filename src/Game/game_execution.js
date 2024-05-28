import { setDistanceToPlanet } from "./start_mission.js"
import { playerStats } from "./player.js"
import { eventPicker } from "./functions.js"
import { notOptionError } from "./userInputError.js" 

export const startMission = async (planet) => {
    setDistanceToPlanet(planet)
    while(playerStats.distanceToPlanet>0){
    checkGameOver()
    await serveEvent(planet)
    }
    console.log("Congratulations, Captain! You have successfully navigated the perils of space and delivered the cargo safely to its destination. Your mission is complete, and the galaxy thanks you for your bravery and skill.")
    process.exit()
}

export const serveEvent = async (planet) =>{
    //chooses a random event from list of availble events
    const eventFunction = eventPicker(planet)
    await eventFunction()
    return
}

export const checkGameOver = () =>{
    if ( playerStats.fuel <= 0 || playerStats.health <= 0){
        console.log("Game Over. Your health has reached zero, and your journey ends here. The cargo remains undelivered, and the mission has failed. Better luck next time, Captain.")
        process.exit()
    }
    return false
}

export const upgrade = () => {
    //player spends gold to upgrade maxFuel, maxHealth, maxSpeed and cargoSpace
    switch(response.toLowerCase()){
        case(maxFuel):
        playerStats.gold -= (playerStats.maxFuel * 0.2)/4
        playerStats.maxFuel = playerStats.maxFuel + (playerStats.maxFuel * 0.2) 
        break
        case(maxHealth):
        break
        case(maxSpeed):
        break
        case(cargoSpace):
        break
        case(leave):
        break
        default:
        notOptionError()
    }
}
