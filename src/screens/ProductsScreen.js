import { StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native'
import React from 'react'
import products from '../data/products';

const ProductsScreen = ({navigation}) => {
    return (
        <FlatList
            data={products}
            renderItem={({item}) => (
                <Pressable onPress={() => navigation.navigate('Product Details')} style={styles.itemContainer}>
                    <Image 
                    source={{ uri: item.image }} 
                    style={styles.image} 
                    />
                </Pressable>
            )}
            numColumns={2}
        />
    )
}

export default ProductsScreen

const styles = StyleSheet.create({
    itemContainer: { 
        width: "50%", 
        padding: 1 
    },
    image: {
        width: "100%", 
        aspectRatio: 1
    },
})