import React from "react";
import { getNote } from "../note-generate";
import { ShowNotes } from "../show-notes";
import './CreateNote.css';
import deleteImg from '../../img/del.svg'
import line from '../../img/line.svg'
import submit from '../../img/submit.svg'

export class CreateNote extends React.Component {
    constructor() {
        super();
        this.state = {
            notes: [],
            text: '',
            color: '#DBE2EF'
        }
    }

    handlerChangeText = (event) => {
        this.setState({ text: event.target.value });
    }

    handlerChangeColor = (event) => {
        this.setState({ color: event.target.value });
    }

    handlerSubmitNote = () => {
        if (this.state.text) {
            this.setState({
                notes: [getNote(this.state.text, this.state.color), ...this.state.notes],
                text: '',
                color: '#DBE2EF'
            });
        }
    }

    deleteNote = (id) => {
        this.setState({
            notes: this.state.notes.filter(notes => notes.id !== id)
        });
    }

    withoutNotes = () => {
        if (this.state.notes.length === 0) {
            return (
                <h1 className="without_notes">Your notes list is empty</h1>
            )
        }
    }

    render() {
        return (
            <div className="main__container">
                <h1 className="title">Notes: {this.state.notes.length}.</h1>
                <div className="input_block">
                    <input className="input" value={this.state.text} onChange={this.handlerChangeText} type={'text'} placeholder="Add note..." />
                    <input className="input_color" value={this.state.color} type={'color'} onChange={this.handlerChangeColor} />
                    <img className="submit" src={submit} alt='submit' onClick={this.handlerSubmitNote} />
                </div>
                <img className="line" src={line} alt="line" />
                {this.withoutNotes()}
                <div>{this.state.notes.map((note) => {
                    return (
                        <div key={note.id} className="notes" style={{ backgroundColor: note.color }}>
                            <ShowNotes notes={note} />
                            <img src={deleteImg} alt="delete" className="delete" onClick={() => { this.deleteNote(note.id) }} />
                        </div>
                    )
                })}</div>
            </div>
        )
    }
}