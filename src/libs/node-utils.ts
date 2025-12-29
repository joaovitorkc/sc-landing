export function formattedDate(date: Date): string {
  const formattedDate = date
    .toLocaleString('pt-BR', {
      timeZone: 'UTC',
      hour12: false,
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short',
    })
    .replace(',', '');

  return formattedDate;
}