import { Tabs } from "@/components";
import React from "react";
import { Text, View } from "react-native";

export default function Home() {
	return (
		<View className="bg-background h-full w-full px-8">
			<View className="flex-col items-center justify-center gap-3 py-5">
				<Text className="text-4xl text-white font-bold">Welcome back!</Text>

				<Text className="text-background2 text-center text-base font-semibold">
					Explore the app and enjoy your experience.
				</Text>
			</View>
			<Tabs />
		</View>
	);
}
