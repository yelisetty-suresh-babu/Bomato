import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/solid";
import RestaurantCard from "./RestaurantCard";
const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="flex-row mt-4 items-center justify-between px-4">
        <Text>{title}</Text>
        <ArrowRightIcon color={"#00CCBB"} />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        className="pt-4"
        horizontal
        contentContainerStyle={{ paddingHorizontal: 10 }}
        scrollIndicatorInsets={false}
        showsHorizontalScrollIndicator={false}
      >
        <RestaurantCard
          id={123}
          imgurl={"https://links.papareact.com/gn7"}
          title="Yo! Sushi"
          rating={4.5}
          genre="japanese"
          address="123 main st"
          short_description="pretty good"
          dishes={[]}
          long={10.0}
          lat={10.0}
        />
        <RestaurantCard
          id={123}
          imgurl={"https://links.papareact.com/gn7"}
          title="Yo! Sushi"
          rating={4.5}
          genre="japanese"
          address="123 main st"
          short_description="pretty good"
          dishes={[]}
          long={10.0}
          lat={10.0}
        />
        <RestaurantCard
          id={123}
          imgurl={"https://links.papareact.com/gn7"}
          title="Yo! Sushi"
          rating={4.5}
          genre="japanese"
          address="123 main st"
          short_description="pretty good"
          dishes={[]}
          long={10.0}
          lat={10.0}
        />
        <RestaurantCard
          id={123}
          imgurl={"https://links.papareact.com/gn7"}
          title="Yo! Sushi"
          rating={4.5}
          genre="japanese"
          address="123 main st"
          short_description="pretty good"
          dishes={[]}
          long={10.0}
          lat={10.0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
