import React, { useEffect, useState, Fragment } from "react";
import Tabletop from "tabletop";
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  backdrop : {
    backgroundImage : "URL('/Images/background.jpg')", 
    backgroundRepeat : "no-repeat", 
    backgroundSize : "cover",
    height : "1000px",
    opacity : "0.8",
    backgroundPosition : "center",
  },
  heading : {
    color : "white",
    fontWeight : "bold",
    fontSize : "30px",
    textAlign : "center"
  },
  table : {
    width : "900px",
    marginLeft : "auto",
    marginRight : "auto",
    border : "1px solid white"
  },
  tableHead : {
    color : "black",
    paddingTop : "30px",
    backgroundColor : "white",
    height : "30px",
  },
  tableData : {
    color : "white",
    height : "30px",
    textAlign : "center"
  }
}))

export default function App() {
  const [data, setData] = useState([]);
  const classes = useStyles()

  useEffect(() => {
    Tabletop.init({
      key: "14CXkxMPRct93ExqCivuCNcR3uLWCiTY-Jn-zbkVemPw",
      simpleSheet: true
    })
      .then((data) => setData(data))
      .catch((err) => console.warn(err));
  }, []);

  return (
    <>
    <div>
      <div className = {classes.backdrop}>
      <div style={{height: "70px"}}></div>
      <h1 className = {classes.heading}>Event Schedule</h1>
      <div style={{height: "30px"}}></div>
      <table className = {classes.table}>
        <tr className={classes.tableHead}>
          <th>Event Name</th>
          <th>Location</th>
          <th>Start Time</th>
          <th>End Time</th>
        </tr>
        {data.map((item, i) => (
          <Fragment key={i}>
            <tr className ={classes.tableData}>
              <td>{item.Event}</td>
              <td>{item.Location}</td>
              <td>{item.Start}</td>
              <td>{item.End}</td>
            </tr>
          </Fragment>
        ))}
      </table>
      </div>
      </div>
    </>
  );
}