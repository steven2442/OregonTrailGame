import { playerStats } from "../Game/player.js"
import { travel } from "../Game/functions.js"
import { spaceportIntegrity } from  "./damaged_spaceport.js"
import { write } from "../Game/utils.js"

export const damagedSpaceportFlavour = () => {
    write("You approach a damaged and seemingly abandoned spaceport. The eerie silence and drifting debris hint at past chaos. You can choose to explore the remains in search of valuable loot, or play it safe and fly onwards. What will you do, Captain?")
}

export const spaceportDamageText= () => {
    if(spaceportIntegrity.spaceportIntegrity <= 0){
        write("As you are exploring the spaceport explodes")
        playerStats.health -= 50
    }  else if(spaceportIntegrity.spaceportIntegrity <= 5){
        write("Spaceport hull could go at any minute")
    }  else if(spaceportIntegrity.spaceportIntegrity <= 10){
        write("Spaceport hull condition is worsening")
    } else{
        write("Spaceport hull is holding out")
    }  
}

export const damagedSpaceportExplore = () => {
    write("Your decision to explore the abandoned spaceport pays off. Amid the wreckage, you discover a stash of sellable items. Carefully gathering the valuable loot your gold reserves significantly increased.")
    playerStats.gold += 40
    spaceportDamageText(spaceportIntegrity.spaceportIntegrity)
}

export const damagedSpaceportLeave = () => {
    write("Deciding that caution is the better part of valor, you choose to leave the abandoned spaceport behind without exploring. Your ship moves forward, leaving the eerie remnants and potential dangers in the past.")  
    travel()
}
