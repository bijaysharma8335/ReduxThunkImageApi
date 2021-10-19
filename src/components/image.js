import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts } from "../store/image";

const Images = () => {
    const dispatch = useDispatch();
    const title = useSelector((state) => state.list);

    useEffect(() => {
        dispatch(loadPosts()); }, [dispatch]);

    return (
        <div className="col-md-12 text-center">
            <h1 className="text-success">Images Details</h1>
            <ul>
            {title.map((imag) => (
                    <div  key={imag.id} className="col-md-12 ">
                        <h4>{imag.id}</h4>
                        <h2><a href={imag.url} className=" btn btn-block btn-warning text-danger">
                            {imag.title}</a></h2>
                        
                        
                        </div>
                ))}
               
            </ul>
        </div>
    );
};

export default Images;
