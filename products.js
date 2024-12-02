import React from 'react';
import {View, Text, StyleSheet , Image} from 'react-native'

const Product = (props) => {
    return(
        <View style={StyleSheet.cardContainer}>
            <Image source={{url: `${props.img}`}} style={StyleSheet.img}/>
            <View style={StyleSheet.cardDesc}>
                <Text>{props.name } </Text>
                <Text>{props.desc } </Text>
                <View style={StyleSheet.footer}>
                    <Text>Stock: {props.stock } </Text>
                    <Text>Price: {props.price } </Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: 'white',
        marginButton: 10,
        borderRadius: 10,
    },
    img: {
        width: 250,
        height:100,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    footer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
export default Product;