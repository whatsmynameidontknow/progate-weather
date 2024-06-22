import { forwardRef } from 'react';
import { StyleSheet, TextInput } from 'react-native';

const InputText = forwardRef((props, ref) => {
    return (
        <TextInput
            style={styles.inputText}
            ref={ref}
            {...props}
            numberOfLines={2}
        />
    );
});

const styles = StyleSheet.create({
    inputText: {
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 10,
        paddingHorizontal: 10,
        fontSize: 25,
    },
});

export default InputText;
