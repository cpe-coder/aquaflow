import { images } from "@/constant/images";
import React from "react";
import { Image, View } from "react-native";

const ProfileInfo = () => {
	return (
		<View className=" flex-row justify-center px-4 items-center gap-5 py-8 border-b border-white mb-4">
			<Image
				source={images.Logo}
				alt="logo"
				className="w-[300px] h-[80px] bg-white rounded-md"
			/>
		</View>
	);
};

export default ProfileInfo;
