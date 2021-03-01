import React, { useState } from 'react';
import DisplayTable from '../display/display.component';

const Profile = () => {

    const [data,setData] = useState({});
    const [username,setUsername] = useState("");
    const [resposUser,setReposUser] = useState({});
    const [loading,setLoading] = useState(true);
    const onChangeHandler = e => {
        setUsername(e.target.value);
    }

    const onSubmitHandler = async (e)=> {
        e.preventDefault();

        const profile = await fetch(`https://api.github.com/users/${username}`);
        const profileJson = await profile.json();
        console.log(profileJson);
       
        if(profileJson) {
            const repos = await fetch(profileJson.repos_url);
            const reposJson = await repos.json();
            console.log(reposJson);
            setData(profileJson);
            setReposUser(reposJson);
            setUsername("");
            setLoading(false);
        }
        

    }
    return (
        <div className="conatiner" style={{padding:10}} >
            <div className="ui icon input">
            <i className="search icon"></i>
            <input
            style={{width:245 }}
              className="prompt"
              placeholder="Username...."
              type="text"
              value={username}
              onChange={onChangeHandler}
            />
            </div>
            <div className="button-conatiner" style={{padding:10}}>
                <button className="ui primary button" onClick={onSubmitHandler}>  
                    <i className="github icon"></i>
                    Search
                </button>
            </div>
            {
                loading ?  null : <DisplayTable data={data} repositories={resposUser} />
            }
        </div>
    )
}

export default Profile;