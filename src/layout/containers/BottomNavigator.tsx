import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RouteNameNavigation } from '../routes/routes';
import { Icon } from '@rneui/themed';
import { getIconTab } from './utils/getIcon';
import { TitleNameRoute } from '../../lang/ES/routes/title';
import { TransactionStack } from './stack/TransactionsStack';
import { HomeStack } from './stack/HomeStack';
import ColorTheme from '../../constants/colors/theme';

const Tab = createBottomTabNavigator();

function BottomNavigatorContainer() {
  return (
    <Tab.Navigator
        initialRouteName={RouteNameNavigation.HomeNameTab}
        screenOptions={({ route }: any) => {
            return {
              tabBarIcon: ({ focused }) => {
                let onFocusedColor = focused? ColorTheme['light'].primary:ColorTheme['light'].graySecondary
                const {iconName,typeIcon} = getIconTab(route)
                return <Icon  name={iconName} type={typeIcon} color={onFocusedColor} size={20} />;
              },
              headerShown: false,
            };
        }}
    >
      <Tab.Screen options={{title:TitleNameRoute.Home}} name={RouteNameNavigation.HomeNameTab} component={HomeStack} />
      <Tab.Screen options={{title:TitleNameRoute.Transactions}} name={RouteNameNavigation.TransactionNameTab} component={TransactionStack} />
    </Tab.Navigator>
  );
}

export default BottomNavigatorContainer