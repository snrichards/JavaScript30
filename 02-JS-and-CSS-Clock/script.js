const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

setInterval(setDate, 1000);

function setDate() {
    const now = new Date();
    
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    
    removeTransitionAt90Deg(secondHand, secondsDegrees);

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesPercentOfHour = minutes / 60;
    var minutesDegrees = ((minutesPercentOfHour) * 360) + 90;
    
    removeTransitionAt90Deg(minuteHand, minutesDegrees);

    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = (((hours + minutesPercentOfHour) / 12) * 360) + 90;
    
    removeTransitionAt90Deg(hourHand, hoursDegrees);

    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

/*
    prevents the animation of the hand moving back to 90 degrees
    when the hand has made a whole rotation around the clock face.
*/
function removeTransitionAt90Deg(hand, handDegrees) {
    if (handDegrees == 90) {
        hand.style.transition = 'all 0s';
    } else {
        hand.style.transition = 'all 0.05s';
    }
}