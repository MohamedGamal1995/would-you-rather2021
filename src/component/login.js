import React, {Component} from "react";
import { connect } from "react-redux";
import { userAuth } from "../actions/userAuth";
import {Redirect} from 'react-router-dom' ;

class Login extends Component{
    state={
        id:undefined,
        disabled:true
    }
    handleAuthedUser = (id)=>{
        this.props.dispatch(userAuth(id))
    }

    render(){
        const {users,authedUser,loading} = this.props
        if(authedUser!== null){
            return <Redirect to='/home'/>
        }

        if(loading === true){
            return <img src = 'https://c.tenor.com/hQz0Kl373E8AAAAi/loading-waiting.gif' alt='loading' />
        }

        return(
            <div className='main-log'>
                <h1>Would you rather App</h1>
                <h3>login</h3>
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    this.handleAuthedUser(this.state.id)
                }}>
                    <select onChange= {(e)=>{
                        this.setState({
                            id:e.target.value,
                            disabled:false
                        })
                    }}>
                        <option defaultValue='choose user' hidden>choose user...</option>
                        {this.props.ids.map((id)=>(
                            <option value={id} key={id}>{users[id].name}</option>
                        ))}
                    </select>
                    <button type='submit' disabled={this.state.disabled}>Log in</button>
                </form>
            </div>
        )
    }
}

export default connect(({users,authedUser,loading})=>({
    ids: Object.keys(users),
    users,
    authedUser,
    loading
}))(Login)