export const Styles = theme => ({
    cardMedia: {
        height:'wrap-content',
        padding:10,
    },
    cardContent: {
        flexGrow: 1,
    },
    title: {
        paddingTop: 10,
        background: '#bdbdbd',
        color: 'black',
      },
      ft: {
        color: 'white',
        textDecoration: 'none',
        '&:hover': {
          textDecoration: "none"
        }
      },
    urutanText:{
        borderBottom:'1px solid #A93092',
        marginBottom:30,
    },
    text:{
        color:'white',
        fontSize:18,
        backgroundColor:'#A93092',
        marginRight:'auto',
        padding:6,
    },
    slide34:{
        marginTop:'15px', 
    },
    slideU:{
        marginTop:'-4px',
    },
    sem:{
        marginLeft:'Auto',
        textSize:'Bord',
        marginTop: 50,  
    },
    bar: {
        backgroundColor: '#A93092',
        height: 40,
        width: 120,
        marginTop: 50,
    },
    
    font: {
        margin: 'auto',
        color: 'white',
        align:'center',
        padding: 8,
    },
    img: {
        width: "100%",
        height:200,
    },
    price1: {
        marginTop:-50,
        fontSize: 12,
        textDecorationLine: 'line-Through',
        color: '#8b8f8b',
    },
    tf:{
        marginTop:20,
        width: 400
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
      boxitem: {
        background: '#757575',
        padding: 10,
        height:300,
      },
      linkMore: {
          
        background: '#757575',
        textAlign: 'left',
      },
      ln: {
        color: 'black',
        textDecoration: 'none',
        '&:hover': {
          textDecoration: "none"
        }
      },
});