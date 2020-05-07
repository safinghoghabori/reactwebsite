import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function UserDetails() {
  const [user, setUser] = useState({
    loading: true,
    userData: [],
    error: "",
  });

  const { id } = useParams();

  useEffect(() => {
    const fetchUser = () => {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => {
          const newUser = response.data;
          setUser({
            loading: false,
            userData: newUser,
            error: "",
          });
        })
        .catch((error) => {
          setUser({
            loading: false,
            userData: [],
            error: error,
          });
        });
    };
    fetchUser();
  }, []);
  //   console.log(user);
  return (
    <div>
      {user.loading ? (
        <h3>Loading....</h3>
      ) : user.error ? (
        <h3>Error! Something went wrong...</h3>
      ) : (
        <div className="row">
          <div className="col s12 m6">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <h2 className="card-title">{user.userData.name}</h2>
                <h5>{user.userData.phone}</h5>
                <h5>{user.userData.website}</h5>
              </div>
              <div className="card-action">
                <a href="#">{user.userData.email}</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserDetails;
