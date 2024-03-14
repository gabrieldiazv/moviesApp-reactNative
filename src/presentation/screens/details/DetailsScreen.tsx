// import {useRoute} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {Text, View} from 'react-native';
import {RootStackParams} from '../../navigation/Navigation';
import {useMovie} from '../../hooks/useMovie';
import {MovieHeader} from '../../components/movie/MovieHeader';
import { MovieDetails } from '../../components/movie/MovieDetails';
import { ScrollView } from 'react-native-gesture-handler';
import { FullScreenLoader } from '../../components/loaders/FullScreenLoader';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailsScreen = ({route}: Props) => {
  const {movieId} = route.params;
  // const {movieId} = useRoute().params;
  // console.log(movieId);
  const {isLoading, movie, cast = []} = useMovie(movieId);

  if (isLoading) {
    return (
      <FullScreenLoader />
    );
  }

  return (
    <ScrollView>
      <MovieHeader
        poster={movie!.poster}
        title={movie!.title}
        originalTitle={movie!.originalTitle}
      />

      <MovieDetails movie={movie!} cast={cast}/>
    </ScrollView>
  );
};
