export default function FormValidation(values){
    let errors={};

    if(!values.username.trim()){
        errors.username = '*username required';
    }
    else if (!/^[A-Za-z]+/.test(values.username.trim())) {
          errors.username = 'Enter a valid name';
        }
    if(!values.email){
        errors.email= '*email required'
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = 'invalid email address'
    }
    if(!values.password){
        errors.password= '*password required'
    }else if(values.password.length<6){
        errors.password='password need to be 6 charaters or more'
    }
    if(!values.confirmpassword){
        errors.confirmpassword='*password required'
    }
    else if(values.confirmpassword!==values.password){
        errors.confirmpassword = 'password do not matchs '
    }
    return errors;

}