import React, { Component } from "react";
import { connect } from "react-redux";
import {Link,Redirect} from 'react-router-dom'


class QuestionPoll extends Component{
    render(){
        if(this.props.authedUser === null ){
            return <Redirect to='/' />
        }
        console.log(this.props.authedUser)
        const{numOfVotes,optionOneVotes,optionTwoVotes} = this.props
        console.log(numOfVotes,optionOneVotes,optionTwoVotes)
        return(
            <div style={{marginBottom:'50px'}}>
                    <h1>Results:</h1>
                    <h2>{this.props.author} asks:</h2>
                    <img src = {this.props.authorAvatar} alt={this.props.author} style={{width:'20%',borderRadius:'50%',float:'left'}} />
                    <div>
                        <h3>Would you rather...?</h3>
                        {this.props.selcetedOption === 'optionOne'? (
                            <>
                                <div style={{border:'1px solid cyan'}}>{this.props.optionOne}<span style={{opacity:'50%', color:'red'}} >{`<=== Your answer`}</span></div>
                                <p>{`${optionOneVotes} out of ${numOfVotes} votes`}</p>
                                <div  style={{color:'red' , marginBottom:'20px'}} >or</div>
                                <div>{this.props.optionTwo}</div>
                                <p>{`${optionTwoVotes} out of ${numOfVotes} votes`}</p>
                            </>)
                        :
                            (
                            <>
                                <div>{this.props.optionOne}</div>
                                <p>{`${optionOneVotes} out of ${numOfVotes} votes`}</p>
                                <div style={{color:'red' , marginBottom:'20px'}} >or</div>
                                <div style={{border:'1px solid cyan'}} >{this.props.optionTwo}<span style={{opacity:'50%', color:'red'}} >{`<=== Your answer`}</span></div>
                                <p>{`${optionTwoVotes} out of ${numOfVotes} votes`}</p>
                            </>)
                        }
                        <Link to='/home'><button>Back</button></Link>
                            
                    </div>
                </div>
        )
    }
}

function mapStateToProps({authedUser,questions,users},{qsID}){
    if(authedUser===null){
        return{authedUser:null}
    }
    const question = questions[qsID]
    const optionVotes = question.optionOne.votes
    const optionOne = question.optionOne.text
    const optionTwo = question.optionTwo.text
    const selcetedOption = optionVotes.filter((voter)=>voter === authedUser).length===1? 'optionOne' : 'optionTwo'
    const author = questions[qsID].author
    const authorAvatar = users[author].avatarURL
    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;
    const numOfVotes = optionOneVotes+optionTwoVotes;
    return{
        author,
        authorAvatar,
        selcetedOption,
        question,
        optionOne,
        optionTwo,
        authedUser,
        numOfVotes,
        optionOneVotes,
        optionTwoVotes
    }
}

export default connect(mapStateToProps)(QuestionPoll)