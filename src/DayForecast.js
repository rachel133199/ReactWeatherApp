import React from 'react'
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
// import Container from 'react-bootstrap/Container'
// import Table from 'react-bootstrap/Table'
import TableRow from '@material-ui/core/TableRow'
import TableCell from "@material-ui/core/TableCell";

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

function getNextDay(d, n) {
    return(days[(d.getDay() + n) % 7])
}

// import MuiTableCell from "@material-ui/core/TableCell";
 

const DayForecast = (props) => {
    return(         
        // <td>
        //     <Row>{getNextDay(new Date(), props.dayNum)}</Row> 
        //     <Row>{props.weather}</Row> 
        //     <Row>{Math.round(props.low - 273.15)}/{Math.round(props.high - 273.15)}°c</Row>
        // </td>
        <TableRow>
            <TableCell align="center">{getNextDay(new Date(), props.dayNum)}</TableCell>
            <TableCell align="center">{props.weather}</TableCell>
            <TableCell align="center">{Math.round(props.low - 273.15)}/{Math.round(props.high - 273.15)}°c</TableCell>
        </TableRow>
    )
}

export default DayForecast