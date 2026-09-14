// Define time zones with their UTC offsets
const timeZones = {
    'time-newyork': { name: 'America/New_York', offset: -5 },
    'time-london': { name: 'Europe/London', offset: 0 },
    'time-paris': { name: 'Europe/Paris', offset: 1 },
    'time-dubai': { name: 'Asia/Dubai', offset: 4 },
    'time-tokyo': { name: 'Asia/Tokyo', offset: 9 },
    'time-sydney': { name: 'Australia/Sydney', offset: 11 },
    'time-losangeles': { name: 'America/Los_Angeles', offset: -8 },
    'time-singapore': { name: 'Asia/Singapore', offset: 8 }
};

// Function to update all clocks
function updateClocks() {
    const now = new Date();

    for (const [elementId, tzInfo] of Object.entries(timeZones)) {
        const element = document.getElementById(elementId);
        
        // Get the time in the specific timezone using Intl API
        const timeString = new Intl.DateTimeFormat('en-US', {
            timeZone: tzInfo.name,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        }).format(now);

        element.textContent = timeString;
    }
}

// Update clocks immediately on page load
updateClocks();

// Update clocks every second
setInterval(updateClocks, 1000);
