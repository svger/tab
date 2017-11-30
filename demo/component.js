import React from 'react';
import Tabs from '../src';
import TabPanel from '../src/lib/TabPanel';

const TAB_KEY = {
  FIRST: { KEY: '0', TITLE: 'Tab One' },
  SECONDE: { KEY: '1', TITLE: 'Tab Two' },
  THIRD: { KEY: '2', TITLE: 'Tab Three' },
};

class App extends React.Component {

  render() {
    return (
      <div>
        <div style={{ textAlign: 'center', margin: '20px 0'}}>Tabs Demo</div>
        <Tabs defaultActiveKey={TAB_KEY.FIRST.KEY}>
          <TabPanel order={TAB_KEY.FIRST.KEY} tab={TAB_KEY.FIRST.TITLE}>
            <div style={{height: 500, textAlign: 'center', paddingTop: 200}}>Hello Tabs!</div>
          </TabPanel>
          <TabPanel order={TAB_KEY.SECONDE.KEY} tab={TAB_KEY.SECONDE.TITLE}>
            Test!
          </TabPanel>
          <TabPanel order={TAB_KEY.THIRD.KEY} tab={TAB_KEY.THIRD.TITLE}>
            Haha!
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default App;