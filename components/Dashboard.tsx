import * as React from "react";
import { StyleSheet, Text, TextInput } from "react-native";
import { API_KEY } from "@env";
import { getData } from "./functions/getData";
import { TData } from "./types";

const Dashboard: React.FC = () => {
  const [data, setData] = React.useState<TData | undefined>();
  const [input, setInput] = React.useState<string>("");

  return (
    <>
      <TextInput
        onChangeText={(text) => setInput(text)}
        onSubmitEditing={() =>
          getData(
            `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${input}`,
            setData
          )
        }
        placeholder="Entrez une ville"
      />
      {data && (
        <>
          <Text style={styles.title}>{data.city}</Text>
          <Text style={styles.comment}>{data.comment}</Text>
          <Text style={styles.title}>{data.temperature}</Text>
          <Text>Icon</Text>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
  },
  comment: {
    fontSize: 30,
  },
});

export default Dashboard;
