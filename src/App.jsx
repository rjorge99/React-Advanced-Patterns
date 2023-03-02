import './app.css';
import HigherOrderComponent from './patterns/1_HigherOrderComponent';
import MediumClapWithCustomHook from './patterns/2_CustomHook';
import CompoundComponent from './patterns/3_CompoundComponent';

function App() {
    return (
        <>
            {/* <HigherOrderComponent /> */}
            {/* <MediumClapWithCustomHook /> */}
            <CompoundComponent />
        </>
    );
}

export default App;
