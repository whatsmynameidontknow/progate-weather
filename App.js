import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import Weather from './src/components/WeatherInfo';
import SearchWater from './src/components/WeatherSearch';
import States from './src/constants/states';
import {
    AREA_ENDPOINT,
    BASE_URL,
    WEATHER_PATH,
} from './src/constants/weatherData';

export default function App() {
    const [weatherData, setWeatherData] = useState();
    const [searchQuery, setSearchQuery] = useState();
    const [state, setState] = useState();
    const firstUpdate = useRef(true);

    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        setState(States.LOADING);
        axios
            .get(`${BASE_URL}/${WEATHER_PATH}/${AREA_ENDPOINT}`)
            .then((res) => {
                const areaID = res.data.find(
                    (area) =>
                        area.kecamatan.toLowerCase() ===
                        searchQuery.toLowerCase()
                )?.id;
                return areaID;
            })
            .then((areaID) => {
                axios
                    .get(`${BASE_URL}/${WEATHER_PATH}/${areaID}.json`)
                    .then((res) => {
                        setWeatherData({
                            ...res.data[0],
                            name:
                                searchQuery.charAt(0).toUpperCase() +
                                searchQuery.slice(1),
                        });
                        setState(States.SUCCESS);
                    })
                    .catch((e) => {
                        if (e.response?.status === 404) {
                            setState(States.NOT_FOUND);
                        } else {
                            setState(States.FAILED);
                        }
                    });
            })
            .catch(() => {
                setState(States.FAILED);
            });
    }, [searchQuery]);

    return (
        <View style={styles.container}>
            <SearchWater onPress={setSearchQuery} />
            <View style={{ marginTop: 20 }}>
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
