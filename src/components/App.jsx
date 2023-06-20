import React from "react";
import { Feedback } from "./Feedback/feedback";
import { Statistics } from "./Statistic/statistic";
import { Section } from "./Section/section";
import { Notification } from "./Notification/notification";

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = (type) => {

    this.setState(prevState => {
      return {
        [type]: prevState[type] + 1
      }
    })
  }

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((x, y) => { return x + y; }, 0);
  }
  countPositiveFeedbackPercentage = () => {
    const persent = (this.state.good / this.countTotalFeedback()) * 100;
    return Math.round(persent)
  }
  render() {
    return (
      <div style={appStyle}>
        <Section title="Please leave feedback">
          <Feedback
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback()
            ? (<Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />)
            : (<Notification message="There is no feedback" />)
          }


        </Section>
      </div>
    );
  }







}








const appStyle = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',

  alignItems: 'center',
  gap: 20,
  fontSize: 40,
  color: '#010101'
}