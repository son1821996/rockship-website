/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import { object } from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import ArrowRightAlt from '@material-ui/icons/ArrowRightAlt';
import { withStyles } from '@material-ui/core/styles';

// import purple from '@material-ui/core/colors/purple';

import '../../stylesheets/Contact/ContactForm.scss';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
    color: '#ffffff',
    position: 'relative',
    top: '40px',
  },
  cssLabel: {
    color: '#ffffff',
  },
  cssUnderline: {
    '&:after': {
      borderBottomColor: '#ffffff',
    },
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: '100%',
  },
});

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      address: '',
      phoneNumber: '',
      content: '',
      // eslint-disable-next-line react/no-unused-state
      companySize: '',
      companyLocation: [],
      interested: [],
      description: '',
      isShowFirstForm: true,
      isShowSecondForm: false,
      isShowThirdForm: false,
    };
  }

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  }

  onChangeSizeCompany = (e) => {
    this.setState({
      // eslint-disable-next-line react/no-unused-state
      companySize: e.currentTarget.value,
    });
  }

  onChangeSizeLocation = (e) => {
    const { companyLocation } = this.state;
    const checkedArray = companyLocation;
    const selectedValue = e.target.value;
    if (e.target.checked === true) {
      checkedArray.push(selectedValue);
      this.setState({
        companyLocation: checkedArray,
      });
    } else {
      const valueIndex = checkedArray.indexOf(selectedValue);
      checkedArray.splice(valueIndex, 1);
      this.setState({
        companyLocation: checkedArray,
      });
    }
  }

  onChangeInterested = (e) => {
    const { interested } = this.state;
    const checkedArray = interested;
    const selectedValue = e.target.value;
    if (e.target.checked === true) {
      checkedArray.push(selectedValue);
      this.setState({
        interested: checkedArray,
      });
    } else {
      const valueIndex = checkedArray.indexOf(selectedValue);
      checkedArray.splice(valueIndex, 1);
      this.setState({
        interested: checkedArray,
      });
    }
  }

  onClickToShowFirstForm = () => {
    this.setState({
      isShowFirstForm: true,
      isShowSecondForm: false,
    });
  }

  onClickToShowThirdForm = () => {
    this.setState({
      isShowSecondForm: false,
      isShowThirdForm: true,
    });
  }

  onClickToShowSecondForm = () => {
    this.setState({
      isShowFirstForm: false,
      isShowSecondForm: true,
      isShowThirdForm: false,
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    const {
      name, email, address, phoneNumber, content, description,
      isShowFirstForm, isShowSecondForm, isShowThirdForm,
    } = this.state;
    const { classes } = this.props;
    const listCompanySize = ['Single founder', '3 - 10 engineers', '10 - 50 engineers', '>50 engineers'];
    const listCompanyLocation = ['US', 'Europe', 'East Asia', 'Other'];
    const listInterested = ['Live Streaming', ' Cryptocurrency Exchange', ' Payment Integration', ' VoIP routing app', ' Facility Booking System', 'Other'];
    return (
      <form onSubmit={this.onSubmit} className="contact-form">
        {isShowFirstForm && (
        <div className="greeting">
        Hello, Get in touch with us!
        </div>
        )}
        {isShowSecondForm && (
          <div className="greeting" onClick={this.onClickToShowFirstForm} style={{ cursor: 'pointer' }}>
          &lt; Tell us more about your business!
          </div>
        )}
        {isShowThirdForm && (
          <div className="greeting" onClick={this.onClickToShowSecondForm} style={{ cursor: 'pointer' }}>
          &lt; Tell us more about your business!
          </div>
        )}
        {isShowFirstForm && (
          <div className="form-control" style={{ display: 'flex', flexDirection: 'column' }}>
            <FormControl className={classes.margin}>
              <InputLabel
                htmlFor="custom-css-standard-input"
                classes={{
                  root: classes.cssLabel,
                }}
              >
                Name
              </InputLabel>
              <Input
                id="custom-css-standard-input"
                classes={{
                  underline: classes.cssUnderline,
                }}
                value={name}
                onChange={this.handleChange('name')}
                autoComplete="off"
              />
            </FormControl>
            <FormControl className={classes.margin}>
              <InputLabel
                htmlFor="custom-css-standard-input"
                classes={{
                  root: classes.cssLabel,
                }}
              >
                Email
              </InputLabel>
              <Input
                id="custom-css-standard-input"
                classes={{
                  underline: classes.cssUnderline,
                }}
                value={email}
                onChange={this.handleChange('email')}
                autoComplete="off"
              />
            </FormControl>
            <FormControl className={classes.margin}>
              <InputLabel
                htmlFor="custom-css-standard-input"
                classes={{
                  root: classes.cssLabel,
                }}
              >
                Address
              </InputLabel>
              <Input
                id="custom-css-standard-input"
                classes={{
                  underline: classes.cssUnderline,
                }}
                value={address}
                onChange={this.handleChange('address')}
                autoComplete="off"
              />
            </FormControl>
            <FormControl className={classes.margin}>
              <InputLabel
                htmlFor="custom-css-standard-input"
                classes={{
                  root: classes.cssLabel,
                }}
              >
                Phone
              </InputLabel>
              <Input
                id="custom-css-standard-input"
                classes={{
                  underline: classes.cssUnderline,
                }}
                value={phoneNumber}
                onChange={this.handleChange('phoneNumber')}
                autoComplete="off"
              />
            </FormControl>
            <FormControl className={classes.margin}>
              <InputLabel
                htmlFor="custom-css-standard-input"
                classes={{
                  root: classes.cssLabel,
                }}
              >
                Content
              </InputLabel>
              <Input
                id="custom-css-standard-input"
                classes={{
                  underline: classes.cssUnderline,
                }}
                value={content}
                onChange={this.handleChange('content')}
                autoComplete="off"
              />
            </FormControl>
            <div className="form-bottom">
              <div
                className="tell-more"
                style={{ alignItems: 'center', cursor: 'pointer' }}
                onClick={this.onClickToShowSecondForm}
              >
                <span>Tell us more about your business!</span>
                <ArrowRightAlt />
              </div>
              <button type="submit" className="form-bottom-right">
                Send us
              </button>
            </div>
          </div>
        )}
        {isShowSecondForm && (
          <div className="contact-form">
            <div className="second-form-title">Company name</div>
            <div className="second-form-subtitle">Company size</div>
            <div
              className="choose-option-section"
            >
              {listCompanySize.map((item, i) => (
                // eslint-disable-next-line jsx-a11y/label-has-associated-control
                <label className="radio-item" key={`key_${i}`}>
                  <input
                    type="radio"
                    name="company-size"
                    value={item}
                    onChange={this.onChangeSizeCompany}
                  />
                  <span className="value-on-web">{item}</span>
                  <span className="checkmark" />
                </label>
              ))}
            </div>

            <div className="second-form-subtitle">Company location</div>
            <div className="choose-option-section">
              {listCompanyLocation.map((item, i) => (
                // eslint-disable-next-line jsx-a11y/label-has-associated-control
                <label className="checkbox-item">
                  <input
                    type="checkbox"
                    name="company-location"
                    value={item}
                    // eslint-disable-next-line react/no-array-index-key
                    key={`key_${i}`}
                    onChange={this.onChangeSizeLocation}
                  />
                  <span className="value-on-web">{item}</span>
                  <span className="checkmark" />
                </label>
              ))}
            </div>
            <div className="form-bottom">
              <div />
              <div className="form-bottom-right-second-form" onClick={this.onClickToShowThirdForm}>
                Next
              </div>
            </div>
          </div>
        )}
        {isShowThirdForm && (
          <div className="contact-form">
            <div className="third-form-title">What area are you interested in?</div>
            <div style={{
              display: 'flex', flexWrap: 'wrap', marginTop: '12px', marginBottom: '0px', padding: '16px',
            }}
            >
              {listInterested.map((item, i) => (
                // eslint-disable-next-line jsx-a11y/label-has-associated-control
                <label className="checkbox-item">
                  <input
                    type="checkbox"
                    name="company-location"
                    value={item}
                    // eslint-disable-next-line react/no-array-index-key
                    key={`key_${i}`}
                    onChange={this.onChangeInterested}
                  />
                  <span className="value-on-web">{item}</span>
                  <span className="checkmark" />
                </label>
              ))}
            </div>
            <TextField
              id="outlined-full-width"
              label="Project Description"
              multiline
              rows="20"
              defaultValue={description}
              onChange={this.handleChange('description')}
              className={classes.textField}
              margin="normal"
              fullWidth
              variant="outlined"
            />
            <div
              className="form-bottom"
              style={{
                flexDirection: 'unset',
              }}
            >
              <div />
              <div
                className="form-bottom-right-third-form"
              >
                Save
              </div>
            </div>
          </div>
        )}
      </form>
    );
  }
}

ContactForm.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: object.isRequired,
};

export default withStyles(styles)(ContactForm);
