import { useState } from 'react';
import styled from '@emotion/styled';
import Formulario from './form/Formulario';
import Typography from '@mui/material/Typography';
import ClientList from './list/ClientList';

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    box-shadow: 0px 0px 12px #adadad;
    padding: 2rem;
    border-radius: 12px;
    @media (min-width: 600px) {
        padding: 3rem;
    }
`;

const FormComponent = () => {
    const [isInForm, setIsInForm] = useState(true);

    return (
        <FormContainer>
            <Typography variant="h5" component="h2" color={"#314a6d"} fontWeight="bold" marginBottom={"1rem"}>
                { isInForm ? "Crear un nuevo cliente" : "Lista de clientes"}
            </Typography>
            { isInForm ? <Formulario setIsInForm={setIsInForm}/> : <ClientList setIsInForm={setIsInForm}/>}
        </FormContainer>
    )
}

export default FormComponent;