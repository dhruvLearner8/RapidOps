function getTimeDifference(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    const yearDiff = end.getFullYear() - start.getFullYear();
    const monthDiff = end.getMonth() - start.getMonth();
    const dayDiff = end.getDate() - start.getDate();
    
    
    const totalMinutes = (yearDiff * 12 * 30 * 24 * 60) + (monthDiff * 30 * 24 * 60) + (dayDiff * 24 * 60) ;
    
    const years = Math.floor(totalMinutes / (12 * 30 * 24 * 60));
    const months = Math.floor((totalMinutes % (12 * 30 * 24 * 60)) / (30 * 24 * 60));
    const weeks = Math.floor((totalMinutes % (30 * 24 * 60)) / (7 * 24 * 60));
    const days = Math.floor((totalMinutes % (7 * 24 * 60)) / (24 * 60));
    
    
    return `${years} years ${months} months ${weeks} weeks ${days} days `;
  }
  
  const startDate = '01-07-2018';
  const endDate = '03/05/2020';
  const difference = getTimeDifference(startDate, endDate);
  console.log(difference);
  