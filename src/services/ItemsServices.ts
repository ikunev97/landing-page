import axios from "axios";
import { ITEMS_URL } from "../constants";
import { setError, setItems, setLoading } from "../redux/slices/ItemsSlice";
import { AppThunk } from "../redux/store";

export const getItems = (): AppThunk => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get(`${ITEMS_URL}`);
    if (response) {
      dispatch(setLoading(false));
      dispatch(setItems(response.data));
    }
  } catch (error: any) {
    if (error instanceof Error) {
      dispatch(setLoading(false));
      dispatch(setError(error.message));
    }
  }
};
