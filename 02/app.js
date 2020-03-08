const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function findDegree(hand){                                      // Calculates degree of minutes and seconds
    return ((hand / 60) * 360 + 90);
}

function findHourDegree(hand){                                  // Calculates degree of hours
    return ((hand / 12) * 360 + 90);
}

function moveHand(hand, time){                                  // Moves the appropriate hand to the correct degree location
    hand.style.transform = `rotate(${time}deg)`;
}

function setDate(){
    const now = new Date;    
    moveHand(secondHand, findDegree(now.getSeconds()));
    moveHand(minHand, findDegree(now.getMinutes()));
    moveHand(hourHand, findHourDegree(now.getHours()));
}

setInterval(setDate, 1000);