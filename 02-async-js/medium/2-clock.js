//Program to print the current time updated after every second
//in the format - HH:MM:SS AM/PM

function clock() {
    const currentTime = new Date();
    let hours = currentTime.getHours();
    const mins = currentTime.getMinutes().toString().padStart(2,'0');
    const secs = currentTime.getSeconds().toString().padStart(2,'0');

    console.clear();

    if (hours >= 12){
	hours = hours % 12;
	hours == 0 ? 12 : hours;
	hours = hours.toString().padStart(2,'0');
	console.log('',hours,':','',mins,':','',secs,' PM');
    }
    else if (hours <= 12){
	hours = hours.toString().padStart(2,'0');
	console.log('',hours,':','',mins,':','',secs,' AM');
    }
}


clock();

setInterval(clock,1000);
