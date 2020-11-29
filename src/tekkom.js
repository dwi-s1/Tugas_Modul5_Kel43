import React, { Component } from "react";
import axios from "axios";
import { Modal } from "antd";
import "antd/dist/antd.css";
export default class tekkom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tekkom: [],
            visible: false,
        };
    }

    handleButton = (nama) => {
        alert(nama);
    };
    handleModal = () => {
        this.setState({
            visible: true,
        });
    };
    
    componentDidMount() {
        axios({
            method: "get",
            url: "https://www.scorebat.com/video-api/v1/",
            headers: {
                accept: "*/*",
            },
        })
            .then((data) => {
                console.log(data.data);
                this.setState({
                    tekkom: data.data
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <div className="boxWhite">
                    <center>
                        <h1>Tugas Modul 5 Kelompok 43</h1>
                        <h2>Scorebat Pertandingan Sepak Bola</h2>
                    </center>
                    
                    <Modal
                        title="Tugas Modul 5 Kelompok 43"
                        centered
                        visible={this.state.visible}
                        onOk={this.handleSubmit}
                        onCancel={() => this.setState({ visible: false })}
                        width={500}
                    >
                        <div style={{ textAlign: "center" }}>
                            <h2>Scorebat Pertandingan Sepak Bola</h2>
                        </div>
                    </Modal>

                    {this.state.tekkom.map((results, index) => {
                        return (
                            
                            <div className="card" key={results.id}>
                                    <center>
                                    <h3 className="card-text">{results.title}</h3>
                                    <img src={results.thumbnail} style={{height:'300px', width:'500px'}}></img>
                                    <br></br>
                                    <button onClick href={results.url}>Live Stream</button>
                                    
                                    </center>
                            </div>
                            
                        );
                    })}
                </div>
            </div>
        );
    }
}
