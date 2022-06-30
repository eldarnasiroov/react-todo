import React from "react";
import { getMonth } from "../date";
import './style.css'

export class ShowNotes extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <>
                <p className="text">{this.props.notes.text}</p>
                <p className="date">
                    Created on
                    {' ' + this.props.notes.createdAt.getDate() + ' '}
                    {getMonth(this.props.notes.createdAt.getMonth()) + ', '}
                    {this.props.notes.createdAt.getFullYear() + ' year '}
                    at
                    {' ' + this.props.notes.createdAt.getHours() + ':'}
                    {this.props.notes.createdAt.getMinutes() + ':'}
                    {this.props.notes.createdAt.getSeconds()}
                </p>
            </>
        )
    }
}