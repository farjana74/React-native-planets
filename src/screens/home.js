import { View, Text, SafeAreaView, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import PlanetHeader from '../components/planet-header';
import { colors } from './../theme/colors';
import { PLANET_LIST } from './../data/planet-list';
import { spacing } from './../theme/spacing';
import { presets } from './../components/text/text.preset';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { navigation } from '@react-navigation/native';

export default function Home({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <PlanetHeader backBtn={false} />
            <FlatList
                contentContainerStyle={styles.list}
                data={PLANET_LIST}
                renderItem={({ item, index }) => {
                    return (

                        <Pressable onPress={() => {
                            navigation.navigate('Details')

                        }} style={styles.item}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={[styles.circle, { backgroundColor: item.color }]} />
                                <Text style={styles.itemName}>
                                    {item.name}
                                </Text>


                            </View>



                            <AntDesign name="right" size={18} color="white" />
                        </Pressable>



                    )
                }}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
        </SafeAreaView>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,

    },
    itemName: {
        color: colors.white,
        fontSize: 18,
        textTransform: 'uppercase',
        marginLeft: spacing[4],



    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: spacing[4],


    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 20,
    },
    list: {
        padding: spacing[4],
    },
    separator: {
        borderBottomColor: colors.white,
        borderWidth: 0.5,

    }


})