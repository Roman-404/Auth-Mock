import React from 'react';
import {Avatar, Button, CssBaseline, TextField, FormControlLabel,
   Checkbox, Link, Grid, Box, Typography, Container} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { lightBlue } from "@material-ui/core/colors";
import axios from 'axios';
import './mock';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Ваш сайт
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

const theme = createMuiTheme({
  palette: {
    primary: lightBlue
  },
});

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(30),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  label: {
    textTransform: 'none',
    color: 'white',
  },
  textfield: {
    marginTop: theme.spacing(0),
  },
  formcontrollabel: {
    marginTop: theme.spacing(-1),
  }
}));

export default function Auth({setAuth}) {
  const classes = useStyles();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [token, setToken] = React.useState('');

  const handleSubmit = event => {
    event.preventDefault()
    axios.get('/api/user').then(({ data }) => {
      return data.user
    }).then(user => userAuth(user))
    .catch(error => console.log(error))
    if (localStorage.getItem('token') === token)
    setAuth()
  };

  const userAuth = user => {
    if (user.email === email && user.password === password) {
      setToken(user.token)
    }
  }

  React.useEffect(() => {
    localStorage.setItem('token', '86fasfgfsogHGad')
  }, []);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Вход в аккаунт
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <ThemeProvider theme={theme}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Почта"
            type='email'
            autoComplete="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
            error={email === ""}
            helperText={email === "" ? 'Обязательное поле!' : ' '}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Пароль"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={event => setPassword(event.target.value)}
            error={password === ""}
            helperText={password === "" ? 'Обязательное поле!' : ' '}
            className={classes.textfield}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Запомнить меня"
            className={classes.formcontrollabel}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            classes={{
              label: classes.label,
            }}
          >
            Войти в аккаунт
          </Button>
          </ThemeProvider>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Забыли пароль?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Ещё нет аккаунта? Регистрация"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};
