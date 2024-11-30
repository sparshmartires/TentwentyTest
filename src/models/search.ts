declare module '@search' {
  import {ImageSourcePropType} from 'react-native';
  interface SearchResult {
    id: number;
    title: string;
    overview: string;
    imageUrl: ImageSourcePropType;
  }
}
