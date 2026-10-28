import React from 'react';
import {Page} from 'keenmart-ui-kit';
// Replace the empty contents with the requested product page. Reuse real library components.
// Page owns status/navigation/footer/safe areas; enable these only when the requested page needs them.
export default function App(){
 return <Page background="white" showStatusBar={false} showHomeIndicator={false} children={null}/>;
}
