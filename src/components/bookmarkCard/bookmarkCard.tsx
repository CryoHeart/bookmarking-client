import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { IBookmark } from '../../models/models'
import { AppState } from '../../redux/app-state';
import './bookmarkCard.css';
import EditModal from '../editModal/EditModal';
import Modal from "react-modal";
import axios from 'axios';
import { ActionType } from '../../redux/action-type';


export default function BookmarkCard(props: IBookmark) {

    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    async function deleteBookmark(id: any) {
        console.log(id);
        await axios.delete(`http://localhost:5000/bookmarks/${id}`) .then(response =>{
            dispatch({type: ActionType.RemoveBookmark, payload: id});
            console.log("bookmark ID " + id + " deleted");
            alert("bookmark ID " + id + " deleted");
        })
            .catch(error => {console.log(error)});

        // window.location.reload();
    
    }



    return (
        <div className="property-card">


            <div className="property-description">
                <h5> {props.name} </h5>
                <p>Category: {props.category}</p>

            </div>
            <a href={props.url}>
                <button>Go!</button>
            </a>
            <br />
            <Button className="button" onClick={toggleModal}>
                Edit
            </Button>
            <Button className="button" onClick={() => { if (window.confirm('Are you sure you wish to delete bookmark ' + props.name + '?')) deleteBookmark(props._id) }}>
                Delete
            </Button>

            <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="My dialog"
            >
                <div><EditModal _id={props._id} name={props.name} url={props.url} category={props.category} /></div>
                <button onClick={toggleModal}>Close</button>
            </Modal>


        </div>
    )
}