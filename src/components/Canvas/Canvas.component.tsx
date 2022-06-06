import React, { FC, useEffect, useRef } from 'react';
import { CanvasStyled } from './Canvas.styled';
import { ICanvasComponentProps } from './Canvas.types';

const CanvasComponent: FC<ICanvasComponentProps> = ({ selectedTool }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    console.log('selectedTool', selectedTool);
    useEffect(() => {
        console.log('canvasRef', canvasRef);
    }, []);

    return <CanvasStyled ref={canvasRef} />;
};

export default CanvasComponent;
