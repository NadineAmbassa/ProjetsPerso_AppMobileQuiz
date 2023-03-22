import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { quizData } from '../data/quizData';


const QuizScreen = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer) => {
    if (answer.correct) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  const renderQuestion = () => {
    const { question, answers } = quizData[currentQuestion];

    return (
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{question}</Text>
        {answers.map(answer => (
          <TouchableOpacity
            key={answer.id}
            style={styles.answerButton}
            onPress={() => handleAnswer(answer)}
          >
            <Text style={styles.answerText}>{answer.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const renderResult = () => (
    <View style={styles.resultContainer}>
      <Text style={styles.resultText}>Votre score est de {score}/{quizData.length}.</Text>
      <TouchableOpacity style={styles.restartButton} onPress={restartQuiz}>
        <Text style={styles.restartText}>Recommencer le quiz</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {showResult ? renderResult() : renderQuestion()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#F6D1D8",
  },
  questionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 32,
  },
  answerButton: {
    backgroundColor: '#E5E5E5',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    width: '80%',
  },
  answerText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  resultContainer: {
    alignItems: 'center',
    justifyContent: 'center'
    
    },
  resultText:{
    fontSize: 25,
    fontWeight:"bold",
  },
  restartText:{
  fontSize: 25,
  fontWeight:"bold",
  color: '#fff',
   backgroundColor: '#008B8B',
    borderRadius: 8,
    padding: 16,
    marginBottom: 70,
  }

});
export default QuizScreen

