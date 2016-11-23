import React from 'react';

class CommentForm extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit({ author: this.refs.author.value, text: this.refs.text.value });
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="Your name" ref="author" />
                <input type="text" placeholder="Say something..." ref="text" />
                <input type="button" value="Post" onClick={this.handleSubmit} />
            </div>)
            ;
    }
};

CommentForm.propTypes = {
    onSubmit: React.PropTypes.func.isRequired
};

CommentForm.defaultProps = {
};

export default CommentForm;