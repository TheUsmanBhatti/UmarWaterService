import React, { Component, useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

import axios from 'axios';
import MovieCard from '../../components/MovieCard';
import styles from './styles';
import { useSelector } from 'react-redux';


const Home = ({ navigation }) => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    const favoriteMovieList = useSelector(state => state?.favoriteReducer)

    useEffect(() => {

        const getData = async () => {
            try {
                const res = await axios.get('https://mocki.io/v1/ceef035f-288c-4650-84f5-00cfc9014267')
                setData(res?.data)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }

        getData()

    }, [])


    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size={'large'} color={'#fff'}/>
            </View>
        )
    }


    return (
        <View style={styles.container}>

            <View style={styles.headerContainer}>
                <Text style={styles.header}>Movies List</Text>

                <TouchableOpacity onPress={() => navigation.navigate('Favorite')}>
                    <Icon name="heart" size={25} color={'#fff'} />

                    {
                        favoriteMovieList?.length > 0 && (
                            <View style={styles.badge}>
                                <Text style={styles.badgeText}>{favoriteMovieList?.length}</Text>
                            </View>
                        )
                    }

                </TouchableOpacity>
            </View>

            <FlatList
                data={data?.movies}
                numColumns={2}
                contentContainerStyle={styles.flatlist}
                renderItem={({ item }) => (
                    <MovieCard item={item} />
                )}
            />

        </View>
    );
};

export default Home;


