import React from "react";

const Info = (props) => {

    const {product} = props;
    return(
        <div className="flex items-center gap-2 text-[16px] font-semibold capitalize mt-5">
            HOME &gt; SHOP &gt; {product.category} &gt; {product.name}
        </div>
    )
}

export default Info