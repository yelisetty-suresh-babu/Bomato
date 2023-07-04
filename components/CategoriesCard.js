import { Image, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Touchable } from "react-native";

const CategoriesCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="relative mr-2 ">
      <Image
        source={{ uri: imgUrl }}
        style={{height:80,width:80}}
      />
      <Text className="absolute bottom-1 left-1 font-bold text-white">{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoriesCard;
