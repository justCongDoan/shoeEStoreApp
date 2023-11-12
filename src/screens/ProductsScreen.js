import { StyleSheet, Text, View, Image, FlatList, Pressable , ActivityIndicator } from 'react-native'
import React from 'react'
// import products from '../data/products';
import { useSelector, useDispatch } from 'react-redux';
import { productsSlice } from '../store/productsSlice';
import { useGetProductsQuery } from '../store/apiSlice';

const ProductsScreen = ({navigation}) => {
    const dispatch = useDispatch();
    // const products = useSelector(state => state.products.products);

    const { data, isLoading, error } = useGetProductsQuery();

    if(isLoading) {
        return <ActivityIndicator/>
    }

    if(error) {
        return <Text>Fetching error: {error.error}</Text>
    }

    
    const products = data.data;

    return (
        <FlatList
            data={products}
            renderItem={({item}) => (
                <Pressable 
                    onPress={() => {
                        // update selected product
                        // dispatch(productsSlice.actions.setSelectedProduct(item.id))
                        navigation.navigate('Product Details', {id: item._id})
                    }} 
                    style={styles.itemContainer}>
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