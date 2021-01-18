import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const got = require('got');
const apiKey = 'acc_3caff537a9bb7b0';
const apiSecret = '4951fdbb312c7c8c4758736e04a6d269';

export default class MainScreen extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Main Screen</Text>
            </View>
        )
    };

    getImageDetails = async () => {
        const imageUrl = 'https://docs.imagga.com/static/images/docs/sample/japan-605234_1280.jpg';
        const url = 'https://api.imagga.com/v2/tags?image_url=' + encodeURIComponent(imageUrl);

        try {
            const response = await got(url, { username: apiKey, password: apiSecret });
            console.log(response.body);
        } catch (error) {
            console.log(error.response.body);
        }
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },

    text: {
        color: '#000',
        fontSize: 25,
        fontWeight: "bold",
        alignSelf: "center",
        justifyContent: "center"
    }
})