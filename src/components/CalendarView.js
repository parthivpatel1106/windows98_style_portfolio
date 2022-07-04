import Calendar from "react-calendar"
// import 'react-calendar/dist/Calendar.css';
import '../style/CalendarView.css'

const CalendarView=()=>{
    const listOfMonths=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEPT","OCT","NOV","DEC"]
    const month=new Date().getMonth();
    const currMonth=listOfMonths[month]
    const year=new Date().getFullYear();
    // console.log(year);
    return(
        <div className="dt-calendar-view">
            <div className="dt-month-name">{currMonth}-{year}</div>
            <Calendar />
        </div>
    )
}
export default CalendarView