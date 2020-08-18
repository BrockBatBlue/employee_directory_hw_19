import React from "react";
import "../Styles/Container.css";


class Container extends React.Component {
    state = {}
    componentDidMount(){}
    render(){
        return (
            <div className="container">
                <div className="wrapper">
                    <p>This is where stuff goes</p>
                </div>
            </div>
        );
    }
}

export default Container;