import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Keyboard, StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import { View, Text, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { navigate, resetAndNavigate } from '../utils/Navigation';
import { Colors, Fonts, lightColors } from '../utils/Constants';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { screenHeight, screenWidth } from '../utils/Scaling';
import LinearGradient from 'react-native-linear-gradient';
import CustomText from '../components/global/CustomText';
import LottieView from 'lottie-react-native';
import Tts from 'react-native-tts';
import { initializeTtsListeners } from '../utils/ttsListeners';
const bottomColors = [...lightColors].reverse()

export default function SplashScreen() {

    const baymaxAnimation=useSharedValue(screenHeight*0.8);
    const messageContainerAnimation=useSharedValue(screenHeight* 0.8);
    const launchAnimation= async()=>{
        messageContainerAnimation.value=screenHeight*0.00001;
        setTimeout(()=>{
            baymaxAnimation.value=screenHeight*0;
           Tts.speak("Hello world! I am Baymax")

        },600)
        setTimeout(()=>{
            resetAndNavigate('BaymaxScreen');

        },5000)

    }
    useEffect(()=>{
        launchAnimation();
        initializeTtsListeners();

    },[])
    

    const animateImageStyle=useAnimatedStyle(()=>{
        return{
            transform:[{
                translateY:withTiming(baymaxAnimation.value,{duration:1500}),
               
            }]
        }
    })
    const messageContainerStyle=useAnimatedStyle(()=>{
        return{
            transform:[{
                translateY:withTiming(messageContainerAnimation.value,{duration:1200}),
               
            }]
        }
    })



    return (
        <View
            style={styles.container}>
            <Animated.View style={[styles.imageContainer,animateImageStyle]}>
                <Image source={require('../assets/images/launch.png')} style={styles.img} />
            </Animated.View>


            <Animated.View style={[styles.gradientContainer,messageContainerStyle]}>
                <LinearGradient colors={bottomColors} style={styles.gradient}>

                    <View style={styles.textContainer}>
                        <CustomText
                            fontFamily={Fonts.Theme}
                            fontSize={36}
                            style={{textAlign:'center'}}

                        >
                            Baymax!
                        </CustomText>
                        <LottieView
                            source={require('../assets/animations/sync.json')}
                            style={{ width: 280, height: 100 }}
                            autoPlay={true}
                            loop

                        />
                        <CustomText style={{textAlign:'center'}}>
                            syncing best config for you!
                        </CustomText>
                    </View>

                </LinearGradient>
            </Animated.View>

        </View>


    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        widht: screenWidth - 20,
        height: screenHeight * 0.5

    },
    img: {
        widht: '100%',
        height: '100%',
        resizeMode: 'contain'

    },
    gradientContainer: {
        position: 'absolute',
        height: '35%',
        bottom: 0,
        width: '100%'

    },
    gradient: {
        paddingTop: 30,
        width: '100%',
        height: '100%',



    },
    textContainer: {
        width:'100%',
        backgroundColor:'white',
        flex:1,
      
        // alignItems:'center',
      
        borderRadius:20,
        padding:20,
        shadowOffset:{width:1,height:1},
        shadowOpacity:1,
        shadowRadius:2,
      
      
        shadowColor:Colors.border,

    }
})
