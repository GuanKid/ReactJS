import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { firestore } from './firebase/firebase';

function CommentForm({ recipeId, currentUser }) {
  const [comment, setComment] = useState('');

  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    try {
      await addDoc(collection(firestore, `recipes/${recipeId}/comments`), {
        text: comment,
        createdBy: currentUser.displayName,
        createdAt: serverTimestamp(),
      });
      setComment('');
    } catch (error) {
      console.error('Error adding comment: ', error);
    }
  };

  return (
    <form onSubmit={handleAddComment}>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add a comment"
        required
      />
      <button type="submit">Add Comment</button>
    </form>
  );
}

export default CommentForm;
