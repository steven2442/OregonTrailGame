import {startGame} from "./Game/start_page.js"
import { startMission, upgrade } from "./Game/game_execution.js"
import { playerStats } from "./Game/player.js"
import { pirates } from "./Events/pirates.js"

//Main file for exectution of game

startGame()
const run = async () =>{
let i = 0
while(i<10){
    await startMission(playerStats.chosenPlanet)
    upgrade()
playerStats.chosenPlanet = readline.question()
i++
}}

run()
// win 