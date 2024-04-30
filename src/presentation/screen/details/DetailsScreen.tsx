// import {useRoute} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text} from 'react-native';
import {RootStackParams} from '../../navigations/Navigation';
import {useMovie} from '../../hooks/useMovie';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailsScreen = ({route}: Props) => {
  const {movieId} = route.params;
  // const {movieId} = useRoute().par

  const {isLoading, movie} = useMovie(movieId);

  if (isLoading) {
    return <Text>Loading..</Text>;
  }

  return (
    <View>
      <MovieHeader movie={movie!} />
    </View>
  );
};
