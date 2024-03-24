import React, { useState , useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updatedData } from '../features/updateData';

const SingleUser = () => {
    const { id } = useParams();
    const [userData, setUserData] = useState({});
    const dispatch=useDispatch();
    const navigate=useNavigate()
    const allusers = useSelector((state) => state.readData);
    const { users, isLoading } = allusers;
    let user = null;
    if (users) {
        user = users.find((user) => user.id === id);
    }

    useEffect(() => {
        if (user) {
          setUserData(user);
        }
      }, [user]);

      const getUserData = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updatedData(userData));
        console.log(userData);
        setUserData({});
        navigate("/")
      };
    if (isLoading) {
        return <h2>Loading...</h2>;
    }
    
    return (
        <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  name="email"
                  value={userData.email || ''}
                  onChange={getUserData}
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  name="name"
                  value={userData.name || ''}
                  onChange={getUserData}
                />
                <label htmlFor="floatingInput">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your phone Number"
                  name="contact"
                  value={userData.contact || ''}
                  onChange={getUserData}
                />
                <label htmlFor="floatingInput">Contact No.</label>
              </div>
              <div className="form-floating mb-3">
                <textarea
                  className="form-control"
                  placeholder="Tell us about Yourself"
                  name="description"
                  value={userData.description || ''}
                  onChange={getUserData}
                ></textarea>
                <label htmlFor="floatingTextarea">Description</label>
              </div>
              <div className="form-floating mb-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Job Title"
                  name="jobTitle"
                  value={userData.jobTitle || ''}
                  onChange={getUserData}
                />
                <label htmlFor="floatingInput">Job Title</label>
              </div>
              <button type="submit" className="btn btn-info text-light text-uppercase fw-bold w-100 p-3">
                Update
              </button>
            </form>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    
    );
};

export default SingleUser;
