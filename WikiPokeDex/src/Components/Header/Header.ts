import { StyleSheet } from "react-native";

export const HeaderStyles = StyleSheet.create({
    header:{
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        height:120,
        margin:0,
        padding: 0,
    },
    topNav:{
        width:'100%',
        height: "50%",
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingRight: 25,
        paddingLeft: 25,
        paddingBottom: 5,
        margin: 0,
    },
    bottomNav:{
        width:'100%',
        height: "50%",
        alignItems:'center',
        justifyContent:'center',
    },

});