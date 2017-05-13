import React from 'react'
import createReactClass from 'create-react-class'

import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'

const DateRangePickerWrapper = createReactClass({
    getInitialState: function(){
        return {
            startDate: null,
            endDate: null,
            focusedInput: null,
        }
    },
    render: function(){
        return (
            <DateRangePicker
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                focusedInput={this.state.focusedInput}
                onFocusChange={focusedInput => this.setState({ focusedInput })}
            >
            </DateRangePicker>
        )
    }
})

export default  DateRangePickerWrapper
