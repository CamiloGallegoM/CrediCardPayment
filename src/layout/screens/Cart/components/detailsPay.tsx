import { FC } from "react"
import { View } from "react-native"
import { Text } from "../../../../components/TextCustom/TextDefault"
import ColorTheme from "../../../../constants/colors/theme"
import { GlobalConstants } from "../../../../constants/generalConstants"
import { formatCurrency } from "../../../../utils/formatCurrency"

interface Props {
    quantityProducts:number,
    totalPay:number
};

export const DetailsPayComponent:FC<Props> = (props) => {
    return (
        <View  style={{padding:10, marginVertical:5,  backgroundColor:ColorTheme.light.white, borderRadius:GlobalConstants.RADIUS_BORDER}} >
            <Text style={{color:ColorTheme.light.textPrimary, fontSize:18, fontWeight:'bold'}}  >Detalles de la compra</Text>

            <View  style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginVertical:5}} >
                <Text style={{color:ColorTheme.light.textPrimary, fontSize:16, fontWeight:'bold'}}  >Total de articulos:</Text>
                <Text style={{color:ColorTheme.light.textPrimary, fontSize:16}}  >{`${props.quantityProducts}`}</Text>
            </View>
            
            <View  style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginVertical:5}} >
                <Text style={{color:ColorTheme.light.textPrimary, fontSize:16, fontWeight:'bold'}}  >Envio:</Text>
                <Text style={{color:ColorTheme.light.success, fontSize:16, fontWeight:'bold'}}  >{`Gratis`}</Text>
            </View>

            <View  style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginVertical:5}} >
                <Text style={{color:ColorTheme.light.textPrimary, fontSize:16, fontWeight:'bold'}}  >Total del pedido:</Text>
                <Text style={{color:ColorTheme.light.textPrimary, fontSize:18, fontWeight:'bold'}}  >{`${formatCurrency(props.totalPay)}`}</Text>
            </View>
        </View>
    );
};