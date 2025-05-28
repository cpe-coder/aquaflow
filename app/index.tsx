import { images } from "@/constant/images";
import { useRouter } from "expo-router";
import React, { useRef } from "react";
import {
	GestureResponderEvent,
	Image,
	PanResponder,
	PanResponderGestureState,
	Text,
	TouchableOpacity,
	View,
} from "react-native";

export default function Welcome() {
	const router = useRouter();

	const handlePress = () => {
		router.push("/Home");
	};

	const panResponder = useRef(
		PanResponder.create({
			onMoveShouldSetPanResponder: (
				evt: GestureResponderEvent,
				gestureState: PanResponderGestureState
			) => {
				// Detect horizontal swipe
				return Math.abs(gestureState.dx) > 20 && Math.abs(gestureState.dy) < 20;
			},
			onPanResponderRelease: (evt, gestureState) => {
				if (gestureState.dx < -50) {
					// Swipe left
					router.push("/Home");
				}
			},
		})
	).current;

	return (
		<View
			className="flex-1 items-center justify-center bg-background px-8"
			{...panResponder.panHandlers}
		>
			<View className="flex flex-col gap-4 justify-center items-center">
				<Text className="text-center text-wrap font-bold text-4xl text-white">
					Welcome to Aquaflow
				</Text>
				<View className="w-full h-auto bg-white rounded-md">
					<Image
						className=" w-full"
						source={images.Logo}
						resizeMode="contain"
					/>
				</View>
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
