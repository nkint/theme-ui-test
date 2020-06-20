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
}> = ({ textRef, textProps, checked }) => {
  return (
    <Box
      ref={textRef}
      sx={{
        bg: "dodgerblue",
        "input:checked + &": {
          bg: "primary",
        },
      }}
      {...textProps}
    >
      {checked ? "Checked" : "Unchecked"}
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
> = forwardRef(({ checked, inputRef, inputProps, textRef, textProps }, ref) => {
  return (
    <Box ref={ref} as="label" sx={{ bg: "secondary" }}>
      <InnerInput
        checked={checked}
        inputRef={inputRef}
        inputProps={inputProps}
      />
      <InnerText checked={checked} textRef={textRef} textProps={textProps} />
    </Box>
  );
});
