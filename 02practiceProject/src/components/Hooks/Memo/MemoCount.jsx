import { memo, useRef } from "react";

const Counts = () =>{
    const renderCount = useRef(0);
    return(
        <div className="mt-3 font-display text-center">
            <p className="">
                Nothing Changed Here But i Have Now Rendered:
                <span className="text-red-50">
                    {renderCount.current++}
                    time(s)
                </span>
            </p>

        </div>
    )
}
export default memo(Counts);