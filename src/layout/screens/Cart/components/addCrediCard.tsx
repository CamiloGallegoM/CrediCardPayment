import { TouchableOpacity, View } from "react-native"
import { Text } from "../../../../components/TextCustom/TextDefault"
import ColorTheme from "../../../../constants/colors/theme"
import { Icon } from "@rneui/themed"
import { GlobalConstants } from "../../../../constants/generalConstants"
import { StringsCart } from "../../../../lang/ES/cart/strings"
import { FC } from "react"

interface Props {
    onHandleAddCreditCard:()=>void
}

export const AddCrediCartComponent:FC<Props> = (props) => {
    return (
        <View  style={{padding:10, marginVertical:5,  backgroundColor:ColorTheme.light.white, borderRadius:GlobalConstants.RADIUS_BORDER}} >
            <Text style={{color:ColorTheme.light.textPrimary, fontSize:18, fontWeight:'bold'}}  >{StringsCart.methodPay}</Text>
            <TouchableOpacity onPress={props.onHandleAddCreditCard}  style={{flexDirection:'row', justifyContent:'center', alignItems:'center', marginVertical:15, borderRadius:GlobalConstants.RADIUS_BORDER*0.8, padding:10, backgroundColor:ColorTheme.light.primary}} >
                <Text style={{color:ColorTheme.light.white, fontSize:18, fontWeight:'bold', marginRight:5}}  >{StringsCart.addCreditCard}</Text>
                <Icon name='card-outline' type='ionicon' size={25} color={ColorTheme.light.white}  />
            </TouchableOpacity>
        </View>
    )
}