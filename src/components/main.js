import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputAdornment from '@material-ui/core/InputAdornment';

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
                
                    {/* Radio buttons for week selection */}
                </FormControl>
              </Paper>             
            </Container>
          </div>
        )
    }
}

export default Main;