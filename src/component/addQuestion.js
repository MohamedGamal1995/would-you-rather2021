import React, { Component } from "react";
import { connect } from "react-redux";
import {addNewQuestion} from '../actions/share';
import {Redirect} from 'react-router-dom' 
import LoadingBar from 'react-redux-loading-bar'
import Nav from "./nav";




class AddQuestion extends Component{
    state={
        optionOne:'',
        optionTwo:'',
        valueAdded:false
    }

    handleChange=(e)=>{
        const target = e.target.className
        if(target === 'optionOne'){
            this.setState({
                optionOne:e.target.value
            })
        }else{
            this.setState({
                optionTwo:e.target.value
            })
        }
        
    }

    onAdd=(e)=>{
        e.preventDefault()
        const optionOneText = this.state.optionOne;
        const optionTwoText = this.state.optionTwo;
        const author = this.props.authedUser;
        const {dispatch} = this.props 
        dispatch(addNewQuestion(optionOneText,optionTwoText,author))
        this.setState({
            valueAdded:true
        })
    }
    render(){
        console.log(this.state)
        if(this.props.authedUser===null){
            return<Redirect to='/'/>
        }
        if(this.props.addedDone === true){
           return <Redirect to='/home' />
        }
        return(
            <>
                <Nav />
                <header>
                    <LoadingBar />
                </header>
                <h1>Add new Question</h1>
                <h3>Would you rather...</h3>
                <form onSubmit={this.onAdd}>
                    <input type='text' required placeholder='option one' className='optionOne' onChange={this.handleChange} />
                    <div>or</div>
                    <input type='text' required placeholder='option two' className='optionTwo' onChange={this.handleChange} />
                    <hr/>
                    <button type='submit' disabled={this.state.valueAdded}>Add</button>
                </form>

            </>
        )
    }
}

function mapStateToProps({authedUser,addedDone}){
    return{authedUser,addedDone}
}

export default connect(mapStateToProps)(AddQuestion)