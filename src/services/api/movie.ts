import {
  MovieDetailsApiResponse,
  MovieImageApiResponse,
  MovieVideoApiResponse,
  UpcomingMovieApiResponse,
} from '@api/movie';

import {api} from '.';

export const movieApi = api.injectEndpoints({
  endpoints: build => ({
    getUpcomingMovies: build.query<UpcomingMovieApiResponse, {page: number}>({
      query: ({page}) => ({
        url: `movie/upcoming?page=${page}`,
        method: 'GET',
      }),
    }),
    getMovieDetailById: build.query<MovieDetailsApiResponse, {movieId: number}>({
      query: ({movieId}) => ({
        url: `movie/${movieId}`,
        method: 'GET',
      }),
    }),
    getMovieVideosById: build.query<MovieVideoApiResponse, {movieId: number}>({
      query: ({movieId}) => ({
        url: `movie/${movieId}/videos`,
        method: 'GET',
      }),
    }),
    getMovieImagesById: build.query<MovieImageApiResponse, {movieId: number}>({
      query: ({movieId}) => ({
        url: `movie/${movieId}/images`,
        method: 'GET',
      }),
    }),
  }),

  overrideExisting: true,
});

export const {
  useGetUpcomingMoviesQuery,
  useGetMovieDetailByIdQuery,
  useGetMovieVideosByIdQuery,
  useGetMovieImagesByIdQuery,
} = movieApi;
