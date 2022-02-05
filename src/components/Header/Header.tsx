import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/app-state";
import "./Header.css";
import { AppBar, Toolbar, CssBaseline, Typography, makeStyles, } from "@material-ui/core";
import { Link } from "react-router-dom";


export default function Header() {
  const navigate = useNavigate();


  return (

    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h2">
          NetFork Bookmarks
        </Typography>
        <div className="buttonsDiv">
          <Link to="/">
            <button> Home
            </button>
          </Link>
          <Link to="/about">
            <button> About
            </button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>

  )
}
