const getDay = () => {
  const currentDate = new Date();

  // Get day, month, and year components
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; // Months are zero-based, so we add 1
  const year = currentDate.getFullYear();

  // Format the date in "Month/day/year" format
  const formattedDate = `${month}/${day}/${year}`;

  // Display the formatted date
  return formattedDate;
};

export default getDay;
