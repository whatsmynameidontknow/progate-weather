import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import Weather from './src/components/WeatherInfo';
import SearchWater from './src/components/WeatherSearch';
import States from './src/constants/states';
import { BASE_URL, WEATHER_ENDPOINT } from './src/constants/weatherData';

export default function App() {
    const [weatherData, setWeatherData] = useState();
    const [searchQuery, setSearchQuery] = useState();
    const [state, setState] = useState(States.FIRST_LOAD);
    const firstUpdate = useRef(true);

    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        setState(States.LOADING);
        axios
            .get(
                `${BASE_URL}/${WEATHER_ENDPOINT}?q=${searchQuery}&units=metric&appid=${process.env.EXPO_PUBLIC_OPENWEATHERMAP_API_KEY}`
            )
            .then((res) => {
                setWeatherData(res.data);
                setState(States.SUCCESS);
            })
            .catch((e) => {
                console.error(e);
                if (e.response.status === 404) {
                    setState(States.NOT_FOUND);
                    return;
                }
                setState(States.FAILED);
            });
    }, [searchQuery]);

    return (
        <View style={styles.container}>
            <SearchWater onPress={setSearchQuery} />
            <View style={{ marginTop: 20 }}>
                {state === States.FIRST_LOAD && (
                    <Text
                        style={{
                            fontSize: 40,
                            fontWeight: 800,
                            textAlign: 'center',
                        }}
                    >
                        Masukkan nama wilayah
                    </Text>
                )}
                {state === States.LOADING && <ActivityIndicator size="large" />}
                {state === States.SUCCESS && <Weather data={weatherData} />}
                {state === States.FAILED && (
                    <Text
                        style={{
                            fontSize: 40,
                            fontWeight: 800,
                            textAlign: 'center',
                        }}
                    >
                        Gagal mencari wilayah
                    </Text>
                )}
                {state === States.NOT_FOUND && (
                    <Text
                        style={{
                            fontSize: 40,
                            fontWeight: 800,
                            textAlign: 'center',
                        }}
                    >
                        Wilayah tidak ditemukan
                    </Text>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        padding: 20,
    },
});
