import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getData } from "../features/readData";
import { deleteUser } from "../features/deleteData";

const Read = () => {
  const dispatch = useDispatch();
  
  const allusers = useSelector((state) => state.readData) // Accessing users slice of state
  const{users,isLoading}=allusers;
    useEffect(() => {
    dispatch(getData());
  }, []);

  const handleDelete=(id)=>{
    dispatch(deleteUser(id));
    dispatch(getData());
  }
  if(isLoading)
  {
   return(<h2>loading.......</h2>)
  }
  return (
    <div className="container d-flex flex-wrap gap-3 p-5 justify-content-center">
      {/* <h2>all Data</h2> */}
      {users &&
        users.map((user) => {
          return (
            <div className="card text-center py-3" key={user.id}>
              <img src={user.avatar} alt="Avatar" className="img-fluid m-auto rounded-circle" style={{width:"100px"}} />
              <div className="card-container">
                <h4>
                  <b>{user.name}</b>
                </h4>
                <p>{user.jobTitle}</p>
              </div>
              <Link to={`/user/${user.id}`} className="btn btn-success m-auto w-50 mb-3" >More</Link>
              <button
               className="btn btn-danger text-uppercase w-50 m-auto" 
               onClick={()=>{handleDelete(user.id)}}>delete</button>
            </div>
          );
        })}
    </div>
  );
};

export default Read;
