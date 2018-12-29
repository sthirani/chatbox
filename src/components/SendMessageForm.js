import React from 'react'

class SendMessageForm extends React.Component{

    constructor(){
        super()
        this.state={
            message:''
        }
        this.handleChanges=this.handleChanges.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);

    }
    handleChanges(e){
        console.log(e.target.value)
        this.setState({
            message: e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault()
        this.props.sendMessage(this.state.message)
        this.setState({
            message:''
        })

    }
    render(){
        return(
            <form
                onSubmit={this.handleSubmit}
                className={"send message form"}>
                <input
                    disabled={this.props.disabled}
                    onChange={this.handleChanges}
                    value={this.state.message}
                    placeholder={"Type your message and hit enter"}
                    type={"text"}/>
            </form>
        )
    }
}
export  default SendMessageForm