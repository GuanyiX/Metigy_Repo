let keywords_data = [
    // 'Shoes',
    // 'Shoes carnival',
    // 'Shoes palace',
    // 'Shoes stores near me',
    // 'Shoes for crew',
    // 'Shoes station',
    // 'Shoes repair',
    // 'Shoes store',
    // 'Shoes for women',
    // 'Shoes fashion week',
    // 'Shoes instagram',
    // 'Shoes stories',
    // 'Shoes show',
];

const defaultKeywordsState = {
    inputValue: "",
    keywords_data
};

const filterKeywords = (data) => {

    let list = [];

    Object.values(data).map((item) => {

        const { category, content } = item;
        if (category === "keywords") {
            list.push(content)
        }
        
    })

    return list;

}

export const keywordsReducer = (state = defaultKeywordsState, action) => {
    const newState = JSON.parse(JSON.stringify(state))

    switch(action.type) {

        case "CHANGE_INPUT_KEYWORD":
            newState.inputValue = action.value
            return newState
        
        case "ADD_A_KEYWORD":
            newState.keywords_data.push(newState.inputValue)
            newState.inputValue = ""
            return newState

        case "DELETE_A_KEYWORD":
            newState.keywords_data.splice(action.index, 1)
            return newState

        case "INIT_KEYWORDS":
            const { data } = action;
            const defaultKwdsList = filterKeywords(data);
            newState.keywords_data = [...newState.keywords_data, ...defaultKwdsList]
            return newState;

        default:
            return state;
    }
}


