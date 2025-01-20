import { FC, useEffect, useRef } from "react"
import { FlatList, Image, ScrollView, TouchableOpacity, View } from "react-native"
import { Text } from "../../../components/TextCustom/TextDefault"
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHook";
import { CartProducts } from "../../../interfaces/cartInterface";
import { StringsCart } from "../../../lang/ES/cart/strings";
import { GlobalConstants } from "../../../constants/generalConstants";
import ColorTheme from "../../../constants/colors/theme";
import { Icon } from "@rneui/base";
import { Product } from "../../../interfaces/productInterface";
import { StringsHome } from "../../../lang/ES/home/strings";
import { formatCurrency } from "../../../utils/formatCurrency";
import { setCartPay } from "../../../slices/cart/cartSlice";
import { getTotalPay } from "../../../utils/getTotalPay";
import { RouteNameNavigation } from "../../routes/routes";

interface Props {
    navigation: any
}
export const  CartScreenComponent:FC<Props> = (props)=> {
    const dataCartPay:CartProducts  = useAppSelector((state) => state.cart);
    const dispatch = useAppDispatch();
    const flatListRef = useRef<FlatList<Product>>(null);

    const removeItemProduct = (id:string) => {
        const newProducts = dataCartPay.products.filter((product:Product) => (product.id) !== id);
        const totalPay = getTotalPay(newProducts);
        dispatch(setCartPay({ products: newProducts, quantityProducts: newProducts.length, totalPay }));
    };

    const RenderProduct = ({ item }: { item: Product }) => {
        return (
            <View 
                style={{
                    padding: 10,
                    borderWidth: 1,
                    borderColor: ColorTheme.light.borderColor,
                    borderRadius: GlobalConstants.RADIUS_BORDER,
                    backgroundColor: ColorTheme.light.white,
                    flexDirection: 'row',
                    marginVertical: 5,
                }}
            >
                <Image source={{ uri: item.image }} style={{ width: 100, height: 100, borderRadius: GlobalConstants.RADIUS_BORDER*0.6 }} />
                <View style={{ flex: 1, paddingHorizontal: 10, justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 14, fontWeight: '500' }}>{item.name}</Text>
                    <Text style={{ fontSize: 10 }}>{item.description}</Text>
                    <Text style={{ fontSize: 10 }}>{`${StringsHome.available} ${item.stock}`}</Text>
                    <View  style={{alignItems:'center', flexDirection:'row', justifyContent:'space-between'}} >
                        <Text style={{ fontSize: 14, fontWeight: '500' }}>{`${StringsHome.price} ${formatCurrency(item.price)}`}</Text>
                        <TouchableOpacity     onPress={() => removeItemProduct(item.id)} style={{padding:5}}>
                            <Icon name='trash-can-outline' type='material-community' size={25} color={ColorTheme.light.error}  />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    };

    useEffect(() => {
        props.navigation.setOptions({
            headerTitle: `${StringsCart.cartTitlePay} (${dataCartPay.quantityProducts})` ,
        })
        dataCartPay.products.length===0 && props.navigation.navigate(RouteNameNavigation.HomeNameScreen);
    }, [dataCartPay.quantityProducts]);
    useEffect(() => {
        setTimeout(() => {
            dataCartPay.products.length>2 &&  flatListRef.current?.scrollToOffset({ offset: 30, animated: true });
        }, 500); 
    }, []);

    return (
        <View  style={{flex:1,  backgroundColor:ColorTheme.light.white}}>
            <View  style={{width:GlobalConstants.WIDTH, backgroundColor:ColorTheme.light.grayLight, height:GlobalConstants.HEIGTH*0.4}} >
                <FlatList
                    ref={flatListRef}
                    data={dataCartPay.products}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={RenderProduct}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ padding: 10, borderRadius: GlobalConstants.RADIUS_BORDER, marginVertical: 5 }}
                    style={{marginVertical:15}}
                />
            </View>
            <ScrollView  style={{flex:1, backgroundColor:ColorTheme.light.grayLight, paddingHorizontal:5}} >
                <View  style={{padding:10, marginVertical:5,  backgroundColor:ColorTheme.light.white, borderRadius:GlobalConstants.RADIUS_BORDER}} >
                    <Text style={{color:ColorTheme.light.textPrimary, fontSize:18, fontWeight:'bold'}}  >Detalles de la compra</Text>

                    <View  style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginVertical:5}} >
                        <Text style={{color:ColorTheme.light.textPrimary, fontSize:16, fontWeight:'bold'}}  >Total de articulos:</Text>
                        <Text style={{color:ColorTheme.light.textPrimary, fontSize:16}}  >{`${dataCartPay.quantityProducts}`}</Text>
                    </View>
                    
                    <View  style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginVertical:5}} >
                        <Text style={{color:ColorTheme.light.textPrimary, fontSize:16, fontWeight:'bold'}}  >Envio:</Text>
                        <Text style={{color:ColorTheme.light.success, fontSize:16, fontWeight:'bold'}}  >{`Gratis`}</Text>
                    </View>

                    <View  style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginVertical:5}} >
                        <Text style={{color:ColorTheme.light.textPrimary, fontSize:16, fontWeight:'bold'}}  >Total del pedido:</Text>
                        <Text style={{color:ColorTheme.light.textPrimary, fontSize:18, fontWeight:'bold'}}  >{`${formatCurrency(dataCartPay.totalPay)}`}</Text>
                    </View>
                </View>
                <View  style={{padding:10, marginVertical:5,  backgroundColor:ColorTheme.light.white, borderRadius:GlobalConstants.RADIUS_BORDER}} >
                    <Text style={{color:ColorTheme.light.textPrimary, fontSize:18, fontWeight:'bold'}}  >Métodos de pago</Text>

                    <TouchableOpacity  style={{flexDirection:'row', justifyContent:'center', alignItems:'center', marginVertical:15, borderRadius:GlobalConstants.RADIUS_BORDER*0.8, padding:10, backgroundColor:ColorTheme.light.primary}} >
                        <Text style={{color:ColorTheme.light.white, fontSize:18, fontWeight:'bold', marginRight:5}}  >Agregar tarjeta </Text>
                        <Icon name='card-outline' type='ionicon' size={25} color={ColorTheme.light.white}  />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );   
};