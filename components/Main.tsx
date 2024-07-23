import { useEffect, useState } from 'react';

import { IGame } from '@/interfaces/game.interface';
import {
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  FlatList,
} from 'react-native';

import { getLatestGames } from '@/lib/metacritic';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AnimatedGameCArd, GameCard } from './GameCard';
import { Logo } from './Logo';

export function Main() {
  const [games, setGames] = useState<IGame[]>([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestGames().then((data) => setGames(data));
  }, []);

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <View style={styles.logo}>
        <Logo />
      </View>

      {games.length === 0 ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={games}
          keyExtractor={(game) => game.slug}
          renderItem={({ item, index }) => (
            <AnimatedGameCArd game={item} index={index} />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  logo: { marginBottom: 20 },
});
