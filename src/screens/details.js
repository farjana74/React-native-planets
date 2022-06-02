import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from './../theme/colors';
import PlanetHeader from '../components/planet-header';
export default function Details() {
    return (
        <SafeAreaView style={styles.container}>
            <PlanetHeader backBtn={true} />
            <Text style={{ color: colors.white }}>Details</Text>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,

    },



})