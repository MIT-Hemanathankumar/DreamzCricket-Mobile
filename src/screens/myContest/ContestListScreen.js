import React,{useState, useEffect} from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { colors, constants, scale, scaleFont, verticalScale } from '../../utils';
import LinearGradient from 'react-native-linear-gradient';
import { convertTimeToHMS } from '../../utils/timeUtils';
import { useDispatch, useSelector } from 'react-redux';
import { joinContestSlots } from '../../redux/actions/joinContestActions';
import AlertModal from '../common/AlertModal';
// import MatchTimer from '../common/Components/MatchTimer';




const ContestListScreen = (props) => {
    const selectedMatch = props.route.params.selectedMatch;
    const [showModals, setShowModals] = useState(false);
    const { contest, loading, error } = useSelector(state => state.contest);
    const dispatch = useDispatch();

    const handlerForJoinContest = (contestId, slotId) => {
        dispatch(joinContestSlots(selectedMatch.id, contestId, slotId))
        setShowModals(true);
    }

 
    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <View style={styles.rowBetween}>
                <Text style={styles.label}>{item.slotName}</Text>
                <TouchableOpacity onPress={() => { handlerForJoinContest(item.contestId, item.slotId) }} style={styles.joinBtn}>
                    <Text style={styles.joinText}>Join ₹{item.entryFee}</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.prize}>₹{item.platFormFee}</Text>
            <View style={styles.rowBetween}>
                <Text style={styles.filledText}> Entries</Text>
                <Text style={styles.filledText}> filled</Text>
            </View>

            <View style={[styles.rowBetween, { marginTop: 10 }]}>
                <Text style={styles.subText}> Winners</Text>
                <Text style={styles.subText}>Joined with Team</Text>
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
                    <TouchableOpacity onPress={() => { props.navigation.goBack() }}>
                        <Ionicon name="arrow-back" size={24} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>{selectedMatch.name}</Text>
                    <Text style={styles.timer}>⏱ {convertTimeToHMS(selectedMatch.matchDateTime)}</Text>
                    {/* <MatchTimer matchDateTimer={selectedMatch.matchDateTime}></MatchTimer> */}
                </View>
            </LinearGradient>
            <FlatList
                data={selectedMatch.contestSlots}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={{ padding: 16 }}
            />

          { showModals && <AlertModal
                message={contest.message}
                visible={showModals}
                onClose={() => setShowModals(false)}
                onOk={() => {
                    setShowModals(false);
                }}
            />}
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
        color: '#444',
    },
    prize: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 5,
    },
    filledText: {
        fontSize: 12,
        color: '#FFF',
        marginTop: 8,
    },
    subText: {
        fontSize: 13,
        color: '#FFF',
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