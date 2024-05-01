// import {useRoute} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text} from 'react-native';
import {RootStackParams} from '../../navigations/Navigation';
import {useMovie} from '../../hooks/useMovie';
import {MovieDetails} from '../../components/movie/MovieDetails';
import {ScrollView} from 'react-native-gesture-handler';
import {MovieHeder} from '../../components/movie/MovieHeder';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailsScreen = ({route}: Props) => {
  const {movieId} = route.params;
  // const {movieId} = useRoute().par

  const {isLoading, movie, cast} = useMovie(movieId);

  if (isLoading) {
    return <Text>Loading..</Text>;
  }

  return (
    <ScrollView>
      <MovieHeder movie={movie!} />

      <MovieDetails movie={movie!} cast={cast} />
    </ScrollView>
  );
};
