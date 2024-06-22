import { forwardRef } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

const Button = forwardRef(({ text, style, ...props }, ref) => {
    return (
        <Pressable
            ref={ref}
            style={({ pressed }) => [
                styles.button,
                typeof style === 'function' ? style({ pressed }) : style,
            ]}
            {...props}
        >
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    );
});

const styles = StyleSheet.create({
    button: {
        borderRadius: 20,
        borderColor: 'gray',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'limegreen',
    },
    text: {
        fontSize: 30,
        fontWeight: '900',
    },
});

export default Button;
