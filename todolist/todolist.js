import React, { Component } from "react";
import { addText } from '../actions/action'

import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView } from "react-native";
import { connect } from 'react-redux'




export class ToDoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
           list: []
        }


    }

    textImput=(term)=> {
        
        this.setState({ imputTerm: term })
    }
    

    createtext = () => {
       const list = this.state.imputTerm;
        
        this.setState({list:''})
        console.log('text-----'   +this.props.counter);
        console.log('text-----'   +this.props.id);
        this.props.savetostore(list)

    }


    render() {

        return (
            <View style={styles.container} >
                <ScrollView >
                    <View style={styles.addText}>
                        <View style={{ backgroundColor: 'black', flex: 4 }}>
                            <TextInput style={{ fontSize: 20, height: 60, color: 'red' }}
                                onChangeText={(term) => { this.textImput(term) }}
                            ></TextInput>
                        </View>
                        <View style={{ backgroundColor: 'black', flex: 2 }}>
                            <TouchableOpacity
                                onPress={() => this.createtext(this.state.imputTerm)}>
                                <Text style={{ fontSize: 30, color: 'green', alignContent: 'center' }}>Add</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )



    }


}



function mapStateToProps(state) {
    return {
        list: state.list,
    }
}

function mapDispatchToProps(dispatch) {
    
    return {
        
        savetostore: (list) => dispatch(addText(list)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)









const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey'
    },
   
    addText: {
        flex: 2,
        color: 'blue',
        fontSize: 200,
        borderWidth: 1,
        flexDirection: 'row'

    },


})