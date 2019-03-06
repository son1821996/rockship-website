import React, { Component } from 'react';
import { object } from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles } from '@material-ui/core/styles';

import '../../stylesheets/ApplicationPage/Form.scss';

const styling = theme => ({
  textFieldForm: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 480,
    color: '#000000',
    position: 'relative',
    top: '40px',
  },
  cssLabelForm: {
    color: '#000000',
  },
  cssUnderlineForm: {
    '&:before': {
      borderBottomColor: '#ffffff',
    },
    '&:after': {
      borderBottomColor: '#d8d8d8',
    },
  },
});

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  }

  render() {
    const {
      name,
    } = this.state;
    const { classes } = this.props;
    return (
      <div className="form" style={{ display: 'flex' }}>
        <div className="left" style={{ display: 'flex', flexDirection: 'column' }}>
          <FormControl className={classes.textFieldForm}>
            <InputLabel
              htmlFor="custom-css-input"
              classes={{
                root: classes.cssLabelForm,
              }}
            >
              Your name:
            </InputLabel>
            <Input
              id="custom-css-inpu"
              classes={{
                underline: classes.cssUnderlineForm,
              }}
              value={name}
              onChange={this.handleChange('name')}
              autoComplete="off"
            />
          </FormControl>
          <FormControl className={classes.textFieldForm}>
            <InputLabel
              htmlFor="custom-css-input"
              classes={{
                root: classes.cssLabelForm,
              }}
            >
              Enter your email address
            </InputLabel>
            <Input
              id="custom-css-inpu"
              classes={{
                underline: classes.cssUnderlineForm,
              }}
              value={name}
              onChange={this.handleChange('name')}
              autoComplete="off"
            />
          </FormControl>
        </div>
        <div className="right" style={{ display: 'flex', flexDirection: 'column' }}>
          <FormControl className={classes.textFieldForm}>
            <InputLabel
              htmlFor="custom-css-input"
              classes={{
                root: classes.cssLabelForm,
              }}
            >
              Enter your phone number
            </InputLabel>
            <Input
              id="custom-css-inpu"
              classes={{
                underline: classes.cssUnderlineForm,
              }}
              value={name}
              onChange={this.handleChange('name')}
              autoComplete="off"
            />
          </FormControl>
          <FormControl className={classes.textFieldForm}>
            <InputLabel
              htmlFor="custom-css-input"
              classes={{
                root: classes.cssLabelForm,
              }}
            >
              Select your CV
            </InputLabel>
            <Input
              id="custom-css-inpu"
              classes={{
                underline: classes.cssUnderlineForm,
              }}
              value={name}
              onChange={this.handleChange('name')}
              autoComplete="off"
            />
          </FormControl>
        </div>
      </div>
    );
  }
}

Form.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: object.isRequired,
};

export default withStyles(styling)(Form);
