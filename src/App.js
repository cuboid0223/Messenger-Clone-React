import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input} from '@material-ui/core'; 
import Message from './Message'
import './scss/all.css';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';


function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');
  // useState is a variable in React
  // useEffect => run a code on a condition

  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(
        snapshot.docs.map( doc => (
          { 
            id:doc.id, // get the message random id
            message:doc.data()
          }
          ))
      )
    })
  }, [])

  useEffect(() => {
    //run code here
    // if its blank inside [], this code runs once when the app component loads
    // if [] has variable lik 'input', the code here runs, when the 'input' change
    setUsername(prompt('輸入你的名字'))
  },[]) // [] is a condition


  console.log(input)
  console.log(messages)// you can test the ...messages 

  const sendMessage = (e) => {
    e.preventDefault()

    db.collection('messages').add({// to add my message to firebase
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    // setMessages([...messages, {username:username, text:input}]);
    setInput('');//clean the text in the inputField
  }

  return (
    <div className="App">
      <img className='App__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Facebook_Messenger_logo.svg/476px-Facebook_Messenger_logo.svg.png'/>
      <h2>歡迎！！  {username}</h2>
      <form className='App__form'>
          <FormControl className='App__formControl'>
            <InputLabel>留言...</InputLabel>
            <Input className='App__formControl__input' value={input} onChange={e => setInput(e.target.value)} />
          <IconButton className='App__formControl__iconButton' variant="contained" color="primary" type='submit' disabled={!input} onClick={sendMessage}>
              <SendIcon />
            </IconButton>
            
            {/*  disabled={!input} means that => if the input didn't type anything */}
          </FormControl>
      </form>
      

      <div className='App__messages'>
        <FlipMove>
          {
            messages.map( ({id, message}) => (
              <Message key={id} username={username} message={message} />
              // <p>{message}</p>
            ))
          }
        </FlipMove>
      </div>

       
    </div>
  );
}

export default App;
