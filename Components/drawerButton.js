import React from "react";

import {  DrawerToggleButton } from "@react-navigation/drawer";
import Colors from "../constants/Colors";



const DrawerButton =  props => {
    return (
        <DrawerToggleButton tintColor= {Colors.accentColor}   />
    )
    
}

export default DrawerButton;