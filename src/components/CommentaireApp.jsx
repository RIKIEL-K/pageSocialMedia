import React, { useState } from 'react';
import Commentaire from '../components/Commentaire';
import ListCommentaire from '../components/ListCommentaire';

const CommentaireApp = () => {
    const [comment, setComment] = useState([])
    const handleSaveComment =(nouveauCommentaire)=>{
        setComment(nouveauCommentaire)
    }
    return (
        <div>
            <Commentaire onSaveComment={handleSaveComment}/>
            <ListCommentaire commentaire={comment} />
        </div>
    );
};
export default CommentaireApp;