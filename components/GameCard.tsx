import { IGame } from '@/interfaces/game.interface';
import { useEffect, useRef } from 'react';
import { Animated, Image, StyleSheet, Text, View } from 'react-native';

interface Props {
  game: IGame;
  index?: number;
}

export function GameCard({ game }: Props) {
  return (
    <View key={game.slug} style={styles.card}>
      <Image source={{ uri: game.image }} style={styles.image} />
      <Text style={styles.title}>{game.title}</Text>
      <Text style={styles.description}>{game.description}</Text>
      <Text style={styles.score}>{game.score}</Text>
    </View>
  );
}

export function AnimatedGameCArd({ game, index }: Props) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index! * 500,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: { marginBottom: 10 },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    marginTop: 10,
    marginBottom: 10,
    color: '#ffffff',
  },
  description: {
    fontSize: 16,
    color: '#eeeeee',
  },
  score: {
    fontSize: 16,
    fontWeight: '600',
    color: '#10b981',
    marginTop: 10,
  },
});
