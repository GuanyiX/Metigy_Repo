import React from 'react';
import { Button } from 'antd';
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons';
import Axios from "axios";

import store from '../../../store';
import saveConverter from "../../../reference/saveConverter";

import { url_updated } from "../../../api/index";


class ButtonCluster extends React.Component {


    handleClick = async () => {

        const { keywords_data } = store.getState().keywordsReducer;
        const { sites_data } = store.getState().sitesReducer;
        const settings_raw_data = store.getState().settingsReducer;

        let keywordsArr = this.keywordsMaker(keywords_data);
        let sitesArr = this.sitesMaker(sites_data);
        let settingsArr = this.settingsMaker(settings_raw_data);
        
        let result = keywordsArr.concat(sitesArr).concat(settingsArr);
        
        const saveData = {
            ...result
        }

        try {
            await Axios.post(url_updated, saveData)
            console.log(saveData);
            alert("Successfully export current settings")
        }catch{
            alert("Failled! Error in connection")
        }

    }

    keywordsMaker = (keywords_data) => {
        let keywordsArr = [];

        keywords_data.map((item, index) => {
            const element = {"category": "keywords", "content": `${item}`};
            keywordsArr.push(element) 
        })

        return keywordsArr;
    }

    sitesMaker = (sites_data) => {
        let sitesArr = [];

        sites_data.map((item, index) => {
            const element = {"category": "sites", "content": `${item}`};
            sitesArr.push(element)
        })

        return sitesArr;
    }

    settingsMaker = (settings_raw_data) => {
        let arr = [];
        let settingsArr = [];

        for (let [key, value] of Object.entries(settings_raw_data)) {

            if(value === true) {
                arr.push(key)
            }
        }

        const settings_data = saveConverter(arr);

        settings_data.map((item, index) => {
            const element = {"category": "settings", "content": `${item}`};
            settingsArr.push(element)
        })

        return settingsArr;
    }


    render() {

        const size = "large";

        return (
            <div className="btn-wrapper flex-container">
                <Button type="primary" size={size} onClick={this.handleClick}>
                    EXPORT REPORT
                </Button>
                <Button type="primary" icon={<PauseCircleOutlined />} size={size}>
                    STOP
                </Button>
                <Button type="primary" icon={<PlayCircleOutlined />} size={size}>
                    START
                </Button>
            </div>
        )
    }
};

export default ButtonCluster;