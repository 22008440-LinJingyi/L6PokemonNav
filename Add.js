import React, { useState } from 'react';
import { TextInput, View, Text, Button } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { datasource } from './Data';

const Add = ({ navigation }) => {
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [type, setType] = useState('FIRE');

    const handleAddPokemon = () => {
        if (name.trim().length === 0 || id.trim().length === 0) {
            alert("Please enter a Pokemon name and ID.");
            return;
        }

        // Check if ID is a number
        if (isNaN(id) || id <= 0) {
            alert("Please enter a valid Pokemon ID.");
            return;
        }

        const typeSection = datasource.find(section => section.title === type);
        if (typeSection) {
            const newPokemon = { name: name, num: id }; // Use ID as Pokémon number
            typeSection.data.push(newPokemon);
            navigation.navigate('Home');
        } else {
            alert("Error: Type not found");
        }
    };

    return (
        <View style={{ padding: 10 }}>
            {/* Pokémon Name Input */}
            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: "bold" }}>Pokemon Name: </Text>
                <TextInput
                    style={{ borderWidth: 1 }}
                    onChangeText={(text) => setName(text)}
                />
            </View>


            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: "bold" }}>Pokemon ID: </Text>
                <TextInput
                    style={{ borderWidth: 1 }}
                    keyboardType="numeric"
                    onChangeText={(text) => setId(text)}
                />
            </View>


            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: "bold" }}>Select Type: </Text>
                <RNPickerSelect
                    value={type}
                    onValueChange={(value) => setType(value)}
                    items={[
                        { label: "Fire", value: "FIRE" },
                        { label: "Water", value: "WATER" },
                        { label: "Electric", value: "ELECTRIC" }
                    ]}
                />
            </View>


            <Button
                title="Add Pokemon"
                onPress={handleAddPokemon}
            />
        </View>
    );
};

export default Add;
