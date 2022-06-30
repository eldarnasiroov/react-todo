export const getNote = (text, color) => {
    const note = {
        id: Math.floor(Math.random() * 10000),
        text: text,
        createdAt: new Date(),
        color: color
    }
    return note;
}