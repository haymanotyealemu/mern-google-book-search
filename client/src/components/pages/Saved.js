import React, {Component} from "react";
import Jumbotron from "../Jumbotron";
import API from "../../utils/API";
import {Container} from "../Grid";
import SavedBooks from "../SavedBooks";

class SavedBook extends Component {
    state = {
        savedBooks : []
    };
    // 
    componentDidMount() {
        API.getBooks()
            .then(res => this.setState({ savedBooks: res.data}))
            .catch(err => console.log(err))
        
    }
    // function to remove book by id
    handleDeleteButton = id => {
        API.deleteBook(id)
        .then(res => this.componentDidMount())
        .catch(err => console.log(err))
    }

    render(){
        return (
            <Container fluid className="container">
                <Jumbotron/>
                <Container>
                    <SavedBooks savedBooks={this.state.savedBooks} handleDeleteButton={this.handleDeleteButton}/>
                </Container>
            </Container>
        )
    }
}
 export default SavedBook
