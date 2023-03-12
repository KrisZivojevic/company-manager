export const formatDate = (date) => {
  const dateObject = new Date(date);
    
  // Get the month, day, and year values from the date object
  const month = dateObject.getMonth() + 1;
  const day = dateObject.getDate();
  const year = dateObject.getFullYear();
  
  // Create a string in the mm/dd/yyyy format
  const dateString = `${year.toString()}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

  return dateString;
}