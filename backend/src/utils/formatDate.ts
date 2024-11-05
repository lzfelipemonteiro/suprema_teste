// dd/mm/yyyy
export function formatDateToNewDate(date: string): Date {
  // date = DD/MM/YYYY
  const data = date.split('/');
  const day = Number(data[0]);
  const month = Number(data[1]);
  const year = Number(data[2]);

  return new Date(year, month - 1, day);
}

export function formatDateToDataBase(date: Date): string {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const milliseconds = date.getMilliseconds();

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}:${milliseconds}`;
}