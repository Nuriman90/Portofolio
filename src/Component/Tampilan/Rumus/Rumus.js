import React, { Component } from 'react';
import { Container, Typography, Button } from '@material-ui/core';

class Test extends Component {
    constructor(props){
        super(props)
        this.state={
            angka1:0,
            angka2:0,
            hasil:0,
            rumus:0,
            submit:false
        }
        this.update=this.update.bind(this)
        this.button=this.button.bind(this)
        this.persegi=this.persegi.bind(this)
        this.persegiPanjang=this.persegiPanjang.bind(this)
        this.lingkaran=this.lingkaran.bind(this)
    }
    update(event){
        this.setState({[event.target.name]:event.target.value})
    }
    button(name,val){
        this.setState({[name]:val})
    }
    result = () => {
        let angka1 = parseInt(this.state.angka1)
        let angka2 = parseInt(this.state.angka2)
        let hasil = 0
        let rumus = this.state.rumus

        if(rumus ===1) {
            hasil=angka1*angka1
        }else if (rumus ===2) {
            hasil=angka1*angka2
        }else if(rumus ===3) {
            hasil= 3.14 * angka1 * angka1
        }

        this.setState({
            hasil,submit:true
        });}

        tampil() {
            if(this.state.rumus === 1){
              return (
                <Container>
                    <Typography style={{fontSize:20,fontWeight:'bold'}}>Menghitung Luas Persegi</Typography>
                    <Typography style={{fontSize:20,fontWeight:'bold'}}>Rumus = Sisi * Sisi</Typography>
                    <input name="angka1" type="number" placeholder="Masukan Sisi " onChange={this.update}/><br/><br/>
                    <Button variant="contained" color="primary" onClick={this.result}>Submit</Button>
                </Container>
              )
            }else if (this.state.rumus === 2){
                return(
                <Container>
                  <Typography style={{fontSize:20,fontWeight:'bold'}}>Menghitung Luas Persegi Panjang</Typography>
                  <Typography style={{fontSize:20,fontWeight:'bold'}}>Rumus = Panjang * Lebar</Typography>
                  <input name="angka1" type="number" placeholder="Masukan Panjang" onChange={this.update}/><br/><br/>
                  <input name="angka2" type="number" placeholder="Masukan Lebar" onChange={this.update}/><br/><br/>
                  <Button variant="contained" color="primary" onClick={this.result}>Submit</Button>
                </Container>
                )
            }else if (this.state.rumus === 3){
                return(
                <Container>
                  <Typography style={{fontSize:20,fontWeight:'bold'}}>Menghitung Luas Lingkaran</Typography>
                  <Typography style={{fontSize:20,fontWeight:'bold'}}>Rumus = Phi(3.14) * r * r</Typography>
                    <input name="angka1" type="number" placeholder="Masukan Jari-Jari" onChange={this.update}/><br/><br/>
                    <Button variant="contained" color="primary" onClick={this.result}>Submit</Button>
                </Container>
          )}}
      
persegi = () => {
    this.setState({rumus: 1});
  }

persegiPanjang = () => {
    this.setState({rumus: 2});
  } 
lingkaran = () => {
    this.setState({rumus: 3});
  }
back = () => {
    this.setState({
     submit:false,angka1:0,angka2:0
   });  
}
    
    render() {
        return (
            <Container style={{marginTop:100,backgroundColor:'yellow'}}>
                <center>
                {!this.state.submit ? (
                <div>
                    <Button variant="contained" color="primary" onClick = {() => this.button('rumus',1)}>Persegi</Button>
                    <Button variant="contained" color="default" onClick = {() => this.button('rumus',2)}>Persegi Panjang</Button>
                    <Button variant="contained" color="secondary" onClick = {() => this.button('rumus',3)}>Lingkaran</Button>
                    <Typography style={{fontSize:25,fontWeight:'bold'}}>Selamat Datang Di Pusat Rumus</Typography>
                {this.tampil()}
                </div>
                ):(
                <div>
                    <Typography style={{fontSize:25,fontWeight:'bold'}}>Hasil = {this.state.hasil}</Typography>
                    <Button variant="contained" color="primary" onClick={this.back}>Back To Home</Button>
                </div>)}
                </center>
            </Container>
            )}}

export default Test;