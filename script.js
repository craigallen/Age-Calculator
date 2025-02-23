function calculateAge() {
    let birthday = document.getElementById("birthday").value;
    let unit = document.getElementById("unit").value;
    let result = document.getElementById("result");

    if (!birthday) {
        result.innerText = "Please enter your birthday.";
        return;
    }

    let birthDate = new Date(birthday + "T00:00:00"); // Ensure no timezone issues
    let now = new Date();

    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        let lastMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        days += lastMonth;
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    let totalDays = Math.floor((now - birthDate) / (1000 * 60 * 60 * 24));
    let totalWeeks = Math.floor(totalDays / 7);
    let totalMinutes = Math.floor((now - birthDate) / (1000 * 60));
    let totalSeconds = Math.floor((now - birthDate) / 1000);

    let ageString;
    switch (unit) {
        case "years":
            ageString = `${years} years`;
            break;
        case "months":
            ageString = `${years * 12 + months} months`;
            break;
        case "weeks":
            ageString = `${totalWeeks} weeks`;
            break;
        case "days":
            ageString = `${totalDays} days`;
            break;
        case "minutes":
            ageString = `${totalMinutes} minutes`;
            break;
        case "seconds":
            ageString = `${totalSeconds} seconds`;
            break;
    }

    let birthdayMessage = "";
    if (now.getDate() === birthDate.getDate() && now.getMonth() === birthDate.getMonth()) {
        birthdayMessage = "<h3>🎉 Happy Birthday! 🎉</h3>";
    }

    result.innerHTML = `You are ${ageString} old.${birthdayMessage}`;
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
