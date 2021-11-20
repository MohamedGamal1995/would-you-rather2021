import React, { Component } from "react";
import { connect } from "react-redux";
import {Link,Redirect} from 'react-router-dom'
import Nav from "./nav";


class Leaderboard extends Component{
    render(){
        const {usersInfo,authedUser} = this.props
        if(authedUser===null){
            return <Redirect to='/' />
        }
        return(
            <>
                <Nav />
                <div>
                    <h1>Leaderboard</h1>
                    <ol>
                    {usersInfo.map((user)=>(
                        <li key={user.id} style={{marginBottom:'70px'}}>
                            <h3>{user.name}</h3>
                            <img src={user.avatar} alt={user.id} style={{width:'10%',borderRadius:'50%',float:'left'}} />
                            <div>Number of answers: {user.numberOfAnswers}</div>
                            <div>Number of questions: {user.numberOfQuestions}</div>
                            <h5>Total: {user.total} </h5>                               
                        </li>
                    ))}
                    </ol>
                    <Link to='/'><button>Back</button></Link>
                </div>
            </>
        )
    }
}

function mapStateToProps({users,authedUser}){
    const usersInfo = Object.values(users).map((user)=>({
        name:user.name,
        id:user.id,
        avatar:user.avatarURL,
        numberOfQuestions:user.questions.length,
        numberOfAnswers:Object.keys(user.answers).length,
        total: Object.keys(user.answers).length + user.questions.length
    })).sort((a,b) => (b.total - a.total))
    return{usersInfo,authedUser}
}

export default connect(mapStateToProps)(Leaderboard)
