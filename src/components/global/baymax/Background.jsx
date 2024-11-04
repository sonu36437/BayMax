import { View, Image, StyleSheet ,Animated} from 'react-native'
import React from 'react'
// import Animated from 'react-native-reanimated'
import { BlurView } from '@react-native-community/blur'
import { screenHeight, screenWidth } from '../../../utils/Scaling'
import { opacity } from 'react-native-reanimated/lib/typescript/Colors'

export default function Background( {blurOpacity} ) {

    return (
        <View style={styles.imageContainer}>
            <Image
                source={require('../../../assets/images/baymax.png')}
                style={styles.img}
            />
            {/* Apply the opacity to an Animated View wrapping the BlurView */}
            <Animated.View style={[styles.absolute,{opacity:blurOpacity}]}>
               
                <BlurView
                    style={styles.absolute}
                    blurType="dark"
                    blurAmount={16}
                />
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: screenWidth,
        height: screenHeight*1.2,
        position: 'absolute',
        bottom:-screenHeight*0.2
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    absolute: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    }
})
