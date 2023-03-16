const useNumbers = () => {
    const formatNormalNumbers = (number: number) => {
        if (number) {
            return number.toLocaleString("en-UK");
        }
        return 0;
    };

    const formatSmallNumbers = (number: number) => {
        if (number) {
            return Number(parseFloat(String(number)).toFixed(2)).toLocaleString("en-UK");
        }
        return 0;

    };
    return {
        formatNormalNumbers,
        formatSmallNumbers
    };
}

export default useNumbers

