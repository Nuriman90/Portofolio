import Background from '../../A&F/Images/bg-2.jpg';

export const Styles = theme => ({
    containerslide: {
        width: 'auto',
        height: 'auto',
        marginTop: '3%',
        borderRadius: 10,
        marginLeft: -100,
        },  
    slickSlideImg : {
        height: '100%',
        width: '100%',
        border: '2.5 solidwhite',
        boxSizing: 'borderbox',
        borderRadius: 10,
        },
    slider: {
        width: 600,
        height: "50%",
    },
    bgslider: {
        height:650,
        backgroundAttachment: "fixed",
        backgrondPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage: `url(${Background})`,
        objectFit: "cover",
      },
      // modal Promo
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
      },
  });
  