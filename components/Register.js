/**
 * Created by bhyt-pro1 on 15/11/26.
 */
'use strict';
var React = require('react-native');

var {
    Component,
    View,
    Navigator
    } = React;

class Register extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Navigator
                initialRoute={{name:'route1',index:1}}
                renderScene={(route,navigator) =>
                    <View style = {{flex:1,backgroundColor:'black'}} ></View>
                }>
            </Navigator>
        );
    }
}

module.exports = Register;