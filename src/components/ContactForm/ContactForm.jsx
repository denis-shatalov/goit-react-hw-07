import css from "../ContactForm/ContactForm.module.css"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup"
import { nanoid } from 'nanoid'
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';


export default function ContactForm() {

    const dispatch = useDispatch();
    const contacts = useSelector((state) => state.contacts.items)

    const formSubmit = (values, { resetForm }) => {
    const newContact = {
        id: nanoid(),
        name: values.name,
        number: values.number
    };
    dispatch(addContact(newContact));
    resetForm(); 
};



    const SignupSchema = Yup.object().shape({
   name: Yup.string()
     .min(3, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   number: Yup.string()
     .min(3, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
 });
    return (
        <Formik
        initialValues={ {name: '', number: ''}}
        onSubmit={formSubmit}
        validationSchema = {SignupSchema}> 
            
            
            <Form className={css.form}>
                <div className={css.inputbox}>
                    <label htmlFor="name">Name</label>
                <Field className={css.input}  name="name" />
                <ErrorMessage className={ css.error } name="name"  component="span" />
                </div>
                <div className={css.inputbox}>
                    <label htmlFor="number">Number</label>
                <Field className={css.input} name="number" />
                <ErrorMessage className={ css.error } name="number" component="span"/>
                </div>
                
            
            <button type="submit">Add contact</button>
            </Form>
        </Formik>
            
            
        
    )
}