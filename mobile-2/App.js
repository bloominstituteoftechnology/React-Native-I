import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { SearchBar } from 'react-native-elements';

export default class App extends React.Component {
	render() {
		let pic = {
			uri:
				'https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAeQAAAAJGE5ZTRmZmZkLTJlYTEtNGVkZC1iMTIyLWNhYjRkZDgyMzU1MA.jpg'
		};
		let sunPic = {
			uri:
				'https://www.nationalgeographic.com/content/dam/science/photos/000/065/6594.ngsversion.1509199314694.adapt.1900.1.jpg'
		};
		let galaxyPic = {
			uri:
				'https://www.universetoday.com/wp-content/uploads/2013/03/Andromeda_Galaxy_Adam-Evans-Wiki.jpg'
		};
		let laniakea = {
			url: 'https://i.ytimg.com/vi/rENyyRwxpHo/maxresdefault.jpg'
		};
		let supercluster = {
			url:
				'https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2017/cuboulderres.jpg'
		};
		return (
			<ScrollView>
				<View style={styles.container}>
					<View style={styles.spacer} />
					<View style={styles.header}>
						<SearchBar
							style={styles.searchBar}
							lightTheme
							placeholder="search..."
						/>
						<Image source={pic} style={{ width: '100%', height: 150 }} />
						<Text style={styles.header1}>Our local Solar System</Text>
					</View>
					<View style={styles.picSection}>
						<Image source={sunPic} style={styles.picture} />
						<Image source={galaxyPic} style={styles.picture} />
					</View>
					<Text style={styles.picComment}>
						The picture on the left is our host star, the Sun. The picture on
						the right is a galaxy like in which we find ourselves in.
					</Text>
					<Text style={styles.header1}>Our known Universe</Text>
					<View style={styles.picSection}>
						<Image source={laniakea} style={styles.picture} />
						<Image source={supercluster} style={styles.picture} />
					</View>
					<View>
						<Text style={styles.picComment}>
							The picture on the left is Laniakea, which is the supercluster of
							all known glalaxies in which we find ourselves in. The picture on
							the right is a galaxy cluster in which consists in multitude
							inside the Lanaikea.
						</Text>
					</View>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'skyblue'
	},
	searchBar: {
		marginTop: 10,
		paddingTop: 20,
		alignSelf: 'stretch'
	},
	header1: {
		fontWeight: 'bold',
		fontSize: 18,
		alignSelf: 'center'
	},
	picSection: {
		justifyContent: 'space-between',
		padding: 5,
		flexDirection: 'row'
	},
	picture: {
		marginRight: 2,
		width: '50%',
		height: 150,
		borderWidth: 1,
		borderColor: 'grey'
	},
	picComment: {
		borderWidth: 2,
		marginLeft: 7,
		marginRight: 7
	},
	spacer: {
		height: 10,
		backgroundColor: 'lightgrey'
	}
});
