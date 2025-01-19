import { TouchableOpacity } from "react-native"
import { View } from "react-native"
import { Text } from "../../../../components/TextCustom/TextDefault"
import { GlobalConstants } from "../../../../constants/generalConstants"
import { FC } from "react"
import { TouchablePayComponentProps } from "../interface/TouchablePayComponent"
import ColorTheme from "../../../../constants/colors/theme"

export const TouchablePayComponent:FC<TouchablePayComponentProps> = (props) => {
    return (
        <View  style={{justifyContent:'center', alignItems:'center', width:GlobalConstants.WIDTH}} > 
            <TouchableOpacity  onPress={props.handleAddToCart} style={{borderRadius:GlobalConstants.RADIUS_BORDER , backgroundColor:ColorTheme.light.primary, padding:5, marginVertical:12, width:GlobalConstants.WIDTH*0.5, alignItems:'center', justifyContent:'center'}} >
                <Text style={{ fontSize: 16, fontWeight: '500', textAlign:'center', color:'white' }}>{`Ir a pagar (${props.numberProductSelect})`}</Text>
            </TouchableOpacity>
        </View>
    )
}