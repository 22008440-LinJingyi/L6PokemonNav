import React from 'react';
import { StatusBar, Button, SectionList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'; // Add Image import here
import { datasource } from './Data';
import { getImageLink } from './img';

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 15,
        margin: 10,
        textAlign: 'left',
    },
    container: {
        flex: 1,
        borderWidth: 1,
        alignItems: 'center',
    },
    headerText: {
        marginLeft: 10,
        fontSize: 16,
        color: "white",
        fontWeight: "bold",
        textAlign: "left",
    },
});

const Home = ({ navigation }) => {
    const renderItem = ({ item, index, section }) => {
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={() => navigation.navigate('Edit', { index: index, type: section.title, key: item.name, num: item.num })}
            >
                <Text style={styles.textStyle} >{item.name}</Text>
                <Image source={{ uri: getImageLink(item.num) }} style={{ width: 270, height: 370 }} />
            </TouchableOpacity>
        );
    };

    return (
        <View>
            <StatusBar />
            <Button
                title="Add Pokemon"
                onPress={() => { navigation.navigate('Add'); }}
            />
            <SectionList
                sections={datasource}
                renderItem={renderItem}
                renderSectionHeader={({ section: { title, color } }) => (
                    <Text style={[styles.headerText, { backgroundColor: color }]}>
                        {title}
                    </Text>
                )}
            />
        </View>
    );
};

export default Home;
