import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

import TabRoutes from './tab.routes'

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator screenOptions={{ title: '' }}>
            <Drawer.Screen
                name="Página inicial - Drawer"
                component={TabRoutes}
                options={{
                    drawerIcon: ({ color, size }) =>
                        <Feather
                            name='home'
                            color={color}
                            size={size}
                        />,
                    drawerLabel: 'Página inicial'
                }}
            />
            <Drawer.Screen
                name="Cardapio do dia - Drawer"
                component={TabRoutes}
                options={{
                    drawerIcon: ({ color, size }) =>
                        <MaterialCommunityIcons
                            name='silverware-fork-knife'
                            color={color}
                            size={size}
                        />,
                    drawerLabel: 'Cardapio do dia'
                }}
            />
            <Drawer.Screen
                name='Aulas do dia'
                component={TabRoutes}
                options={{
                    drawerIcon: ({ color, size }) =>
                        <MaterialCommunityIcons
                            name='school'
                            color={color}
                            size={size}
                        />,
                    drawerLabel: 'Aulas do dia'
                }}
            />
            <Drawer.Screen
                name="Check-in - Drawer"
                component={TabRoutes}
                options={{
                    drawerIcon: ({ color, size }) =>
                        <MaterialIcons
                            name='location-pin'
                            color={color}
                            size={size}
                        />,
                    drawerLabel: 'Check-in'
                }}
            />
        </Drawer.Navigator>
    );
}