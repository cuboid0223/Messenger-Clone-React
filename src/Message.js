import React, { forwardRef, useEffect }  from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';




const Message = forwardRef(({message, username}, ref) => {
    const isUser = username === message.username // username => 我一進來輸入的名字 ， message.username => 那句訊息的發布者，存放在物件裡
    // isUser 是判斷這句留言的發布者是否為使用者本人
    
    return (
        
       
        <div ref={ref} className={`message ${isUser && 'message__user'}`}>  {/* 如果這句留言的發布者是使用者本人 為真，那麼新增 className*/}
            <pre>{!isUser && `${message.username || '不明人士'}  `}</pre> 
            <Card className={isUser ? 'message__userCard' :'message__guestCard'}>  
                <CardContent>             
                    <Typography color='blue' variant="h5" component="h2">
                           {message.message}
                    </Typography> 
                </CardContent>
            </Card>
            {/*  <h2>{username}: {text}</h2> */}   
        </div>
    )

}
)
export default Message
