import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../screens/Home'
import FoodMenu from '../screens/FoodMenu'

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="FoodMenu" component={FoodMenu} />
        </Tab.Navigator>
    );
}