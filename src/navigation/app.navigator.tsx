import {createNativeStackNavigator} from '@react-navigation/native-stack';

import UpcomingMovieListScreen from '../screens/UpcomingMovieList/UpcomingMovieList.screen';
import TabNavigator from './tab.navigator';
import MovieSearchList from '../screens/MovieSearchList/MovieSearchList.screen';
import MovieDetailScreen from '../screens/MovieDetail/MovieDetail.screen';
import TrailerPlayerScreen from '../screens/TrailerPlayer.screen';
import MovieResultScreen from '../screens/MovieResult/MovieResult.screen';
import MovieHallSelectionScreen from '../screens/MovieHallSelection/MovieHallSelection.screen';
import SeatSelectionScreen from '../screens/SeatSelection/SeatSelection.screen';

export type StackParamList = {
  TabNavigator: undefined;
  UpcomingMovieListScreen: undefined;
  MovieSearchList: undefined;
  MovieDetailScreen: {
    movieId: number;
  };
  MovieResultScreen: {
   movieIds: number[]
  },
  TrailerPlayerScreen: {
    videoKey: string;
  };
  MovieHallSelectionScreen: undefined;
  SeatSelectionScreen: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen
        name="UpcomingMovieListScreen"
        component={UpcomingMovieListScreen}
      />
      <Stack.Screen name="MovieSearchList" component={MovieSearchList} />
      <Stack.Screen name="MovieResultScreen" component={MovieResultScreen} />
      <Stack.Screen name="MovieDetailScreen" component={MovieDetailScreen} />
      <Stack.Screen name="MovieHallSelectionScreen" component={MovieHallSelectionScreen} />
      <Stack.Screen name="SeatSelectionScreen" component={SeatSelectionScreen} />
      <Stack.Screen
        name="TrailerPlayerScreen"
        component={TrailerPlayerScreen}
        options={{
          orientation: 'landscape',
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
