import {View, Text} from 'react-native';
import {FullMovie} from '../../../core/entities/movie.entity';
import {Formatter} from '../../../helpers/formatter';
import {Cast} from '../../../core/entities/cast.entity';
import {FlatList} from 'react-native-gesture-handler';
import {CastActor} from '../cast/CastActor';

interface Props {
  movie: FullMovie;
  cast: Cast[];
}

export const MovieDetails = ({movie, cast}: Props) => {
  return (
    <>
      <View
        style={{
          marginHorizontal: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text>{movie.rating}</Text>
          <Text style={{marginLeft: 5}}>- {movie.genres.join(', ')}</Text>
        </View>
        <Text
          style={{
            fontSize: 23,
            marginTop: 10,
          }}>
          Historia
        </Text>
        <Text
          style={{
            fontSize: 16,
          }}>
          {movie.description}
        </Text>
        <Text
          style={{
            fontSize: 23,
            marginTop: 10,
          }}>
          Presupuesto
        </Text>
        <Text
          style={{
            fontSize: 18,
          }}>
          {Formatter.formatCurrency(movie.budget)}
        </Text>
      </View>

      {/* Casting */}
      <View
        style={{
          marginTop: 10,
          marginBottom: 100,
        }}>
        <Text
          style={{
            fontSize: 23,
            marginVertical: 10,
            marginHorizontal: 20,
            fontWeight: 'bold',
          }}>
          Actores
        </Text>

        <FlatList
          data={cast}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <CastActor actor={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </>
  );
};
