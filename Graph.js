import React, { Component } from 'react';
import { Doughnut, Polar} from 'react-chartjs-2';

export class Graph extends Component {
    constructor(props) {
        super(props);
    }


    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'bottom'
    }

    render() {
        return (
            <div>
                <div className="chart" >
                    <Doughnut
                        data={this.props.dataGraph}
                        options={{
                            title: {
                                display: this.props.displayTitle,
                                text: '',
                                fontSize: 12
                            },
                            legend: {
                                display: this.props.displayLegend,
                                position: this.props.legendPosition
                            }
                        }}
                    />
                </div>

                <div className="chart" >
                <Polar
                    data={this.props.dataGraph}
                    options={{
                        title: {
                            display: this.props.displayTitle,
                            text: '',
                            fontSize: 12
                        },
                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                        }
                    }}
                />
            </div>

           
        </div>
        )
    }
}

export default Graph
