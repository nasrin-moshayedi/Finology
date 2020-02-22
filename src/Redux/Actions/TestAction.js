import Data from "./../../assets/Data/jj.json";
console.log(Data, "Data");
export const TestAction = () => {
    return {
        type: "TEST_DATA",
        payload: {
            data: Data
        }
    };
};
