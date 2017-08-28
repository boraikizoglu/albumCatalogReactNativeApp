import React, { Component } from 'react';
import { Text, View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

export default class App extends Component {
    render() {
        return (
            <View>
                <Header headerText='Albums'/>
                <AlbumList />
            </View>
        );
    }
}

AppRegistry.registerComponent('App', () => App)

