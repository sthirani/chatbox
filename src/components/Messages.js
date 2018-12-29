import React from 'react'

function Messages(props){

        return(
            <div className={"Message"}>

                    <div className={"message-username"}>props.username</div>
                    <div className={"message-text"}>props.text</div>
            </div>
        )

}

export default Messages