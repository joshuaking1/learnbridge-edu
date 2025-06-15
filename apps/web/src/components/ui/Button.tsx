import { cva, type RecipeVariantProps } from "@styled-system/css";
import { styled, type HTMLStyledProps } from "@styled-system/jsx";

const button = cva({
  base: {
    cursor: "pointer",
    fontWeight: "bold",
    borderRadius: "lg",
    padding: "0.75rem 1.5rem",
    transition: "all 0.2s ease-in-out",
  },
  variants: {
    variant: {
      primary: {
        bg: "brand.primary",
        color: "white",
        _hover: {
          opacity: 0.9,
        },
      },
      secondary: {
        bg: "transparent",
        color: "brand.secondary",
        border: "2px solid",
        borderColor: "brand.secondary",
        _hover: {
          bg: "brand.secondary",
          color: "white",
        },
      },
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export type ButtonProps = HTMLStyledProps<"button"> &
  RecipeVariantProps<typeof button>;
export const Button = styled("button", button);
