import React from 'react';
import {fetchUser} from '../action';
import {connect} from 'react-redux';

class UserHeader extends React.Component{

    render(){
        const user = this.props.users;
        if(!user) return null;
        return(
            <div>
                {user.name}            
            </div>
        );
    }
}

const mapToStateProps = (state, ownProps)=>{
    return {users : state.users.find(user=> user.id === ownProps.userId)};
}
export default connect(mapToStateProps, { fetchUser })(UserHeader);