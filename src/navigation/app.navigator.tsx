import {createNativeStackNavigator} from '@react-navigation/native-stack';

import UpcomingMovieListScreen from '../screens/UpcomingMovieList/UpcomingMovieList.screen';
import TabNavigator from './tab.navigator';
import MovieSearchList from '../screens/MovieSearchList/MovieSearchList.screen';

export type StackParamList = {
  TabNavigator: undefined;
  UpcomingMovieList: undefined;
  MovieSearchList: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="UpcomingMovieList" component={UpcomingMovieListScreen} />
      <Stack.Screen name="MovieSearchList" component={MovieSearchList} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
