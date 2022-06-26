import { createStyles } from '@mantine/core';

export default createStyles(() => ({
  paymentCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    width: '90%',
    maxWidth: '750px',
    background: 'rgba(255,255,255, 0.1)',
    borderRadius: '30px',
    padding: '30px',
    margin: 'auto',
    boxShadow: '15px 15px 40px rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(10px)',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '20px',
    paddingBottom: '20px',
  },
  wrapperBtn: {
flex: '0 0 40%',
 marginTop: 'auto',
  },
  btnPay: {
    width: '100%',
  },
  label: {
    fontSize: '1.2rem',
    textShadow: '1px 0px 1px #ed6ea0',
  },
  input:{
    width: '100%',
  },
  cvv: {
     flex: '0 0 40%',
      width: '100%',
  },
}));
