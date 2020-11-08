let sites_data = [
    // 'www.dockers.com',
    // 'www.adidas.com',
    // 'www.nike.com',
    // 'www.underarmour.com',
    // 'www.newbalance.com',
    // 'www.puma.com',
    // 'www.prada.com',
    // 'www.fredperry.com',
    // 'www.caterpilla.com',
    // 'www.gucci.com',
    // 'www.allenedmonds.com',
    // 'www.brunomagli.com',
    // 'www.diesel.com',
];

const defaultSitesState = {
    inputValue: "",
    sites_data
};

const filterSites = (data) => {

    let list = [];

    Object.values(data).map((item) => {

        const { category, content } = item;
        if (category === "sites") {
            list.push(content)
        }
        
    })


    return list;

}

export const sitesReducer = (state = defaultSitesState, action) => {
    const newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {

        case "CHANGE_INPUT_SITE":
            newState.inputValue = action.value
            return newState

        case "ADD_A_SITE":
            newState.sites_data.push(newState.inputValue)
            newState.inputValue = ""
            return newState

        case "DELETE_A_SITE":
            newState.sites_data.splice(action.index, 1)
            return newState

        case "INIT_SITES":
            const { data } = action;
            const defaultSitesList = filterSites(data);
            newState.sites_data = [...newState.sites_data, ...defaultSitesList]
            return newState;

        default:
            return state;
    }
}