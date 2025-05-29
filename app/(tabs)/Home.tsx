import { Tabs } from "@/components";
import { images } from "@/constant/images";
import { useNavigation } from "expo-router";
import * as ScreenOrientation from "expo-screen-orientation";
import React from "react";
import { Image, Text, View } from "react-native";

export default function Home() {
	const navigation = useNavigation();
	React.useEffect(() => {
		const unsubscribe = navigation.addListener("focus", () => {
			try {
				ScreenOrientation.lockAsync(
					ScreenOrientation.OrientationLock.PORTRAIT_UP
				);
			} catch (error) {
				console.log(error);
			}
		});

		return unsubscribe;
	}, [navigation]);

	return (
		<View className="bg-background h-full w-full px-8">
			<View className="flex-col items-center justify-center gap-3 py-5">
				<Text className="text-4xl text-white font-bold">Welcome back!</Text>

				<Text className="text-slate-200 text-center text-base font-semibold">
					Explore the app and enjoy your experience.
				</Text>
			</View>
			<View className="flex justify-center items-center mt-16">
				<Image
					className="w-[380px] h-[100px] bg-white  rounded-md"
					source={images.Logo}
					resizeMode="contain"
				/>
			</View>
			<View className="flex-1 justify-center items-center -mt-40">
				<View className="w-[200px] h-[200px] rounded-xl bg-background2/70">
					<Text className="text-white text-right pt-2 px-4">Max: 5kg</Text>
					<View className="flex-row items-center justify-center gap-2 h-[150px] w-[200px] ">
						<Text className="text-white text-8xl font-bold">5</Text>
						<Text className="text-white text-xl font-bold">kg</Text>
					</View>
				</View>
			</View>
			<Tabs />
		</View>
	);
}
