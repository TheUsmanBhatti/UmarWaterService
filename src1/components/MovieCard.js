import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons'

import { addToFavorite, removeToFavorite } from '../redux/actions/favoriteAction';

import styles from './styles';

const MovieCard = ({ item }) => {

    const favoriteMovieList = useSelector(state => state?.favoriteReducer)

    return (
        <View style={styles.container}>
            <Image source={{uri: item?.image}} style={styles.image}/>
            <Text style={styles.title}>{item?.title}</Text>
            <Text style={styles.releaseYear}>Releaser Year: {item?.releaseYear}</Text>

            {
                favoriteMovieList.find(movie => movie?.id == item?.id) ? (
                    <TouchableOpacity onPress={() => removeToFavorite(item)} style={styles.icon}>
                        <Icon name={'heart'} size={20} color={'#fff'} />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity onPress={() => addToFavorite(item)} style={styles.icon}>
                        <Icon name={'heart-outline'} size={20} color={'#fff'} />
                    </TouchableOpacity>
                )
            }

        </View>
    );
};

export default MovieCard;
