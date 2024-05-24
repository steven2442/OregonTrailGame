import { drinkOne, drinkingGameFlavour, drinkTwo, drinkThree, declineDrink, loseDrinkingComp } from "./drinkingGameText.js"
import inquirer from "inquirer";
import { notOptionError } from "../userInputError.js"
import { playerStats } from "../player.js"


export const drinkingGame = async () =>{
    drinkingGameFlavour()

    const ans = await inquirer
  .prompt([
    {type: "input",
    name: "question",
    message: "Will you drink? Yes, No"
}
  ]);

  console.log(ans.question);

    if(ans.question.toLowerCase() == "yes"){
        drinkOne()
        const ans2 = await inquirer
  .prompt([
    {type: "input",
    name: "question",
    message: "Will you drink? Yes, No"
}
  ]);
        if(ans2.question.toLowerCase() == "yes"){
            drinkTwo()
            const ans3 = await inquirer
            .prompt([
              {type: "input",
              name: "question",
              message: "Will you drink? Yes, No"
          }
            ]);
            if(ans3.question.toLowerCase() == "yes"){
                drinkThree()
            }
        }else{
            loseDrinkingComp()
        }
        return
    }else{
        declineDrink()
    }
    
    return
    }