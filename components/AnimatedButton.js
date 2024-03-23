import React from 'react';
import { Animated, Easing } from 'react-native';
import Button from './Button';

const ANIMATION_STEP_TIMING = 150;

export default function AnimatedButton(props) {
    const scaleAnimation = new Animated.Value(1);

    const handlePressIn = () => {
        Animated.sequence([
            Animated.timing(scaleAnimation, {
                toValue: 0.85,
                duration: ANIMATION_STEP_TIMING,
                useNativeDriver: true,
                easing: Easing.in(Easing.ease)
            }),
            Animated.timing(scaleAnimation, {
                toValue: 1.15,
                duration: ANIMATION_STEP_TIMING * 2,
                useNativeDriver: true,
            }),
            Animated.timing(scaleAnimation, {
                toValue: 1,
                duration: ANIMATION_STEP_TIMING,
                useNativeDriver: true,
                easing: Easing.out(Easing.ease)
            }),
        ]).start(() => scaleAnimation.setValue(1))
    };

    return (
        <Animated.View style={{ transform: [{ scale: scaleAnimation }] }}>
            <Button {...props} onPressIn={handlePressIn} />
        </Animated.View>
    );
};
