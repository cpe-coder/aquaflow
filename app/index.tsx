import { logo } from "@/constant/images";
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
			<View className="flex flex-col gap-4 justify-center items-center">
				<Text className="text-center text-wrap font-bold text-4xl text-primary">
					Welcome to
				</Text>
				<Image
					className="w-[220px] h-[220px]"
					source={logo}
					resizeMode="contain"
				/>
			</View>
			<View className="absolute bottom-24 w-full">
				<Text className="text-text font-semibold text-center text-xl">
					Swipe right to continue
				</Text>
			</View>
		</View>
	);
}
