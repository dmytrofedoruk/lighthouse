import React, {useEffect} from "react";
import {Menu, Button} from "antd";
import Link from "next/link";

import {useRouter} from 'next/router'
import CustomScrollbars from "../../../util/CustomScrollbars";
import SidebarLogo from "./SidebarLogo";
import UserProfile from "./UserProfile";
import AppsNavigation from "./AppsNavigation";
import {
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  THEME_TYPE_LITE
} from "../../../constants/ThemeSetting";
import {useDispatch, useSelector} from "react-redux";
import {setPathName} from "../../../redux/actions";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const SidebarContent = () => {
  const navStyle = useSelector(({settings}) => settings.navStyle);
  const themeType = useSelector(({settings}) => settings.themeType);

  const dispatch = useDispatch();
  const router = useRouter()

  const getNoHeaderClass = (navStyle) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR || navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR) {
      return "gx-no-header-notifications";
    }
    return "";
  };

  const getNavStyleSubMenuClass = (navStyle) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR) {
      return "gx-no-header-submenu-popup";
    }
    return "";
  };

  useEffect(() => {
    dispatch(setPathName(router.pathname))
  }, [router.pathname]);

  const selectedKeys = router.pathname.substr(1) || 'dashboard';
  const defaultOpenKeys = selectedKeys.split('/')[1];

  // console.log(defaultOpenKeys);  
  // console.log(selectedKeys);

  return (
    <React.Fragment>
      <SidebarLogo/>
      <div className="gx-sidebar-content">
       
       
        <CustomScrollbars className="gx-layout-sider-scrollbar">
        <div style={{margin: "0px 20px 12px 20px"}}>
            <Button className="gx-mb-0 design-button" style={{background: "#D3F36B", border: "none"}} htmlType="button">
              + Lorem ipsum
            </Button>
          </div>
          <Menu
          style={{background: "#F9FAF5"}}
            defaultOpenKeys={[defaultOpenKeys]}
            selectedKeys={[selectedKeys]}
            theme={themeType === THEME_TYPE_LITE ? 'lite' : 'dark'}
            mode="inline">

          

            <Menu.Item key="dashboard">
              <Link href="/dashboard">
                <a><i className="icon icon-widgets"/><span>Dashboard</span></a>
              </Link>
            </Menu.Item>

            
            <Menu.Item key="user-management">
              <Link href="/user-management">
                <a><i className="icon icon-widgets"/><span>User Management</span></a>
              </Link>
            </Menu.Item>

            
            <Menu.Item key="page3">
              <Link href="/page3">
                <a><i className="icon icon-widgets"/><span>Page 3</span></a>
              </Link>
            </Menu.Item>

            
            <Menu.Item key="page4">
              <Link href="/page4">
                <a><i className="icon icon-widgets"/><span>Page 4</span></a>
              </Link>
            </Menu.Item>
          </Menu>
        </CustomScrollbars>
        <div className={`gx-sidebar-notifications ${getNoHeaderClass(navStyle)}`}>
          <UserProfile/>
          {/* <AppsNavigation/> */}
        </div>
      </div>
    </React.Fragment>
  );
};

SidebarContent.propTypes = {};
export default SidebarContent;

