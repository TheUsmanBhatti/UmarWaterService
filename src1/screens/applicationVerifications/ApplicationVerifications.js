import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeHeader from '../../components/headers/HomeHeader';
import UserCard from '../../components/cards/UserCard';
import styles from './styles';
import axios from 'axios'

const ApplicationVerifications = () => {

    const [selectedTab, setSelectedTab] = useState('detail')

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null)

    const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTc3ODg3MzQsImV4cCI6MzE3MjAyMjMxMTM0fQ.BKI9EzOzDU3Esv1wlyLHgjESKUB_tvHiM6MN-GwrASk`

    const getUserData = async () => {
        try {
            const response = await axios.get(`http://18.142.153.136:3000/api/application/member_details?id=1`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            })

            setUser(response?.data?.data)

        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {

        getUserData()

        return () => {
            setUser(null)
            setLoading(true)
            setError(null)
        }

    }, [])

    if(user){
        var {first_name, last_name, parantage_type, cnic, gender, dob, marital_status, mreligion, education, is_disable, address, phone} = user?.member_personal_details;
    }
    

    return (
        <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 15 }}>

            <HomeHeader />

            {
                !!user && (
                    <>
                        <UserCard image={require('../../assets/images/user.jpg')} name={`${first_name} ${last_name}`} cnic={cnic} />

                        <View style={styles.tabContainer}>

                            <TouchableOpacity onPress={() => setSelectedTab('detail')} style={{ width: '50%' }}>
                                <Text style={[styles.tabLabel, { color: selectedTab == 'detail' ? '#2e8a53' : '#000', borderBottomColor: selectedTab == 'detail' ? '#2e8a53' : '#f3f3f3' }]}>Application Details</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => setSelectedTab('status')} style={{ width: '50%' }}>
                                <Text style={[styles.tabLabel, { color: selectedTab == 'status' ? '#2e8a53' : '#000', borderBottomColor: selectedTab == 'status' ? '#2e8a53' : '#f3f3f3' }]}>Status</Text>
                            </TouchableOpacity>

                        </View>

                        {
                            selectedTab == 'detail' ? (
                                <>
                                    <View style={styles.userDetailContainer}>
                                        <UserDetailCard icon={'person-outline'} title={'Gender'} text={gender} />
                                        <UserDetailCard icon={'people-outline'} title={'Marital Status'} text={marital_status} />
                                        <UserDetailCard icon={'person-outline'} title={'Parantage(Father)'} text={parantage_type} />
                                        <UserDetailCard icon={'call-outline'} title={'Mobile'} text={phone} />
                                        <UserDetailCard icon={'calendar-outline'} title={'Date of Birth'} text={dob} />
                                        <UserDetailCard icon={'ios-book-outline'} title={'Education'} text={education} />
                                    </View>

                                    <View style={{ paddingHorizontal: 15, gap: 15 }}>

                                        <View style={styles.infoCardContainer}>
                                            <View style={styles.infoCardHeadingCont}>
                                                <Text style={styles.infoCardHeading}>Family Details</Text>
                                            </View>

                                            <View style={{ padding: 10, gap: 10 }}>
                                                <InfoTextCard title={'Family Member Name'} answer={'Irfan Ali'} />
                                                <InfoTextCard title={'Family Member CNIC'} answer={'45555-6666677-7'} />
                                                <InfoTextCard title={'Religion'} answer={mreligion} />
                                                <InfoTextCard title={'Is Disable'} answer={is_disable} />
                                                <InfoTextCard title={'Business Address'} answer={address?.city} />
                                            </View>

                                        </View>

                                        <View style={styles.infoCardContainer}>
                                            <View style={styles.infoCardHeadingCont}>
                                                <Text style={styles.infoCardHeading}>Request Amount</Text>
                                            </View>

                                            <View style={{ padding: 10, gap: 10 }}>
                                                <InfoTextCard title={'Request Amount'} answer={'250,000/-'} />
                                                <InfoTextCard title={'Category'} answer={'Category'} />
                                                <InfoTextCard title={'Purpose'} answer={'Purpose'} />

                                                <Text style={styles.labelPending}>Pending</Text>
                                            </View>

                                        </View>

                                    </View>
                                </>
                            ) : (
                                <View style={{ padding: 30, alignItems: 'center' }}>
                                    <Text>Empty</Text>
                                </View>
                            )
                        }
                    </>
                )
            }

            {
                loading && (
                    <View style={{}}>
                        <ActivityIndicator size={'large'} color={'#07a264'}/>
                    </View>
                )
            }

            {
                !!error && (
                    <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                        <Text>{error?.response?.data?.message ?? error?.message}</Text>
                    </View>
                ) 
            }


        </ScrollView>
    );
};



export default ApplicationVerifications;


const UserDetailCard = ({ icon, title, text }) => {
    return (
        <View style={{ backgroundColor: '#fff', width: '33%', padding: 15 }}>

            <Icon name={icon} color="#2e8a53" size={25} />
            <Text style={{ fontSize: 14, fontWeight: '600', color: '#000' }}>{text}</Text>
            <Text style={{ fontSize: 12, color: '#888' }}>{title}</Text>
        </View>
    )
}

const InfoTextCard = ({ title, answer }) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 13, color: 'gray' }}>{title}</Text>
            <Text style={{ fontSize: 13, color: '#000', fontWeight: '600' }}>{answer}</Text>
        </View>
    )
}