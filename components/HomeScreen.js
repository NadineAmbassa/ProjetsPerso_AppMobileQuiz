import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Logo from "../assets/ecran.png"

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleStartPress = () => {
    navigation.navigate('Quiz');
  };

  return (
    <View style={styles.container}>
         <Image style={styles.image} resizeMode="cover" source={Logo} />  
      <Text style={styles.title}>Bienvenue sur Kid's Quiz Time</Text>
      <TouchableOpacity style={styles.startButton} onPress={handleStartPress}>
        <Text style={styles.buttonText}>Commencer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  startButton: {
    backgroundColor: '#008B8B',
    borderRadius: 8,
    padding: 16,
    marginBottom: 70,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
    image: {
    flex: 1,
    justifyContent: 'center',
    width: "100%",
    height:"100%",
  },
});

export default HomeScreen;
