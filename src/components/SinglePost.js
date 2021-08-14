//Load single post page

import React, { Component } from 'react';
import moment from 'moment';
 
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';

 
class SinglePost extends Component {
 
    showPost = (props) => {
        if (!props.post) return null;
 
        const {title, author, body, category, datestamp} = this.props.post;
 
        return (
            <React.Fragment>
 
                <Paper className="single_post p-4"> 
                    <h4 className="p-2 fw-bold">Title: {title}</h4>
                    <Divider light />
                    <p className="p-2"><b>Autor:</b> {author}</p>
                    <Divider light />
                    <p className="p-2"><b>Content:</b> <br/>{body}</p>
                    <Divider light />
                    <p className="p-2"><b>Category:</b> {category}</p>
                    <Divider light />
                    <h5 className="p-2">Create At: {moment(datestamp).format('DD MM YYYY')}</h5>
                    
                </Paper>
            </React.Fragment>
        )
 
    }
    render() {
        return (
            <div className=" col-md-10 mt-5">
                {this.showPost(this.props)} 
            </div>
        );
    }
}
 
 
export default SinglePost;