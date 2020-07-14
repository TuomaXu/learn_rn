import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { connect } from 'react-redux';

class App2 extends Component {

    state={
        count:0,
    }

    render() {
        return (
                <View style={styles.root}>
                    <Text>{this.state.count}</Text>
                    <Text>{this.props.name}</Text>
                    <Button 
                    title='加1'
                    onPress={()=>{
                        const count = this.state.count;
                        console.log(this.props);
                        this.setState({
                            count:count+1,
                        })
                    }}></Button>
                    <Button 
                        title='dva测试'
                        onPress={()=>{
                            console.log(111);
                            this.props.dispatch({
                                type: 'user/t1',
                                payload:'tom1'
                              });
                        }}
                    ></Button>
                    <Button 
                        title='dva测试2'
                        onPress={()=>{
                            console.log(111);
                            this.props.dispatch({
                                type: 'user/fetch',
                              });
                        }}
                    ></Button>
                    <Button 
                        title='dva测试3'
                        onPress={()=>{
                            console.log(111);
                            this.props.dispatch({
                                type: 'user/f1',
                              });
                        }}
                    ></Button>
                </View>
        )
    }
}

// export default App2;

export default connect((m)=>{
    console.log(m);
    return {
        name:m.user.name,
    };
})(App2); 

const styles = {
    root:{
        flex:1,
       flexDirection:'column',
       justifyContent:'center',
       alignItems:'center', 
    }
}
