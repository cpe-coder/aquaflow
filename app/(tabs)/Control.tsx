import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation, useRouter } from "expo-router";
import * as ScreenOrientation from "expo-screen-orientation";
import React from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";

export default function Control() {
	const navigation = useNavigation();
	const router = useRouter();
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

	const handleBackPress = () => {
		router.back();
	};

	return (
		<View className="bg-background h-full w-full px-8 flex-row">
			<View className="h-full w-52">
				<Pressable onPress={handleBackPress} className=" mr-5 bg-black">
					<Ionicons name="arrow-back" size={24} color="white" />
				</Pressable>
			</View>
			<View className="flex-1 h-full bg-background2">
				<TouchableOpacity
					onPress={() => console.log("Clicked")}
					className="bg-slate-500 rounded-full p-4 w-10 h-10"
				>
					<Text className="text-white">Hello</Text>
				</TouchableOpacity>
			</View>
			<View className="h-full w-52"></View>
		</View>
	);
}
