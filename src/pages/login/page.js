
import { connect } from 'dva';
import styles from './page.less';
import {Button,List,InputItem} from 'antd-mobile';
import { createForm } from 'rc-form';
import Link from 'umi/link';

function App({login,dispatch,form:{getFieldProps,validateFields},}) {
    const {account,password} = login
    const okHandler = () => {
        validateFields((err, values) => {
          if (!err) {
              dispatch({
              type: 'login/login',
              payload: {...values}
            })
          }
        })
      }; 
    return (
        <div className={styles.normal}>
            <List renderHeader={() => (<div>登录<Link to="/">返回首页</Link></div>)}>
          <InputItem
            {...getFieldProps('account',{
                initialValue:account
            })}
            placeholder="请输入账号:888888"
          >账号</InputItem>
          <InputItem
            {...getFieldProps('password',{
                initialValue:password
            })
            }
            placeholder="请输入密码:666666"
          >密码</InputItem>
          <List.Item>
            <div
              style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
            >
              <Button type="primary" onClick={okHandler}>登 录</Button>
            </div>
          </List.Item>
        </List>
        {/* <pre>
            <code>{`
<List renderHeader={() => '登录'}>
<InputItem
{...getFieldProps('account',{
    initialValue:account
})}
           placeholder="请输入账号:888888"
         >账号</InputItem>
         <InputItem
           {...getFieldProps('password',{
               initialValue:password
           })
           }
           placeholder="请输入密码:666666"
         >密码</InputItem>
         <List.Item>
           <div
             style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
           >
             <Button type="primary" onClick={okHandler}>登 录</Button>
           </div>
         </List.Item>
       </List>`}</code>
          </pre> */}
        </div>
    );
}
      
export default connect(({login})=>({login}))(createForm()(App));
