import React from "react";

export default React.createContext({
    quizzTheme: "",
    quizzId: null,
    updateQuizzTheme: theme => {},
    updateQuizzId: id => {}
});
