import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {Movie} from '../../../core/entities/movie.entiti';
interface Props {
  movie: Movie;
}
export const MoviePoster = ({movie}: Props) => {
  return (
    <View style={{...style.imageContainer, width: 300, height: 400}}>
      <Image style={style.image} source={{uri: movie.poster}} />
    </View>
  );
};

const style = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    backgroundColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 9,
  },
});
