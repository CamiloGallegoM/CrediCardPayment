import React from "react";
import { FlatList, Image,  View } from "react-native";
import { RouteNameNavigation } from "../../routes/routes";
import { useAppSelector } from "../../../hooks/reduxHook";
import { Product } from "../../../interfaces/productInterface";
import { da } from "@faker-js/faker";
import { RenderProduct } from "./components/renderItem";
import { Text } from "../../../components/TextCustom/TextDefault";
import { GlobalConstants } from "../../../constants/generalConstants";
import ColorTheme from "../../../constants/colors/theme";

interface Props{
    navigation:any
}

const  HomeScreenComponent:React.FC<Props>=(props)=> {
    const dataProducts: Product[] = useAppSelector((state) => state.product.products);

    const RenderProduct = ({ item }: { item: Product }) => (
        <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc', backgroundColor: 'white', flexDirection: 'row', borderRadius:GlobalConstants.RADIUS_BORDER*15, marginVertical:5 }}>
            <Image source={{ uri: item.image }} style={{ width: 100, height: 100, borderRadius:GlobalConstants.RADIUS_BORDER*10 }} />
            <View style={{ flex: 1, paddingHorizontal:10, justifyContent:'space-between' }}>
                <Text style={{fontSize:14, fontWeight:'500'}}  >{item.name}</Text>
                <Text style={{fontSize:10}}  >{item.description}</Text>
                <Text style={{fontSize:10}}  >{`Disponible: ${item.stock}`}</Text>
                <Text  style={{fontSize:14, fontWeight:'500'}}  >{`Precio: $${item.price}`}</Text>
            </View>
        </View>
    );
    return (
        <View style={{ flex: 1, backgroundColor:ColorTheme.light.graySecondary}}>
            <FlatList
                data={dataProducts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={RenderProduct}
                contentContainerStyle={{padding: 10, borderRadius:GlobalConstants.RADIUS_BORDER*15, marginVertical:5}}
            />
        </View>
    );
}

export default HomeScreenComponent;