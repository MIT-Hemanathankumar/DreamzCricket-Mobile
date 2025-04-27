import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, Image, Keyboard, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from 'react-redux';
import { colors, constants, scale, scaleFont, verticalScale } from '../../utils';
import { completedMatchData, matchdata } from '../../utils/Data';
import ContestTypeModal from '../common/ContestTypeModal';
import MatchCard from '../common/Components/MatchCard';


const MyContest = (props) => {
    const theme = useSelector(state => state.theme)

    const [cricketTab, setcricketTab] = useState(true)
    const [footballTab, setfootballTab] = useState(false)
    const [basketballTab, setbasketballTab] = useState(false)
    const [baseballTab, setbaseballTab] = useState(false)
    const [rugbyTab, setrugbyTab] = useState(false)
    const [upcoming, setupcoming] = useState(true)
    const [live, setlive] = useState(false)
    const [completed, setcompleted] = useState(false)
    const [showModal, setShowModal] = useState(false);
    const [selectedMatch, setSelectedMatch] = useState(null);
    const navigation = useNavigation()
    const { matches, loading, error } = useSelector(state => state.dashboard);




    return (
        <View style={{ flex: 1, backgroundColor: theme.colors.background_primary }}>
            <TouchableOpacity style={{ flex: 1 }} activeOpacity={1} onPress={() => Keyboard.dismiss()}>

                <StatusBar barStyle={"light-content"} backgroundColor={'transparent'} hidden={false} translucent={true}
                />

                <LinearGradient
                    start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
                    colors={[colors.secondary_blue, colors.primary_blue]}
                    style={{
                        width: scale(360),
                        height: verticalScale(80),
                        alignSelf: 'center',
                    }}>
                    <View style={{ marginTop: verticalScale(35), flexDirection: 'row', paddingHorizontal: scale(20), alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.openDrawer()}  >
                            <Image source={require("../../assets/images/avatar1.jpeg")} style={{ width: verticalScale(30), height: verticalScale(30), borderRadius: verticalScale(100), resizeMode: "stretch" }} />

                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: scale(270), justifyContent: 'center' }}>
                            <Text style={{ color: colors.white, fontFamily: constants.OPENSANS_FONT_BOLD, fontSize: scaleFont(18), marginLeft: scale(10) }}>Dreamatch</Text>

                        </View>
                        <Ionicon name="notifications-outline" color='white' size={verticalScale(22)} />
                    </View>
                </LinearGradient>


                <View style={{ backgroundColor: theme.colors.white, borderTopLeftRadius: verticalScale(10), borderTopRightRadius: verticalScale(10) }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', height: verticalScale(65), elevation: 1 }}>

                        <TouchableOpacity onPress={() => { setcricketTab(true), setbasketballTab(false), setfootballTab(false), setbaseballTab(false), setrugbyTab(false) }} style={{ justifyContent: 'center', alignItems: 'center', borderBottomWidth: verticalScale(3), borderColor: cricketTab ? colors.primary_blue : 'white', height: verticalScale(65) }} >
                            <Image source={require('../../assets/images/cricketIcon.png')} style={{ width: scale(28), height: scale(28) }} />
                            <Text style={{ textAlign: 'center', fontFamily: constants.OPENSANS_FONT_BOLD, color: cricketTab ? colors.primary_blue : colors.greyColour, fontSize: scaleFont(11), marginTop: verticalScale(4) }} >Cricket</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setcricketTab(false), setbasketballTab(true), setfootballTab(false), setbaseballTab(false), setrugbyTab(false) }} style={{ justifyContent: 'center', alignItems: 'center', borderBottomWidth: verticalScale(3), borderColor: basketballTab ? colors.primary_blue : 'white', height: verticalScale(65) }} >
                            <Image source={require('../../assets/images/basketballIcon.png')} style={{ width: scale(28), height: scale(28) }} />
                            <Text style={{ textAlign: 'center', fontFamily: constants.OPENSANS_FONT_BOLD, color: basketballTab ? colors.primary_blue : colors.greyColour, fontSize: scaleFont(11), marginTop: verticalScale(4) }} >Basketball</Text>

                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setcricketTab(false), setbasketballTab(false), setfootballTab(true), setbaseballTab(false), setrugbyTab(false) }} style={{ justifyContent: 'center', alignItems: 'center', borderBottomWidth: verticalScale(3), borderColor: footballTab ? colors.primary_blue : 'white', height: verticalScale(65) }} >
                            <Image source={require('../../assets/images/soccerIcon.png')} style={{ width: scale(28), height: scale(28) }} />
                            <Text style={{ textAlign: 'center', fontFamily: constants.OPENSANS_FONT_BOLD, color: footballTab ? colors.primary_blue : colors.greyColour, fontSize: scaleFont(11), marginTop: verticalScale(4) }} >Football</Text>

                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { setcricketTab(false), setbasketballTab(false), setfootballTab(false), setbaseballTab(true), setrugbyTab(false) }} style={{ justifyContent: 'center', alignItems: 'center', borderBottomWidth: verticalScale(3), borderColor: baseballTab ? colors.primary_blue : 'white', height: verticalScale(65) }} >
                            <Image source={require('../../assets/images/baseballIcon.png')} style={{ width: scale(28), height: scale(28) }} />
                            <Text style={{ textAlign: 'center', fontFamily: constants.OPENSANS_FONT_BOLD, color: baseballTab ? colors.primary_blue : colors.greyColour, fontSize: scaleFont(11), marginTop: verticalScale(4) }} >Baseball</Text>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => { setcricketTab(false), setbasketballTab(false), setfootballTab(false), setbaseballTab(false), setrugbyTab(true) }} style={{ justifyContent: 'center', alignItems: 'center', borderBottomWidth: verticalScale(3), borderColor: rugbyTab ? colors.primary_blue : 'white', height: verticalScale(65) }} >
                            <Image source={require('../../assets/images/rugbyIcon.png')} style={{ width: scale(28), height: scale(28) }} />
                            <Text style={{ textAlign: 'center', fontFamily: constants.OPENSANS_FONT_BOLD, color: rugbyTab ? colors.primary_blue : colors.greyColour, fontSize: scaleFont(11), marginTop: verticalScale(4) }} >Baseball</Text>
                        </TouchableOpacity>

                    </View>
                </View>

                <View style={{ flex: 1, backgroundColor: '#f5f7fb' }}>



                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: scale(340), alignSelf: 'center', marginTop: verticalScale(10), height: verticalScale(60) }}>
                        <TouchableOpacity activeOpacity={0.7} onPress={() => { setupcoming(true), setlive(false), setcompleted(false) }} style={{ width: scale(100), height: verticalScale(40), borderRadius: verticalScale(20), backgroundColor: upcoming ? colors.primary_blue : colors.white, justifyContent: 'center', alignItems: 'center', elevation: 1 }} >
                            <Text style={{ color: upcoming ? colors.white : colors.black, fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(12) }} >Upcoming</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.7} onPress={() => { setupcoming(false), setlive(true), setcompleted(false) }} style={{ width: scale(100), height: verticalScale(40), borderRadius: verticalScale(20), backgroundColor: live ? colors.primary_blue : colors.white, justifyContent: 'center', alignItems: 'center', elevation: 1 }} >
                            <Text style={{ color: live ? colors.white : colors.black, fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(12) }} >Live</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.7} onPress={() => { setupcoming(false), setlive(false), setcompleted(true) }} style={{ width: scale(100), height: verticalScale(40), borderRadius: verticalScale(20), backgroundColor: completed ? colors.primary_blue : colors.white, justifyContent: 'center', alignItems: 'center', elevation: 1 }} >
                            <Text style={{ color: completed ? colors.white : colors.black, fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(12) }} >Completed</Text>
                        </TouchableOpacity>
                    </View>

                    <ContestTypeModal

                        visible={showModal}
                        onClose={() => setShowModal(false)}
                        onMyTeamPress={() => {
                            setShowModal(false);
                            console.log('My Team Clicked');
                        }}
                        onQuickWinPress={() => {
                            setShowModal(false);
                            console.log('Quick Win clicked');
                            props.navigation.navigate('ContestListScreen',{selectedMatch:selectedMatch})
                        }}

                    />

                    {
                        upcoming && (
                            <View style={{ flex: 1 }}>
                                <FlatList
                                    data={matches.data.filter((item) => item.matchStatusName === 'Scheduled Match')}
                                    showsVerticalScrollIndicator={false}
                                    renderItem={({ item }) => {
                                        return (
                                            <MatchCard
                                                item={item}
                                                onPress={() => {setShowModal(true);setSelectedMatch(item)}}
                                            />
                                        )

                                    }}
                                />
                            </View>
                        )
                    }
                    {
                        live && (
                            <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
                                <Text style={{ color: colors.black, fontFamily: constants.OPENSANS_FONT_MEDIUM, fontSize: scaleFont(16), width: scale(180), textAlign: "center" }}>Alas! There are on live matches at the moment</Text>

                            </View>
                        )
                    }
                    {
                        completed && (
                            <View style={{ flex: 1 }}>
                                <FlatList
                                    data={matches.data.filter((item) => item.matchStatusName === 'Match Completed')}
                                    showsVerticalScrollIndicator={false}
                                    renderItem={({ item }) => {
                                        return (
                                            <MatchCard
                                            item={item}
                                            onPress={() => setShowModal(true)}
                                        />
                                        )

                                    }}
                                />
                            </View>
                        )
                    }


                </View>

            </TouchableOpacity>
        </View>
    );
}


export default MyContest;