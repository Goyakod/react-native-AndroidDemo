/**
 * Created by bhyt-pro1 on 15/11/25.
 */
'use strict';
var React = require('react-native');

var {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
    } = React;

var Button = React.createClass({
    render(){
        return(
            <TouchableHighlight
                onPress = {this.props.onPress()}
                >
                <View style = {styles.buttonStyle} >
                    <Text style = {{color:'white'}} >{this.props.title}</Text>
                </View>
            </TouchableHighlight>
        );
    }
});

var styles = StyleSheet.create({
    buttonStyle: {
        flex: 1,
        width: 0,
        margin: 5,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: 'gray'
    }
});

module.exports = Button;