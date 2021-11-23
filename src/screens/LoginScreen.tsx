import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper';

const LoginScreen = () => {
    return (
        <View>
            <Text>Login Screen Works</Text>
            <Button icon="code-tags" mode="contained" color="#0841aa" onPress={() => console.log('Pressed')}>
                Press me
            </Button>
        </View>
    )
}

export default LoginScreen;
