
import { connect } from 'dva';
import styles from './page.less';
import QRCode from 'qrcode-react';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
function App({qrcode,dispatch}) {
    const { share_url,list } = qrcode;
    return (
        <div className={styles.normal}>
        <WingBlank size="lg">
    <WhiteSpace size="lg" />
    <Card>
      <Card.Header
        title={(<div><p style={{marginBottom:0}}>扫描二维码，体验移动端</p><span>2018年3月26日</span></div>)}
        thumb="https://avatars3.githubusercontent.com/u/11746742?s=460&v=4"
        // extra={<span>2018年3月26日</span>}
        thumbStyle={{width:'1rem',borderRadius:'50%'}}
      />
      <Card.Body>
      <QRCode value={share_url} size={450}/>
      </Card.Body>
      <Card.Footer content={
          (
              <div>
             <span>Github地址:</span>
            <iframe src="https://ghbtns.com/github-btn.html?user=xiaohuoni&repo=antd-mobile-pro&type=star&count=true&size=large" frameBorder="0" scrolling="1" width="160px" height="30px" style={{    verticalAlign: 'sub'}} title="github"></iframe>
          
          </div>)
      }
      extra={
          (<iframe src="https://ghbtns.com/github-btn.html?user=xiaohuoni&type=follow&count=true&size=large" frameBorder="0" scrolling="0" width="220px" height="30px" title="github"></iframe>)
      }
      />

    </Card>
    <WhiteSpace size="lg" />
  </WingBlank>
        </div>
    );
}

export default connect(({qrcode})=>({qrcode}))(App);
