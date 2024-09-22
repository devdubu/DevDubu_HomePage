// BUTTON 디자인 Translate

import type { IButton, ICompontColor } from "../types/util";

const componentUtil = {
  translateBtnFunc: (btnConfig: IButton) => {
    const btnDeignSet = {
      color: "",
      size: "",
    };

    if (btnConfig.size) {
      btnDeignSet.size = boxSize[btnConfig?.size];
    } else {
      btnDeignSet.size = boxSize["m"];
    }

    if (btnConfig.color && btnConfig.color.length > 0) {
      btnConfig.color.map((color: ICompontColor) => {
        btnDeignSet.color += `${colorLocation[color.location]}-${
          colorSet[color.colorSet]
        } hover:${colorLocation[color.location]}-${
          hoverColorSet[color.colorSet]
        } `;
      });
    } else {
      btnDeignSet.color =
        "hover:bg-gray-50 bg-white text-gray-900 ring-gray-300";
    }

    return btnDeignSet;
  },
};

export { componentUtil };

// 색상 위치
const colorLocation = {
  text: "text",
  inline: "ring",
  outline: "outline",
  background: "bg",
};

// 색상
const colorSet = {
  main: "primary-600",
  error: "red-600",
  info: "blue-600",
  success: "green-500",
  warning: "yellow-400",
  white: "white",
};

const hoverColorSet = {
  main: "primary-500",
  error: "red-500",
  info: "blue-500",
  success: "green-400",
  warning: "yellow-300",
  white: "white",
};

// 크기
const boxSize = {
  xs: "px-2 py-1 text-xs",
  s: "px-2 py-1 text-sm",
  m: "px-2.5 py-1.5 text-sm",
  l: "px-3 py-2 text-sm",
  xl: "px-3.5 py-2.5 text-sm",
};
