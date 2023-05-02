import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import { useSelector } from 'react-redux';
import MovieCard from '../../components/MovieCard';
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './styles';

const Favorite = ({ navigation }) => {

    const favoriteMovieList = useSelector(state => state?.favoriteReducer)

    return (
        <View style={styles.container}>

            <View style={styles.headerContainer}>

                <TouchableOpacity style={{ paddingRight: 15 }} onPress={() => navigation.goBack()}>
                    <Icon name="chevron-back" size={25} color={'#fff'} />
                </TouchableOpacity>

                <Text style={styles.header}>Favorite List</Text>
            </View>

            {
                favoriteMovieList?.length > 0 && (
                    <FlatList
                        data={favoriteMovieList}
                        numColumns={2}
                        contentContainerStyle={styles.flatlist}
                        renderItem={({ item }) => (
                            <MovieCard item={item} />
                        )}
                    />
                )
            }

            {
                favoriteMovieList?.length == 0 && (
                    <View style={styles.errorContainer}>
                        <Text style={styles.errorText}>List is empty :(</Text>
                    </View>
                )
            }

        </View>
    );
};


export default Favorite;
