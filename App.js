import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';


class AnyColorButton extends Component {
  displayAlert=()=>{
    alert("Music Stopped")
  }
  render(){
    return(
      <Button color={this.props.color} title="Stop Music" onPress={this.displayAlert}/>
    )
  }
}

class RedButton extends Component{
  displayAlert=()=>{
    alert("Playing O.N.by B.T.S.")
  }
  render(){
    return(
      <Button color={this.props.color} title="Song 1" onPress={this.displayAlert}/>
    )
  }
}
class BlueButton extends Component{
  displayAlert=()=>{
    alert("Playing 7 YEARS by Lucas Graham")
  }
  render(){
    return(
      <Button color={this.props.color} title="Song 2" onPress={this.displayAlert}/>
    )
  }
}
class OrangeButton extends Component{
  displayAlert=()=>{
    alert("Playing Let It Go by Indina Menzel")
  }
  render(){
    return(
      <Button color={this.props.color} title="Song 3" onPress={this.displayAlert}/>
    )
  }
}
class GreenButton extends Component{
  displayAlert=()=>{
    alert("Playing Lovely by Billie Eilish")
  }
  render(){
    return(
      <Button color={this.props.color}title="Song 4" onPress={this.displayAlert}/>
    )
  }
}


export default class App extends Component {
  render() {
    return (
      <View style={{marginTop: 100}}>
        <AnyColorButton color='red' />
        <RedButton color='purple'/>
        <BlueButton color=''/>
        <OrangeButton color='orange'/>
        <GreenButton color='magenta'/>
        <Text>Which song would you like?</Text>
      </View>
    );
  }
}