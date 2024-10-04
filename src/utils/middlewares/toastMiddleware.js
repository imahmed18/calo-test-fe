import { toastNotify } from "../../App";

const toastMiddleware = store => next => action => {
    const isOnline = navigator.onLine;
    const isRejected = action.type.endsWith('/rejected');

    if (isRejected) {
        const errorMessage = action.payload?.message || undefined;

        if (isOnline) {
            toastNotify('error', errorMessage || 'An error occurred.', action.type);
        } else {
            toastNotify('info', errorMessage || 'You are currently offline. Please connect to the internet to get data.', action.type);
        }
    }

    return next(action);
};

export default toastMiddleware;
