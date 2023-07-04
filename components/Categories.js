import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoriesCard from "./CategoriesCard";

const Categories = () => {
  return (
    <View>
      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      >
        <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="testing" />
        <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="testing"/>
        <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="testing"/>
        <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="testing"/>
        <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="testing"/>
        <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="testing"/>
      </ScrollView>
    </View>
  );
};

export default Categories;
