import React, { useState } from 'react';
import { View, FlatList, Image, TouchableOpacity, Button, StyleSheet } from 'react-native';
import { Text } from "../../../components/TextCustom/TextDefault";
import { GlobalConstants } from "../../../constants/generalConstants";
import ColorTheme from "../../../constants/colors/theme";
import { StringsHome } from "../../../lang/ES/home/strings";
import { Product } from '../../../interfaces/productInterface';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHook';
import { Icon } from '@rneui/base';
import { TouchablePayComponent } from './components/TouchablePay';
import { getTotalPay } from '../../../utils/getTotalPay';
import { setCartPay } from '../../../slices/cart/cartSlice';
import { RouteNameNavigation } from '../../routes/routes';
import { formatCurrency } from '../../../utils/formatCurrency';

interface Props {
    navigation: any
}

const HomeScreenComponent: React.FC<Props> = (props) => {
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const dataProducts: Product[] = useAppSelector((state) => state.product.products);
    const dispatch = useAppDispatch();

    const toggleProductSelection = (product: Product) => {
        setSelectedProducts((prevSelectedProducts) => {
            if (prevSelectedProducts.some(p => p.id === product.id)) {
                return prevSelectedProducts.filter(p => p.id !== product.id);
            } else {
                return [...prevSelectedProducts, product];
            }
        });
    };

    const RenderProduct = ({ item }: { item: Product }) => {
        const isSelected = selectedProducts.some(product => product.id === item.id);
        return (
            <TouchableOpacity  activeOpacity={0.7} style={style.productContainer}  onPress={() => toggleProductSelection(item)} >
                <Image source={{ uri: item.image }} style={{ width: 100, height: 100, borderRadius: GlobalConstants.RADIUS_BORDER*0.6 }} />
                <View style={{ flex: 1, paddingHorizontal: 10, justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 14, fontWeight: '500' }}>{item.name}</Text>
                    <Text numberOfLines={2} style={{ fontSize: 10 }}>{item.description}</Text>
                    <Text style={{ fontSize: 10 }}>{`${StringsHome.available} ${item.stock}`}</Text>
                    <View  style={{alignItems:'center', flexDirection:'row', justifyContent:'space-between'}} >
                        <Text style={{ fontSize: 14, fontWeight: '500' }}>{`${StringsHome.price} ${formatCurrency(item.price)}`}</Text>
                        {isSelected && <Icon name='cart-check' type='material-community' size={25} color={ColorTheme.light.success}  />}
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    const handleAddToCart = () => {
        const totalPay = getTotalPay(selectedProducts);
        dispatch(setCartPay({ products: selectedProducts, quantityProducts: selectedProducts.length, totalPay }));
        props.navigation.navigate(RouteNameNavigation.CartNameScreen);
    };

    return (
        <View style={{ flex: 1, backgroundColor: ColorTheme.light.cardBackground, justifyContent:'center' }}>
            <FlatList
                data={dataProducts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={RenderProduct}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ padding: 10, borderRadius: GlobalConstants.RADIUS_BORDER, marginVertical: 5 }}
            />
            { selectedProducts.length > 0 && 
               <TouchablePayComponent numberProductSelect={selectedProducts.length} handleAddToCart={handleAddToCart} />
            }
        </View>
    );
};

export default HomeScreenComponent;

const style = StyleSheet.create({
    productContainer: {
        padding: 10,
        borderWidth: 1,
        borderColor: ColorTheme.light.borderColor,
        borderRadius: GlobalConstants.RADIUS_BORDER,
        backgroundColor: ColorTheme.light.white,
        flexDirection: 'row',
        marginVertical: 5,
    },

});