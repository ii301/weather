import React, { Component, Fragment } from 'react'
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography, Button, Grid, InputLabel, Input, NativeSelect, FormControl, FormHelperText, TextField } from '@material-ui/core'

const styles = {
    h3: { margin: 10, marginBottom: 10, paddingTop: 10, paddingBottom: 10 },
    select: { marginTop: 10 },
    gridItem: { textAlign: "center", paddingTop: 10, paddingBottom: 10 },
    submitButton: { textAlign: 'center' }

}

class index extends Component {

    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);


        this.state = {
            location: '',
            days: '',
            date: this.getCurrentDate(),
            dialogIsOpen: false
        }
    }

    handleClickOpen = () => {
        this.setState({ dialogIsOpen: true });
    };

    handleClose = () => {
        this.setState({ dialogIsOpen: false });
    };

    selectLocation() {
        return <Fragment>
            <FormControl>
                <InputLabel shrink htmlFor="locationSelect">Where are you Going</InputLabel>
                <NativeSelect
                    value={this.state.location}
                    onChange={this.handleChange('location')}
                    // style={styles.select}
                    input={<Input name="location" id="locationSelect" />}>
                    <option value="" disabled ></option>
                    <option value={1}>London, Uk</option>
                    <option value={2}>Nairobi, Kenya</option>
                    <option value={3}>Toronto, Canada</option>
                </NativeSelect>
                <FormHelperText>Use the dropdown to select </FormHelperText>
            </FormControl>
        </Fragment>

    }

    getCurrentDate() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();

        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }

        today = yyyy + '-' + mm + '-' + dd;
        return today
    }

    handleChange = name => event => {
        // handles the change in the value of the dropdown
        this.setState({ [name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log(this.state)
        if (this.state.location && this.state.days && this.state.date) {
            console.log("got all")

        } else {
            console.log("havent got all")
            this.setState({dialogIsOpen: true})

            var p = this.state
            for (var key in p) {
                if (p.hasOwnProperty(key)) {
                    console.log(key + " -> " + p[key]);
                    if (!p[key]) {
                        console.log("the atribute", key, "has no value")

                    }
                }
            }
        }
    }

    render() {
        return <Fragment>
            <Typography variant="h3" style={styles.h3} align="center">
                What to wear on holiday
            </Typography>

            <Typography variant="body2" style={styles.h3} align="center">
                Fill in the form below and the app will work out what to wear on your next journey abroad
            </Typography>

            <form onSubmit={this.handleSubmit}>
                <Grid container direction="row" justify="center" alignItems="center" spacing={8}>
                    <Grid item xs={12} sm={2} style={styles.gridItem}>
                        {this.selectLocation()}
                    </Grid>

                    <Grid item xs={12} sm={2} style={styles.gridItem}>
                        <TextField id="date" label="Start Date" type="date" value={this.state.date} onChange={this.handleChange('date')} InputLabelProps={{ shrink: true, }} />
                    </Grid>

                    <Grid item xs={12} sm={2} style={styles.gridItem}>
                        <TextField id="days" label="Number" value={this.state.days} onChange={this.handleChange('days')} type="number" InputLabelProps={{ shrink: true, }} />
                    </Grid>
                </Grid>

                <div style={styles.submitButton}>
                    <Button variant="contained" color="primary" type="submit" >
                        Submit
                    </Button>
                </div>
            </form>

            <div>
                <Dialog open={this.state.dialogIsOpen} onClose={this.handleClose}>
                    <DialogTitle id="alert-dialog-title">{"Missing Values"}</DialogTitle>

                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            You are missing some values Please fill in all the values
                        </DialogContentText>
                    </DialogContent>

                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary" autoFocus>
                            Ok
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </Fragment>
    }
}
export default index