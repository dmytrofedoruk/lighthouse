import React from "react";
import {Avatar, Popover} from "antd";
import {useAuth} from "../../../util/use-auth";
import Link from "next/link";

const UserProfile = () => {
  const {authUser, userSignOut} = useAuth();

  // const userMenuOptions = (
  //   <ul className="gx-user-popover">
  //     <li>My Account</li>
  //     <li>Connections</li>
  //     <li onClick={() => userSignOut()}>Logout
  //     </li>
  //   </ul>
  // );

  return authUser ? (
    <div className=" gx-align-items-center gx-mb-4" style={{textAlign: "center"}}>
      {/* <Popover placement="bottomRight" content={userMenuOptions} trigger="click"> */}
        <Avatar src="/images/Rectangle2.png" className="gx-size-50 gx-pointer gx-mr-3" alt=""/>
        <div className="gx-avatar-name gx-mt-2">{authUser.name}</div>
        <div className="gx-avatar-name gx-mt-2 gx-text-light">example@test.com</div>
      {/* </Popover> */}
      <div className="gx-mt-3">
        <button className="logout_button" style={{marginRight: "10px"}}><img style={{width: "13px"}} src="/images/settings.png"/></button>
        <button className="logout_button" onClick={() => userSignOut()}><img style={{width: "13px"}} src="/images/logout.png"/></button>
      </div>
    </div>
  ) : null
};

export default UserProfile;
