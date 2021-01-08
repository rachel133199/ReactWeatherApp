import React from 'react'
// import Container from 'react-bootstrap/esm/Container';
import DayForecast from './DayForecast';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer'
import Paper from '@material-ui/core/Paper'
// import Table from 'react-bootstrap/Table'

const week = [1, 2, 3, 4, 5, 6, 7]

const ForecastBox = (props) => {
  let daily = props.forecast.daily;

  const dailyForecast = week.map(day => {
    return (<DayForecast key={day} dayNum={day} weather={daily[day].weather[0].main} low={daily[day].temp.min} high={daily[day].temp.max} />)
  })

  return (
    <TableContainer>
      <Table className="forecast"> 
        {dailyForecast}
      </Table>
    </TableContainer>
  )
}

export default ForecastBox