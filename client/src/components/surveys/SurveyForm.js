import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';

import formFields from './formFields'; 
import SurveyField from './SurveyField';

class SurveyForm extends Component {

    //helper function for rendering form fields
    renderFields() {
        return _.map(formFields, ({label, name}) => {
            return <Field key={name} component={SurveyField} type="text" label={label} name={name}/>
        })
    }

    render() {
        return(
            <div>
                <h1>Create your Survey</h1>
                <p>Please fill in the following fields. You will have a chance to review your choices before sending.</p>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <Link to="/surveys" className="cancel-btn">
                        Cancel<i class="tiny material-icons">cancel</i>
                    </Link>
                    <button type="submit" className="confirm-btn">
                        Review<i class="tiny material-icons">done</i>
                    </button>
                </form>
            </div>
        )
    }
}

function validate(values) {
    const errors = {};

    errors.recipients = validateEmails(values.recipients || '');

    _.each(formFields, ({ name }) => {
        if(!values[name]) {
            errors[name] = 'You must provide a value';
        }
    });
    
    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);