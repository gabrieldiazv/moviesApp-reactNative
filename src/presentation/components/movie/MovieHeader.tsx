import {View, Text, StyleSheet, useWindowDimensions, Image} from 'react-native';
// import {FullMovie} from '../../../core/entities/movie.entity';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';

interface Props {
  // movie: FullMovie;
  poster: string;
  title: string;
  originalTitle: string;
}

export const MovieHeader = ({
  poster,
  title,
  originalTitle,
}: Props) => {
  const {height: ScreenHeight} = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <View>
      <View style={{...styles.imageContainer, height: ScreenHeight * 0.7}}>
        <View style={styles.imageBorder}>
          <Image source={{uri: poster}} style={styles.posterImage} />
        </View>
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{originalTitle}</Text>
      </View>

      <View style={styles.backButton}>
        <Text style={styles.backButtonText} onPress={() => navigation.goBack()}>
          Regresar
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 9,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },

  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  posterImage: {
    flex: 1,
  },

  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: 35,
    left: 10,
  },
  backButtonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.55)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
});
