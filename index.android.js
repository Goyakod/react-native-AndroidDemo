/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var TabBar  = require('./components/TabBar');
var Item = TabBar.Item;

//var NavigationBar = require('./components/NavigationBar');

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    NativeModules
    } = React;

var AndroidDemo = React.createClass({

    getInitialState: function () {
        return {
            selected: '自助服务'
        };
    },

    onTabItemPress: function (name) {
        console.log(`click on ${name}`);
        //NativeModules.ToastAndroid.show('nihao',2000);
        this.setState({
            selected: name
        });
    },

    render: function() {
        var state = this.state;
        return (
            <TabBar selected={state.selected} onTabItemPress={this.onTabItemPress}>
                <Item name="自助服务">
                    <Item.Content>
                        <NavigationBar/>
                    </Item.Content>
                    <Item.Icon>
                        <Text>自助服务</Text>
                    </Item.Icon>
                </Item>
                <Item name="消息中心">
                    <Item.Content>
                        <View style={{ flex: 1, backgroundColor: 'pink' }}></View>
                    </Item.Content>
                    <Item.Icon>
                        <Text>消息中心</Text>
                    </Item.Icon>
                </Item>
                <Item name="个人中心">
                    <Item.Content>
                        <View style={{flex: 1, backgroundColor: 'yellow' }}></View>
                    </Item.Content>
                    <Item.Icon>
                        <Text>个人中心</Text>
                    </Item.Icon>
                </Item>
            </TabBar>
        );
    }
});

AppRegistry.registerComponent('AndroidDemo', () => AndroidDemo);
