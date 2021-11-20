import React, { Component } from "react";
import { connect } from "react-redux";
import {Redirect} from 'react-router-dom' 
import Nav from "./nav";
import Question from "./questions";



class Home extends Component{
    state={
        answered:false
    }

    handleOnClick=()=>{
        this.setState({
            answered: !this.state.answered
        })
    }
render(){
    console.log('Answered:', this.props.answeredQuestions);
    console.log('unanswered:',this.props.unansweredQuestions);
    const {authedUser} = this.props
    console.log(authedUser)

    const unansweredQuestions = this.props.unansweredQuestions;
    const answeredQuestions = this.props.answeredQuestions;
    const {answered} = this.state
    if(authedUser === null ){
        return <Redirect to='/' />
    }
    return(
        <div>
            <Nav/>
            {answered !== true?
                <div>
                    <div>
                        <button  style={{border:"1px solid cyan"}}>Unanswered question</button>
                        <button onClick={this.handleOnClick}>Answered question</button>
                        <ul>
                            {unansweredQuestions.map((unansweredQuestion)=>(
                                <li key = {unansweredQuestion.id} style={{listStyleType:'none'}} >
                                    <Question answered={answered} qsID = {unansweredQuestion.id} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                :
                <div>
                    <div>
                        <button onClick={this.handleOnClick}>Unanswered question</button>
                        <button style={{border:"1px solid cyan"}}>Answered question</button>
                    </div>
                    <ul>
                        {answeredQuestions.map((answeredQuestion)=>(
                            <li key = {answeredQuestion.id}>
                                <Question answered={answered} qsID = {answeredQuestion.id} />
                            </li>
                        ))}
                    </ul>
                </div>
            }
        </div>
    )
}
}

function mapStateToProps ({questions,authedUser}){
    const questionValues = Object.values(questions);
    const answeredQuestions = questionValues.filter((question)=>
        question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser) 
    ).sort((a,b)=>b.timestamp-a.timestamp)

    const unansweredQuestions = questionValues.filter((question)=>
        !question.optionOne.votes.includes(authedUser) && !question.optionTwo.votes.includes(authedUser)
    ).sort((a,b)=>b.timestamp-a.timestamp)

    return{
        answeredQuestions,
        unansweredQuestions,
        authedUser
    }
}

export default connect(mapStateToProps)(Home);