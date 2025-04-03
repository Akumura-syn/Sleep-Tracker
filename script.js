function calculateSleep() {
    const startInput = document.getElementById("sleep-start").value;
    const endInput = document.getElementById("sleep-end").value;
    const resultDiv = document.getElementById("result");

    if (!startInput || !endInput) {
        resultDiv.textContent = "Please enter both sleep start and end times.";
        return;
    }

    const startDate = new Date(`2000-01-01T${startInput}`);
    const endDate = new Date(`2000-01-01T${endInput}`);

    let sleepHours = (endDate - startDate) / (1000 * 60 * 60);

    if (sleepHours < 0) {
        sleepHours += 24; // Handle overnight sleep
    }

    resultDiv.textContent = `You slept for ${sleepHours.toFixed(2)} hours. ${rateSleep(sleepHours)}`;
}

function rateSleep(hours) {
    if (hours >= 7 && hours <= 9) {
        return "Excellent sleep!";
    } else if (hours >= 6 && hours < 7 || hours > 9 && hours <= 10) {
        return "Good sleep.";
    } else if (hours >= 5 && hours < 6 || hours > 10 && hours <= 11) {
        return "Fair sleep.";
    } else {
        return "Poor sleep.";
    }
}