import React from 'react';
import{StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, ToastAndroid} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import{Header} from 'react-native-elements';
import db from '../config'

export default class WriteStoryScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            author: '',
            storyText: '',
        }
    }

    submitStory = ()=>{
        db.collection("stories").add({
            title: this.state.title,
            author: this.state.author,
            storyText: this.state.storyText,
        })
        this.setState({
            title: '',
            author: '',
            storyText: ''
        })
        ToastAndroid.show('Your story has been submitted', ToastAndroid.SHORT)
    }

    render(){
        return(
            <KeyboardAvoidingView style={StyleSheet.container}
            behaviour="padding" enabled>
                <Header
                    backgroundColor = {'orange'}
                    centerComponent = {{
                        text: 'Story Hub',
                        style: {color: 'black', fontSize: 30}
                    }}
                    />
                <TextInput
                    placeholder="Story Title"
                    onChangeText = {(text)=>{
                        this.setState({
                            title: text
                        })
                    }}
                    placeholderTextColor='black'
                    value={this.state.title}
                    style={StyleSheet.title}/>
                <TextInput
                    placeholder="Author"
                    onChangetext = {(text)=>{
                        this.setState({
                            author: text
                        })
                    }}
                    placeholderTextColor='black'
                    value={this.state.author}/>
                <TextInput
                    placeholder="Write your story"
                    onChangeText = {(text)=>{
                        this.setState({
                            storyText: text
                        })
                    }}
                    placeholderTextColor = 'black'
                    value={this.state.storyText}
                    style={StyleSheet.storyText}
                    multiline = {true}/>
                
                <TouchableOpacity
                    style={StyleSheet.submitButton}
                    onPress={this.submitStory}
                >
                    <Text style={StyleSheet.buttonText}>Submit</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00fff',
    },
    title:{
        height: 40,
        borderWidth: 2,
        marginTop: 40,
        margin: 10,
        color: 'black',
        padding: 6,
    },
    author: {
        height: 40,
        borderWidth: 2,
        margin: 10,
        paddingt: 6,
    },
    storyText: {
        height: 250,
        borderWidth: 2,
        margin: 10,
        padding: 6,
        textAlignVertical: "top"
    },
    submitButton: {
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: 'orange',
        width: 80,
        height: 40, color: 'black',
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        color: 'black',
    }
});