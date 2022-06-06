import React, { useState } from 'react';
import { Header, Canvas } from './components';
import { ETools } from './common/enums';

const App = () => {
    const [selectedTool, setSelectedTool] = useState(ETools.CURSOR);
    return (
        <div>
            <Header
                selectedTool={selectedTool}
                setSelectedTool={setSelectedTool}
            />
            <Canvas selectedTool={selectedTool} />
        </div>
    );
};

export default App;
