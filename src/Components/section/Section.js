import React, { useState } from "react";
import FeedbackOptions from "../feedbackOptions/FeedbackOptions.js";
import Notification from "../notification/Notification.js";
import Statistics from "../statistic/Statistic.js";

export default function Section({ title }) {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const changeState = (e) => {
    switch (e.target.name) {
      case "good":
        setGood(good + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const sum = countTotalFeedback();
    const positiveFeedback = sum ? (good / sum) * 100 : 0;
    return Number(positiveFeedback).toFixed(0);
  };
  const feedback = countPositiveFeedbackPercentage();
  return (
    <div>
      <h1 className="titleFitback">{title}</h1>

      <FeedbackOptions
        onLeaveFeedback={changeState}
        options={{ good, neutral, bad }}
      />

      <hr />
      {countTotalFeedback() ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={feedback}
        />
      ) : (
        <Notification message="No feedback given" />
      )}
    </div>
  );
}
