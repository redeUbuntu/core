import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'

import TabRoutes from './tab.routes'

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator screenOptions={{title: ''}}>
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
        </Drawer.Navigator>
    );
}