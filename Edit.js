import React, { useState } from 'react';
import { TextInput, View, Text, Button, Alert } from 'react-native';
import { datasource } from './Data';

const Edit = ({ navigation, route }) => {
    const [name, setName] = useState(route.params.key);
    const { index, type, num } = route.params;

    return (
        <View style={{ padding: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>Edit Pokemon Name:</Text>
            <TextInput
                value={name}
                style={{ borderWidth: 1 }}
                onChangeText={(text) => setName(text)}
            />

            <View style={{ marginTop: 20 }}>
                <Button
                    title="SAVE"
                    onPress={() => {
                        if (name.trim()) {
                            const indexNum = type === 'FIRE' ? 0 : type === 'WATER' ? 1 : 2;
                            datasource[indexNum].data[index] = { name, num };
                            navigation.navigate('Home');
                        } else {
                            Alert.alert("Error", "Name cannot be empty");
                        }
                    }}
                />
            </View>

            <View style={{ marginTop: 20 }}>
                <Button
                    title="DELETE"
                    onPress={() => {
                        Alert.alert(
                            "Confirm Deletion",
                            "Are you sure you want to delete this Pokemon?",
                            [
                                { text: "Cancel", style: "cancel" },
                                {
                                    text: "Yes",
                                    onPress: () => {
                                        const indexNum = type === 'FIRE' ? 0 : type === 'WATER' ? 1 : 2;
                                        datasource[indexNum].data.splice(index, 1);
                                        navigation.navigate('Home');
                                    }
                                }
                            ]
                        );
                    }}
                />
            </View>
        </View>
    );
};

export default Edit;
