import React from "react";

const UserProfilePage = ({ params }: any) => {
  return (
    <div>
      <h1>Profile</h1>
      <hr />
      <p className="">Profile Name {params.id}</p>
    </div>
  );
};

export default UserProfilePage;
