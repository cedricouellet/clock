window.onload = main;

function main() {
    const TIME = document.getElementById('time');
    const DATE = document.getElementById('date');

    setInterval(() => {
        const time = getTime();
        TIME.innerText = `${time.hours}:${time.minutes}:${time.seconds}`;

        const date = getDate();
        DATE.innerText = `${date.year}/${date.month}/${date.day}`;
    }, 1000);
}

function getTime() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (hours < 10) {
        hours = '0' + hours;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    
    return {
        hours, minutes, seconds,
    };
}

function getDate() {
    const date = new Date();
    const year = date.getFullYear();
    let day = date.getDate();
    let month = date.getMonth() + 1;

    if (day < 10) {
        day = '0' + day;
    }

    if (month < 10) {
        month = '0' + month;
    }
    
    return {
        year, month, day,
    };
}