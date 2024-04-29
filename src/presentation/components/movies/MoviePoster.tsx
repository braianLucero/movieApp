import React from 'react';
import {Image, View, StyleSheet, Pressable} from 'react-native';
import {Movie} from '../../../core/entities/movie.entiti';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../navigations/Navigation';
interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}
export const MoviePoster = ({movie, height = 420, width = 300}: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <Pressable
      onPress={() => navigation.navigate('Details', {movieId: movie.id})}
      style={pressed => ({
        width,
        height,
        marginHorizontal: 2,
        paddingBottom: 20,
        paddingHorizontal: 5,
        opacity: pressed ? 0.9 : 1,
      })}>
      <View style={style.imageContainer}>
        <Image style={style.image} source={{uri: movie.poster}} />
      </View>
    </Pressable>
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
