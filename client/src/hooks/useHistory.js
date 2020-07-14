import { useContext } from "react";
import HistoryContext from "../context/History";
import { getHistoryList, sendRefund } from "../context/History/actions/history.js";

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
        },
        sendRefund: async function () {
            sendRefund(historyState.price, '4')
        }

    }

    const selectors = {
        getHistory: () => historyState.history,
        getPrice: () => historyState.price
    };

    return { selectors, actions };
};

export default useHistory;