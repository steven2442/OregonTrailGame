import {damagedSpaceportFlavour, damagedSpaceportExplore, damagedSpaceportLeave, spaceportDamageText} from "./damagedSpaceportText.js"
import inquirer from "inquirer";
import { notOptionError } from "../userInputError.js"
import { playerStats } from "../player.js"
import {damagedSpaceportRepeatingExplore} from "./damagedSpaceportRepeatingText.js"
import {damagedSpaceportRepeatingLeave} from "./damagedSpaceportRepeatingText.js"


export const spaceportIntegrity = {
  spaceportIntegrity: 20
}
export const damagedSpaceport = async () =>{
  damagedSpaceportFlavour()
  spaceportIntegrity.spaceportIntegrity = 20

    const ans = await inquirer
  .prompt([
    {type: "input",
    name: "question",
    message: "What will you do: Explore, Leave?"
}
  ]);

  console.log(ans.question)
  switch (ans.question.toLowerCase()) {
      case("explore"):
      spaceportIntegrity.spaceportIntegrity -= (Math.floor(Math.random() * 10));
      damagedSpaceportExplore();
      if (spaceportIntegrity.spaceportIntegrity<=0){
        break
      }
      while (true){
        const furtherAction = await inquirer.prompt([
          {
         type: "input",
          name: "question",
          message: "What will you do: Explore, Leave?"
          }
        ]);

        switch(furtherAction.question.toLowerCase()){
            case("explore"):
            spaceportIntegrity.spaceportIntegrity =- (Math.floor(Math.random() * 10));
            console.log(spaceportIntegrity.spaceportIntegrity)
            damagedSpaceportRepeatingExplore();
            return true
            case("leave"):
            damagedSpaceportRepeatingLeave()
            return false;

        }
        break;
    }


      case("leave"):
      damagedSpaceportLeave()
      break;
      default:
      notOptionError()
  }
}