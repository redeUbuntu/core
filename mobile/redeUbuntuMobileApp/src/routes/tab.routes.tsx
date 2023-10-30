import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'

import Home from '../screens/Home'
import FoodMenu from '../screens/FoodMenu'

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="Página inicial - Tab"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) =>
                        <Feather
                            name='home'
                            color={color}
                            size={size}
                        />,
                    tabBarLabel: 'Página inicial'
                }}
            />
            <Tab.Screen
                name="Cardapio do dia - Tab"
                component={FoodMenu}
                options={{
                    tabBarIcon: ({ color, size }) =>
                        <MaterialCommunityIcons
                            name='silverware-fork-knife'
                            color={color}
                            size={size}
                        />,
                    tabBarLabel: 'Cardapio do dia'
                }}
            />
        </Tab.Navigator>
    );
}