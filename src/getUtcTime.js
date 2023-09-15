const getUtcTime = () => {
    const newDate = (date) => {
        const today = new Date(date);

        const year = today.getFullYear();
        const month = (today.getMonth() + 1).toString().padStart(2, "0");
        const day = today.getDate().toString().padStart(2, "0");

        const getDate = `${year}-${month}-${day}`;
        return getDate;

    }

    return {newDate};
}

export default getUtcTime;