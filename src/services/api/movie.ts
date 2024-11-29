import {Movie, UpcomingMovieApiResponse} from '@movie';

import {api} from '.';

export const movieApi = api.injectEndpoints({
  endpoints: build => ({
    getUpcomingMovies: build.query<UpcomingMovieApiResponse, {page: number}>({
      query: ({page}) => ({
        url: `movie/upcoming?page=${page}`,
        method: 'GET',
      }),
    }),
    getMovieDetailById: build.query<Movie, {movieId: number}>({
      query: ({movieId}) => ({
        url: `movie/${movieId}`,
        method: 'GET',
      }),
    }),
  }),

  overrideExisting: true,
});

export const {useGetUpcomingMoviesQuery, useGetMovieDetailByIdQuery} = movieApi;
