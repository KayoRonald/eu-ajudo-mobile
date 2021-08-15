import React from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity, StyleSheet, Dimensions, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/core';

import wateringImg from '../../assets/undraw_Active_support_re_b7sj.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';


export function Welcome() {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Venhar Cadastrar{'\n'}
          pontos de forma fácil
        </Text>

        <Image
          source={wateringImg}
          style={styles.image}
          resizeMode='contain'
        />

        <Text style={styles.subtitle}>
          Venha ajudar sua comunidade! De Forma simples
          você pode colaborar.
        </Text>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
        >

          <Feather name="chevron-right" style={styles.buttonIcon} />

        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38,
    fontFamily: fonts.heading,
    lineHeight: 34
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 17,
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.text
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56
  },
  buttonIcon: {
    fontSize: 32,
    color: colors.white
  },
  image: {
    height: Dimensions.get('window').width * 0.7
  }
});