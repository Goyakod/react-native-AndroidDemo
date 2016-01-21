/**
 * Created by bhyt-pro1 on 15/11/26.
 */
'use strict';

var React = require('react-native');
var Register = require('./Register');
var TimerMixin = require('react-timer-mixin');

var {
    StyleSheet,
    Component,
    View,
    Text,
    Navigator,
    TouchableHighlight,
    ViewPagerAndroid
    } = React;

var NavigationBar = React.createClass({
    mixins:[TimerMixin],

    componentDidMount() {

        this.setInterval(()=>{
            console.log('setInterval');

        },1000)
    },

    render() {
        return (
            <Navigator
                initialRoute={{name:'route1',index:0}}
                renderScene={(route,navigator) =>
            <View>
                <View style = {{alignItems:'center',justifyContent:'center',backgroundColor:'gray',height:60}} >
                    <Text style = {{fontSize:22,color:'white'}} >自助服务</Text>
                </View>

                <ViewPagerAndroid
                style = {{height:150}}
                initialPage = {0} >
                    <View style = {{backgroundColor:'orangered',alignItems:'center',justifyContent:'center'}} >
                        <Text style = {{fontSize:20,color:'white'}} >Page One</Text>
                    </View>
                    <View style = {{backgroundColor:'green',alignItems:'center',justifyContent:'center'}} >
                        <Text style = {{fontSize:20,color:'white'}} >Page Two</Text>
                    </View>
                    <View style = {{backgroundColor:'blue',alignItems:'center',justifyContent:'center'}} >
                        <Text style = {{fontSize:20,color:'white'}} >Page Three</Text>
                    </View>

                </ViewPagerAndroid>

                <View style = {styles.btnBGView} >
                    <TouchableHighlight
                        onPress = {() => {
                            var nextIndex = route.index + 1;
                            navigator.push({
                                name:'Scene' + nextIndex,
                                index: nextIndex
                            })
                        }}
                        >
                        <View style = {styles.btnView} >
                            <Text style = {styles.btnTitle} >医院介绍</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight >
                        <View style = {styles.btnView} >
                            <Text style = {styles.btnTitle} >医院导航</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style = {styles.btnView} >
                            <Text style = {styles.btnTitle} >专家排班</Text>
                        </View>
                    </TouchableHighlight>
                </View>

                <View style = {styles.btnBGView} >
                    <TouchableHighlight>
                        <View style = {styles.btnView} >
                            <Text style = {styles.btnTitle} >预约挂号</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style = {styles.btnView} >
                            <Text style = {styles.btnTitle} >排队叫号</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style = {styles.btnView} >
                            <Text style = {styles.btnTitle} >预约记录</Text>
                        </View>
                    </TouchableHighlight>
                </View>

                <View style = {styles.btnBGView}>
                    <TouchableHighlight>
                        <View style = {styles.btnView} >
                            <Text style = {styles.btnTitle} >取报告单</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style = {styles.btnView} >
                            <Text style = {styles.btnTitle} >门诊缴费</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style = {styles.btnView} >
                            <Text style = {styles.btnTitle} >专家在线</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
                }>
            </Navigator>


        );
    }
});
/*
class NavigationBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Navigator
                initialRoute={{name:'route1',index:0}}
                renderScene={(route,navigator) =>
            <View>
                <View style = {{alignItems:'center',justifyContent:'center',backgroundColor:'gray',height:60}} >
                    <Text style = {{fontSize:22,color:'white'}} >自助服务</Text>
                </View>

                <ViewPagerAndroid
                style = {{height:150}}
                initialPage = {0} >
                    <View style = {{backgroundColor:'orangered',alignItems:'center',justifyContent:'center'}} >
                        <Text style = {{fontSize:20,color:'white'}} >Page One</Text>
                    </View>
                    <View style = {{backgroundColor:'green',alignItems:'center',justifyContent:'center'}} >
                        <Text style = {{fontSize:20,color:'white'}} >Page Two</Text>
                    </View>
                    <View style = {{backgroundColor:'blue',alignItems:'center',justifyContent:'center'}} >
                        <Text style = {{fontSize:20,color:'white'}} >Page Three</Text>
                    </View>

                </ViewPagerAndroid>


                <View style = {styles.btnBGView} >
                    <TouchableHighlight
                        onPress = {() => {
                            var nextIndex = route.index + 1;
                            navigator.push({
                                name:'Scene' + nextIndex,
                                index: nextIndex
                            })
                        }}
                        >
                        <View style = {styles.btnView} >
                            <Text style = {styles.btnTitle} >医院介绍</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight >
                        <View style = {styles.btnView} >
                            <Text style = {styles.btnTitle} >医院导航</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style = {styles.btnView} >
                            <Text style = {styles.btnTitle} >专家排班</Text>
                        </View>
                    </TouchableHighlight>
                </View>

                <View style = {styles.btnBGView} >
                    <TouchableHighlight>
                        <View style = {styles.btnView} >
                            <Text style = {styles.btnTitle} >预约挂号</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style = {styles.btnView} >
                            <Text style = {styles.btnTitle} >排队叫号</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style = {styles.btnView} >
                            <Text style = {styles.btnTitle} >预约记录</Text>
                        </View>
                    </TouchableHighlight>
                </View>

                <View style = {styles.btnBGView}>
                    <TouchableHighlight>
                        <View style = {styles.btnView} >
                            <Text style = {styles.btnTitle} >取报告单</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style = {styles.btnView} >
                            <Text style = {styles.btnTitle} >门诊缴费</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style = {styles.btnView} >
                            <Text style = {styles.btnTitle} >专家在线</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
                }>
            </Navigator>


        );
    }
}
*/

var styles = StyleSheet.create({
    btnBGView: {
        marginTop: 13,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    btnView: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray'
    },
    btnTitle: {
        fontSize: 20
    }
});

module.exports = NavigationBar;
