//Design form controls to Add New Post

import React, { Component } from 'react';
 
class Form extends Component {
    //Create refs
    authorRef = React.createRef();
    titleRef = React.createRef();
    contentRef = React.createRef();
    categoryRef = React.createRef();
 
 
    createPost = (e) => {
        e.preventDefault();
 
        const post = {
            author: this.authorRef.current.value,
            title: this.titleRef.current.value,
            body: this.contentRef.current.value,
            category: this.categoryRef.current.value
        }
 
        this.props.createPost(post);
 
    }
 
 
    render() { 
        return ( 
            <form onSubmit={this.createPost} className="col-md-10">
                <legend className="text-center fst-italic fw-bold text-primary mt-4">Create New Post</legend>
 
                <div className="form-group">
                    <label>Title for the Post:</label>
                    <input type="text" ref={this.titleRef} className="form-control" placeholder="Title.." />
                </div>
 
                <div className="form-group">
                    <label>Author:</label>
                    <input type="text" ref={this.authorRef} className="form-control" placeholder="Tag your name.." />
                </div>
 
                <div className="form-group">
                    <label>Content:</label>
                    <textarea className="form-control" rows="7"cols="25" ref={this.contentRef} placeholder="Here write your content.."></textarea>
                </div>
 
                <div className="form-group">
                    <label>Category</label>
                <select ref={this.categoryRef} className="form-control">
                    <option value="cars">Cars</option>
                    <option value="nature">Nature</option>
                    <option value="it">IT</option>
                    <option value="books">Books</option>
                    <option value="sport">Sport</option>
                </select>
                </div>
                <button type="submit" className="btn btn-primary">Create</button>
            </form>
         );
    }
}
 
export default Form;