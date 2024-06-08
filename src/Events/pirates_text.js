import { travel } from "../Game/functions.js"
import { playerStats } from "../Game/player.js"
import { write } from "../Game/utils.js"

export const piratesFlavour = () => {
    write("The crew of the USS Discovery was on high alert as they entered pirate-infested space. They had been warned that the pirates were ruthless and would stop at nothing to plunder their ship. As they entered the asteroid field, they were attacked by a swarm of small, fast ships.")
}

export const piratesBribe = () => {
    write("You open communications in order to bribe the pirates. After a small back and forth you agree to their terms")
    if(playerStats.gold >= 100){
    playerStats.gold -= 100
    write("You pay the pirates and they let you proceed")
    } else {
        write("You didnt have enough gold to pay off the pirates, but with your engines stopped and surrond by their ships there is no hope left for you and your crew")
        playerStats.health = 0

    }
    travel()
}

export const piratesFight = () =>{
    playerStats.health -= 30
    write("As you engage the pirates, their firepower quickly overwhelms your defenses. You manage to escape, but your ship has taken significant damage. The hull integrity  isat " + playerStats.health+", and your systems are barely operational. Proceed with extreme caution, Captain")
    travel()
}

export const piratesRun = () =>{
    write("The crew was outnumbered and outgunned, so they decided to make a run for it.")
    playerStats.health -=5
    playerStats.fuel -= 10
    write("Even flying away at top speed you still took a small amount of damage from the pirates. " + playerStats.health + " " + playerStats.fuel )
    travel()
}

