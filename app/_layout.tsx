import { DrawerIcon, Logout, ProfileInfo } from "@/components";
import { icon } from "@/constant/icon";
import { AuthProvider } from "@/context/auth-context";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { usePathname, useRouter } from "expo-router";
import Drawer from "expo-router/drawer";
import React from "react";
import { View } from "react-native";
import "../global.css";

export default function RootLayout() {
	const route = useRouter();
	const pathName = usePathname();

	return (
		<AuthProvider>
			<Drawer
				screenOptions={{
					drawerStyle: {
						backgroundColor: "#ae4550",
					},
				}}
				drawerContent={(props) => (
					<View className="flex-1">
						<DrawerContentScrollView {...props}>
							<ProfileInfo />
							<DrawerItem
								label="Home"
								onPress={() => route.navigate("/Home")}
								icon={({ color }) => {
									return <DrawerIcon color={color} icon={icon.home} />;
								}}
								focused={pathName === "/Home" && true}
								inactiveTintColor="white"
								activeBackgroundColor="white"
								activeTintColor="#ae4550"
								style={{
									borderRadius: 12,
									margin: 0,
									padding: 0,
								}}
							/>
						</DrawerContentScrollView>

						<Logout />
					</View>
				)}
			>
				<Drawer.Screen options={{ headerShown: false }} name="index" />
				<Drawer.Screen options={{ headerShown: false }} name="(auth)" />
				<Drawer.Screen
					options={{
						headerShown: false,
					}}
					name="(tabs)"
				/>
			</Drawer>
		</AuthProvider>
	);
}
