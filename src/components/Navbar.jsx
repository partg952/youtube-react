import React from 'react'
import styled from 'styled-components';
import MenuIcon  from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import axios from 'axios';
function Navbar({func,def,setDef,data,setData}) {
    const ref = React.useRef();
    const Nav = styled.nav`
        position:fixed;
        top:0;
        right:0;
        left:0;
        z-index:99999;
        display:flex;
        align-items:center;
        justify-content:space-between;
        background-color: white;
        /* background-color:red; */
        padding:10px;
        img{
            height:30px;
            margin:10px;
        }
       
        div{
            /* background-color:blue; */
            display:flex;
            align-items: center;
            height:50px;
            button{
                height:35px;
                display:flex;
                align-items:center;
                justify-content:center;
                width:50px;
                border:1px solid rgba(192, 185, 174, 0.565);
                border-left:0px;
            }
            input{
                width:80%; 
                height:32px;
                outline:none;
                background-color:transparent;
                border:0px solid black;
                box-shadow:0px 0px 2px 0px black inset;
            }

        }
        #search{
            width:50%;  

            *{
                margin:0;
            }
        }
        #icons{
            *{
                margin:10px;
            }
        }
    `

        

    return (
        <Nav>
            <div>
            <MenuIcon/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" onClick={()=>{
                axios('https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBkoIKYvN0vhw8N8nGMD1WpZq1IiVBVNSM&maxResults=50&type=vi&q=coding')
                .then((res)=>{
                  setDef(true)
                  console.log(res.data)
                  setData(res.data.items)
                })
            }} alt="" draggable={false} />
            </div>
            <div id="search">
                <input type="text" ref={ref} onKeyPress={(e)=>{
                    if(e.key === 'Enter'){
                        func(ref.current.value)
                    }
                }}/>
                <button onClick={()=>func(ref.current.value)}>
                    <SearchIcon/>
                </button>
            </div>
            <div id='icons'>
                <VideoCallIcon/>
                <AppsIcon/>
                <NotificationsIcon/>
                <Avatar style={{width:'40px',height:'40px'}}/>
            </div>
        </Nav>
    )
}

export default Navbar
