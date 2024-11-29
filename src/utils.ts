import {palette} from './theme/palette';

const colors = [palette.green, palette.pink, palette.purple, palette.yellow];

// function to get random color for genre in movie detail screen
export const getRandomColor = () =>
  colors[Math.floor(Math.random() * colors.length)];

// function to format date from YYYY-MM-DD to November 27, 2024
export const formatDate = (inputDate: string): string => {
  const date = new Date(inputDate);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return date.toLocaleDateString('en-US', options);
};
