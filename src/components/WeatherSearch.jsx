import { useState } from 'react';
import { Text, View } from 'react-native';
import Button from './ui/Button';
import InputText from './ui/InputText';

export default function SearchWater({ onPress }) {
    const [cityName, setCityName] = useState('');

    return (
        <View>
            <View
                style={{
                    marginBottom: 15,
                }}
            >
                <InputText
                    placeholder="Masukkan nama kecamatan"
                    value={cityName}
                    onChangeText={(text) => {
                        setCityName(text);
                    }}
                />
                <Text style={{ color: 'red' }}>
                    {cityName.trim() === '' &&
                        'Nama kecamatan tidak boleh kosong'}
                </Text>
            </View>
            <View>
                <Button
                    text="Search"
                    onPress={() => {
                        onPress(cityName);
                    }}
                    disabled={cityName.trim() === ''}
                    style={({ pressed }) => ({
                        backgroundColor:
                            cityName.trim() === ''
                                ? 'gray'
                                : pressed
                                ? 'darkgreen'
                                : 'limegreen',
                    })}
                />
            </View>
        </View>
    );
}
