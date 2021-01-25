export const formatDate = (date: string) => {
  const dateString = new Date(date);  
  return new Intl.DateTimeFormat("sv-SE", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  }).format(dateString)
}

export const formatTime = (time: string) => {
  const timeString = new Date(time);
  return new Intl.DateTimeFormat("sv-SE", {
    hour: "numeric",
    minute: "numeric",
  }).format(timeString)
}