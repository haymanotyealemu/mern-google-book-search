import React from "react";
import "./style.css";
import { Row, Col} from "../Grid";

const SavedBooks = props => {
    return(props.savedBooks.length === 0) ? (
            <div className="card">
                <div className="card-body player">
                        <div className="article"><h3>Saved Books</h3></div>
                </div>
            </div>
        
    ) : (
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h3>Saved Books</h3>
                    {props.savedBooks.map(savedbook => {
                        return (
                            <li className="search-list list-group-item">
                                <Row className="SearchResult row" id={savedbook.title + "Card"} key={savedbook._id}>
                                    <Col size="2" className="bookImage">
                                        <img src={savedbook.image} alt={savedbook.title} />
                                    </Col>
                                    <Col size="1" className="emptyCol"/>
                                    <Col size="9" className="bookInfo">
                                        <Row>
                                            <h3 className="bookTitle">{savedbook.title}</h3>
                                        </Row>
                                        <Row>
                                            <h4 className="bookAuthor">{savedbook.author}</h4>
                                        </Row>
                                        <Row>
                                            <p className="bookDescription">{savedbook.description}</p>
                                        </Row>
                                    </Col>
                                </Row>
                                <br></br>
                                <Row className="buttonDiv">
                                    <button className="deleteBook btn btn-primary" id={savedbook._id} onClick={() => props.handleDeleteButton(savedbook._id)}>Delete</button>
                                    <a href={savedbook.link} target="_blank">
                                        <button className="viewBook btn btn-success">View</button>
                                    </a>
                                </Row>
                            </li>
                        );
                    })}
                </div>
            </div>
        </div>
    )
        
            
    
}

export default SavedBooks

