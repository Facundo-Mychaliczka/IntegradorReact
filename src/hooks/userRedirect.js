import { useEffect } from "react";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

export const userRedirect = (redirectTo) => {

    const {currentUser} = useSelector(state => state.user)

    const navigate =useNavigate();

    useEffect(() => {
        if (currentUser) {
            navigate(redirectTo);
        }
    }, [currentUser, navigate, redirectTo])
}

export const userRedirectUnLogued = (redirectTo) => {
    const {currentUser} = useSelector(state => state.user)

    const navigate =useNavigate();

    useEffect(() => {
        if (!currentUser) {
            navigate(redirectTo);
        }
    }, [currentUser, navigate, redirectTo])
}