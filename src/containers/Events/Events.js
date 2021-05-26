import React, { Component } from 'react';
import Aux from '../../hoc/Auxilliary'
import Card from '../../components/Cards/Cards'
class Events extends Component{
    render(){
        return(
            <Aux>
                <Card name="App Combat"></Card>
                <Card name="Webgators"></Card>
                <Card name="Algowls"></Card>
            </Aux>
        );
    };
};

export default Events;