import React, { Component } from "react";
import {
  Container,
  Grid,
  Typography,
  withStyles,
  Box,
  CardMedia,
  Paper,
  Button
} from "@material-ui/core";
import { Styles } from "./Style";
import 'react-owl-carousel2/src/owl.theme.default.css';
import 'react-owl-carousel2/lib/styles.css';
import { Link } from 'react-router-dom';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemt: [],
      itemNo: 1,
      id:''
    };
  }

  deletePost : (id) => {
    console.log(id)
    const data = new FormData();
    data.append('id', id);
    fetch('https://nuriman81.000webhostapp.com/tokobuku/hapus_buku.php', {
        method: 'POST',
        body: data,
    }).then((response) => {
        console.log(response)
    }
    ).then(json => console.log(json))


}

  componentDidMount() {
    fetch('https://nuriman81.000webhostapp.com/tokobuku/list_buku.php')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            itemt: result
          });
        },
        (error) => {
          console.log(error)
        }
      )

  }

  render() {
    const { itemt } = this.state
    const { classes } = this.props;


    return (
      <Container>
        <Box component="div" className={classes.title}>
          <Typography variant="h4" component="h3" align="center">
            Daftar Buku
              </Typography>
          <hr />
          <Box display="flex" justifyContent="flex-end" m={1}>
            <Button style={{ background: '#757575', marginBottom: 8 }}
              startIcon={<AddCircleOutlineIcon style={{ color: 'white' }} />}>
              <Link className={classes.ft} to='/Crud/AddBook'>
                Tambah Data
            </Link>
            </Button>
          </Box>
        </Box>
        <Grid container spacing={2}>
          {itemt.map((card, i) => (
            <Grid item key={card.id} xs={12}>
              <Paper className={classes.boxitem}>
                <Grid container spacing={3}>
                  <Grid>
                    <CardMedia
                      className={classes.cardMedia}
                      title="Image title"
                    >
                      <img style={{ width: 200 }} className={classes.img}
                        src={card.image} alt="" />
                    </CardMedia>
                  </Grid>

                  <Grid style={{ marginTop: 20 }}>
                    <Box style={{ height: 50, marginLeft: 10 }}>
                      <Typography style={{ fontSize: 18, color: "white", fontWeight: 'bold' }}>
                        {card.judul}
                      </Typography>
                    </Box>
                  <Box style={{ marginLeft: 10 }}>
                      <Typography style={{ color: "white", fontWeight: 'bold' }}>Nama Pengarang : {card.pengarang}</Typography>
                      &nbsp;
                      <Typography style={{ color: "white", fontWeight: 'bold' }}>Tahun Terbit : {card.tahun_terbit}</Typography>
                      &nbsp;
                      <Typography style={{ color: "white", fontWeight: 'bold' }}>Harga : ({card.harga})</Typography>
                      &nbsp;
                    <Typography style={{ color: "white", fontWeight: 'bold' }}>Stock : ({card.jumlah})</Typography>
                    </Box>

                    <br />
                    <div className={classes.linkMore}>
                      <Grid item xs={12} className={classes.linkMore}>
                        <Button variant="contained" style={{ marginLeft: 10 }}>
                          <Link className={classes.ln} to={{
                            pathname: '/Admin/Detail',
                            // id: `${item.id}`,
                          }}>
                            More
                                </Link>
                        </Button>
                        <Button variant="contained" style={{ marginLeft: 10 }}>
                          <Link className={classes.ln} to={{
                            pathname: '/Crud/EditBook',
                            // id: `${item.id}`,
                          }}>
                            Edit
                              </Link>
                        </Button>
                        <Button variant="contained" style={{ marginLeft: 10 }}
                        onClick={()=>this.deletePost(card.id)}>
                          Hapus
                            </Button>
                      </Grid>
                    </div>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }
}

export default withStyles(Styles)(Book);