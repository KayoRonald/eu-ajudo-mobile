import React from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity, StyleSheet, Dimensions, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/core';

import wateringImg from '../../assets/undraw_Active_support_re_b7sj.png';
import { styles } from './styles';


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

