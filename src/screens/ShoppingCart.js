import { StyleSheet, Text, View, FlatList, Pressable, ActivityIndicator, Alert } from 'react-native'
import CartListItem from '../components/CartListItem'
import { useDispatch, useSelector } from 'react-redux'
import { selectDeliveryPrice, selectSubtotal, selectTotal, cartSlice } from '../store/cartSlice'
import { useCreateOrderMutation } from '../store/apiSlice'

const ShoppingCartTotals = () => {
    const subTotal = useSelector(selectSubtotal);
    const deliveryFee = useSelector(selectDeliveryPrice);
    const total = useSelector(selectTotal);
    return (
        <View style={styles.totalsContainer}>
            <View style={styles.row}>
                <Text style={styles.text}>Subtotal</Text>
                <Text style={styles.text}>{subTotal}$</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>Delivery</Text>
                <Text style={styles.text}>{deliveryFee}$</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.textBold}>Total</Text>
                <Text style={styles.textBold}>{total}$</Text>
            </View>
        </View>
    );
}

const ShoppingCart = () => {

    const subTotal = useSelector(selectSubtotal);
    const deliveryFee = useSelector(selectDeliveryPrice);
    const total = useSelector(selectTotal);
    const dispatch = useDispatch();

    const cartItems = useSelector((state) => state.cart.items);

    const [createOrder, {data, isLoading, error}] = useCreateOrderMutation();

    console.log(error, isLoading);

    const onCreateOrder = async () => {
        const result = await createOrder({
            items: cartItems,
            subTotal,
            deliveryFee,
            total,
            customer: {
                name: "Benjamin",
                address: "My Address",
                email: "example@gmail.com",
            },
        });
        if (result.data?.status === 'OK') {
            console.log(result.data);
            Alert.alert(
              'Order has been submitted',
              `Your order reference is: ${result.data.data.ref}`
            );
            dispatch(cartSlice.actions.clear());
        }
    };

    return (
        <>
            <FlatList
                style={{marginTop: 30}}
                data={cartItems}
                renderItem={({item}) => <CartListItem cartItem={item}/>}
                ListFooterComponent={ShoppingCartTotals}
            />
            <View style={styles.footer}>
                <Pressable style={styles.button} onPress={onCreateOrder}>
                    <Text style={styles.buttonText}>
                        Checkout
                        {isLoading && <ActivityIndicator/>}
                    </Text>
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