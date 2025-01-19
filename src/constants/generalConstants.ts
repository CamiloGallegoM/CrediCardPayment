
import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export const GlobalConstants = {
    WIDTH: width,
    HEIGTH: height,
    RADIUS_BORDER: (1 - 1 /width)*15,
};
