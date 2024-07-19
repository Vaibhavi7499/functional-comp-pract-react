import { Component , createRef } from "react";

class RefClass extends Component{
    constructor(props){
        super(props)
        this.myRef=createRef();
        this.btnRef=createRef();
    }
    ClickBtn=()=>{
        console.log(this.myRef.current.value,"abc")
    }
    componentDidMount(){
        this.myRef.current.focus();
        this.btnRef.current.click();
    }
    render(){
        return(
            <div>
<input type="text" ref={this.myRef} />
<button onClick={this.ClickBtn} ref={this.btnRef}>click</button>
            </div>
        )
    }
}
export default RefClass