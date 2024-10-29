function scuberGreetingForFeet(number){
  let greeting;
  if (number <= 400){
    greeting='This one is on me!'
  }
    else if (number<2000){
      greeting='That will be twenty bucks.'
    }
    else if (number>2000){
      greeting='I will gladly take your thirty bucks.'
      if (number>2500){
        greeting='No can do.'
      }
    }
  return greeting
}

function ternaryCheckCity(city){
  let ternary;
  city === "NYC" ? (ternary='Ok, sounds good.') : (ternary='No go.')
  return ternary
}

function switchOnCharmFromTip(tip){
  let statement;
  switch(tip) {
    case 'generous':
      statement='Thank you so much.';
      break;
    case 'not as generous':
      statement='Thank you.';
      break;
    default:
      statement='Bye.';
      break;
  }
  return statement
}