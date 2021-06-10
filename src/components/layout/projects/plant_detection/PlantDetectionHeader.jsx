import React, { Component, Fragment } from 'react';



class PlantDetectionHeader extends Component{
    render(){
        return(
            <Fragment>
                <div className="plant_header">
                    <div className="plant_title">
                        <h1>Image-based Plant Types and Diseases Detection
                            with Machine Learning, Histogram of Oriented Gradients and
                            K-Means Clustering
                        </h1>
                    </div>
                    <div className="plant_button">
                        <button>Download Report</button>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default PlantDetectionHeader;