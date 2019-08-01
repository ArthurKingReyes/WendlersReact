import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

// Week percentages
const week1 = [0.65, 0.75, 0.85];
const week2 = [0.7, 0.8, 0.9];
const week3 = [0.75, 0.85, 0.95];
const deload = [0.4, 0.5, 0.6];

class Main extends Component {
    
    
    state = {
        max_weight: 0,
        rows: [],
        selectWeek: []
    }
    
    onTextChange = (e) => {
        this.setState({max_weight: e.target.value})
    }

    // setWeek = (weekNum) => {
    //     this.setState({selectWeek: weekNum})
    //     console.log("successfully set the week")
    // }

    calcWeightAndReps = (week, reps) => {
        if(week === week1){
            console.log("week 1 is true")
            console.log("reps are: " + reps)
            // this.setState({selectWeek: week})
        }

        else if(week === week2){
            console.log("week 2 is true")
        }

        else if(week === week3){
            console.log("week 3 is true")
        }

        else if(week === deload){
            console.log("deload is true")
        }
    }

    render() {
        return (
            <div className="title">
            <br/>
            <h1>Wendler's 531 Assistant</h1> 
            <Container fixed style={{textAlign: 'center', marginTop:'45px'}}> 
              <Paper> 
                <br/>
                <FormControl>
                    {/* Get input, numbers only */}
                    <Input 
                        type="number"
                        value={this.max_weight}
                        onChange={this.onTextChange}
                        endAdornment={<InputAdornment position="end">lbs</InputAdornment>}
                    />
                    <FormHelperText>Weight</FormHelperText>  
                    <br/>

                    {/* Radio buttons for week selection */}
                    <RadioGroup row> 
                        <FormControlLabel value="week1" control={<Radio />} label="Week 1" labelPlacement="bottom" 
                            onChange={() => this.calcWeightAndReps(week1, 5)}/>
                        <FormControlLabel value="week2" control={<Radio />} label="Week 2" labelPlacement="bottom"
                            onChange={() => this.calcWeightAndReps(week2, 5)}/>
                        <FormControlLabel value="week3" control={<Radio />} label="Week 3" labelPlacement="bottom"
                            onChange={() => this.calcWeightAndReps(week3, 5)}/>
                        <FormControlLabel value="deload" control={<Radio />} label="Deload" labelPlacement="bottom"
                            onChange={() => this.calcWeightAndReps(deload, 5)}/>
                    </RadioGroup>
                </FormControl>
                </Paper>
                <br/><br/>

                {/* Table */}
                <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell align="right">Weight</TableCell>
                            <TableCell align="right">Reps</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align="right">Set 1</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="right">Set 2</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="right">Set 3</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

              </Paper>             
            </Container>
          </div>
        )
    }
}

export default Main;