declare module '@api/movie' {
  import {Movie} from '@movie';
  interface UpcomingMovieApiResponse {
    dates?: {
      maximum: string;
      minimum: string;
    };
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
  }
  interface Video {
    key: string;
    type: string;
    site: string;
  }
  interface MovieImage {
    file_path: string;
  }
  interface MovieVideoApiResponse {
    results: Video[];
  }
  interface MovieImageApiResponse {
    backdrops: MovieImage[];
  }
  type MovieDetailsApiResponse = Movie;
  interface MovieCardProps {
    id: number;
    title: string;
    imageUrl: string;
    onPress?: () => void;
  }
}
