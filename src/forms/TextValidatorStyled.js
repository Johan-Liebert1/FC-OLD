import { withStyles } from '@material-ui/core/styles';
import {TextValidator} from 'react-material-ui-form-validator'


const TextValidatorStyled = withStyles({
    root: {
          //color of label, ie the words
          '& label.Mui-focused': {
          color: 'white',
          },

          //change the color of unfocused labels
          '& label' : {
            color: '#6c7473'
          },
  
          // '& .MuiInput-underline:after': {
          // borderBottomColor: 'green',
          // },
  
          '& .MuiOutlinedInput-root': {
  
              //below is for unfocused, unhovered text field
              '& fieldset': {
                  borderColor: 'rgb(140,140,140)',
              },
  
              // is for hovered text field
              '&:hover fieldset': {
                  borderColor: '#6c7473',
              },
  
              //focused text field
              '&.Mui-focused fieldset': {
                  borderColor: 'white',
              },
      },
    },
  })(TextValidator);

  export default TextValidatorStyled