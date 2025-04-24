import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { colors, constants, scale, scaleFont, verticalScale } from '../../utils';
import LinearGradient from 'react-native-linear-gradient';

// import * as Progress from 'react-native-progress';

const contests = [
    {
      id: '1',
      prize: '₹4,00,00,000',
      entries: '20,00,000',
      filled: 0.6,
      joinedTeams: 6,
      winners: '4,00,000',
      entryFee: '₹20',
    },
    {
      id: '2',
      prize: '₹1,00,00,000',
      entries: '5,00,000',
      filled: 0.75,
      joinedTeams: 2,
      winners: '1,00,000',
      entryFee: '₹20',
    },
    {
      id: '3',
      prize: '₹20,00,000',
      entries: '25,000',
      filled: 0.2,
      joinedTeams: 1,
      winners: '5,000',
      entryFee: '₹80',
    },
  ];

  const ContestListScreen = (props) => {
    const renderItem = ({ item }) => (
      <View style={styles.card}>
        <View style={styles.rowBetween}>
          <Text style={styles.label}>Total Prize</Text>
          <TouchableOpacity style={styles.joinBtn}>
            <Text style={styles.joinText}>Join {item.entryFee}</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.prize}>{item.prize}</Text>
  
        {/* <Progress.Bar
          progress={item.filled}
          width={null}
          height={10}
          color="green"
          unfilledColor="#eee"
          borderWidth={0}
          borderRadius={5}
          style={{ marginTop: 10 }}
        /> */}
  
        <View style={styles.rowBetween}>
          <Text style={styles.filledText}>{item.entries} Entries</Text>
          <Text style={styles.filledText}>{Math.round(item.filled * 100)}% filled</Text>
        </View>
  
        <View style={[styles.rowBetween,{marginTop:10}]}>
          <Text style={styles.subText}>{item.winners} Winners</Text>
          <Text style={styles.subText}>Joined with {item.joinedTeams} Team{item.joinedTeams > 1 ? 's' : ''}</Text>
        </View>
      </View>
    );
  
    return (
      <SafeAreaView style={styles.container}>
        <LinearGradient
                        start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
                        colors={[colors.secondary_blue, colors.primary_blue]}
                        style={{
                            width: scale(360),
                            height: verticalScale(80),
                            alignSelf: 'center',
                        }}>
        <View style={styles.header}>
            <TouchableOpacity onPress={()=>{props.navigation.goBack()}}>
            <Ionicon name="arrow-back"  size={24} color="white" />
            </TouchableOpacity>
          <Text style={styles.headerText}>RCB <Text style={{ color: '#ccc' }}>vs</Text> CSK</Text>
          <Text style={styles.timer}>⏱ 36h: 33m: 32s</Text>
        </View>
        </LinearGradient>
        <FlatList
          data={contests}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={{ padding: 16 }}
        />
      </SafeAreaView>
    );
  };
  
  export default ContestListScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f7f8fc',
    },
    header: {
      marginTop: verticalScale(35),
      padding: 16,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    headerText: {
      fontSize: 18,
      color: '#fff',
      fontWeight: 'bold',
    },
    timer: {
      color: '#fff',
      fontSize: 12,
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: 12,
      padding: 16,
      marginBottom: 16,
      shadowColor: '#000',
      shadowOpacity: 0.05,
      shadowOffset: { width: 0, height: 1 },
      shadowRadius: 4,
      elevation: 3,
    },
    rowBetween: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    label: {
      fontSize: 14,
      color: '#888',
    },
    prize: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#000',
      marginTop: 5,
    },
    filledText: {
      fontSize: 12,
      color: '#666',
      marginTop: 8,
    },
    subText: {
      fontSize: 13,
      color: '#444',
    },
    joinBtn: {
      backgroundColor: '#3D6EF7',
      borderRadius: 8,
      paddingVertical: 8,
      paddingHorizontal: 16,
    },
    joinText: {
      color: '#fff',
      fontWeight: 'bold',
    },
  });