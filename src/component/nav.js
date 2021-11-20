import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logout} from "../actions/userAuth";
import { connect } from "react-redux";



class Nav extends Component{
    hadnleLogout= ()=>{
        this.props.dispatch(logout())
    }
    render(){
        const {name,avatar} = this.props
        return(
            <div style={{marginBottom:'30px'}}>
                <span style={{marginRight:'20px'}}><Link to={{pathname:'/home'}}>home</Link></span>
                <span style={{marginRight:'20px'}}><Link to={{pathname:'/addquestion'}}>Add question</Link></span>
                <span style={{marginRight:'20px'}}><Link to={{pathname:'/leaderboard'}}>Leaderboard</Link></span>
                <span style={{marginRight:'20px'}}><Link to={{pathname:'/'}} onClick={this.hadnleLogout}>Logout</Link></span>
                <span style={{marginRight:'20px'}}><img src={avatar} alt={name} style={{width:'3%' , borderRadius:'50%'}} /> {name}</span>
            </div>
        )
    }
}

function mapStateToProps({users,authedUser}){
    const name = users[authedUser].name;
    const avatar = users[authedUser].avatarURL
   
    return{name,avatar}
}

export default connect(mapStateToProps)(Nav)