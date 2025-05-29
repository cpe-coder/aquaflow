import { useAuth } from "@/context/auth-context";
import { Redirect, Stack } from "expo-router";
import React from "react";

export default function TabLayout() {
	const { authState } = useAuth();
	const [isAuthenticated, setIsAthenticated] = React.useState(false);

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
			<Stack>
				<Stack.Screen
					name="Home"
					options={{
						title: "Home",
						headerStyle: {
							backgroundColor: "#ae4550",
						},
						headerTintColor: "white",
					}}
				/>
			</Stack>
		</>
	);
}
