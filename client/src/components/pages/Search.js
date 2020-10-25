import React, {Component} from "react";
import Jumbotron from "../Jumbotron";
import SearchBox from "../SearchBox";
import SearchResults from "../SearchResults";
import API from "../../utils/API";
import {Container, Col, Row} from "../Grid";

class Search extends Component {
    state = {
        search : "",
        books : [],
        error : "",
        message: ""
    };

    // function to grap the value of what a user search from search input form
    handleInputChange = event => {
        this.setState({search: event.target.value})
    }

    handleFormSubmit = event => {
        event.preventDefault();
        API.getGoogleSearchBooks(this.state.search)
            .then(res => {
                if(res.data.items === "error"){
                    throw new Error(res.data.items);
                }
                else{
                    // store response in a array
                    let results  = res.data.items;
                    // 
                    results = results.map(result =>{
                        result = {
                            key: result.id,
                            id: result.id,
                            title: result.volumeInfo.title,
                            author: result.volumeInfo.authors,
                            description: result.volumeInfo.description,
                            image: result.volumeInfo.imageLinks.thumbnail,
                            link: result.volumeInfo.infoLink
                        }
                        return result;
                    })
                    // change the state of the empty array to the new array 
                    this.setState({books: results, error: ""})
                }
            })
            .catch(err => this.setState({ error: err.items}));
    }
    handleSavedButton = event => {
        event.preventDefault();
        console.log(this.state.books)
        let savedBooks = this.state.books.filter(book => book.id === event.target.id);
        savedBooks = savedBooks[0];
        API.saveBook(savedBooks)
            .then(this.setState({ message: alert("We saved Your Book")}))
            .catch(err => console.log(err))
    }

    render(){
        return (
            <Container fluid>
                <Jumbotron>
                    <h1 className="text-white">Search for and Save Books of Interest</h1>
                </Jumbotron>
                <Container>
                    <Row>
                        <Col size="12">
                            <SearchBox>
                                handleFormSubmit={this.handleFormSubmit}
                                handleInputChange={this.handleInputChange}
                            </SearchBox>
                        </Col>
                    </Row>
                </Container>
                <br></br>
                <Container>
                    <SearchResults books={this.state.books} handleSavedButton={this.handleSavedButton}></SearchResults>
                </Container>
            </Container>
        )
    }
}
export default Search
