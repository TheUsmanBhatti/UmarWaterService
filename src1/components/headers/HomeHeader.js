import React, { memo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

const HomeHeader = () => {
    return (
        <View style={styles.headerContainer}>
            <View>
                <Text style={styles.companyName}>GROWTECH</Text>
                <Text style={styles.subTitle}>Application Verifications</Text>
            </View>

            <View style={{ flexDirection: 'row', gap: 5 }}>
                <TouchableOpacity>
                    <Icon name="notifications-outline" color="#b5b4b4" size={22} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Icon name="ios-menu-outline" color="#b5b4b4" size={22} />
                </TouchableOpacity>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#f3f3f3',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 15
    },
    companyName: {
        fontSize: 24,
        fontWeight: '700',
        color: '#07a264',
        letterSpacing: 0.5
    },
    subTitle: {
        color: '#5f5f5f',
        fontSize: 12,
        fontWeight: '700'
    },
});


export default memo(HomeHeader);
