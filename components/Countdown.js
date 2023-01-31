import React, { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";

export default (props) => {
    const [timerDays, setTimerDays] = useState();
    const [timerHours, setTimerHours] = useState();
    const [timerMinutes, setTimerMinutes] = useState();
    const [timerSeconds, setTimerSeconds] = useState();

    let interval;

    const startTimer = () => {
        const countDownDate = props.endDate * 1000;

        interval = setInterval(() => {
            const now = new Date().getTime();

            const distance = countDownDate - now;

            const days = Math.floor(distance / (24 * 60 * 60 * 1000));
            const hours = Math.floor(
                (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
            const seconds = Math.floor((distance % (60 * 1000)) / 1000);

            if (distance < 0) {
                // Stop Timer

                clearInterval(interval.current);
            } else {
                // Update Timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        });
    };

    useEffect(() => {
        startTimer();
    });
    return (
        <>
            {
                ((new Date()).getTime() < props.endDate * 1000) ?
                    (
                        <>
                            <p>Discount Sale Ends in: </p>
                            <Button.Group>
                                <Button size="mini">{timerDays}</Button>
                                <Button.Or text=":" />
                                <Button size="mini">{timerHours}</Button>
                                <Button.Or text=":" />
                                <Button size="mini">{timerMinutes}</Button>
                                <Button.Or text=":" />
                                <Button size="mini">{timerSeconds}</Button>
                            </Button.Group>
                        </>
                    ) : <h3>SALE IS OVER</h3>

            }
        </>
    );
}