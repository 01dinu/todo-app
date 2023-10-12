import React, { useState , useEffect } from "react";
import "../App.css";
import axios from "axios";
import MaterialTable from 'material-table'
import ButterToast, { Cinnamon } from "butter-toast"
import { Grid, TablePagination , Button, Card, Typography,Box} from '@material-ui/core'
import { useHistory } from "react-router-dom"

function TodoList(){

  const [todoData, setPayments] = useState([]);
  let history = useHistory();
  
  useEffect(async() => {
    onReload()
  }, []);

  const onReload = () => {
    const url = "https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do";
    axios
      .get(url)
      .then((response) => setPayments(response["data"]));
  }

  const columns = [
    { title: 'Priority', field: 'priority' , width: 1+"%", editable: 'never' , filtering: false,
      render: rowData =>
      rowData.priority != undefined ?(
        rowData.priority=="LOW" ?
          (
                      <Box
                        component="img"
                        sx={{ 
                          height: 25,
                          width: 25,
                          maxHeight: { xs: 25, md: 50 },
                          maxWidth: { xs: 25, md: 50 },
                        }}
                        alt="LOW"
                        src={"/Priority-Low.svg"}
                      />
                    ):(
                      rowData.priority=="HIGH" ?
                      (<Box
                        component="img"
                        sx={{ 
                          height: 25,
                          width: 25,
                          maxHeight: { xs: 25, md: 50 },
                          maxWidth: { xs: 25, md: 50 },
                        }}
                        alt="LOW"
                        src={"/Priority-High.svg"}
                      />):(<Box
                        component="img"
                        sx={{ 
                          height: 25,
                          width: 25,
                          maxHeight: { xs: 25, md: 50 },
                          maxWidth: { xs: 25, md: 50 },
                        }}
                        alt="LOW"
                        src={"/Priority-Medium.svg"}
                      />)
          )
      ):("")},
    { title: 'Created By', field: 'createdBy' , width: 5+"%", editable: 'never' },
    { title: 'Todo', field: 'todo' , width: 55+"%", editable: 'never' },
    { title: 'Date', field: 'createdAt' , width: 5+"%", type: 'date', editable: 'never' },
      { title: 'Progress', field: 'completed' , width: 5+"%", editable: 'never' , lookup:{ true:'Done', false:'in progress' },
      render: rowData =>
      rowData.priority != undefined ?(
        rowData.completed==false ?
          (
                      <p className="stroke-text-yellow">in progress</p>
                    ):(
                      <p className="stroke-text-green">Done</p>)
      ):("")},
    { title: 'Action', field: 'completed' , width: 30+"%", filtering: false, editable: 'never' ,
    render: rowData =>
    rowData.priority != undefined ?(
      rowData.completed==false ?
        (
                    <Button variant="contained" color="primary" fullWidth>Mark as done</Button>
                  ):("")
    ):("")}
  ]
  return (
    <div>
      <Typography gutterBottom variant="h3" align="center">
        Tasks
      </Typography>
        <Card style={{ maxWidth: 80+'%', padding: "20px 20px", margin: "0 auto" }}>
        <br/>
        <MaterialTable title="Tasks" columns={columns} data={todoData} style={{ maxWidth: 100+'%', padding: "20px 5px", margin: "0 auto" }}
            options={{
              pageSize: 8,
            filtering:true,
            sorting: true,
            actionsColumnIndex: -1
            }}
            components={{
              Pagination: props => (
                <TablePagination {...props} rowsPerPageOptions={[8, 16, 24]} />
              ),
            }} />
            </Card>
        <br/>
    </div>
  );

}

export default TodoList;

