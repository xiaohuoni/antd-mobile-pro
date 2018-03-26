
import { connect } from 'dva';
import styles from './page.less';

function App({test,dispatch}) {
    const { text,list } = test;
    return (
        <div className={styles.normal}>
            <h2>
                {text}
            </h2>
        </div>
    );
}

export default connect(({test})=>({test}))(App);
