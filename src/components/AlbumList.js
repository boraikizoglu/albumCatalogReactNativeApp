import React, { Component } from 'react';
import { View, Text, Image, ScrollView, Linking} from 'react-native';
import axios from 'axios';
import Button from 'apsl-react-native-button';

class AlbumDetail extends Component {
    render() {
        return (
            <View>
                
              <View style={styles.viewStyle}>

                    <View>
                        <Image style={{width:70, height: 70}} source={{uri: this.props.albumAvatar}}/>
                    </View>

                    <View>
                        <Text style={{fontSize: 18,}}> {this.props.albumTitle} </Text>
                        <Text> </Text>
                        <Text> {this.props.albumArtist} </Text>
                    </View>

              </View>
              
              <View  style={styles.imageStyle}>
                    <Image style={{ height: 350,
                width: 350,}} source={{uri: this.props.albumImage}}/>
              </View>

              <Button style={{backgroundColor: 'white'}} onPress={() => Linking.openURL(this.props.albumUrl)}>
                    <View style={styles.nestedViewStyle}>
                        <Text style={styles.nestedTextStyle}>Buy Now</Text>
                    </View>
              </Button>

            </View>
        );
    }
};

export default class AlbumList extends Component {

    state = { albums: [], };

    componentWillMount() {
       axios.get('http://rallycoding.herokuapp.com/api/music_albums').then(
           response => this.setState({albums : response.data}));
    }

    renderAlbums() {
        return this.state.albums.map(album => {
            return <AlbumDetail 
            key={album.title} 
            albumTitle={album.title}
            albumArtist={album.artist} 
            albumAvatar={album.thumbnail_image} 
            albumImage={album.image} 
            albumUrl={album.url}
            />
            
        });
    }


    render () {
        return (
            <ScrollView>
                 {this.renderAlbums()}
            </ScrollView>
        );
    }
}

const styles = {
    viewStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        marginLeft: 5,
        marginRight: 5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    imageStyle: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20,
        marginTop: 3,
    }
};