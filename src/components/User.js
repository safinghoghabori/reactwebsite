import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserData } from "../redux/users/usersActions";
import { Link } from "react-router-dom"; //to make route dynamic and use below
import Paginations from "./Paginations";

function User() {
  const usersData = useSelector((state) => state);

  const [currentPage, setCurrentPage] = useState(1); // For pagination
  const [userPerPage, setUserPerPage] = useState(5); // ""

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserData());
  }, []);
  // console.log(usersData);

  const indexOfLastUser = currentPage * userPerPage;
  const indexOfFirstUser = indexOfLastUser - userPerPage;
  const limitedUsers = usersData.users.slice(indexOfFirstUser, indexOfLastUser);

  // Change current page
  const handlePagination = (number) => {
    setCurrentPage(number);
  };

  return (
    <div>
      <h1>Users Name:</h1>
      {usersData.loading ? (
        <h3>Loading....</h3>
      ) : usersData.error ? (
        <p>Error! Something went wrong</p>
      ) : (
        limitedUsers.map((user) => (
          <div className="collection" key={user.id}>
            <Link to={`/users/${user.id}`} className="collection-item">
              {user.name}
            </Link>
          </div>
        ))
      )}
      <Paginations
        totalUsers={usersData.users.length}
        userPerPage={userPerPage}
        handlePagination={handlePagination}
      />
    </div>
  );
}

export default User;
