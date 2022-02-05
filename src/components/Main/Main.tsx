import React, { StrictMode, useEffect, useState } from 'react'
import './Main.css'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../redux/app-state';
import { ActionType } from '../../redux/action-type';
import Modal from "react-modal";
import Button from 'react-bootstrap/Button';
import BookmarkCard from '../bookmarkCard/bookmarkCard';
import AddBookmarkModal from '../addBookmarkModal/AddBookmarkModal';
import { useNavigate } from 'react-router-dom';


function Main() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [isOpen, setIsOpen] = useState(false);
    

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    const bookmarksArray = useSelector((state: AppState) => state.bookmarksArray);

    let dispatch = useDispatch();
    let navigate = useNavigate();

    const GetUserBookmarks = () => {
        axios.get("http://localhost:5000/bookmarks/")
            .then((response) => {
                let myBookmarks = response.data;
                console.log(myBookmarks);
                dispatch({ type: ActionType.GetAllBookmarks, payload: { myBookmarks } })
            })
    }


    useEffect(() => {
        GetUserBookmarks();
    }
        , [])

    return (

        <StrictMode>
            <div className="main">

                <div className="newBookmarkButtonDiv">
                    <Button variant="success" size="lg" onClick={toggleModal}>
                        Add new bookmark!
                    </Button>

                    <Modal
                        isOpen={isOpen}
                        onRequestClose={toggleModal}
                        contentLabel="My dialog"
                    >
                        <div><AddBookmarkModal /></div>
                        <button onClick={toggleModal}>Close</button>
                    </Modal>
                </div>
                <div className="bookmarksDiv">
                    {bookmarksArray.map((bookmark, index) => (

                        <BookmarkCard key={index} _id={bookmark._id} name={bookmark.name} url={bookmark.url} category={bookmark.category} />

                    ))}
                </div>
            </div>
        </StrictMode>
    )
}

export default Main;