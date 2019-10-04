import React from 'react';
import axios from 'axios';

class Class extends React.Component {
    state = {
        info: []
    }
    componentDidMount = () => {
        axios
        .get(`http://localhost:5000/api/players`)
        .then(data => {
           console.log(data.data)
            this.setState({
                 info: data.data
            })
        })
        .catch(error => {
            console.log(error, "Error")
        })
    }
    render() {
        return (
           <>
                {this.state.info.map(data => {
                    return(
                        <h1>{data.name}</h1>
                    )
                })}
           </>
        )
    }
}

export default Class;