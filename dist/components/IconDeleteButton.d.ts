import React, { FC } from "react";
import { Color } from "../themes";
interface Props {
    /**
     * Icon color
     */
    color?: Color;
    /**
     * Callback when button is clicked
     */
    onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    /**
     * Data selector for testing
     */
    testid?: string;
}
export declare const IconDeleteButton: FC<Props>;
export {};
