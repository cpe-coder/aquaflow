import { useNavigation } from "expo-router";
import * as ScreenOrientation from "expo-screen-orientation";
import React from "react";
import { Text, View } from "react-native";

export default function Control() {
	const navigation = useNavigation();
	React.useEffect(() => {
		const unsubscribe = navigation.addListener("focus", () => {
			try {
				ScreenOrientation.lockAsync(
					ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
				);
			} catch (error) {
				console.log(error);
			}
		});

		return unsubscribe;
	}, [navigation]);
	return (
		<View className="bg-background h-full w-full px-8">
			<Text>Control</Text>
		</View>
	);
}
