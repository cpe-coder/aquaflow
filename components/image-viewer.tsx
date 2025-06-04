import { Image } from "react-native";

import React from "react";

const ImageViewer = () => {
	const [imageUri, setImageUri] = React.useState(
		"http://192.168.43.249/cam-hi.jpg"
	);

	React.useEffect(() => {
		const interval = setInterval(() => {
			setImageUri(`http://192.168.43.249/cam-hi.jpg`);
		}, 500);

		return () => clearInterval(interval);
	}, []);

	return (
		<Image
			source={{ uri: imageUri }}
			className="w-full h-full"
			resizeMode="contain"
		/>
	);
};

export default ImageViewer;
