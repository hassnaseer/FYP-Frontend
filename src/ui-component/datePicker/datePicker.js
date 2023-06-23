import React, { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';

const DatePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [error, setError] = useState('');

  const handleStartDateChange = (date) => {
      if (endDate && date > endDate) {
          setError('Start date cannot be greater than end date');
        } else if(date && date <= new Date()) {
            setError('Date must be greate than current date and time');
            setStartDate(null);
        } else{
            setStartDate(date);
        }
  };

  const handleEndDateChange = (date) => {
      if (startDate && date < startDate) {
          setError('End date cannot be less than start date');
        } else {
        setEndDate(date);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} locale="en">
        <DateTimePicker
          label="Start Date"
          value={startDate}
          onChange={handleStartDateChange}
          viewRenderers={{
            hours: renderTimeViewClock,
            minutes: renderTimeViewClock,
            seconds: renderTimeViewClock,
          }}
          error={!!error}
          helperText={error}
        />
      <DateTimePicker
          label="End Date"
          viewRenderers={{
            hours: renderTimeViewClock,
            minutes: renderTimeViewClock,
            seconds: renderTimeViewClock,
          }}
        value={endDate}
        error={!!error}
          helperText={error}
        onChange={handleEndDateChange}

         />
    </LocalizationProvider>
  );
};

export default DatePicker;
