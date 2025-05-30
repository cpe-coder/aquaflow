import { icon } from "@/constant/icon";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const Control = () => {
	const router = useRouter();

	return (
		<View className="flex">
			<TouchableOpacity
				onPress={() => router.push("/Control")}
				className="flex-col items-center justify-center"
			>
				<Image source={icon.control} tintColor={"white"} className="w-8 h-8" />
				<Text className="text-white">Control</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Control;
