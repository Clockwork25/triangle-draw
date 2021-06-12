import React, { Component } from "react";



class Check extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            a: {sideA_num}
        }
    }
    render(){
        var a = this.props.sideA_num;
        var b = this.props.sideB_num;
        var c = this.props.sideC_num;
        let triangleAnswer;
    
        if (a+b > c || a+c>b || b+c>a){
    
            if (a===b || b===c || a===c){
                triangleAnswer = "Isosceles";
            }else if(a===b===c){
                triangleAnswer = "Equilateral";
            }else if (a!==b && b!==c && a!==c){
                triangleAnswer = "Scalene";
            }
        }else{
            triangleAnswer = "Not Possible";
        } 
                return (
            <div>
                <p>The triangle is: {triangleAnswer}</p>
            </div>
            );
    };
};



export default Check;