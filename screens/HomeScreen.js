import { ScrollView, View, Text, Image, TextInput } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  UserIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView>
      <View className="bg-white  p-[-10px] pb-[-20px]">
        <View className="flex-row pb items-center space-x-2 mx-4 ">
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            className="h-7 w-7 p-4 rounded-full bg-gray-300 "
          />

          <View className="flex-1 p-1">
            <Text className="font-bold text-sm text-gray-400">
              Deliver Now!
            </Text>
            <Text className="font-bold text-xl">
              current Location
              <ChevronDownIcon size={20} color={"#00CCBB"} />
            </Text>
          </View>
          <UserIcon size={35} color={"#00CCBB"} />
        </View>
        {/* search */}

        <View className="flex-row items-center space-x-2 pb-2 mx-4 p-2">
          <View className="flex-row p-3  flex-1 bg-gray-200">
            <TextInput
              placeholder="Find out the hot stuff"
              keyboardType="default "
            />
          </View>
          <AdjustmentsVerticalIcon color="#00CCBB" size={35} />
        </View>
      </View>

      {/* Body */}

      <ScrollView>
        <Categories />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
