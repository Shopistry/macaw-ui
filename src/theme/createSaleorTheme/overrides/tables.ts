import { fade, ThemeOptions } from "@material-ui/core/styles";

import { SaleorThemeColors } from "../types";

export const tableOverrides = (
  colors: SaleorThemeColors,
  fontFamily: string
): ThemeOptions["overrides"] => ({
  MuiTable: {
    root: {
      fontFamily,
      fontFeatureSettings: '"tnum"',
    },
  },
  MuiTableCell: {
    body: {
      fontSize: "1.6rem",
    },
    head: {
      fontSize: "1.4rem",
      fontWeight: 400,
      color: colors.font.textDisabled,
    },
    paddingCheckbox: {
      "&:first-child": {
        padding: "0 12px",
        width: 72,
      },
      "&:not(first-child)": {
        padding: 0,
        width: 52,
      },
    },
    root: {
      "&:first-child": {
        "&:not($paddingCheckbox)": {
          paddingLeft: 24 + "px",
          textAlign: "left" as "left",
        },
      },
      borderBottomColor: colors.paperBorder,
      padding: "16px 24px",
    },
  },
  MuiTablePagination: {
    input: {
      color: colors.primary,
      fontSize: "1.4rem",
    },
  },
  MuiTableRow: {
    footer: {
      "$root$hover&:hover": {
        background: "none",
      },
    },
    head: {
      "$root$hover&:hover": {
        background: "none",
      },
    },
    hover: {
      "$root&:hover": {
        backgroundColor: fade(colors.primary, 0.3),
      },
    },
    root: {
      "&$selected": {
        backgroundColor: fade(colors.primary, 0.05),
      },
    },
  },
});
