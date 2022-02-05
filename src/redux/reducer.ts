import { AppState } from "./app-state";
import { Action } from "./action";
import { ActionType } from "./action-type";

export function reduce(oldAppState: AppState = new AppState(), action: Action): AppState {

    const newAppState = { ...oldAppState };

    switch (action.type) {

        case ActionType.GetAllBookmarks:
            let myBookmarks = action.payload.myBookmarks;
            newAppState.bookmarksArray = myBookmarks;
            break;

        case ActionType.AddBookmark:
            let newBookmark = action.payload;
            newAppState.bookmarksArray.push(newBookmark);
            newAppState.bookmarksArray = [...newAppState.bookmarksArray];
            break;

        case ActionType.EditBookmark:
            let editedBookmark = action.payload;
            console.log(editedBookmark);
            for (let i = 0; i <= newAppState.bookmarksArray.length; i++) {
                if (editedBookmark._id === newAppState.bookmarksArray[i]._id) {                    
                    newAppState.bookmarksArray[i] = editedBookmark;
                    newAppState.bookmarksArray = [...newAppState.bookmarksArray];
                }
            }
            break;

        case ActionType.RemoveBookmark:
            let id = action.payload;
            for (let i = 0; i <= newAppState.bookmarksArray.length; i++) {
                if (id == newAppState.bookmarksArray[i]._id) {
                    newAppState.bookmarksArray.splice(i, 1);
                    newAppState.bookmarksArray = [...newAppState.bookmarksArray];
                    console.log("Post deletion array: " + newAppState.bookmarksArray);
                }
            }
    }

    return newAppState;
}