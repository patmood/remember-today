import React, { Component, PropTypes } from 'react'
import moment from 'moment'
import mockData from '../../mock-data.json'

class CalendarChart extends Component {
  constructor (props) {
    super(props)
    this.state = {
      dayOfWeek: parseInt(moment().format('e')),
    }
  }

  render() {
    const fullYear = []
    // TODO: loop to 365 days
    for (let i = 0; i < 10; i++) {
        const thisDate = moment().subtract(i, 'day').format('YYYYMMDD')
        const hasPost = this.props.days[thisDate]
        fullYear.push(hasPost ?
            <a key={thisDate} href='#' className='p1 left'>{thisDate}</a>
            :
            <span key={thisDate} className='p1 left'>{thisDate}</span>
        )
    }

    return <div>
      <div className='bold'>Chart</div>
      <div className='clearfix'>{fullYear}</div>
    </div>
  }
}

CalendarChart.defaultProps = {
  days: mockData, // TODO: REMOVE ME
  handleDayClick: () => f,
}

CalendarChart.propTypes = {
  days: PropTypes.object,
  handleDayClick: PropTypes.func,
}

export default CalendarChart
