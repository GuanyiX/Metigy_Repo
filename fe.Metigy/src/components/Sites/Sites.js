'use strict';

import React from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
import Axios from 'axios';

import store from '../../store';
import { url_default } from "../../api/index";


class Sites extends React.Component {

    constructor() {
        super()

        this.state = store.getState().sitesReducer

        store.subscribe(this.handleStoreChange);
    }

    async componentDidMount() {

        try{
            const res = await Axios.get(url_default);
            const { data } = res;
    
            const action = {
                type: "INIT_SITES",
                data
            }
    
            store.dispatch(action);
        }catch{
            alert("Errors: Get sites from database")
        }

        
    }

    handleAddClick = () => {
        if (this.state.sites_data.length <= 12) {

            const action = {
                type: "ADD_A_SITE",
            }

            store.dispatch(action)
        } else {
            alert("Warning: Sites list is too long! Please remove at least one keyword!")
        }
    }

    handleClearClick = (index) => {
        const action = {
            type: "DELETE_A_SITE",
            index,
        }

        store.dispatch(action)
    }

    handleInputChange = (e) => {
        const action = {
            type: 'CHANGE_INPUT_SITE',
            value: e.target.value
        }

        store.dispatch(action);
    }

    handleStoreChange = () => {
        this.setState(store.getState().sitesReducer);
    }

    render() {
        const addSuffix = (
            <Button type="primary" icon={<PlusCircleOutlined />} onClick={this.handleAddClick}>Add</Button>
        );


        return (
            <div className="sites-wrapper flex-item">
                <p className="sites-header">Sites</p>
                <div className="sites-body">
                    <div className="input-wrapper flex-container">
                        <Input
                            placeholder={"Enter your sites here"}
                            size="large"
                            suffix={addSuffix}
                            value={this.state.inputValue}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <List
                        size="large"
                        header={<div>Header</div>}
                        footer={<div>Footer</div>}
                        bordered
                        dataSource={this.state.sites_data}
                        renderItem={(item, index) =>
                            <List.Item actions={[
                                <Button
                                    type="primary"
                                    icon={<MinusCircleOutlined />}
                                    onClick={() => this.handleClearClick(index)}
                                >Clear</Button>
                            ]}>{item}</List.Item>
                        }
                    />
                </div>
            </div>
        )
    }
}

export default Sites;