import React, { useState, useEffect } from 'react';
import { Octokit } from '@octokit/core';
import './Card.css';

const octokit = new Octokit();
  
function Card(props) {
    const [user, setUser] = useState(undefined);
    const username = props.user.github_username;
    useEffect(() => {
        const getUser= async()=>{
            try{
              let avatar= await octokit.request(`GET /users/${username}`, {
                username: username
              })
              setUser(avatar);
           }
           catch(err){
             console.log("User not found: "+username);
           }
          }        
        getUser();
    }, [username]);
    if (user !==undefined)
        return (
            <div className="card">          
                <div className="profile">
                    <div className="image">
                        <div className="circle-1"></div>
                        <div className="circle-2"></div>
                        <img src={user.data.avatar_url} width="100" height="100" alt={props.user.name} />
                    </div>                
                    <div className="name">{props.user.name}</div>
                    <div className="job">{props.user.title}</div>
                    <div className="social">
                        <a target="_blank" href={"https://www.facebook.com/"+ props.user.facebook} rel="noopener noreferrer">
                            <i className="fa fa-facebook"></i></a>
                        <a target="_blank" href={"https://www.github.com/"+ props.user.github_username} rel="noopener noreferrer">
                            <i className="fa fa-github"></i></a>
                        <a target="_blank" href={"https://www.twitter.com/"+ props.user.twitter} rel="noopener noreferrer">
                            <i className="fa fa-twitter"></i></a>
                    </div>
                </div>              
                <div className="stats">
                    <div className="box">
                        <span className="value">{user.data.followers}</span>
                        <span className="parameter">Followers</span>
                    </div>
                    <div className="box">
                        <span className="value">{user.data.following}</span>
                        <span className="parameter">Following</span>
                    </div>
                    <div className="box">
                        <span className="value">{user.data.public_repos}</span>
                        <span className="parameter">Repos</span>
                    </div>
                </div>
            </div>
        );
    return(null);
}

  export default Card;  