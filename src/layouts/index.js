import styles from "./index.less";
import { connect } from "dva";
import { NavBar, Icon, Menu } from "antd-mobile";
import router from "umi/router";
import withRouter from "umi/withRouter";
import { Helmet } from "react-helmet";
import config from "utils/config";
const { prefix, openPages } = config;

const Layout = ({ global, dispatch, children, location }) => {
  let { pathname } = location;
  if (openPages && openPages.includes(pathname)) {
    return <div> {children}</div>;
  }
  const { menu, showMenu } = global;
  const handleClick = () => {
    dispatch({
      type: "global/save",
      payload: {
        showMenu: !showMenu
      }
    });
  };
  const onChange = value => {
    console.log(value);
    const route = value[0];
    handleClick();
    router.push(route);
  };
  const title = () => {
    let appTitle = "Antd-Mobile-Pro";
    menu.map(item => {
      if (item.value === pathname) {
        appTitle = item.label;
      }
      return item;
    });

    return (
      <div>
        <Helmet>
          <title>{appTitle}</title>
        </Helmet>
        {appTitle}
      </div>
    );
  };
  return (
    <div>
      <NavBar
        icon={
          pathname === "/main" ? <Icon type="left" /> : <Icon type="ellipsis" />
        }
        mode="light"
        onLeftClick={handleClick}
      >
        {title()}
      </NavBar>
      {showMenu ? (
        <Menu
          className={styles.singleFooMenu}
          data={menu}
          value={[pathname]}
          level={1}
          height={document.documentElement.clientHeight}
          onChange={onChange}
        />
      ) : null}
      {children}
    </div>
  );
};
export default withRouter(connect(({ global }) => ({ global }))(Layout));
