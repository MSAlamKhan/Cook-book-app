import React from "react";
import { View, StyleSheet } from "react-native";

const Card = props => {
    
    return (
        <View style={{...styles.container,...props.style}}>
            {props.children}
        </View>
    )
}


const styles = StyleSheet.create({
    container : {

        borderWidth : 2,
        borderRadius : 10,
        padding : 10,
        marginVertical : 10,
        
        
    }
})

export default Card;