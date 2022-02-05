import axios, { AxiosResponse } from "axios";
import { ChangeEvent, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { IBookmark } from "../../models/models";
import { ActionType } from "../../redux/action-type";

let AddBookmarkModal = (): JSX.Element => {

    // let history = useHistory();
    let dispatch = useDispatch();

    let [name, setName] = useState("");
    let [url, setUrl] = useState("");
    let [category, setCategory] = useState("");

    // let [image, setImage] = useState("");

    let newBookmark = {
        name: name,
        url: url,
        category: category
    }

    let onNameTyped = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }
    let onUrlTyped = (event: ChangeEvent<HTMLInputElement>) => {
        setUrl(event.target.value);
    }
    let onCategoryTyped = (event: ChangeEvent<HTMLInputElement>) => {
        setCategory(event.target.value);
    }

    async function onAddBookmarkClicked() {
        try {
            let response = await axios.post<AxiosResponse<IBookmark>>("http://localhost:5000/bookmarks/addBookmark/", newBookmark);
            console.log(response);
            sendToDispatch(response.data);
        }
        catch (e) {
            alert("ServerError: Bookmark URL already exists!");
            console.error(e);
            return;
        }
        alert("Bookmark successfully added!");
    }

    async function sendToDispatch(response: any){
        let bookmarkDetails = response[0];
        console.log(bookmarkDetails);
        dispatch({ type: ActionType.AddBookmark, payload: bookmarkDetails });
    }


    return (
        <div className="AddVacationModal">

            <h5>Add new Bookmark</h5>
            <div className="formDiv">
                <form>
                    Name: <input type="text" value={name} onChange={onNameTyped} />
                    URL: <input type="text" value={url} onChange={onUrlTyped} />
                    Category:<input type="text" value={category} onChange={onCategoryTyped} />
                </form>
            </div>
            <Button variant="primary" className="EditVacationButton" size="sm" onClick={onAddBookmarkClicked} >Add bookmark! </Button>

        </div>
    )

}

export default AddBookmarkModal;