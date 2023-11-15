import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

import Home from '../screens/Home'
import Auth from '../screens/Auth'
import FoodMenu from '../screens/FoodMenu'
import ClassGrades from '../screens/ClassGrades'
import CheckIn from '../screens/CheckIn'

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="Página inicial - Tab"
                component={Auth}
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
            <Tab.Screen 
                name='Aulas do dia - Tab'
                component={ClassGrades}
                options={{
                    tabBarIcon: ({ color, size }) =>
                        <MaterialCommunityIcons
                            name='school'
                            color={color}
                            size={size}
                        />,
                    tabBarLabel: 'Aulas do dia'
                }}
            />
            <Tab.Screen 
                name="Check-in - Tab"
                component={CheckIn}
                options={{
                    tabBarIcon: ({ color, size }) =>
                        <MaterialIcons
                            name='location-pin'
                            color={color}
                            size={size}
                        />,
                    tabBarLabel: 'Check-in'
                
                }}
            />
        </Tab.Navigator>
    );
}