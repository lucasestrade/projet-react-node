import { useContext } from "react";
import HistoryContext from "../context/History";
import { getHistoryList } from "../context/History/actions/history.js";

const useHistory = () => {
    const {
        state: { history: historyState },
        dispatch,
    } = useContext(HistoryContext);

    const actions = {
        getHistoryList: async function () {
            let historyList = await getHistoryList();
            dispatch({
                type: "SET_HISTORY_LIST",
                payload: historyList,
            });
        }
    }

    const selectors = {
        getHistory: () => historyState.history
    };

    return { selectors, actions };
};

export default useHistory;