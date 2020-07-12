import { useContext } from "react";
import HistoryContext from "../context/History";

const useHistory = () => {
    const {
        state: { history: historyState },
        dispatch,
    } = useContext(HistoryContext);

    const actions = {
        
    }

    const selectors = {
        getHistory: () => historyState.history
    };

    return { selectors, actions };
};

export default useHistory;