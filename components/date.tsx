import { parseISO, format } from 'date-fns';

export default function Date({ dateString }: { dateString: string }) {
  const date = parseISO(dateString);
  // https://date-fns.org/v2.16.1/docs/format
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}
