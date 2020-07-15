import _ from 'lodash';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import formFields from './formFields';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
    const reviewFields = _.map(formFields, ({ name, label }) => {
        return(
            <div key={name}>
                <label>{label}</label>
                <div>{formValues[name]}</div>
            </div>
        );
    });

    return(
        <div>
            <h3>Please confirm your entries below.</h3>
            <p className="title-preview">{formValues['title']}</p>
            <div className="email-field">To: {formValues['recipients']}</div>
            <div className="email-field">Subject: {formValues['subject']}</div>
            <div className="email-field-body">
                <p>{formValues['body']}</p>
                <p>Yes No</p>
            </div>
            <button className="cancel-btn" onClick={onCancel}>
                Back
            </button>
            <button 
                onClick={() => submitSurvey(formValues, history)}
                className="confirm-btn">
                Send Survey <i className="tiny material-icons">email</i>
            </button>
        </div>
    );
};

function mapStateToProps(state) {
    return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));