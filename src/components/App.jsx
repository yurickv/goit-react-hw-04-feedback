import React, { useState } from 'react';
import { Feedback } from "./Feedback/feedback";
import { Statistics } from "./Statistic/statistic";
import { Section } from "./Section/section";
import { Notification } from "./Notification/notification";


export function App() {
  const [good, setGood] = useState(0);
  const [neitral, setNeitral] = useState(0);
  const [bad, setBad] = useState(0);

  const buttons = ['Good', 'Neitral', 'Bad'];

  const onLeaveFeedback = (button) => {
    if (button === 'Good') {
      setGood(prev => prev + 1)
    }
    else if (button === 'Neitral') {
      setNeitral(prev => prev + 1);
    }
    else if (button === 'Bad') {
      setBad(prev => prev + 1);
    };
  }
  const countTotalFeedback = () => {
    return good + neitral + bad;
  }
  const countPositiveFeedbackPercentage = () => {

    const persent = (good / countTotalFeedback()) * 100;
    return Math.round(persent)

  }

  return (
    <div style={appStyle}>
      <Section title="Please leave feedback">
        <Feedback
          options={buttons}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback()
          ? (<Statistics
            good={good}
            neutral={neitral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />)
          : (<Notification message="There is no feedback" />)
        }


      </Section>
    </div>
  );








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