import React, { Component } from "react";
import { connect } from "react-redux";
import {Link,Redirect} from 'react-router-dom'

class Questions extends Component{
    render(){
        console.log(this.props)
        const {answered,qsID,authedUser} = this.props
        if(authedUser === null ){
            return <Redirect to='/' />
        }
        if(answered !== true){
            return(
                <div style={{marginBottom:'50px'}}>
                    <h2>{this.props.author} asks:</h2>
                    <img src = {this.props.authorAvatar} alt={this.props.author} style={{width:'10%',borderRadius:'50%',float:'left'}} />
                    <div>
                        <h3>Would you rather...?</h3>
                        <div>{this.props.optionOne}</div>
                        <div style={{color:'red'}}>or</div>
                        <div>{this.props.optionTwo}</div>
                        <Link to={{
                            pathname : `/question/${this.props.qsID}`,
                            state:{qsID:qsID,authedUser:authedUser}
                        }}><button>Answer</button> </Link>
                    </div>
                </div>
                
            )
        }else{
            return(
                <div style={{marginBottom:'50px'}}>
                    <h2>{this.props.author} asks:</h2>
                    <img src = {this.props.authorAvatar} alt={this.props.author} style={{width:'10%',borderRadius:'50%',float:'left'}} />
                    <div>
                        <h3>Would you rather...?</h3>
                        <div>{this.props.optionOne}</div>
                        <div style ={{color:'red'}} >or</div>
                        <div>{this.props.optionTwo}</div>
                        <Link  to={{
                            pathname : `/question/${this.props.qsID}`,
                            state:{qsID:qsID,authedUser:authedUser}
                        }} ><button>View poll</button> </Link>
                    </div>
                </div>
                
            )
        }
    }
}

function mapStateToProps ({questions,users,authedUser},props){
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

export default connect(mapStateToProps)(Questions)