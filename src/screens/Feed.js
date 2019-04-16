import React, { Component } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'

class Feed extends Component {
    state = {
        posts: [
            {
                id: Math.random(),
                nickname: 'Batman',
                email: 'batman@gmail.com',
                image: require('../../assets/imgs/fence.jpg'),
                comments: [
                    {
                        nickname: 'Robin',
                        comment: 'Uhul! Amazing!'
                    },
                    {
                        nickname: 'Penguin',
                        comment: 'Not so cool'
                    },
                    {
                        nickname: 'Groot',
                        comment: 'I am groot.'
                    }
                ]
            },
            {
                id: Math.random(),
                nickname: 'Ant Man',
                email: 'antman@gmail.com',
                image: require('../../assets/imgs/bw.jpg'),
                comments: [
                    {
                        nickname: 'Thanos',
                        comment: 'Too much stuff!'
                    },
                    {
                        nickname: 'Hulk',
                        comment: 'Aaaarrrrgh!'
                    }
                ]
            }
        ]
    }

    render() {
        return (
            <View style={styles.container}>
                <Header></Header>
                <FlatList
                    data={this.state.posts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) => <Post key={item.id} {...item} />}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
})

export default Feed