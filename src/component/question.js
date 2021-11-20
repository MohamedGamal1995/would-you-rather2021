import React, { Component } from "react";
import QuestionAnswer from "./questionAnswer";
import QuestionPoll from "./questionPoll";
import {Redirect} from 'react-router-dom' 
import { connect } from "react-redux";



class Quesition extends Component{

    render(){
        const {answered, qsID, authedUser} = this.props
        
        if(authedUser === null ){
            return <Redirect to='/' />
        }
        if(answered===true){
            return(
                <QuestionPoll qsID={qsID} answered={answered} />
            )
        }else{
            return(
                <QuestionAnswer qsID={qsID} answered={answered} />
            )
        }
        }
    }


function mapStateToProps({authedUser,questions},props){
    if(authedUser === null){
        return{authedUser}
    }
    const {qsID} = props.location.state
    const answered = true ? (questions[qsID].optionOne.votes.includes(authedUser) || questions[qsID].optionTwo.votes.includes(authedUser)) : false;


    return{
        answered,
        qsID,
        authedUser
    }
}

export default connect(mapStateToProps)(Quesition)
