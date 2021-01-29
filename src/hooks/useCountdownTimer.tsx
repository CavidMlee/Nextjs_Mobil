import React, { useRef, useState, useEffect } from 'react';


//

export const useCountdownTimer = (time:number,) => {

    const [start,setStart] = useState(false)
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval: any = useRef()

    const startTimer = () => {
        const countdownDate = new Date().getTime() + 60000*time + 2000;
        interval.current = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days: number = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours: number = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes: number = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds: number = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(interval.current)
            } else {
                setTimerDays(days.toString())
                setTimerHours(hours.toString())
                setTimerMinutes(minutes.toString())
                setTimerSeconds(seconds.toString())
            }

        }, 1000)
    }

    useEffect(() => {
        const someref = interval.current
        start && startTimer()
        return () => {
            clearInterval(someref)
        }
    }, [start])

    return {
        timerDays,
        timerHours,
        timerMinutes,
        timerSeconds,
        setStart,
    }
}

