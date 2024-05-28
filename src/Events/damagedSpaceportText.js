import { playerStats } from "../player.js"
import { travel } from "../functions.js"
import { spaceportIntegrity } from  "../Events/damagedSpaceport.js"

export const damagedSpaceportFlavour = () => {
    console.log("You approach a damaged and seemingly abandoned spaceport. The eerie silence and drifting debris hint at past chaos. You can choose to explore the remains in search of valuable loot, or play it safe and fly onwards. What will you do, Captain?")
}

export const spaceportDamageText= () => {
    if(spaceportIntegrity.spaceportIntegrity <= 0){
        console.log("As you are exploring the spaceport explodes")
        playerStats.health -= 50
    }  else if(spaceportIntegrity.spaceportIntegrity <= 5){
        console.log("Spaceport hull could go at any minute")
    }  else if(spaceportIntegrity.spaceportIntegrity <= 10){
        console.log("Spaceport hull condition is worsening")
    } else{
        console.log("Spaceport hull is holding out")
    }  
}

export const damagedSpaceportExplore = () => {
    console.log("Your decision to explore the abandoned spaceport pays off. Amid the wreckage, you discover a stash of sellable items. Carefully gathering the valuable loot your gold reserves significantly increased.")
    playerStats.gold += 40
    spaceportDamageText(spaceportIntegrity.spaceportIntegrity)
}

export const damagedSpaceportLeave = () => {
    console.log("Deciding that caution is the better part of valor, you choose to leave the abandoned spaceport behind without exploring. Your ship moves forward, leaving the eerie remnants and potential dangers in the past.")  
    travel()
}
