import { Image, StyleSheet, Text, View } from "react-native";

export default function WeatherInfo({ data }) {
    return (
        <View style={styles.marginTop20}>
            <Text style={styles.text}>{data.name}</Text>
            <Text style={[styles.temperature, styles.marginTop20]}>{data.tempC} °C</Text>
            <View style={[styles.rowContainer, styles.marginTop20]}>
                <Image
                    source={{ uri: `https://ibnux.github.io/BMKG-importer/icon/${data.kodeCuaca}.png` }}
                    width={100}
                    height={100}
                    style={styles.weatherIcon} />
                <Text style={[styles.text, styles.bold]}>{data.cuaca}</Text>
            </View>
            <View style={[styles.rowContainer, styles.marginTop20]}>
                <Text style={[styles.text, styles.bold]}>Kelembaban: </Text>
                <Text style={[styles.text, styles.marginLeft15]}>{data.humidity} %</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    marginTop20: {
        marginTop: 20,
    },
    marginLeft15: {
        marginLeft: 15,
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
    },
    bold: {
        fontWeight: 900,
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
})
