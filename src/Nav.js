import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/datatable">DataTable</Link>
            <Link to="/phototable">PhotoTable</Link>
        </nav>
    );
};

export default Nav;