import {
  AppBar,
  createTheme,
  Toolbar,
  Typography,
} from "@mui/material";
import { Container, ThemeProvider } from "@mui/system";
import { Link } from "react-router-dom";
// import { CryptoState } from "../../Context";
import "./Header.css";

const Header = () => {
  const darkTheme = createTheme({
    palette: {
      mode : 'dark'
    },
  });

  // const {currency, setCurrency} = CryptoState()
  // console.log(currency)

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <AppBar position='sticky'>
          <Container >
            <Toolbar sx={{display:'flex', alignItems:'center',justifyContent:'space-between'}}>
              <Link to={"/"}>
                <Typography variant="h5" className="title">
                  Trade<span>Dynamo</span>
                </Typography>
              </Link>

              <div  className='right'>
                <Typography>CONTACT</Typography>
                <Typography>ABOUT US</Typography>
              </div>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </>
  );
};

export default Header;
