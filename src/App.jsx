import { Button, IconButton, styled } from "@mui/material";

import "./App.css";

import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import LanguageIcon from "@mui/icons-material/Language";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const App = () => {
  const BotaoEstilizado = styled(Button) ({
    color: "blueviolet",
    fontSize: "1.2em",
    background: "linear-gradient(45deg, #fe6b8b, #ff8e53)",
    borderRadius: "0.6em"
  })

  return (
    <div>
      <div>
        <BotaoEstilizado>Botão com estilo</BotaoEstilizado>
      </div>
      <IconButton size="large" color="inherit">
        <AddShoppingCartIcon />
      </IconButton>
      <div>
        <Button size="large" startIcon={<LanguageIcon />} color="secondary">
          Hello World!
        </Button>
      </div>
      <div>
        <Button
          size="large"
          startIcon={<SaveIcon />}
          color="success"
          variant="contained"
        >
          Save
        </Button>
      </div>
      <div>
        <Button
          size="large"
          startIcon={<DeleteIcon />}
          color="error"
          variant="outlined"
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default App;
