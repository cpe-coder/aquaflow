import { icon } from "@/constant/icon";
import { useNavigation } from "expo-router";
import * as ScreenOrientation from "expo-screen-orientation";
import React from "react";
import { Image, Modal, Text, TouchableOpacity, View } from "react-native";

const Control = () => {
	const navigation = useNavigation();
	const [visible, setVisible] = React.useState(false);

	React.useEffect(() => {
		const unsubscribe = navigation.addListener("focus", () => {
			try {
				ScreenOrientation.lockAsync(
					ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
				);
				setVisible(true);
			} catch (error) {
				console.log(error);
			}
		});

		return unsubscribe;
	}, [navigation, visible]);

	return (
		<View className="flex">
			<TouchableOpacity
				onPress={() => setVisible((prev) => !prev)}
				className="flex-col items-center justify-center"
			>
				<Image source={icon.control} tintColor={"white"} className="w-8 h-8" />
				<Text className="text-white">Control</Text>
			</TouchableOpacity>
			<Modal
				transparent
				visible={visible}
				onRequestClose={() => setVisible(false)}
				animationType="fade"
			>
				<View className=" bg-background w-screen h-screen">
					<Text>Control</Text>
				</View>
			</Modal>
		</View>
	);
};

export default Control;
