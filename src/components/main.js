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

// Week percentages
const week1 = [0.65, 0.75, 0.85];
const week2 = [0.7, 0.8, 0.9];
const week3 = [0.75, 0.85, 0.95];
const deload = [0.4, 0.5, 0.6];

class Main extends Component {
    
    
    state = {
        max_weight: 0
    }
    
    onTextChange = (e) => {
        this.setState({max_weight: e.target.value})
    }

    render() {
        return (
            <div className="title">
            <br/>
            <h1>Wendler's 531 Assistant</h1> 
            <Container fixed style={{background: 'red', textAlign: 'center', marginTop:'50px'}}> 
              <Paper> 
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
                        <FormControlLabel value="week1" control={<Radio />} label="Week 1" labelPlacement="bottom" onChange={() => console.log("hello")}/>
                        <FormControlLabel value="week2" control={<Radio />} label="Week 2" labelPlacement="bottom"/>
                        <FormControlLabel value="week3" control={<Radio />} label="Week 3" labelPlacement="bottom"/>
                        <FormControlLabel value="deload" control={<Radio />} label="Deload" labelPlacement="bottom"/>
                    </RadioGroup>
                </FormControl>


              </Paper>             
            </Container>
          </div>
        )
    }
}

export default Main;