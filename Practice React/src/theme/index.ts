import { PickerComponents } from '@mui/x-date-pickers/themeAugmentation';
import { DataGridComponents } from '@mui/x-data-grid/themeAugmentation';
import {createTheme, PaletteOptions} from "@mui/material"

export const getPalette = (dark: boolean): PaletteOptions & DataGridComponents & PickerComponents => {
   if (dark)
      return {
         mode: "dark",
         background: {
            default: "#111936",
            paper: "#1a223f"
         },
         error: {
            main: "#b90000"
         },
         primary: {
            main: "#1565c0"
         },
         secondary: {
            main: "#7B59E6"
         },
         warning: {
            main: "#ffc107"
         },
         success: {
            main: "#00c853"
         },
         info: {
            main: "#1e88e5"
         }
      }
   return {
      mode: "light",
      background: {
         default: "#fff",
         paper: "#eef2f6"
      },
      error: {
         main: "#930000"
      },
      primary: {
         main: "#037BA0",
         contrastText: "#b1e9fa"
      },
      secondary: {
         main: "#7B59E6",
         contrastText: "#c5b3ff"

      },
      warning: {
         main: "#FFD600"
      },
      success: {
         main: "#5FD29F"
      },
      info: {
         main: "#05BEF4"
      },
      text: {
         primary: "#545454"
      }
   }
}

export const getTheme = (dark: boolean) => {
   const palette = getPalette(dark)

   if (dark)
      return createTheme({
         palette,
         shape: {
            borderRadius: 15
         },
         typography: {
            fontFamily: "Arial",
            fontSize: 13
         },
         components: {
            
            MuiSkeleton: {
               styleOverrides: {
                  root: {
                     transform: "none!important"
                  }
               }
            },
            MuiAccordion: {
               defaultProps: {
                  style: {
                     backgroundColor: palette.background?.default
                  },
                  elevation: 0,
               }
            },
            MuiButton: {
               defaultProps: {
                  disableElevation: true
               }
            },
            MuiMenuItem: {
               styleOverrides: {
                  root: {
                     backgroundColor: `${palette?.background?.paper}!important`,
                     backdropFilter: "none!important",
                  }
               }
            },
            MuiMenu: {
               styleOverrides: {
                  list: {
                     "&[role=\"menu\"]": {
                        backgroundColor: palette.background?.paper
                     },
                  },
               },
            },
         },
      })
   return createTheme({
      palette,
      shape: {
         borderRadius: 15
      },
      typography: {
         fontFamily: "Arial",
         fontSize: 13
      },
      components: {
         MuiDataGrid: {
            defaultProps: {
               style: {backgroundColor: palette.background?.default},
               
            }
         },
         MuiSkeleton: {
            styleOverrides: {
               root: {
                  transform: "none!important"
               }
            }
         },
         MuiAccordion: {
            defaultProps: {
               style: {
                  backgroundColor: palette.background?.default
               },
               elevation: 0,
            }
         },
         MuiButton: {
            defaultProps: {
               disableElevation: true
            }
         },
         MuiMenuItem: {
            styleOverrides: {
               root: {
                  backgroundColor: `${palette?.background?.paper}!important`,
               }
            }
         }
      }
   })
}
