import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { connect } from 'react-redux';


class App3 extends Component {
    render() {
        return (
            <View style={styles.root}>
                <Text> {this.props.count} </Text>
                <Button 
                    title='加1'
                    onPress={()=>{
                        const aciton = {
                            type:'counter/add',
                            id:'xxx',
                        };
                        this.props.dispatch(aciton);
                    }}>
                </Button>
                <Button 
                    title='减1'
                    onPress={()=>{
                        this.props.dispatch({
                            type:'counter/del'
                        })
                    }}>
                </Button>
                <Button 
                    title='归零'
                    onPress={()=>{
                        this.props.dispatch({
                            type:'counter/zero'
                        })
                    }}>
                </Button>
                <Button 
                    title='异步+1'
                    onPress={()=>{
                        this.props.dispatch({
                            type:'counter/a_add'
                        })
                    }}>
                </Button>
                <Button 
                    title='异步+2'
                    onPress={()=>{
                        this.props.dispatch({
                            type:'counter/a_add2'
                        })
                    }}>
                </Button>
            </View>
        )
    }
}

export default connect((m)=>{
    console.log(m);
    return {
        count:m.counter.count,
    };
})(App3); 

const styles = {
    root:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center', 
    }
}
