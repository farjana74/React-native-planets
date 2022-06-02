import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { colors } from './../theme/colors';
import { spacing } from './../theme/spacing';
import { typography } from '../theme/typography';
import { AntDesign } from '@expo/vector-icons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { useNavigation } from '@react-navigation/native';
export default function PlanetHeader(backBtn) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            {backBtn && (
                <Pressable style={{ marginRight: spacing[4] }} onPress={() => { navigation.goBack(); }}>
                    <AntDesign name="left" size={24} color="white" />
                </Pressable>

            )}
            <Text style={{
                color: colors.white, fontFamily: typography.semiBold,
                fontSize: 40
            }}>The Planet</Text>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        color: colors.white,
        padding: spacing[5],
        borderBottomWidth: 0.5,
        borderBottomColor: colors.white,
        flexDirection: 'row',
        alignItems: 'center',


    }
})
