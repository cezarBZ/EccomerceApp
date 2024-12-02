import { IReview } from "@/interfaces/review";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Rating } from "react-native-ratings";
type reviewProps = {
  review: IReview;
};
const Review = ({ review }: reviewProps) => {
  const { title, details, date, rating } = review;
  const realDate = date.toString();
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.starsContainer}>
        <Rating
          ratingBackgroundColor="#c0c0c0"
          ratingColor="#000000"
          type="custom"
          tintColor="#f2f2f2"
          startingValue={rating}
          readonly
          imageSize={20}
        />
        <Text style={{ flex: 1, textAlign: "right" }}>{realDate}</Text>
      </View>
      <Text style={styles.details}>{details}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  starsContainer: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 13,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  details: {
    fontSize: 15,
    fontWeight: "500",
  },
});

export default Review;
