import Divider from "@/components/Divider";
import Rating from "@/components/Rating";
import { reviewMock } from "@/mocks/reviewMock";
import React from "react";
import { ScrollView, View } from "react-native";

const AllReviews = () => {
  return (
    <ScrollView style={{ padding: 25 }}>
      {reviewMock.map((review, index) => (
        <View key={index} style={{ marginBottom: 20 }}>
          <Rating review={review} />
          <Divider color="#bebebe" dividerStyle={{ marginTop: 25 }} />
        </View>
      ))}
    </ScrollView>
  );
};

export default AllReviews;
