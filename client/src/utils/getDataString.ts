export const getDataString = (name: string, defaultValue: string): string => {
    if (sessionStorage.getItem(name)) {
        if (JSON.parse(sessionStorage.getItem(name) || '')) {
            return JSON.parse(sessionStorage.getItem(name) || '');
        } else return defaultValue;
    } else return defaultValue;
};
