
'use strict';

var React = require('react-native');
var Button = require('./Button');

var {
    StyleSheet,
    ViewPagerAndroid,
    View,
    Text,
    TouchableHighlight
    } = React;


var HomePage = React.createClass({

    //九宫格按钮点击事件:
    //buttonPress(){
    //    console.log('buttonPress');
    //},

    render(){
        return(
            //九宫格按钮
            <View>
                <Button
                    title = '医院介绍'
                    onPress = {() => {}} />
                    /*
                    <Button
                        title = '医院导航'
                        onPress = {() => {}} />
                    <Button
                        title = '专家排班'
                        onPress = {() => {}} />
                    <Button
                        title = '预约挂号'
                        onPress = {() => {}} />
                    <Button
                        title = '排队叫号'
                        onPress = {() => {}} />
                    <Button
                        title = '预约记录'
                        onPress = {() => {}} />
                    <Button
                        title = '取报告单'
                        onPress = {() => {}} />
                    <Button
                        title = '门诊缴费'
                        onPress = {() => {}} />
                    <Button
                        title = '专家在线'
                        onPress = {() => {}} />
                    */
            </View>
        );
    }
});

module.exports = HomePage;