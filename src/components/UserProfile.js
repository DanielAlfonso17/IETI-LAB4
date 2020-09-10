import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      nombre: props.user.nombre,
      apellido: props.user.apellido,
      correo: props.user.correo
    }
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleLastNameChange(event){
    this.setState({
      apellido: event.target.value
    })
  }

  handleFirstNameChange(event){
    this.setState({
      nombre: event.target.value
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

  handleEmailChange(event){
    this.setState({
      correo: event.target.value
    })
  }

  handleSubmit(event){
    const user = {
      "nombre": this.state.nombre,
      "apellido": this.state.apellido,
      "correo": this.state.correo
    }
    this.props.profileUser(user);
    console.log(user);
    event.preventDefault();
  }

  render(){
      return(
        <div>
          <ListItemText  onClick={this.handleOpen} primary={this.props.value} />
          <Dialog  onClose={this.handleClose} fullWidth open={this.state.open}>
          <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
            User Profile
          </DialogTitle>
          <form className="form-task" onSubmit={this.handleSubmit}>
              <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="nombre">First name</InputLabel>
                  <Input type="text" id="nombre" name="nombre" onChange={this.handleFirstNameChange} value={this.state.nombre} multiline={true}/>
              </FormControl>
              <br/>
              <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="res">Last Name</InputLabel>
                  <Input
                    id="res"
                    name="res"
                    onChange={this.handleLastNameChange}
                    value={this.state.apellido}/>
              </FormControl>
              <br/>
              <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="email">Email</InputLabel>
                  <Input id="email" name="email" type="email" onChange={this.handleEmailChange} value={this.state.correo} multiline={true}/>
              </FormControl>
              <br/>
              <br/>
              <Button type="submit" onClick={this.handleClose} color="primary" variant="contained">
                Update user
              </Button>

          </form>
          <br/>
          </Dialog>
        </div>
      )
    }
}
