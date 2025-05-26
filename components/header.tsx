import { icon } from "@/constant/icon";
import { useAuth } from "@/context/auth-context";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import React from "react";
import { Image, Pressable, View } from "react-native";

const HeaderRight = () => {
	const navigation = useNavigation();
	const { userImage } = useAuth();

	return (
		<View className="flex-row justify-start py-4 px-4">
			<View className="rounded-full">
				<Pressable
					onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
					className="text-white rounded-full bg-gray-800"
				>
					<Image
						source={!userImage ? icon.user : { uri: userImage.image }}
						alt="avaltar"
						className="w-11 h-11 rounded-full"
					/>
				</Pressable>
			</View>
		</View>
	);
};

export default { HeaderRight };
