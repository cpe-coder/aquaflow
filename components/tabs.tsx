import React from "react";
import { View } from "react-native";
import Control from "./control";
import Settings from "./settings";

const Tabs = () => {
	return (
		<View className="absolute bottom-14 h-16 right-0 left-0 justify-center items-center">
			<View className="flex-row gap-16 items-center justify-center bg-background2 py-6 px-10 rounded-full">
				<Control />
				<Settings />
			</View>
		</View>
	);
};

export default Tabs;
