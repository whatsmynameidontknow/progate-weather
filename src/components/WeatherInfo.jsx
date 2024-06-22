import { Image, StyleSheet, Text, View } from 'react-native';

export default function WeatherInfo({ data }) {
    return (
        <View style={styles.marginTop20}>
            <Text style={[styles.textCenter, styles.bold, styles.textBig]}>
                {data.name}
            </Text>
            <Text style={[styles.temperature, styles.marginTop20]}>
                {data.main.temp} °C
            </Text>
            <View style={[styles.rowContainer, styles.marginTop20]}>
                <Image
                    source={{
                        uri: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
                    }}
                    width={100}
                    height={100}
                    style={styles.weatherIcon}
                />
                <Text style={[styles.textCenter, styles.bold]}>
                    {data.weather[0].main}
                </Text>
            </View>
            <Text style={[styles.textCenter, styles.marginLeft15]}>
                {data.weather[0].description}
            </Text>
            <View style={[styles.rowContainer, styles.marginTop20]}>
                <Text style={[styles.textCenter, styles.bold]}>
                    Kelembaban:{' '}
                </Text>
                <Text style={[styles.textCenter, styles.marginLeft15]}>
                    {data.main.humidity} %
                </Text>
            </View>
            <View style={[styles.rowContainer, styles.marginTop20]}>
                <Text style={[styles.textCenter, styles.bold]}>
                    Jarak Pandang:{' '}
                </Text>
                <Text style={[styles.textCenter, styles.marginLeft15]}>
                    {data.visibility / 1000} km
                </Text>
            </View>
            <View style={[styles.rowContainer, styles.marginTop20]}>
                <Text style={[styles.textCenter, styles.bold]}>
                    Kecepatan Angin:{' '}
                </Text>
                <Text style={[styles.textCenter, styles.marginLeft15]}>
                    {data.wind.speed} m/s
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    marginTop20: {
        marginTop: 20,
    },
    marginLeft15: {
        marginLeft: 15,
    },
    textCenter: {
        textAlign: 'center',
    },
    bold: {
        fontWeight: '900',
    },
    textBig: {
        fontSize: 32,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    temperature: {
        fontWeight: 900,
        fontSize: 80,
        textAlign: 'center',
    },
    weatherIcon: {
        width: 50,
        height: 50,
    },
});
