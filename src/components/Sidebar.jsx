import React from 'react'
import styled from 'styled-components';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import RestoreIcon from '@material-ui/icons/Restore';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
function Sidebar() {
    
    const Sidebar = styled.div`
    /* position:fixed;
    left:0;
    bottom:0; */
    height:88vh;
    width:250px;
    margin-top:100px;
    hr{
            height:2px;
            background-color: rgba(0, 0, 0, 0.124);
            border:0;
    }
    span{
        display:flex;
        align-items:center;
        text-align:left;
        font-size:14px;
        *{
            margin:10px;
        }
        
        &:hover{
            background-color:rgba(0, 0, 0, 0.179);
            font-weight:bolder;
            
            .icon{
                color:red;
            }
        }
        
        
    }
    #first{
            background-color:rgba(0, 0, 0, 0.179);
            font-weight:bolder;
            .icon{
                color:red;
            }
        }
    `
    return (
        <Sidebar>
            <span id='first'>
                <HomeIcon className='icon'/>
                Home
            </span>
            <span>
                <WhatshotIcon className='icon'/>
                Trending
            </span>
            <span>
                <SubscriptionsIcon className='icon'/>
                Subscriptions
            </span>
            <hr />
            <span>
                <VideoLibraryIcon className='icon'/>
                Library
            </span>
            <span>
                <RestoreIcon className='icon'/>
                History
            </span>
            <span>
                <OndemandVideoIcon className='icon'/>
                Your Videos
            </span>
            <span>
                <WatchLaterIcon className='icon'/>
                Watch Later
            </span>
            <span>
                <ThumbUpIcon className='icon'/>
                Liked Videos
            </span>
            <span>
                <ArrowDropDownIcon className='icon'/>
                Show More
            </span>
            <hr />
        </Sidebar>
    )
}

export default Sidebar
