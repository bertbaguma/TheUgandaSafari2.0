import React, { useState } from 'react';

interface DatePickerProps {
  value: string; // YYYY-MM-DD
  onChange: (date: string) => void;
  onClose: () => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ value, onChange, onClose }) => {
  // Use UTC dates to avoid timezone issues
  const selectedDate = new Date(value + 'T00:00:00Z');
  const [displayDate, setDisplayDate] = useState(new Date(Date.UTC(selectedDate.getUTCFullYear(), selectedDate.getUTCMonth(), 1)));

  const year = displayDate.getUTCFullYear();
  const month = displayDate.getUTCMonth();

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dayNames = ["S", "M", "T", "W", "T", "F", "S"];

  const firstDayOfMonth = new Date(Date.UTC(year, month, 1));
  const daysInMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  const startDayOfWeek = firstDayOfMonth.getUTCDay(); // 0 for Sunday

  const calendarDays: (Date | null)[] = Array(startDayOfWeek).fill(null);
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(new Date(Date.UTC(year, month, i)));
  }

  const handleDateClick = (date: Date) => {
    const dateString = date.toISOString().split('T')[0];
    onChange(dateString);
    onClose();
  };

  const changeMonth = (offset: number) => {
    setDisplayDate(new Date(Date.UTC(year, month + offset, 1)));
  };

  const now = new Date();
  const todayUTC = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));

  const minSelectableDate = new Date(todayUTC);
  minSelectableDate.setUTCDate(todayUTC.getUTCDate() + 7);


  return (
    <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-2xl p-4">
      <div className="flex justify-between items-center mb-4">
        <button type="button" onClick={() => changeMonth(-1)} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <div className="font-bold text-base text-brand-dark dark:text-white">{monthNames[month]} {year}</div>
        <button type="button" onClick={() => changeMonth(1)} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-xs text-gray-500 dark:text-gray-400 mb-2">
        {dayNames.map(day => <div key={day} className="aspect-square flex items-center justify-center font-semibold">{day}</div>)}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {calendarDays.map((date, index) => {
          if (!date) {
            return <div key={`empty-${index}`} className="aspect-square" />;
          }
          const isSelected = date.getTime() === selectedDate.getTime();
          const isToday = date.getTime() === todayUTC.getTime();
          const isDisabled = date < minSelectableDate;

          let buttonClasses = "w-full h-full aspect-square rounded-full flex items-center justify-center text-sm transition-colors ";
          if (isDisabled) {
            buttonClasses += "text-gray-300 dark:text-gray-600 cursor-not-allowed line-through";
          } else if (isSelected) {
            buttonClasses += "bg-blue-600 text-white font-bold hover:bg-blue-700";
          } else if (isToday) {
            buttonClasses += "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-200 font-semibold hover:bg-blue-200 dark:hover:bg-blue-800/50 ring-1 ring-blue-500";
          } else {
            buttonClasses += "text-brand-dark dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700";
          }

          return (
            <div key={date.toISOString()} className="flex justify-center items-center aspect-square">
              <button
                type="button"
                className={buttonClasses}
                onClick={() => handleDateClick(date)}
                disabled={isDisabled}
              >
                {date.getUTCDate()}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DatePicker;