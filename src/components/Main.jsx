import React from 'react'
import styled from 'styled-components';

function Main({data,def,setDef}) {


    function checkChannel(type){
        if(type == 'youtube#channel'){
            return '100px'
        }
        else{
            return '0px'
        }
    }

    function Check(string){
        if(string.length >= 30){
            var re = string.substr(30,string.length)
            return string.replace(re,'...')
        }else{
            return string;
        }
    }

    const Main = styled.main`
    overflow-y:scroll;
    padding:10px;
    display:${props => props.hello == true ? 'grid' : 'block'};
    grid-template-columns: repeat(auto-fit,220px);
    column-gap:10px;
    height:90vh;
    position: absolute;
    right: 0;
    top: 100px;
    float:right;
    width:1060px;
    align-items:center;
    justify-content:center;
    /* background-color:red; */
    div{
        margin:10px;
        text-align:${props => props.hello ? 'center' : 'left'};
        /* background-color:red; */
        display:${props => props.hello == true ? 'block' : 'flex'};
        align-items:center;
        padding: 5px;
        cursor: pointer;
        justify-content:${props => props.hello == true ? 'center' : 'left'};
        box-shadow:0px 0px 2px 0px black inset;
        transition: all 200ms ease;
        height:200px;
        width:${props => props.hello == true ? '210px' : '100%'};
        &:active{
            background-color:rgba(0, 0, 0, 0.178);
        }
        img{
            height:60%;
            width: 200px;
            margin:${props => props.hello == true ? '4px auto 0 auto' : '10px'};
        }
        span{
            
            align-items:center;
        }
        /* p{
            display:flex;
            background:red;
            margin-right:auto;
            margin-left:auto;
        } */
    }
    
    `

    return (
        <Main hello={def}>
            {
                data.length!=0?
                data.map((items)=>(
                    <div>
                        <img src={items.snippet.thumbnails.medium.url} style={{borderRadius:checkChannel(items.id.kind)}}  alt="" />
                        {
                            def == true?
                            <p> {Check(items.snippet.title)} </p>
                            :
                            <h3>{items.snippet.title}</h3>
                        }
                    </div>
                ))
                :
                <h4>Loading...</h4>
            }
        </Main>
    )
}

export default Main
