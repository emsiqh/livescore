import React, { useState } from 'react';
import DatePicker from "react-multi-date-picker";
import { Stack } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import "react-multi-date-picker/styles/backgrounds/bg-dark.css";

const FeedDetail = () => {
    const handleClick = (event) => {
        let currentPick = document.querySelector('.filters__tab.selected');
        currentPick.classList.remove('selected');
        event.currentTarget.className += ' selected';
    };

    const [value, setValue] = useState(new Date());

    const subDays = (currentDate, sub) => {
        let tmp = currentDate;
        tmp.setDate(currentDate.getDate() - sub);
        if (sub !== 1) {
            return new Date(tmp);
        }
        setValue(new Date(tmp));
    };

    const addDays = (currentDate, add) => {
        let tmp = currentDate;
        tmp.setDate(currentDate.getDate() + add);
        if (add !== 1) {
            return new Date(tmp);
        }
        setValue(new Date(tmp));
    };

    return (
        <div className='container__fsbody'>
            <div id='live-table'>
                <Stack
                    direction='row'
                    alignItems='center'
                    justifyContent="space-between"
                >
                    <Stack
                        alignItems='center'
                        direction="row"
                        sx={{ overflowX: 'auto', pb: '16px', width: '100%' }}
                    >
                        <div className='filters__tab selected' onClick={handleClick}>
                            <div className='filters__text'>Tất cả</div>
                        </div>
                        <div className='filters__tab' onClick={handleClick}>
                            <div className='filters__text'>Live</div>
                        </div>
                        <div className='filters__tab' onClick={handleClick}>
                            <div className='filters__text'>đã kết thúc</div>
                        </div>
                        <div className='filters__tab' onClick={handleClick}>
                            <div className='filters__text'>sắp diễn ra</div>
                        </div>
                    </Stack>
                    <div className='calendarCont'>
                        <div className='calendar'>
                            <div className='calendar__navigation calendar__navigation--yesterday' onClick={() => subDays(value, 1)}>
                                <FontAwesomeIcon icon={faAngleLeft} style={{ height: '12px', width: '12px' }} />
                            </div>
                            <div className='calendar__datepicker '>
                                <FontAwesomeIcon icon={faCalendarDays} style={{ height: '16px', width: '16px' }} />
                                <DatePicker
                                    style={{
                                        backgroundColor: "#010a0f",
                                        height: "24px",
                                        borderRadius: "8px",
                                        fontSize: "14px",
                                        padding: "0 10px",
                                        color: "#c8cdcd"
                                    }}
                                    className="bg-dark"
                                    format='DD/MM/YYYY'
                                    minDate={subDays(new Date(), 7)}
                                    maxDate={addDays(new Date(), 7)}
                                    value={value}
                                    onChange={(date) => setValue(new Date(date))}
                                />
                            </div>
                            <div className='calendar__navigation calendar__navigation--tomorrow' onClick={() => addDays(value, 1)}>
                                <FontAwesomeIcon icon={faAngleLeft} style={{ height: '12px', width: '12px' }} />
                            </div>
                        </div>
                    </div>
                </Stack>
            </div>
        </div>
    )
}

export default FeedDetail