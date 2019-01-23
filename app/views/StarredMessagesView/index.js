// import React from 'react';
// import { FlatList, Text, View } from 'react-native';

// import { connect } from 'react-redux';

// import { openStarredMessages, closeStarredMessages } from '../../actions/starredMessages';

// import { toggleStarRequest } from '../../actions/messages';

// import PropTypes from 'prop-types';
// import ActionSheet from 'react-native-actionsheet';

// import LoggedView from '../View';
// import styles from './styles';
// import Message from '../../containers/message';

// const STAR_INDEX = 0;
// const CANCEL_INDEX = 1;
// const options = ['Unstar', 'Cancel'];

// @connect(
// 	state => ({
// 		messages: state.starredMessages.messages,
// 		user: state.login.user,
// 		baseUrl: state.settings.Site_Url || state.server ? state.server.server : ''
// 	}),
// 	dispatch => ({
// 		openStarredMessages: rid => dispatch(openStarredMessages(rid)),
// 		closeStarredMessages: () => dispatch(closeStarredMessages()),
// 		toggleStarRequest: message => dispatch(toggleStarRequest(message))
// 	})
// )


// export default class StarredMessagesView extends LoggedView {
// 	static propTypes = {
// 		navigation: PropTypes.object,
// 		messages: PropTypes.array,
// 		user: PropTypes.object,
// 		baseUrl: PropTypes.string,
// 		openStarredMessages: PropTypes.func,
// 		closeStarredMessages: PropTypes.func,
// 		toggleStarRequest: PropTypes.func
// 	}

// 	constructor(props) {
// 		super('StarredMessagesView', props);
// 		this.state = {
// 			message: {}
// 		};
// 	}

// 	componentDidMount() {
// 		this.props.openStarredMessages(this.props.navigation.state.params.rid);
// 	}

// 	componentWillUnmount() {
// 		this.props.closeStarredMessages();
// 	}

// 	onLongPress = (message) => {
// 		this.setState({ message });
// 		this.actionSheet.show();
// 	}

// 	handleActionPress = (actionIndex) => {
// 		switch (actionIndex) {
// 			case STAR_INDEX:
// 				this.props.toggleStarRequest(this.state.message);
// 				break;
// 			default:
// 				break;
// 		}
// 	}

// 	renderEmpty = () => (
// 		<View style={styles.listEmptyContainer}>
// 			<Text>No starred messages</Text>
// 		</View>
// 	)

// 	renderItem = ({ item }) => (
// 		<Message
// 			item={item}
// 			style={styles.message}
// 			reactions={item.reactions}
// 			user={this.props.user}
// 			baseUrl={this.props.baseUrl}
// 			Message_TimeFormat='MMMM Do YYYY, h:mm:ss a'
// 			onLongPress={this.onLongPress}
// 		/>
// 	)

// 	render() {
// 		if (this.props.messages.length === 0) {
// 			return this.renderEmpty();
// 		}
// 		return (
// 			[
// 				<FlatList
// 					key='starred-messages-view-list'
// 					data={this.props.messages}
// 					renderItem={this.renderItem}
// 					style={styles.list}
// 					keyExtractor={item => item._id}
// 				/>,
// 				<ActionSheet
// 					key='starred-messages-view-action-sheet'
// 					ref={o => this.actionSheet = o}
// 					title='Actions'
// 					options={options}
// 					cancelButtonIndex={CANCEL_INDEX}
// 					onPress={this.handleActionPress}
// 				/>
// 			]
// 		);
// 	}
// }
import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class StarredMessagesView extends Component {
  render() {
	return (
	  <View>
		<Text> StarredMessagesView </Text>
	  </View>
	)
  }
}
