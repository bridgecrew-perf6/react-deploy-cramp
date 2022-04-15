import React, { Component } from 'react';
import AllQuestions from './masterData.json'
import QuizOptions from './options';
class MainContainer extends Component {
    constructor() {
        super();
        this.state = {
            allQuestions: [],
            currentIndex: 0,
            correctAnswer: [],
            finalAnswer:0
        }
    }
    componentDidMount() {
        this.setState({
            allQuestions: AllQuestions.questions
        })
    }
    getNextQuestion = () => {
        this.setState({
            currentIndex: this.state.currentIndex + 1
        })
    }
    optionHandler = (givenAnswer) =>{
        givenAnswer = parseInt(givenAnswer);
        let {allQuestions,currentIndex} = this.state;
        var correctAnswer = allQuestions[currentIndex].correctIndex;
        correctAnswer = parseInt(correctAnswer);
        if(correctAnswer == givenAnswer){
            this.setState({
                finalAnswer:this.state.finalAnswer + 1
            })
        }
    }
    render() {
        console.log(this.state)
        const { allQuestions, currentIndex,finalAnswer } = this.state
        return (
            <>
                {
                    allQuestions.length !== 0 && (
                        <>
                            <p>{allQuestions[currentIndex].question}</p>
                            <div style={{display:'flex',gap:'10px'}}>
                                <QuizOptions 
                                options={allQuestions[currentIndex].answers} 
                                handler={this.optionHandler}
                                name={allQuestions[currentIndex].question.substr(0,4)}
                                />
                            </div>
                            <button
                                onClick={this.getNextQuestion}
                            >
                                {(allQuestions.length - 1 == currentIndex) ? 'Submit' : 'Next'}
                            </button>
                            <p>{finalAnswer}</p>
                        </>
                    )
                }
            </>
        )
    }
}
export default MainContainer