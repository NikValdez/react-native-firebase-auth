import React, { useState } from "react";
import { Modal, Text, Pressable, View, TextInput } from "react-native";
import Feather from "react-native-vector-icons/Feather";

function CreateClient() {
  const [modalVisible, setModalVisible] = useState(false);

  const [value, setValue] = useState({
    phone: "",
    name: "",
    error: "",
  });
  return (
    <View>
    <Feather.Button name="user-plus" onPress={() => setModalVisible(true)}/>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text
            onPress={() => setModalVisible(false)}
            style={{ color: "white" }}
          >
            Close
          </Text>
          <View className="mx-4 h-5/6 flex justify-center mt-20 align-center space-y-6">
            <Text style={{ color: "white" }}>Create a New Client</Text>

            <View className="space-y-6">
              <View className="mt-1 space-y-4">
                <View className="flex-1 font-main flex-row justify-center align-center rounded-xl px-1 py-1 bg-gray-100">
                  <TextInput
                    placeholder="Name"
                    value={value.name}
                    style={{ backgroundColor: "white" }}
                    onChangeText={(text) => setValue({ ...value, name: text })}
                  />
                </View>

                <View className="flex-1 flex-row justify-center align-center rounded-xl px-1 py-1 bg-gray-100">
                  <TextInput
                    placeholder="phone"
                    className="flex-1 pt-2.5 pr-2.5 pb-2.5 pl-0"
                    style={{ backgroundColor: "white" }}
                    onChangeText={(text) => setValue({ ...value, phone: text })}
                  />
                </View>
              </View>
              <Pressable className="bg-background border border-white rounded-3xl py-2 px-4 m-4">
                <Text style={{ color: "white" }}>Create Client</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default CreateClient;
