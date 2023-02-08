// depreciated
export const getWithExpiry = (key: string) => {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) {
        return null;
    }
    const item = JSON.parse(itemStr);
    const now = new Date();
    if (now.getTime() > item.expiry) {
        localStorage.removeItem(key);
        return null;
    }
    return item.value;
};

export const setWithExpiry = (key: string, value: any, ttl = 6) => {
    const now = new Date();
    const expiry = ttl * 3600000;

    const item = {
        value: value,
        expiry: now.getTime() + expiry,
    };
    localStorage.setItem(key, JSON.stringify(item));
};

export const removeWithExpiry = (key: string) => {
    localStorage.removeItem(key);
    return true;
};
