import React, { Component } from "react";
import { connect } from "react-redux";
import {setQuestionAnswer} from '../actions/share'
import {Redirect} from 'react-router-dom' 
import LoadingBar from 'react-redux-loading-bar'



class QuestionAnswer extends Component {

    state = {
        optionValue:undefined,
        answered:false
    }

    handleOnClick = (e) => {
        const value = e.target.value;
        this.setState({
            optionValue:value,
            answered:true
        })
    }

    handleOnSubmit = (e)=>{
        e.preventDefault()
        const {dispatch,qsID,authedUser} = this.props
        const {optionValue} = this.state
        console.log(typeof(optionValue))
        dispatch(setQuestionAnswer(authedUser,qsID,optionValue))
        this.setState({
            answered:false
        })
    }
    
    render(){
        console.log(this.state)
        if(this.props.authedUser === null ){
            return <Redirect to='/' />
        }
        return(
            <>
                <form onSubmit={this.handleOnSubmit}>
                    <header>
                        <LoadingBar />
                    </header>
                    <h2>{this.props.author} asks:</h2>
                    <img src = {this.props.authorAvatar} alt={this.props.author} style={{width:'10%',borderRadius:'50%',float:'left'}} />
                    <div>
                        <h3>Would you rather...?</h3>
                        <label htmlFor='optionOne'>
                        <input type='radio' name='poll' value = 'optionOne' id='optionOne' onClick={this.handleOnClick}/>
                        {this.props.optionOne}
                        </label>
                        <div></div>
                        <label htmlFor='optionTwo'>
                        <input type='radio' name='poll' value = 'optionTwo' id='optionTwo' onClick={this.handleOnClick}/>
                        {this.props.optionTwo}
                        </label>
                        <hr />
                        <button type='submit' disabled={!this.state.answered}>submit</button>
                    </div>
                </form>
            </>
        )
    }
}

function mapStateToProps ({questions,users,authedUser},props){
    if(authedUser === null){
        return{authedUser}
    }
    const {answered,qsID} = props;
    const author = questions[qsID].author;
    const authorAvatar = users[author].avatarURL
    const optionOne = questions[qsID].optionOne.text
    const optionTwo = questions[qsID].optionTwo.text
    return{
        answered,
        qsID,
        author,
        authorAvatar,
        optionOne,
        optionTwo,
        authedUser
    }
}

export default connect(mapStateToProps)(QuestionAnswer)