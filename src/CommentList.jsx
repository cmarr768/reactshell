import React from 'react';
import Comment from './Comment.jsx';

class CommentList extends React.Component {
    constructor() {
        super();
    }
    render() {
        var commentNodes = this.props.comments.map(function(item, i){
            return (<Comment key={i} author={item.author} text={item.text} />);
        })
        return (
            <div>
                {commentNodes}
            </div>
        );
    };
};

CommentList.propTypes = {
    comments: React.PropTypes.array.isRequired
};

CommentList.defaultProps = {
    comments: []
};

export default CommentList;