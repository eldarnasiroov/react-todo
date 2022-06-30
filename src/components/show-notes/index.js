import React from "react";
import { getCorrectTime, getMonth } from "../date";
import './style.css'

export class ShowNotes extends React.Component {
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
                    {' ' + getCorrectTime(this.props.notes.createdAt.getHours()) + ':'}
                    {getCorrectTime(this.props.notes.createdAt.getMinutes()) + ':'}
                    {getCorrectTime(this.props.notes.createdAt.getSeconds())}
                </p>
            </>
        )
    }
}