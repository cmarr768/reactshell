import React from 'react';
import CommentForm from './CommentForm.jsx';
import CommentList from './CommentList.jsx';

class App extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            comments: []
        };
    }
    handleSubmit(newComment) {
        this.setState({ comments: this.state.comments.concat(newComment) });
    }
    render() {
        return (
            <div>
            <CommentForm onSubmit={this.handleSubmit} />
            <CommentList comments={this.state.comments} />
            </div>
        );
    }
}

export default App;