import {StatusBar} from 'expo-status-bar';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <Image source={{
                uri: 'https://i.imgur.com/TkIrScD.png'
            }}
                   style={styles.logo}
            />

            <Text style={styles.instructions}>
                Text to share a photo from your phone with a friend, just press the button below!
            </Text>

            <TouchableOpacity onPress={() => alert('Hello, world!')}
                              style={styles.button}
            >
                <Text style={styles.buttonText}>
                    Pick a photo
                </Text>
            </TouchableOpacity>

            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 305,
        height: 159,
        marginBottom: 10,
    },
    instructions: {
        color: '#888',
        fontSize: 18,
        marginHorizontal: 15,
        marginBottom: 10,
    },
    button: {
        backgroundColor: 'blue',
        padding: 20,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
    },
});
