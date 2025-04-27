import React, {useEffect, useState} from "react";
import {View, Text} from 'react-native';
import moment from 'moment';

const MatchTimer = ({matchDateTimer}) => {

    const [timeLeft, setTimeLeft] = useState('');

    useEffect(() => {
        const interval = setInterval(()=>{
            const now = moment();
            const matchTime = moment(matchDateTimer);
            const duration = moment.duration(matchTime.diff(now));

            // if(duration.asSeconds() <= 0){
            //     clearInterval(interval);
            //     setTimeLeft("Match Started");
            // } else {
                const hours = Math.floor(duration.asHours());
                const minutes = duration.minutes();
                const seconds = duration.seconds();
                setTimeLeft(`${hours}h : ${minutes}m : ${seconds}s`);
           // }


        }, 1000);
        return () => clearInterval(interval);
    }, [matchDateTimer]);

    return (
        <View>
            <Text style={{ fontSize: 12, color: '#fff' }}>{timeLeft}</Text>
        </View>
    );

}

export default MatchTimer;

