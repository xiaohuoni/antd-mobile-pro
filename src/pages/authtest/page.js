import { connect } from "dva";
import styles from "./page.less";
import { Button, Flex } from "antd-mobile";

function App({ authtest, dispatch }) {
  const { response, username } = authtest;
  const hande200 = ()=>{
    dispatch({
        type:'authtest/query200'
    })
  }
  const hande403 = ()=>{
    dispatch({
        type:'authtest/query403'
    })
  }
  const hande401 = ()=>{
    dispatch({
        type:'authtest/query401'
    })
  }
  return (
    <div>
      <Flex align="center">
        <Flex.Item className={styles.normal}>
          <h2>当前用户： {username}</h2>
          登录通过后，在本地保存服务端给的凭据，并且，与服务端的每次交互都需要在头中传递凭据（除了无需认证的资源）
          <br />
          <br />
          <br />
          <Button onClick={hande200}
          >
            创建请求，模拟服务端有效响应 200
          </Button>
          <Button type="primary"  onClick={hande403}
          >
            创建请求，模拟服务端未认证响应 403
          </Button>
          <Button type="warning"  onClick={hande401}
          >
            创建请求，模拟服务端无效凭据的响应 401
          </Button>
          <br />
          <br />
          <h4>{JSON.stringify(response)}</h4>
        </Flex.Item>
      </Flex>
    </div>
  );
}

export default connect(({ authtest }) => ({ authtest }))(App);
