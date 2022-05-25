import styled from '@emotion/styled';
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { FormularioProps } from '../../interfaces/formulario';
import { createNewClient } from '../../services/data';

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 1rem;
`;

const Formulario = ({ setIsInForm }: FormularioProps) => {
    
    const [name, setName] = useState("");
    const [lastName, setLatName] = useState("");
    const [birthDate, setBirthDate] = useState("");

    const [errorName, setErrorName] = useState("");
    const [errorLastName, setErrorLastName] = useState("");
    const [errorBirthDate, setErrorBirthDate] = useState("");
    
    async function sendForm(){
        resetErrors();
        if(!name || !lastName || !birthDate){
            if(!name) setErrorName("Ingrese su nombre.");
            if(!lastName) setErrorLastName("Ingrese su apellido.");
            if(!birthDate) setErrorBirthDate("Ingrese su fecha de nacimiento.");
            return
        }
        const newClient = await createNewClient(name, lastName, birthDate);
        if(newClient){ setIsInForm(false) }
    }

    function resetErrors(){
        setErrorName("");
        setErrorLastName("");
        setErrorBirthDate("");
    }
    
    return (
        <FormContainer>
            <TextField type="text" id="name" label="Nombre" variant="standard" 
                error={errorName.length > 0 ? true : false} helperText={errorName}
                onChange={e => setName(e.target.value)} value={name}
            />
            <TextField type="text" id="last_name" label="Apellido" variant="standard"
                error={errorLastName.length > 0 ? true : false} helperText={errorLastName}
                onChange={e => setLatName(e.target.value)} value={lastName}
            />
            <TextField type="date" id="birth_date" label=" " variant="standard"
                error={errorBirthDate.length > 0 ? true : false} helperText={errorBirthDate}
                onChange={e => setBirthDate(e.target.value)} value={birthDate}
            />
            <Button variant="contained" disableElevation sx={{marginTop: "1rem"}}
                onClick={sendForm}
            >
                Crear cliente
            </Button>
        </FormContainer>
    )
}

export default Formulario;