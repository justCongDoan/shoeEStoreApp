import { StyleSheet, Text, View, ScrollView, Image, FlatList, useWindowDimensions, Pressable } from 'react-native'
import products from '../data/products'
import { useSelector } from 'react-redux';

const ProductDetailsScreen = () => {
    const product = useSelector((state) => state.products.selectedProduct);

    const {width} = useWindowDimensions();

    // temporary function
    const addToCart = () => {
        console.warn('Adding to cart...');
    }

    return (
        <View>
            <ScrollView>
                {/* Image Carousel */}
                <FlatList
                    data={product.images}
                    renderItem={({item}) => (
                        <Image 
                            source={{ uri: item }} 
                            style={{ width, aspectRatio: 1 }} 
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                />

                <View style={{padding: 20}}>
                    {/* Title */}
                    <Text style={styles.title}>{product.name}</Text>
                    {/* Price */}
                    <Text style={styles.price}>${product.price}</Text>
                    {/* Description */}
                    <Text style={styles.description}>{product.description}</Text>
                </View>
            </ScrollView>

            {/* Add to cart button */}
            <Pressable style={styles.button} onPress={addToCart}>
                <Text style={styles.buttonText}>Add to cart</Text>
            </Pressable>
            {/* Navigation icon */}
        </View>
    )
}

export default ProductDetailsScreen

const styles = StyleSheet.create({
    title: {
        fontSize: 34,
        fontWeight: "500",
        marginVertical: 10,
    },
    price: {
        fontWeight: "500",
        fontSize: 16,
    },
    description: {
        marginVertical: 10,
        fontSize: 18,
        lineHeight: 30,
        fontWeight: "300",
    },
    button: {
        backgroundColor: 'black',
        position: 'absolute',
        bottom: 30,
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
        padding: 20,
        borderRadius: 100,
    },
    buttonText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16,
    },
})