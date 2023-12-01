import React from "react";

const Container = (props) => {
    const { children } = props;
    return (
        <div className="mt-2">
            {children}
        </div>
    );
};

export default Container;
