 import {useState} from 'react'
 
 function Login(  { setIsLoggedIn }  ){

console.log(setIsLoggedIn)

      
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('') 

    


    function handleInputUserName(e){
      setUser(e.target.value)
    }
    
    function handleInputPassword(e){
        setPassword(e.target.value)
    }


    function handleSubmit(e){
        e.preventDefault()
        console.log(user, password)
        setUser('')
        setPassword('')
        setIsLoggedIn(true)
        // navigate("/home")
    }


 return(
    <div className="Login" >
        <form onSubmit={handleSubmit}>
            <label htmlFor="userId">UserName</label>
            <input onChange={handleInputUserName} type="text" id="userId" value={user}/>
            
            <label htmlFor="userPw">Password</label>
            <input onChange={handleInputPassword} type="password" id="userPw" value={password} />

            <input type="submit" value={'Login'} />
        </form>

        


    </div>
 )


}

export default Login