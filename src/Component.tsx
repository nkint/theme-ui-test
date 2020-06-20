/** @jsx jsx */
import { jsx, Box, BoxProps } from "theme-ui";
import {
  FC,
  Ref,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
  forwardRef,
} from "react";
import { usePx } from "./use-px";

type InputProps =
  | (React.InputHTMLAttributes<HTMLInputElement> & { "data-testid": string })
  | undefined;

type TextProps = (BoxProps & { "data-testid": string }) | undefined;

const InnerInput: FC<{
  checked: boolean;
  inputRef?: Ref<HTMLInputElement> | undefined;
  inputProps: InputProps;
}> = ({ inputRef, inputProps, checked }) => {
  return (
    <input
      sx={{
        visibility: "hidden",
        position: "absolute",
        height: 0,
        width: 0,
        opacity: 0,
        overflow: "hidden",
        bg: "transparent",
        zIndex: -1,
      }}
      onChange={() => {}}
      checked={checked}
      ref={inputRef}
      type="checkbox"
      {...inputProps}
    />
  );
};

const InnerText: FC<{
  checked: boolean;
  textRef?: Ref<HTMLDivElement> | undefined;
  textProps: TextProps;
  height: string | number;
}> = ({ textRef, textProps, checked, height }) => {
  console.log({ height, checked });
  return (
    <Box
      ref={textRef}
      sx={{
        height,
        bg: "dodgerblue",
        "input:checked + &": {
          bg: "tomato",
        },
      }}
      {...textProps}
    >
      Foo: {checked ? "checked" : "unchecked"}
      <span
        sx={{
          bg: "green",
        }}
      >
        foo
      </span>
    </Box>
  );
};

export type ForwardRef<T, P> = ForwardRefExoticComponent<
  PropsWithoutRef<P> & RefAttributes<T>
>;

export const Component: ForwardRef<
  HTMLDivElement,
  {
    checked: boolean;
    height?: number | string;

    inputRef?: Ref<HTMLInputElement>;
    inputProps?: InputProps;

    textRef?: Ref<HTMLDivElement>;
    textProps?: TextProps;
  }
> = forwardRef(
  ({ checked, height = 1, inputRef, inputProps, textRef, textProps }, ref) => {
    const h: any = usePx(height);

    return (
      <Box
        ref={ref}
        as="label"
        sx={{
          bg: "black",
        }}
      >
        <InnerInput
          checked={checked}
          inputRef={inputRef}
          inputProps={inputProps}
        />
        <InnerText
          height={h}
          checked={checked}
          textRef={textRef}
          textProps={textProps}
        />
      </Box>
    );
  }
);
