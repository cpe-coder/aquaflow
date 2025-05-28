import { images } from "@/constant/images";
import { useRouter } from "expo-router";
import React, { useRef } from "react";
import {
	GestureResponderEvent,
	Image,
	PanResponder,
	PanResponderGestureState,
	Text,
	View,
} from "react-native";
export default function Welcome() {
	const router = useRouter();

	const panResponder = useRef(
		PanResponder.create({
			onMoveShouldSetPanResponder: (
				evt: GestureResponderEvent,
				gestureState: PanResponderGestureState
			) => {
				return Math.abs(gestureState.dx) > 20 && Math.abs(gestureState.dy) < 20;
			},
			onPanResponderRelease: (evt, gestureState) => {
				if (gestureState.dx < 50) {
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
			<View className="flex-1 justify-between py-40 items-center">
				<Text className="text-center text-wrap font-bold text-4xl text-white">
					Welcome to Aquaflow
				</Text>
				<Image
					className="w-[380px] h-[100px] bg-white  rounded-md"
					source={images.Logo}
					resizeMode="contain"
				/>
				<Text className="text-text font-semibold text-center text-xl">
					Swipe right to continue
				</Text>
			</View>
		</View>
	);
}
