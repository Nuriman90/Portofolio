import React, { Component } from 'react';
import { Container, Paper, Typography, withStyles, Button, TextField, Box } from '@material-ui/core'
import { Styles } from './Style';

class AddBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            judul: '',
            pengarang: '',
            tahun_terbit: '',
            harga: '',
            detail: '',
            jumlah: '',
            image: '',
            imagePreviewUrl: null
        }
    }

    changeImage = (event) => {
        event.preventDefault();

        let reader = new FileReader();
        let image = event.target.files[0];

        reader.onloadend = () => {
            this.setState({
                image: image,
                imagePreviewUrl: reader.result
            })
        }

        reader.readAsDataURL(image)
    }

    changeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handlerSimpan = (event) => {
        event.preventDefault();

        const data = new FormData();
        data.append('id', this.state.id);
        data.append('judul', this.state.judul);
        data.append('pengarang', this.state.pengarang);
        data.append('tahun_terbit', this.state.tahun_terbit);
        data.append('harga', this.state.harga);
        data.append('detail', this.state.detail);
        data.append('jumlah', this.state.jumlah);
        data.append('image', this.uploadInput.files[0]);
        fetch('https://nuriman81.000webhostapp.com/tokobuku/tambah_buku.php', {
            method: 'POST',
            body: data,
        }).then((response) => {
            console.log(response)
        }
        ).then(json => console.log(json))
    }

    render() {
        const { classes } = this.props
        return (
            <React.Fragment>
                <Box component="div" className={classes.title}>
                    <Typography variant="h4" component="h3" align="center">
                        Tambah Data Buku
                    </Typography>
                    <hr />
                </Box>
                <Paper className={classes.root}>
                    <Container align='center' style={{ width: 500 }}>
                        <form className={classes.form} noValidate onSubmit={this.handlerSimpan}>
                            <div>
                                <div>
                                    <TextField
                                        // variant="outlined"
                                        required
                                        fullWidth
                                        id="id"
                                        label="ID"
                                        name="id"
                                        autoComplete="id"
                                        className={classes.tf}
                                        onChange={this.changeHandler}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        // variant="outlined"
                                        required
                                        fullWidth
                                        id="judul"
                                        label="Judul"
                                        name="judul"
                                        className={classes.tf}
                                        autoComplete="judul"
                                        onChange={this.changeHandler}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        // variant="outlined"
                                        required
                                        fullWidth
                                        id="pengarang"
                                        label="Pengarang"
                                        name="pengarang"
                                        autoComplete="pengarang"
                                        className={classes.tf}
                                        onChange={this.changeHandler}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        // variant="outlined"
                                        required
                                        fullWidth
                                        id="tahun_terbit"
                                        label="Tahun Terbit"
                                        name="tahun_terbit"
                                        className={classes.tf}
                                        autoComplete="tahun_terbit"
                                        onChange={this.changeHandler}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        // variant="outlined"
                                        required
                                        fullWidth
                                        id="harga"
                                        label="Harga"
                                        name="harga"
                                        autoComplete="harga"
                                        className={classes.tf}
                                        onChange={this.changeHandler}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        // variant="outlined"
                                        required
                                        fullWidth
                                        id="detail"
                                        label="Detail"
                                        name="detail"
                                        className={classes.tf}
                                        autoComplete="detail"
                                        onChange={this.changeHandler}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        // variant="outlined"
                                        required
                                        fullWidth
                                        id="jumlah"
                                        label="Jumlah"
                                        name="jumlah"
                                        autoComplete="jumlah"
                                        className={classes.tf}
                                        onChange={this.changeHandler}
                                    />
                                </div>
                                <div className={classes.tf}>
                                    <input ref={(ref) => {
                                        this.uploadInput = ref;
                                    }} onChange={this.changeImage} type="file" />
                                    <Paper style={{ margintop: 20 }}>
                                        <img src={this.state.imagePreviewUrl} alt="img" />
                                    </Paper>
                                </div>
                            </div>
                        </form>
                    </Container>
                    <center>
                        <Button
                            align='center'
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.tf}
                            onClick={this.handlerSimpan}
                        >
                            Simpan
                    </Button>
                    </center>
                </Paper>
            </React.Fragment>
        );
    }
}

export default withStyles(Styles)(AddBook);