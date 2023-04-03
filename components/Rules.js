import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import styles from '../App.Style';

const rules = [
  {
    id: '1.',
    value:
      'L’utilisateur devra saisir un chiffre dans un « TextInput ». Ce chiffre sera récupéré dans le programme et comparé avec le chiffre magique aléatoire.',
  },
  {
    id: '2.',
    value:
      'Si le chiffre entré par l’utilisateur est inférieur au chiffre magique, un message devra être affiché pour mentionner que le chiffre n’est pas le bon car il est inférieur au chiffre magique. Par exemple : Le chiffre que vous avez saisi est inférieur au chiffre magique.',
  },
  {
    id: '3.',
    value:
      'Si le chiffre entré par l’utilisateur est supérieur au chiffre magique, un message devra être affiché pour mentionner que le chiffre n’est pas le bon car il est supérieur au chiffre magique. Par exemple : Le chiffre que vous avez saisi est supérieur au chiffre magique.',
  },
  {
    id: '4.',
    value:
      'Si le chiffre entré par l’utilisateur est égal au chiffre magique, il faut afficher un message de félicitation. Par exemple : Bravo vous avez trouvé le chiffre magique.',
  },
];

export default class Rules extends React.Component {
  render() {
    return (
      <ScrollView>
        <View>
          <View>
            <Text style={styles.regle}> Règles du jeu:</Text>
          </View>
          <View>
            {rules.map((element, index) => {
              return (
                <View key={index} style={styles.container}>
                  <View>
                    <Text style={styles.numero}>{element.id}</Text>
                  </View>
                  <View>
                    <Text styles={styles.valeur}>{element.value}</Text>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    );
  }
}
