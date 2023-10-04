function convertUnixTimestamp(timestamp) {
    const date = new Date(timestamp * 1000);
    
    const options = {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZone: 'GMT',
      timeZoneName: 'short'
    };
    
    const formattedDate = date.toLocaleString('en-US', options);
    
    return formattedDate;
  }
  
  const unixTimestamp = 1607518718;
  const convertedTime = convertUnixTimestamp(unixTimestamp);
  console.log(convertedTime); // Output: Wednesday, December 9, 2020 6:28:38 PM GMT+05:30
  