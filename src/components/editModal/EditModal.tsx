import axios from "axios";
import { ChangeEvent, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { IBookmark } from "../../models/models";
import { ActionType } from "../../redux/action-type";
import './EditModal.css'

let EditModal = (bookmark: IBookmark): JSX.Element => {
    const dispatch = useDispatch();

    const [name, setName] = useState(bookmark.name);
    const [url, setUrl] = useState(bookmark.url);
    const [category, setCategory] = useState(bookmark.category);
    const [id] = useState(bookmark._id);

    let editedBookmark = {
        _id: id,
        name: name,
        url: url,
        category: category
    }

    const onNameChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const onUrlChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setUrl(event.target.value);
    }
    const onCategoryChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setCategory(event.target.value);
    }

    async function onEditSubmit() {
        try {
            console.log(editedBookmark);
            let response = await axios.put("http://localhost:5000/bookmarks/editBookmark", editedBookmark);
            console.log(response);
            dispatch({ type: ActionType.EditBookmark, payload: editedBookmark });
        }
        catch (error) {
            alert("ServerError: Bookmark URL already exists!");
            console.log(error);
            return;
        }
        alert("Bookmark updated successfully");
    }


    return (

        <div className="editBookmark">

            <h5>Edit Bookmark</h5>
            <div className="formDiv">
            <form>
                Name: <input type="text" value={name} onChange={onNameChanged} />
                URL: <input type="text" value={url} onChange={onUrlChanged} />
                Category:<input type="text" value={category} onChange={onCategoryChanged} />
            </form>
            </div>
            <Button variant="primary" className="EditVacationButton" size="sm" onClick={onEditSubmit} >Save Changes </Button>

        </div>

    )

}

export default EditModal;