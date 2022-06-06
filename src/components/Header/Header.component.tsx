import React, { Dispatch, FC, SetStateAction } from 'react';
import {
    HeaderButtonStyled,
    HeaderNavStyled,
    HeaderStyled,
} from './Header.styled';
import { ETools } from '../../common/enums';
import { IHeaderComponentProps } from './Header.types';

const HeaderComponent: FC<IHeaderComponentProps> = ({
    selectedTool,
    setSelectedTool,
}) => {
    const handleButtonClick = (tool: ETools) => setSelectedTool(tool);

    return (
        <HeaderStyled>
            <HeaderNavStyled>
                {Object.values(ETools).map((tool) => (
                    <HeaderButtonStyled
                        key={tool}
                        isActive={tool === selectedTool}
                        onClick={() => handleButtonClick(tool)}
                    >
                        {tool}
                    </HeaderButtonStyled>
                ))}
            </HeaderNavStyled>
        </HeaderStyled>
    );
};

export default HeaderComponent;
