import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';


import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class SurveyList extends Component {
    componentDidMount() {
        this.props.fetchSurveys();
    }

    renderCharts(yes, no) {
        var total = yes + no;
        const options = {
            animationEnabled: true, 
            height: 240, 
            data: [{
                type: "doughnut", 
                showInLegend: false, 
                indexLabel: "{name}: {y}",
                dataPoints: [
                    {name: "yes", y: yes, color: "#FFC53A"},
                    {name: "no", y: no, color: "#3D5A6C" }
                ]
            }]
        }
        return(
            <div className="chart-wrapper">
                <div className="yes-title"><b>{yes} yes's</b></div>
                <div className="total-title"><b>{total} total</b></div>
                <div className="no-title"><b>{no} no's</b></div>
                <CanvasJSChart options={options} />
            </div>
        );
    }

    renderSurveys() {
        return this.props.surveys.reverse().map(survey => {
            return (
                <div className="survey-card" key={survey._id}>
                    <div className="survey-card-content">
                        <h3>{survey.title}</h3>
                        <p className="survey-subtitle">subject:</p>
                        <p>{survey.subject}</p>
                        <p className="survey-subtitle">body:</p>
                        <p>{survey.body}</p>
                        <p className="survey-subtitle">sent:</p>
                        <p> {new Date(survey.dateSent).toLocaleDateString()} </p>
                    </div>
                    <div className="survey-card-results">
                        {survey.lastResponded && <div><p className="survey-subtitle">last response:</p> <p>{new Date(survey.lastResponded).toLocaleDateString()}</p></div>}
                        {this.renderCharts(survey.yes, survey.no)}
                    </div>
                </div>
            )
        });
    }

    render() {
        return(
            <div className="surveylist-wrapper">
                <h2>Your Surveys</h2>
                <div>{this.renderSurveys()}</div>
            </div>
        );
    }
}

function mapStateToProps({ surveys }) {
    return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);