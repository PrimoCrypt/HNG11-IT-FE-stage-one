function updateTimestamp() {
    const timestampElement = document.getElementById('time');
    const dayElement = document.getElementById('day');

    const currentDate = new Date();

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    const utcTimeInMilliseconds = currentDate.getTime()
    const formattedTime = currentDate.toLocaleTimeString('en-US', { timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' });
    timestampElement.textContent = formattedTime;
    dayElement.textContent = dayOfWeek;
}

// Update the timestamp initially and every second
updateTimestamp();
setInterval(updateTimestamp, 1000);