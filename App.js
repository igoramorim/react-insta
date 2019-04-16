import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import Header from './src/components/Header'
import Post from './src/components/Post'

export default class App extends Component {
	render() {
		const comments = [
			{
				nickname: 'Igor Amorim',
				comment: 'Nice!'
			},
			{
				nickname: 'Durval Silva',
				comment: 'Muito show!'
			},
			{
				nickname: 'James Bond',
				comment: 'HAHAHAHAHA'
			},
		]

		return (
			<View style={{ flex: 1 }}>
				<Header></Header>
				<Post image={require('./assets/imgs/fence.jpg')}
					comments={comments}/>
			</View>
    	);
	}
}


