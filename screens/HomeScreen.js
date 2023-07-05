import { ScrollView, View, Text, Image, TextInput } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
// import sanityClient from "../sanity";

const HomeScreen = () => {
  const navigation = useNavigation();
  // const [featuredCategories, setFeaturedCategories] = useState([]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  // useEffect(() => {
  //   sanityClient
  //     .fetch(
  //       `
  //   *[_type="featured"]{
  //     ...,
  //     restaurents[]->
  //     {
  //       ...,
  //       dishes[]->
       
  //     }
  //   }
  //   `
  //     )
  //     .then((data) => setFeaturedCategories(data));
  // }, []);

  // console.log(data);
  return (
    <SafeAreaView className="">
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
          <View className="flex-row p-3  flex-1 bg-gray-200 rounded-md">
            <MagnifyingGlassIcon className="" size={20} color={"#00CCBB"} />
            <TextInput
              placeholder=" Find out the hot stuff"
              // keyboardType="default"
            />
          </View>
          <AdjustmentsVerticalIcon color="#00CCBB" size={35} />
        </View>
      </View>

      {/* Body */}
      {/* Categories */}
      <ScrollView>
        <Categories />

        {/* Featured rows */}
        <FeaturedRow
          id="123"
          title="featured"
          description="paid placements from our partners"
        />
        {/* Discounts */}

        <FeaturedRow
          id="1234"
          title="Top Discounts"
          description="Everyone likes good discount"
        />
        {/*  Offers near you */}
        <FeaturedRow
          id="12345"
          title="offers near you "
          description="support restaurents near you"
        />
        <FeaturedRow
          id="12345"
          title="offers near you "
          description="support restaurents near you"
        />
        <FeaturedRow
          id="12345"
          title="offers near you "
          description="support restaurents near you"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
