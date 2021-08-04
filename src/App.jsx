import './App.css';
import Statistics from './components/Statistics/Statistics';
import Main from './components/Section/Main';
import Section from './components/Section/Section';
import Container from './components/Container/Container';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Notification from './components/Notification/Notification';
import { useState } from 'react';

function App () {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const handleChangeStatistics = (e) => {
    const feedback = e.currentTarget.dataset.feedback

    switch (feedback) {
      case 'good':
        setGood((prevState) => prevState + 1)
        break
      
      case 'neutral':
        setNeutral((prevState) => prevState + 1)
        break
      
      case 'bad':
        setBad((prevState) => prevState + 1)
        break
      
      default:
        return
    }
  }

  const countTotalFeedback = () => {
    return good + neutral + bad
  }

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback()

    return Math.round((good * 100) / total)
  }

  const totalFeedback = countTotalFeedback()
  const positivePercentage = countPositiveFeedbackPercentage()

  return (
    <Main>
      <Section title="Please leave feedback">
          <Container>
             <FeedbackOptions
            options={{good, neutral, bad}}
            onChangeStatistics={handleChangeStatistics}
          />
          </Container>
      </Section>  
        
      <Section title="Statistics">
          <Container>
            {totalFeedback > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positivePercentage}
            />
            ) : (
            <Notification message="No feedback given" />
            )}
          </Container>          
      </Section>     
    </Main>
  )
}

export default App;