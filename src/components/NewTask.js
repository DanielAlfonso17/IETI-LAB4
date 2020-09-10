import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import DatePicker from 'react-datepicker';
import Button from '@material-ui/core/Button';
import moment from "moment";
import Dialog from '@material-ui/core/Dialog';
import './NewTask.css';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DialogTitle from '@material-ui/core/DialogTitle';
import 'react-datepicker/dist/react-datepicker.css';

export default class NewTask extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      status: '',
      dueDate: moment(),
      descripcion: '',
      responsable: '',
      email: ''
    }


    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleResponsableChange = this.handleResponsableChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }


  handleDescriptionChange(event){
    this.setState({
      descripcion: event.target.value
    })
  }

  handleEmailChange(event){
    this.setState({
      email: event.target.value
    })
  }

  handleResponsableChange(event){
    this.setState({
      responsable: event.target.value
    })
  }

  handleOpen(){
    this.setState({
      open:true
    })
  }

  handleClose(){
    this.setState({
      open: false
    });
  }

  handleStatusChange(event){
    this.setState({
      status: event.target.value
    })
  }

  handleDateChange(date) {
      this.setState({
          dueDate: date
      });

  }

  handleSubmit(event){
    const task = {
      description: this.state.descripcion,
      responsable:{
        nombre: this.state.responsable,
        email: this.state.email
      },
      dueDate: this.state.dueDate.format("DD-MM-YYYY"),
      status: this.state.status
    }
    this.props.newTask(task);
    event.preventDefault();
  }

  render(){
    return(
      <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <Fab color="primary" aria-label="add" onClick={this.handleOpen}>
          <AddIcon />
        </Fab>
        <Dialog  onClose={this.handleClose} fullWidth open={this.state.open}>
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Add Task
        </DialogTitle>
        <form className="form-task"onSubmit={this.handleSubmit}>

            <FormControl margin="normal" required>
                <InputLabel htmlFor="descripcion">Descripción</InputLabel>
                <Input id="descripcion" name="descripcion" onChange={this.handleDescriptionChange} autoComplete="email" autoFocus multiline={true}/>
            </FormControl>
            <br/>
            <FormControl margin="normal" required>
                <InputLabel htmlFor="res">Responsable</InputLabel>
                <Input id="res" name="res" autoComplete="email" onChange={this.handleResponsableChange} autoFocus multiline={true}/>
            </FormControl>
            &nbsp;&nbsp;
            <FormControl margin="normal" required>
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input id="email" name="email" autoComplete="email" onChange={this.handleEmailChange} autoFocus multiline={true}/>
            </FormControl>
            <br/>
            <FormControl margin="normal" required>
                <InputLabel htmlFor="status">Status</InputLabel>
                <Select labelId="demo-simple-select-label" id="demo-simple-select" value={this.state.status} onChange={this.handleStatusChange}>
                  <MenuItem value={"Ready"}>Ready</MenuItem>
                  <MenuItem value={"In Progress"}>InProgress</MenuItem>
                  <MenuItem value={"Finalized"}>Finalized</MenuItem>
                </Select>
            </FormControl>
            <br/>
            <br/>
            <DatePicker id="due-date" selected={this.state.dueDate} placeholderText="Due date" onChange={this.handleDateChange}></DatePicker>
            <br/>
            <br/>
            <Button type="submit" onClick={this.handleClose} color="primary" variant="contained">
              Add
            </Button>
        </form>
        <br/>
        </Dialog>
      </div>
    );
  }
}
