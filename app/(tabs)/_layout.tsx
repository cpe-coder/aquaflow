import { Header } from "@/components";
import { useAuth } from "@/context/auth-context";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Redirect, Tabs, usePathname } from "expo-router";
import React from "react";

export default function TabLayout() {
	const { authState } = useAuth();
	const [isAuthenticated, setIsAthenticated] = React.useState(false);
	const pathName = usePathname();

	React.useEffect(() => {
		if (!authState?.authenticated) {
			setIsAthenticated(true);
			return;
		}
		setIsAthenticated(false);
		return;
	}, [authState]);

	if (isAuthenticated) {
		return <Redirect href={"/sign-in"} />;
	}

	return (
		<>
			<Tabs
				screenOptions={{
					headerShadowVisible: false,
					tabBarActiveTintColor: "white",
					tabBarInactiveTintColor: "white",
					tabBarStyle: {
						backgroundColor: "#ae4550",
						borderTopWidth: 0,
					},
				}}
			>
				<Tabs.Screen
					name="Home"
					options={{
						href: pathName === "/Control" ? null : undefined,
						title: "Home",
						headerRight: () => {
							return pathName === "/Control" ? "" : <Header.HeaderRight />;
						},
						headerStyle: {
							backgroundColor: "#ae4550",
						},
						headerTintColor: "white",

						tabBarIcon: ({ color, focused }) =>
							pathName !== "/Control" && (
								<FontAwesome6
									size={24}
									name="house"
									color={color}
									focusable={focused}
								/>
							),
					}}
				/>
			</Tabs>
		</>
	);
}
