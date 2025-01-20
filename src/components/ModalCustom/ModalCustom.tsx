import {FC, ReactNode} from 'react';
import { Modal, StyleSheet, View,  TouchableWithoutFeedback, FlatList, TouchableOpacity} from 'react-native';
import { ModalCustomType } from './types/ModalCustom';
import { GlobalConstants } from '../../constants/generalConstants';


interface Props{
    isShow:boolean
    onClose:()=> void
    ListOption?: Array<ModalCustomType>
    children?:ReactNode
}

export const ModalComponent: FC<Props> = (props) => {

    return(
        <Modal animationType="fade" transparent={true}
            visible={props.isShow}
            onRequestClose={props.onClose}
        >
            <TouchableWithoutFeedback onPress={props.onClose} >           
                <View style={styles.modalContainer}>
                    <TouchableOpacity activeOpacity={1} style={styles.modalContent}>
                      {props.children}
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor:'#000000AA',
        paddingHorizontal:5
    },
    modalContent: {
        backgroundColor: 'white',
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopStartRadius: GlobalConstants.RADIUS_BORDER,
        borderTopEndRadius: GlobalConstants.RADIUS_BORDER,
        width: '100%', 
    },
});