import { playerStats } from "../Game/player.js";
import { printPlayerStats, travel } from "../Game/functions.js";
import { write } from "../Game/utils.js"

export const drinkingGameFlavour = () => {
  write(
    "You find yourself in a bustling alien cantina, where a rowdy drinking contest is underway. An alien challenger, called Captain Zorath, invites you to compete, with a hefty gold prize for the winner. Do you have the stomach to outdrink your opponent and claim the reward?"
  );
};

export const drinkOne = () => {
  write(
    "You nervously downed the alien shot, unsure of what effects it would have on your human body, but determined to win the drinking competition with Captain Zorath"
  );
};

export const drinkTwo = () => {
  write(
    "Feeling the initial effects of the first shot kicking in, you confidently slam back the second, determined to keep up with Captain Zorath and win this."
  );
};

export const drinkThree = () => {
  write(
    "As the room began to spin and your vision blurred, you knew you were in trouble, but not wanting to back down, you took the third shot."
  );
};

export const drinkFour = () => {
  if (Math.floor(Math.random() * 10) > 5) {
    write(
      "You took the fourth shot, but as the potent alien drink hit your system, you blacked out, losing consciousness and any chance of winning."
    );
    playerStats.fuel = playerStats.maxFuel;
    playerStats.gold = 0;
    playerStats.health -= 20;
    playerStats.speed = 100;
    playerStats.distanceToPlanet -= playerStats.speed;
    printPlayerStats;
  } else {
    write("You win");
    playerStats.gold += 50;
    playerStats.health -= 10;
    travel();
  }
};

export const declineDrink = () => {
  write("You ignore the challenge and keep going");
  travel();
};

export const loseDrinkingComp = () => {
  if (playerStats.gold >= 10) {
    playerStats.gold -= 10;
  } else {
    playerStats.health -= 30;
  }
  travel();
};
