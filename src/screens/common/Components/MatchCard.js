import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import { colors, constants, scale, scaleFont, verticalScale } from '../../../utils';
 import { convertTimeToHMS } from '../../../utils/timeUtils'; // Update this path if needed

const MatchCard = ({ item, onPress }) => {
  return (
    <TouchableOpacity 
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: scale(340),
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: verticalScale(10),
        paddingHorizontal: scale(20),
        backgroundColor: colors.white,
        borderRadius: verticalScale(12),
        height: verticalScale(90),
      }}
    >
      {/* Team 1 */}
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        {/* <Image 
        //   source={{ uri: item?.team?.team1?.logo || 'https://lh3.googleusercontent.com/mq4oNuNSSTe4SvGfuf7EKLnFTsTR0spOTky7J_k14ArsYD5whdoUoKJFG-ZHt45Lf38=w2400' }}
        source={{uri:'https://lh3.googleusercontent.com/mq4oNuNSSTe4SvGfuf7EKLnFTsTR0spOTky7J_k14ArsYD5whdoUoKJFG-ZHt45Lf38=w2400'}}
        style={{
            height: verticalScale(40),
            width: verticalScale(40),
            borderRadius: verticalScale(40),
            borderWidth: 1,
            borderColor: 'black',
          }}
        /> */}
        <Text style={{ 
          color: colors.black, 
          width: scale(70), 
          textAlign: "center" 
        }}>
          {item.team.team1.name.length > 20 
            ? item.team.team1.name.split(" ")[0] + " " + item.team.team1.name.split(" ")[1] + " ..." 
            : item.team.team1.name
          }
        </Text>
      </View>

      {/* Match Info */}
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: colors.black }}>
          {item.matchTypeName}
        </Text>
        <Text style={{ 
          color: colors.black, 
          fontFamily: constants.OPENSANS_FONT_BOLD 
        }}>
          V/S
        </Text>
        <Text style={{ 
          paddingHorizontal: scale(8), 
          borderRadius: verticalScale(10), 
          color: colors.primary_red 
        }}>
          {convertTimeToHMS(item.matchDateTime)}
        </Text>
      </View>

      {/* Team 2 */}
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        {/* <Image 
        //   source={{ uri: item?.team?.team2?.logo || 'https://lh4.googleusercontent.com/-u2DbgjnPXh9O5uGU1-dttIyFDULjtDhKkpi-6yp3Zj0bZd2pSd8sY3EzHDEv_ZLP6g=w2400' }}
          source={{uri: 'https://lh4.googleusercontent.com/-u2DbgjnPXh9O5uGU1-dttIyFDULjtDhKkpi-6yp3Zj0bZd2pSd8sY3EzHDEv_ZLP6g=w2400'}}
        style={{
            height: verticalScale(40),
            width: verticalScale(40),
            borderRadius: verticalScale(40),
            borderWidth: 1,
            borderColor: 'black',
          }}
        /> */}
        <Text style={{ 
          color: colors.black, 
          width: scale(70), 
          textAlign: "center" 
        }}>
          {item.team.team2.name.length > 20 
            ? item.team.team2.name.split(" ")[0] + " " + item.team.team2.name.split(" ")[1] + " ..." 
            : item.team.team2.name
          }
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MatchCard;
