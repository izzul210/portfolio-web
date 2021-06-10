import React from 'react'
import PlantDetectionHeader from './PlantDetectionHeader';
import './PlantDetection.scss';

import plant1 from '../../../../assets/projects/plant/plant1.png';
import plant2 from '../../../../assets/projects/plant/plant2.png';
import plant3 from '../../../../assets/projects/plant/plant3.png';
import plant4 from '../../../../assets/projects/plant/plant4.png';
import plant5 from '../../../../assets/projects/plant/plant5.png';
import plant6 from '../../../../assets/projects/plant/plant6.png';

export default function PlantDetection() {
    return (
        <div >
            <PlantDetectionHeader />
            <div className="plant_content">
                <div className="content_1">
                    <h2 className="content_title">
                        Aim and Methodology
                    </h2>
                    <div className="content_points">
                        <p>Crop diseases detection and classification using two independent Machine Learning</p>
                        <ul>
                            <li>Convolutional Neural Network (CNN)</li>
                            <li>Artificial Neural Network (ANN)</li>
                        </ul>
                        <p>Methods of image processing involved:</p>
                        <ul>
                            <li>K-Mean Clustering</li>
                            <li>Histogram of Oriented Gradient (HOG)</li>
                        </ul>
                    </div>
                </div>

                <div className="content_2">
                    <div className="content_points">
                        <img src={plant1} alt=""></img>
                    </div>
                </div>

                <div className="content_3">
                    <h2 className="content_title">
                        K-Mean Clustering
                    </h2>
                    <div className="content_points">
                        <p>Why K-Mean Clustering?</p>
                        <ul><li>Leaves attributes
                              <ul>
                                <li>All leaf has similar green colour, which makes it hard to distinguish between different crops</li>
                                <li>Diseased spots are obvious</li>
                              </ul>
                            </li>
                            <li>K-Means helps in partitioning the image into simpler regions of similar pixels known as clusters</li>
                        </ul>
                        <img src={plant2} alt=""></img>
                    </div>
                </div>

                <div className="content_5">
                    <h2 className="content_title">
                        K-Mean Clustering and CNN
                    </h2>
                    <div className="content_points">
                        <p>CNN Architecture</p>
                        <ul><li>2 Convolutional Layers:
                              <ul>
                                <li>16 filters + ReLu</li>
                                <li>8 filers + ReLu with each max pooling layers of 3x3</li>
                              </ul>
                            </li>
                            <li>Flatten Later</li>
                            <li>1 Hidden Layer of ANN consists of 32 neurons</li>
                        </ul>
                        <img src={plant3} alt=""></img>
                    </div>
                </div>

                <div className="content_6">
                    <h2 className="content_title">
                        Results & Analysis
                    </h2>
                    <div className="content_points">
                        <p>Goal: Classify 8 different classes of crops diseases</p>
                        <p>Training dataset: 2,000 datasets</p>
                        <p>Evaluation accuracy: <b>78% </b>with K-Mean, <b>58%</b> with original image</p>
                        <img src={plant4} alt="" style={{"marginBottom":"1.5rem"}}></img>
                        <p>Training dataset: 10,000 datasets</p>
                        <p>Evaulation accuracy: <b>84.6%</b> with K-Mean, <b>88.4%</b> with original image</p>
                        <img src={plant5} alt="" style={{"marginBottom":"1.5rem"}}></img>
                    </div>
                </div>

                <div className="content_7">
                    <h2 className="content_title">
                        Evaluation & Conclusion Part 1
                    </h2>
                    <div className="content_points">
                        <ul><li>K-Mean works best when there are few datasets to train
                              <ul>
                                <li>Clustering color groups helps the CNN to differentiate classes easily with limited training datasets</li>
                              </ul>
                            </li>
                            <li>As number of datasets increases, CNN without K-Mean clustering has better performance and accuracy
                              <ul>
                                <li>Clustering color groups reduces the details of some images</li>
                                <li>Details of an image are important for edge detection</li>
                              </ul>
                            </li>
                        </ul>
                        <img src={plant6} alt=""></img>
                    </div>
                </div>

            </div>
        </div>
    )
}
