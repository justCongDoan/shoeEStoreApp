import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProductsScreen from './screens/ProductsScreen'
import ProductDetailsScreen from './screens/ProductDetailsScreen'
import ShoppingCart from './screens/ShoppingCart'
import { Pressable, Text } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ contentStyle: {backgroundColor: 'white'} }}>
                <Stack.Screen 
                    name='Products' 
                    component={ProductsScreen} 
                    options={({navigation}) => ({headerRight: () => (
                        <Pressable
                            style={{ flexDirection: 'row' }}
                            onPress={() => navigation.navigate('Cart')}>
                            <FontAwesome5 name='shopping-cart' size={18} color='gray'/>
                            <Text
                                style={{
                                    marginLeft: 5,
                                    fontWeight: '500'
                                }}>
                                1
                            </Text>
                        </Pressable>
                    )})}
                />
                <Stack.Screen 
                    name='Product Details' 
                    component={ProductDetailsScreen}
                    options={{presentation: 'modal'}}
                />
                <Stack.Screen name='Cart' component={ShoppingCart}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;