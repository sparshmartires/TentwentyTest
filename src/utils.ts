import { SearchResult } from '@search';

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

/**
 * Filters a list of movies based on a searchText.
 *
 * @param movies - Array of movie objects.
 * @param searchText - Text to filter the movies by.
 * @returns Filtered array of movies.
 */
export const filterResults = (movies: SearchResult[], searchText: string): SearchResult[] => {
  if (!searchText) return movies; // Return all movies if no searchText
  const lowerCaseSearchText = searchText.toLowerCase();
  return movies.filter(
    item =>
      item.title.toLowerCase().includes(lowerCaseSearchText) ||
      item.overview.toLowerCase().includes(lowerCaseSearchText),
  );
};
