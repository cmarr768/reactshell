import React from 'react';

class Comment extends React.Component{
    render(){
        return(
            <div>
                <h4>{this.props.author}</h4>
                <span>{this.props.text}</span>
            </div>
        )
    }
};

Comment.propTypes = {
    author: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired
};

Comment.defaultProps = {
    author: '',
    text: ''
};

export default Comment;