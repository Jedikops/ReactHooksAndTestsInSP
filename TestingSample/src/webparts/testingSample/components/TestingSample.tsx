import * as React from 'react';
import styles from './TestingSample.module.scss';
import { ITestingSampleProps } from './ITestingSampleProps';
import { escape } from '@microsoft/sp-lodash-subset';
import App from '../context/App';

export default class TestingSample extends React.Component<ITestingSampleProps, {}> {
  public render(): React.ReactElement<ITestingSampleProps> {
    return (
      <div className={styles.testingSample}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <App />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
