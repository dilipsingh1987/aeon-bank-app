export const formatDate = (utcDate: string): string => {
  const date = new Date(utcDate);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};
