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

// Week percentages and reps
const week1 = [0.65, 0.75, 0.85];
const week2 = [0.7, 0.8, 0.9];
const week3 = [0.75, 0.85, 0.95];
const deload = [0.4, 0.5, 0.6];
const wk1reps = [5,5,"5+"];
const wk2reps = [3,3,"3+"];
const wk3reps = [5,3,"1+"];
const dldreps = [5,5,5];

class Main extends Component {
    
    state = {
        max_weight: 0,
        rows: []
    }
    
    onTextChange = (e) => {
        this.setState({max_weight: e.target.value})
        this.calcWeightAndReps()
    }

    createRow = (setNum, weight, reps) =>{
        return {setNum, weight, reps}
    }

    calcWeightAndReps = (week, reps) => {
        if(week === week1){
            this.setState(
                {
                    rows: [
                        this.createRow('Set 1', week1[0]*this.state.max_weight, wk1reps[0]),
                        this.createRow('Set 2', week1[1]*this.state.max_weight, wk1reps[1]),
                        this.createRow('Set 3', week1[2]*this.state.max_weight, wk1reps[2])
                    ]
                }
            )
        }

        else if(week === week2){
            this.setState(
                {
                    rows: [
                        this.createRow('Set 1', week2[0]*this.state.max_weight, wk2reps[0]),
                        this.createRow('Set 2', week2[1]*this.state.max_weight, wk2reps[1]),
                        this.createRow('Set 3', week2[2]*this.state.max_weight, wk2reps[2])
                    ]
                }
            )
        }

        else if(week === week3){
            this.setState(
                {
                    rows: [
                        this.createRow('Set 1', week3[0]*this.state.max_weight, wk3reps[0]),
                        this.createRow('Set 2', week3[1]*this.state.max_weight, wk3reps[1]),
                        this.createRow('Set 3', week3[2]*this.state.max_weight, wk3reps[2])
                    ]
                }
            )
        }

        else if(week === deload){
            this.setState(
                {
                    rows: [
                        this.createRow('Set 1', deload[0]*this.state.max_weight, dldreps[0]),
                        this.createRow('Set 2', deload[1]*this.state.max_weight, dldreps[1]),
                        this.createRow('Set 3', deload[2]*this.state.max_weight, dldreps[2])
                    ]
                }
            )
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
                            onChange={() => this.calcWeightAndReps(week1, wk1reps)}/>
                        <FormControlLabel value="week2" control={<Radio />} label="Week 2" labelPlacement="bottom"
                            onChange={() => this.calcWeightAndReps(week2, wk2reps)}/>
                        <FormControlLabel value="week3" control={<Radio />} label="Week 3" labelPlacement="bottom"
                            onChange={() => this.calcWeightAndReps(week3, wk3reps)}/>
                        <FormControlLabel value="deload" control={<Radio />} label="Deload" labelPlacement="bottom"
                            onChange={() => this.calcWeightAndReps(deload, dldreps)}/>
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
                            <TableCell align="right">Weight (lbs)</TableCell>
                            <TableCell align="right">Reps</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.rows.map(row => (
                            <TableRow key={row.setNum}>
                                <TableCell  component="th" scope="row">
                                    {row.setNum}
                                </TableCell>
                                <TableCell align="right">{row.weight}</TableCell>
                                <TableCell align="right">{row.reps}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

              </Paper>             
            </Container>
          </div>
        )
    }
}

export default Main;