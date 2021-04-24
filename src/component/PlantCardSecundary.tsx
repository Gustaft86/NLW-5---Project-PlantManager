import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { FlatList, RectButton, RectButtonProps } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Animated from 'react-native-reanimated';
import { SvgFromUri } from 'react-native-svg';

import waterdrop from '../assets/waterdrop.png';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface PlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
    hour: string;
  };
  handleRemove: () => void;
  handleDone: () => void;
}

export const PlantCardSecundary = ({ data, handleRemove, handleDone, ...rest } : PlantProps) => {
  return (
    <Swipeable
      // overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <View>
            <RectButton
              style={ styles.buttonRemove }
              onPress={ handleRemove }
            >
            
            <Feather name="trash" size={32} color={colors.white} />
            </RectButton>
          </View>
        </Animated.View>
      )}
      renderLeftActions={() => (
        <Animated.View>
          <View>
            <RectButton
              style={ styles.buttonDone }
              onPress={ handleDone }
            >
            
            <Feather name="droplet" size={32} color={colors.blue} />
            </RectButton>
          </View>
        </Animated.View>
      )}
    >
      <RectButton
      style={ styles.container }
      { ...rest }
      >
        <View style={ styles.containerContent }>
          <View style={ styles.content }>
            <SvgFromUri
              uri={ data.photo }
              width={50}
              height={50}
            />
            <Text style={ styles.title }>
              { data.name }
            </Text>
          </View>

          <View style={ styles.walteredContainer }>
          {/* Salvar a quantidade de regadas na Storage e renderizar quantidade de regadas
          representadas por gotas na tela */}
          <Image
            source={ waterdrop }
            style={ styles.walteredImage }
          />
          <Image
            source={ waterdrop }
            style={ styles.walteredImage }
          />
          <Image
            source={ waterdrop }
            style={ styles.walteredImage }
          />
          </View>
        </View>

        <View style={ styles.details }>
          <Text style={ styles.timeLabel }>
            Regar às
          </Text>

          <Text style={ styles.time }>
            { data.hour }
          </Text>
        </View>
      </RectButton>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.shape,
    marginVertical: 5,
    // marginBottom: 10,
  },
  containerContent: {
    flex: 1,
  },
  content: {
    flexDirection: 'row',
  },
  title: {
    flex: 1,
    marginLeft: 10,
    fontFamily: fonts.heading,
    fontSize: 17,
    color: colors.heading,
  },
  walteredContainer: {
    flexDirection: 'row',
  },
  walteredImage: {
    width: 20,
    height: 20,
    marginTop: 10
  },
  details: {
    alignItems: 'flex-end',
  },
  timeLabel: {
    fontSize: 16,
    fontFamily: fonts.text,
    color: colors.body_light,
  },
  time: {
    marginTop: 5,
    fontSize: 16,
    fontFamily: fonts.heading,
    color: colors.body_dark,
  },
  buttonRemove: {
    width: 100,
    height: 85,
    backgroundColor: colors.red,
    marginTop: 15,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    right: 20,
    paddingLeft: 15,
  },
  buttonDone: {
    width: 100,
    height: 85,
    backgroundColor: colors.blue_light,
    marginTop: 15,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    left: 20,
    paddingRight: 15,
  }
})