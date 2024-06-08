import {startGame} from "./Game/start_page.js"
import { startMission } from "./Game/game_execution.js"
import { playerStats } from "./Game/player.js"
import { write } from "./Game/utils.js"

//Main file for exectution of game

startGame()
const run = async () =>{
let i = 0
while(i<2){
    if(playerStats.isGameOver){
        return
    }
    await startMission(playerStats.chosenPlanet)
i++
}
write("Congratulations, Captain! You have successfully navigated the perils of space and delivered the cargo safely to its destination. Your mission is complete, and the galaxy thanks you for your bravery and skill.")
return
}

run()
// win 