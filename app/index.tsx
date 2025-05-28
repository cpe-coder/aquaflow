import { images } from "@/constant/images";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Welcome() {
	const router = useRouter();

	const handlePress = () => {
		router.push("/Home");
	};

	return (
		<View className="flex-1 items-center justify-center bg-background px-8">
			<View className="flex flex-col gap-4 justify-center items-center">
				<Text className="text-center text-wrap font-bold text-4xl text-primary">
					Welcome to Aquaflow
				</Text>
				<Image
					className="w-[220px] h-[220px]"
					source={images.Logo}
					resizeMode="contain"
				/>
			</View>
			<View className="absolute bottom-24 w-full">
				<TouchableOpacity
					onPress={handlePress}
					className="bg-secondary rounded-xl py-5 px-20"
				>
					<Text className="text-text font-semibold text-center text-xl">
						Continue
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
