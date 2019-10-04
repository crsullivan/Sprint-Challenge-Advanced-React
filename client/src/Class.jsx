import React from 'react';
import axios from 'axios';
import './App.css';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';


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
           
           <div data-testid="names" className="names">
                {this.state.info.map(data => {
                    return(
                          <>  <div className="players">
                                <h2>{data.name}</h2>
                                <h3>{data.country}</h3>
                            </div>
                            <div>
                            <XYPlot
                                width={300}
                                height={300}
                                // getY={data.searches}
                                >
                                <HorizontalGridLines />
                                <LineSeries
                                    color="red"
                                    data={[
                                    {x: 1, y: 0},
                                    {x: 2, y: 5},
                                    {x: 3, y: data.searches}
                                    ]}/>
                                <XAxis title="X" />
                                <YAxis />
                                </XYPlot>
                            </div>
                          </>
                    )
                })}
            </div>
           
        )
    }
}

export default Class;