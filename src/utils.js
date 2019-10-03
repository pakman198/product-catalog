export const capitalize = (text) => {
  if(!text) return;
  
  return text.charAt(0).toUpperCase() + text.substring(1);
}

export const localizeDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  const date = new Date(dateString);
  const d = date.toLocaleDateString('en-US', options);

  return d;
}