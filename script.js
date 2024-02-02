document.addEventListener('DOMContentLoaded', function() {
    const spendingData = [
      { "day": "mon", "amount": 17.45 },
      { "day": "tue", "amount": 34.91 },
      { "day": "wed", "amount": 52.36 },
      { "day": "thu", "amount": 31.07 },
      { "day": "fri", "amount": 23.39 },
      { "day": "sat", "amount": 43.28 },
      { "day": "sun", "amount": 25.48 }
    ];
  
    const maxAmount = Math.max(...spendingData.map(data => data.amount));
    const maxHeight = 150; // Maximum height in pixels for the bars
  
    // Getting today's day in the format of "mon", "tue", etc.
    const daysOfWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    const today = new Date();
    const todayDayShort = daysOfWeek[today.getDay()];
  
    spendingData.forEach(data => {
      const barElement = document.getElementById(data.day);
      const amountElement = document.getElementById(`${data.day}-day-amount-num`); // Get the amount element by day
      if (barElement && amountElement) {
        const height = (data.amount / maxAmount) * maxHeight; // Calculate proportional height
        barElement.style.height = `${height}px`; // Set the height of the bar
        amountElement.textContent = `$${data.amount}`; // Set the text of the amount
  
        // If the day is today, change the background color
        if (data.day === todayDayShort) {
          barElement.style.backgroundColor = "var(--secondary-clr)";
        }
      }
    });
  });