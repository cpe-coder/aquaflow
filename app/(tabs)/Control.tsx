import { ImageViewer } from "@/components";
import database from "@/utils/firebase.config";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";
import * as ScreenOrientation from "expo-screen-orientation";
import { ref, set } from "firebase/database";
import React from "react";
import {
	Modal,
	PanResponder,
	Text,
	TouchableOpacity,
	View,
	ViewProps,
} from "react-native";

const SLIDER_HEIGHT = 100;
const MIN_VALUE = 1000;
const MAX_VALUE = 2000;
const MID_VALUE = 1500;

function Trootle(props: {
	panHandlers: React.JSX.IntrinsicAttributes &
		React.JSX.IntrinsicClassAttributes<View> &
		Readonly<ViewProps>;
	position: number;
}) {
	return (
		<View className="bg-background/70 items-center justify-center py-2 rounded-lg px-4 mx-6">
			<View className="relative items-center justify-center h-[150px] w-16 bg-background2 rounded-lg overflow-hidden">
				<View
					className="absolute w-6 rounded-md h-[100px] my-4"
					{...props.panHandlers}
				>
					<View
						className="absolute w-12 h-8 bg-white rounded-md -left-3"
						style={{
							bottom: props.position - 10,
						}}
					/>
				</View>
			</View>
		</View>
	);
}

export default function Control() {
	const navigation = useNavigation();
	const router = useRouter();

	const [isVisible, setIsVisible] = React.useState(false);
	const [power, setPower] = React.useState(MID_VALUE);
	const [position, setPosition] = React.useState(SLIDER_HEIGHT / 2);
	const [wheelDegree, setWheelDegree] = React.useState(90);

	React.useEffect(() => {
		const unsubscribe = navigation.addListener("focus", () => {
			try {
				ScreenOrientation.lockAsync(
					ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
				);
				setIsVisible(true);
			} catch (error) {
				console.log(error);
			}
		});

		return unsubscribe;
	}, [navigation]);

	React.useEffect(() => {
		setActivePower();
		setActiveWheel();
	}, [power, wheelDegree]);

	const handleBackPress = () => {
		router.push("/Home");
		setIsVisible(false);
	};

	const panResponder = PanResponder.create({
		onStartShouldSetPanResponder: () => true,
		onMoveShouldSetPanResponder: () => true,
		onPanResponderMove: (_, gestureState) => {
			let newY = position + gestureState.dy * -1;
			newY = Math.max(0, Math.min(SLIDER_HEIGHT, newY));
			setPosition(newY);

			const newValue = Math.round(
				MIN_VALUE + (newY / SLIDER_HEIGHT) * (MAX_VALUE - MIN_VALUE)
			);
			setPower(newValue);
		},
	});

	const setActivePower = async () => {
		try {
			const valueRef = ref(database, "Controls/esc");
			await set(valueRef, power);
		} catch (error) {
			console.log("Error setting power value:", error);
		}
	};

	const setActiveWheel = async () => {
		try {
			const valueRef = ref(database, "Controls/wheel");
			await set(valueRef, wheelDegree);
		} catch (error) {
			console.log("Error setting wheel value:", error);
		}
	};

	const handleLeft = () => {
		setWheelDegree((prev) => Math.max(0, prev - 10));
	};

	const handleRight = () => {
		setWheelDegree((prev) => Math.min(180, prev + 10));
	};

	const intervalRef = React.useRef<ReturnType<typeof setInterval> | null>(null);

	const startAutoAdjust = (direction: "left" | "right") => {
		stopAutoAdjust();
		intervalRef.current = setInterval(() => {
			setWheelDegree((prev) => {
				const next = direction === "left" ? prev - 1 : prev + 1;
				if (next < 0 || next > 180) {
					stopAutoAdjust();
					return prev;
				}
				return next;
			});
		}, 100);
	};

	const stopAutoAdjust = () => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
			intervalRef.current = null;
		}
	};

	const handleResetWheel = () => {
		setWheelDegree(90);
	};

	return (
		<>
			<View className="bg-background h-screen w-screen"></View>
			<Modal visible={isVisible} animationType="fade">
				<View className="bg-background h-full w-full px-8 flex-row">
					<View className="h-full w-52 flex-row gap-2 items-center justify-center space-y-4">
						<TouchableOpacity
							onPress={handleBackPress}
							className="p-2 bg-background rounded-full absolute top-4 left-4"
						>
							<Ionicons name="arrow-back" size={24} color="white" />
						</TouchableOpacity>

						<TouchableOpacity
							onPressIn={() => startAutoAdjust("left")}
							onPressOut={stopAutoAdjust}
							onPress={handleLeft}
							className="bg-white rounded-full p-4"
						>
							<Ionicons name="arrow-back" size={24} color="black" />
						</TouchableOpacity>

						<TouchableOpacity
							onPress={handleResetWheel}
							className="bg-red-500 h-10 w-10  rounded-full "
						></TouchableOpacity>

						<TouchableOpacity
							onPressIn={() => startAutoAdjust("right")}
							onPressOut={stopAutoAdjust}
							onPress={handleRight}
							className="bg-white rounded-full p-4"
						>
							<Ionicons name="arrow-forward" size={24} color="black" />
						</TouchableOpacity>
					</View>

					<View className="flex-1 h-full bg-background2 items-center justify-center">
						<ImageViewer />
					</View>

					<View className="h-full w-52 items-center justify-center space-y-6">
						<TouchableOpacity
							className="bg-green-500 rounded-full px-3 py-2"
							onPress={() => {
								setPower(MID_VALUE);
								setPosition(SLIDER_HEIGHT / 2);
							}}
						>
							<Text className="font-bold text-xl text-white">N</Text>
						</TouchableOpacity>

						<Trootle
							position={position}
							panHandlers={panResponder.panHandlers}
						/>
					</View>
				</View>
			</Modal>
		</>
	);
}
