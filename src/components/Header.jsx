import {AppBar, Toolbar, styled} from "@mui/material";

const Container = styled(AppBar)`
  background: #060606;
  height: 65px;
  border-bottom: 1px solid #2f2f2f;
`

const Header = () => {
  return (
      <Container position="static">
        <Toolbar>
          <img src="/codepen_icon.svg" style={{ width: "45px" }} />
        </Toolbar>
      </Container>
  );
};

export default Header;
