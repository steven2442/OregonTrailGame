import { drinkOne, drinkingGameFlavour, drinkTwo, drinkThree, drinkFour, declineDrink, loseDrinkingComp } from "./drinking_game_text.js"
import { write } from "../Game/utils.js"
import { writePrompt } from "../Game/utils.js"


export const drinkingGame = async () =>{
    drinkingGameFlavour()

    const ans = await writePrompt([
        {type: "input",
        name: "question",
        message: "What will you do: Drink, Leave?"
  }
    ]);

  write(ans.question);

    if(ans.question.toLowerCase() == "drink"){
      write("test")
        drinkOne()
        const ans2 = await writePrompt([
            {type: "input",
            name: "question",
            message: "What will you do: Drink, Leave?"
      }
        ]);
        if(ans2.question.toLowerCase() == "drink"){
            drinkTwo()
            const ans3 = await writePrompt([
              {type: "input",
              name: "question",
              message: "What will you do: Drink, Leave?"
          }
            ]);
            if(ans3.question.toLowerCase() == "drink"){
                drinkThree()
                drinkFour()
            }
            else if(ans3.question.toLowerCase() == "leave"){
                declineDrink()
        }}else if(ans2.question.toLowerCase() == "leave"){
            declineDrink()
    }}else if(ans.question.toLowerCase() == "leave"){
      write("test")
        declineDrink()
    }
    
    return
    }