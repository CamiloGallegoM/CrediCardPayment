import { Image, View } from "react-native";
import { Text } from "../../../../components/TextCustom/TextDefault";
import { Product } from "../../../../interfaces/productInterface";
import { GlobalConstants } from "../../../../constants/generalConstants";

export const RenderProduct = ({ item }: { item: Product }) => (
    <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc', backgroundColor: ColorTheme.light.white, flexDirection: 'row' }}>
        <Image source={{ uri: item.image }} style={{ width: 100, height: 100, borderRadius:GlobalConstants.RADIUS_BORDER*15 }} />
        <View style={{ flex: 1, paddingHorizontal:10, justifyContent:'space-between' }}>
            <Text style={{fontSize:14, fontWeight:'500'}}  >{item.name}</Text>
            <Text style={{fontSize:10}}  >{item.description}</Text>
            <Text style={{fontSize:10}}  >{`Disponible: ${item.stock}`}</Text>
            <Text  style={{fontSize:14, fontWeight:'500'}}  >{`Precio: $${item.price}`}</Text>
        </View>
    </View>
);