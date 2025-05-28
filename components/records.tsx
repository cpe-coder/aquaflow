import React from "react";
import { Text } from "react-native";

const Records = ({ rendered }: { rendered: any }) => {
	return (
		<>
			<Text className="text-2xl py-2 px-4 text-white font-semibold">
				Records
			</Text>
			{rendered}
		</>
	);
};

export default Records;
