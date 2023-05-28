import React, { memo } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign'

const UserCard = ({ image, name, cnic }) => {
    return (
        <View style={styles.userInfoCardContainer}>

            <View style={styles.designView} />

            <View style={styles.userCard}>
                <View style={styles.imageContainer}>
                    <Image source={require('../../assets/images/user.jpg')} style={styles.image} />
                </View>

                <View>
                    <Text style={styles.labelName}>{name}</Text>

                    <View style={styles.labelNIC}>
                        <AntDesign name='idcard' color={'#2e8a53'} size={16} />
                        <Text style={{ color: '#2e8a53' }}>{cnic}</Text>
                    </View>
                </View>
            </View>

        </View>
    );
};


const styles = StyleSheet.create({
    userInfoCardContainer: {
        height: 115,
        backgroundColor: '#f3f3f3'
    },
    designView: {
        backgroundColor: '#fff',
        height: 107 / 2,
        width: '100%',
        position: 'absolute'
    },
    userCard: {
        padding: 10,
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        backgroundColor: '#fff',
        elevation: 5,
        margin: 15,
        borderRadius: 12
    },
    imageContainer: {
        width: 65,
        height: 65,
        borderRadius: 65 / 2,
        elevation: 3,
        overflow: 'hidden'
    },
    image: {
        backgroundColor: 'gray',
        width: '100%',
        height: '100%'
    },
    labelName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000'
    },
    labelNIC: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        marginTop: 3
    }
});


export default memo(UserCard);
