import {createNativeStackNavigator} from '@react-navigation/native-stack';

import UpcomingMovieListScreen from '../screens/UpcomingMovieList/UpcomingMovieList.screen';
import TabNavigator from './tab.navigator';
import MovieSearchList from '../screens/MovieSearchList/MovieSearchList.screen';
import MovieDetailScreen from '../screens/MovieDetail/MovieDetail.screen';
import TrailerPlayerScreen from '../screens/TrailerPlayer.screen';

export type StackParamList = {
  TabNavigator: undefined;
  UpcomingMovieListScreen: undefined;
  MovieSearchList: undefined;
  MovieDetailScreen: {
    movieId: number;
  };
  TrailerPlayerScreen: {
    videoKey: string;
  };
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
      <Stack.Screen name="MovieDetailScreen" component={MovieDetailScreen} />
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
