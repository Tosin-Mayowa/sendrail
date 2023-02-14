const useNumbers = () => {
    const formatNormalNumbers = (number: number) => {
        if (number) {
            return Number(parseFloat(String(number)).toFixed(2)).toLocaleString("en-UK");
        }
        return 0;

    };
    return {
        formatNormalNumbers,
    };
}

export default useNumbers

