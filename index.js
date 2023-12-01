/** @format */

const countdownDisplay = document.getElementById('countdown-display')

function renderCountdown() {
    const now = new Date()
    console.log(now)
    const currentYear = now.getFullYear()
    console.log(currentYear)
    const christmas = new Date(currentYear, 11, 25)
    console.log(christmas)
    if (now > christmas) {
        christmas.setFullYear(currentYear + 1)
    }

    const totalSeconds = Math.floor((christmas - now) / 1000)
    const days = Math.floor(totalSeconds / (3600 * 24))
    const hours = Math.floor(totalSeconds / 3600) % 24
    const minutes = Math.floor(totalSeconds / 60) % 60
    const seconds = totalSeconds % 60

    countdownDisplay.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s until Christmas!`
}

setInterval(renderCountdown, 1000)



// Task:
// - Get today's date (you only need the day).
// - Calculate remaining days.
// - Display remaining days in countdownDisplay.

// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.
