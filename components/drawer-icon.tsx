import React from "react";
import { Image, ImageSourcePropType, View } from "react-native";

interface DrawerIconProps {
	icon: ImageSourcePropType;
	color: string;
}

const DrawerIcon: React.FC<DrawerIconProps> = ({ icon, color }) => {
	return (
		<View className="items-center justify-center rounded-xl bg-gray-300/30 p-2 ">
			<Image
				source={icon}
				resizeMode="contain"
				tintColor={color}
				className="w-6 h-6 bg"
			/>
		</View>
	);
};

export default DrawerIcon;
