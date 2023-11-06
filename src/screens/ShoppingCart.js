import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import cart from '../data/cart'
import CartListItem from '../components/CartListItem'

const ShoppingCartTotals = () => (
    <View style={styles.totalsContainer}>
        <View style={styles.row}>
            <Text style={styles.text}>Subtotal</Text>
            <Text style={styles.text}>410,00$</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.text}>Delivery</Text>
            <Text style={styles.text}>16,50$</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.textBold}>Total</Text>
            <Text style={styles.textBold}>426,50$</Text>
        </View>
    </View>
);

const ShoppingCart = () => {
    return (
        <>
            <FlatList
                style={{marginTop: 30}}
                data={cart}
                renderItem={({item}) => <CartListItem cartItem={item}/>}
                ListFooterComponent={ShoppingCartTotals}
            />
            <View style={styles.footer}>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Checkout</Text>
                </Pressable>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    totalsContainer: {
        margin: 20,
        padding: 10,
        borderColor: 'gainsboro',
        borderTopWidth: 1,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 2,
    },
    text: {
        fontSize: 16,
        color: 'gray',
    },
    textBold: {
        fontSize: 16,
        fontWeight: '500',
    },
    footer: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        backgroundColor: "white",
        borderColor: "gainsboro",
        borderTopWidth: 1,
        padding: 20,
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

export default ShoppingCart