import React, { useState } from 'react';
import { View, FlatList, Image, TouchableOpacity, Button } from 'react-native';
import { Text } from "../../../components/TextCustom/TextDefault";
import { GlobalConstants } from "../../../constants/generalConstants";
import ColorTheme from "../../../constants/colors/theme";
import { Strings } from "../../../lang/ES/home/strings";
import { Product } from '../../../interfaces/productInterface';
import { useAppSelector } from '../../../hooks/reduxHook';
import { Icon } from '@rneui/base';
import { TouchablePayComponent } from './components/TouchablePay';

interface Props {
    navigation: any
}

const HomeScreenComponent: React.FC<Props> = (props) => {
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const dataProducts: Product[] = useAppSelector((state) => state.product.products);

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
        const isSelected = selectedProducts.some(p => p.id === item.id);
        return (
            <TouchableOpacity 
                onPress={() => toggleProductSelection(item)}
                activeOpacity={0.8}
                style={{
                    padding: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: '#ccc',
                    backgroundColor: 'white',
                    flexDirection: 'row',
                    borderRadius: GlobalConstants.RADIUS_BORDER,
                    marginVertical: 5,
                    borderColor: isSelected ? ColorTheme.light.primary : 'transparent', 
                    borderWidth: isSelected ? 0.5 : 0 
                }}
            >
                <Image source={{ uri: item.image }} style={{ width: 100, height: 100, borderRadius: GlobalConstants.RADIUS_BORDER*0.6 }} />
                <View style={{ flex: 1, paddingHorizontal: 10, justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 14, fontWeight: '500' }}>{item.name}</Text>
                    <Text style={{ fontSize: 10 }}>{item.description}</Text>
                    <Text style={{ fontSize: 10 }}>{`${Strings.available} ${item.stock}`}</Text>
                    <View  style={{alignItems:'center', flexDirection:'row', justifyContent:'space-between'}} >
                        <Text style={{ fontSize: 14, fontWeight: '500' }}>{`${Strings.price} $${item.price}`}</Text>
                        {isSelected && <Icon name='cart-check' type='material-community' size={25} color={ColorTheme.light.success}  />}
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    const handleAddToCart = () => {
        console.log('Productos seleccionados:', selectedProducts.length);
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
}

export default HomeScreenComponent;