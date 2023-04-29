import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const App = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.welcomeArea}>
          <Text style={styles.welcomeText}>Bienvenido de vuelta!</Text>
          <Text style={styles.name}>Carlos Loaiza</Text>
        </View>
        <View style={styles.pointsArea}>
          <Text style={styles.scoreTitle}>TUS PUNTOS</Text>
        </View>
        <View style={styles.score}>
          <View></View>
        </View>
      </View>
      <View style={styles.section2}>
        <Text>2</Text>
      </View>
      <View style={styles.section3}>
        <Text>3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  header: {
    flex: 3,
  },
  welcomeArea: {
    paddingHorizontal: 15,
    paddingTop: 10,
    flex: 1,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  name: {
    color: '#000000',
    fontSize: 15,
  },
  pointsArea: {
    flex: 1,
    paddingHorizontal: 15,
  },
  scoreTitle: {
    fontWeight: 'bold',
  },
  score: {
    flex: 1,
    backgroundColor: 'red',
  },
  section2: {
    flex: 4,
    backgroundColor: 'cyan',
  },
  section3: {
    flex: 1,
    backgroundColor: 'blue',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },

  puntos: {
    fontSize: 40,
  },
  points: {
    display: 'flex',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
