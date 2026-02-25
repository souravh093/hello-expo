import { Image } from "expo-image";
import { ImageSourcePropType, StyleSheet, View } from "react-native";

type Props = {
  imageSource: ImageSourcePropType;
  selectedImage?: string;
};

const ImageViewer = ({ imageSource, selectedImage }: Props) => {
  const ImageMajorSource = selectedImage ? { uri: selectedImage } : imageSource;
  return (
    <View style={style.imageContainer}>
      <Image source={ImageMajorSource} style={style.image} />
    </View>
  );
};

export default ImageViewer;

const style = StyleSheet.create({
  imageContainer: {
    flex: 1,
    marginTop: 20,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
