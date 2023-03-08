import './app.css';
import ControlPropsPattern from './patterns/5_ControlPropsPattern';
import HigherOrderComponent from './patterns/1_HigherOrderComponent';
import MediumClapWithCustomHook from './patterns/2_CustomHook';
import CompoundComponent from './patterns/3_CompoundComponent';
import ReusableStyle from './patterns/4_ReusableStyles';

function App() {
    return (
        <>
            {/* <HigherOrderComponent /> */}
            {/* <MediumClapWithCustomHook /> */}
            {/* <CompoundComponent /> */}
            {/* <ReusableStyle /> */}
            {/* <ControlPropsPattern /> */}
            <MediumClapWithCustomHook />
        </>
    );
}

export default App;
