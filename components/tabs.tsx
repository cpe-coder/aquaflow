import { icon } from "@/constant/icon";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Settings from "./settings";

const Tabs = () => {
	return (
		<View className="absolute bottom-5 h-16 right-0 left-0 justify-center items-center">
			<View className="flex-row gap-16 items-center justify-center bg-background2 py-6 px-10 rounded-full">
				<TouchableOpacity className="flex-col items-center justify-center">
					<Image
						source={icon.control}
						tintColor={"white"}
						className="w-8 h-8"
					/>
					<Text className="text-white">Control</Text>
				</TouchableOpacity>
				<Settings />
			</View>
		</View>
	);
};

export default Tabs;
