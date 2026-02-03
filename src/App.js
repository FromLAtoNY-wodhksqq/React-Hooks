import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, useRef, useContext, useMemo, useCallback,useReducer,useId,useLayoutEffect,useOptimistic} from "react";


export default function App({ likes = 0 }) {
    const [optimisticLikes, addLike] = useOptimistic(
        likes,
        (state) => state + 1
    );

    async function handleLike() {
        addLike();
        try {
            await fetch("/api/like", { method: "POST" });
        } catch (e) {
            console.error("좋아요 실패");
        }
    }

    return (
        <button onClick={handleLike}>
            ❤️ {optimisticLikes}
        </button>
    );
}