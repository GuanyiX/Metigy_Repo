import React from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';

import store from '../../store';


class Keywords extends React.Component {

    constructor() {
        super()

        this.state = store.getState().keywordsReducer

        store.subscribe(this.handleStoreChange);
    }

    handleAddClick = () => {
        if (this.state.keywords_data.length <= 12) {

            const action = {
                type: "ADD_A_KEYWORD",
            }

            store.dispatch(action)
        } else {
            alert("Warning: Keywords list is too long! Please remove at least one keyword!")
        }
    }

    handleClearClick = (index) => {

        const action = {
            type: "DELETE_A_KEYWORD",
            index,
        }

        store.dispatch(action)
    }

    handleInputChange = (e) => {

        const action = {
            type: 'CHANGE_INPUT_KEYWORD',
            value: e.target.value
        }

        store.dispatch(action); 
    }

    handleStoreChange = () => {
        this.setState(store.getState().keywordsReducer);
    }

    render() {
        const addSuffix = (
            <Button type="primary" icon={<PlusCircleOutlined />} onClick={this.handleAddClick}>Add</Button>
        );


        return (
            <div className="keywords-wrapper flex-item">
                <p className="keywords-header">Keywords</p>
                <div className="keywords-body">
                    <div className="input-wrapper flex-container">
                        <Input
                            placeholder={"Enter your keywords here(shoes)"}
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
                        dataSource={this.state.keywords_data}
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

export default Keywords;