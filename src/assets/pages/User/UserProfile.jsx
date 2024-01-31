import React from 'react'
import { LogOutButton, LogOutIcon, ProfileWrapper, UserProfileWrapper, VerifyButton } from './UserProfileStyles'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../../../redux/user/userSlice'
import { userRedirectUnLogued } from '../../../hooks/userRedirect'
import { Link } from 'react-router-dom'

const UserProfile = () => {

    const currentUser = useSelector((state) => state.user.currentUser)
    const dispatch = useDispatch()
    userRedirectUnLogued("/")
  return (

    <UserProfileWrapper>
        <h1>MI PERFIL</h1>
            <ProfileWrapper>
                <h3>Foto de Perfil</h3>
                {
                    currentUser.img 
                    ? <img src={currentUser.img} alt="" srcset="" />                    
                    : <h3>Actualmente, no cuentas con foto de perfil</h3>
                }
                <h3>Nombre: {currentUser.nombre}</h3>
                <h3>E-Mail: {currentUser.email}</h3>
                <h3> 
                    {
                        currentUser.verified ?
                        <p>Ya estas verificado</p>
                       :<Link><VerifyButton>Verificarse</VerifyButton></Link> 

                    }
                </h3>
            </ProfileWrapper>
            <LogOutButton to={"/"} onClick={() => dispatch(logOut())}>
                <p>Log Out</p>
                <LogOutIcon src='https://cdn.icon-icons.com/icons2/2311/PNG/512/power_on_off_log_out_exit_icon_141949.png'/>
            </LogOutButton>
    </UserProfileWrapper>
  )
}

export default UserProfile