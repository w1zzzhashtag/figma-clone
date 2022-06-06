import { ITool } from '../../common/types';
import { Dispatch, SetStateAction } from 'react';
import { ETools } from '../../common/enums';

export interface IHeaderComponentProps extends ITool {
    setSelectedTool: Dispatch<SetStateAction<ETools>>;
}

export interface IHeaderButtonStyledProps {
    isActive: boolean;
}
