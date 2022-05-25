import { useEffect, useState } from 'react';
import { Cliente, ClienteListProps } from '../../interfaces/cliente';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import styled from '@emotion/styled';
import { Typography, Button } from '@mui/material';
import { getAverage, getClientList } from '../../services/data';

const ContainerList = styled.div`
    .promedio{
        display: flex;
        flex-direction: column;
        margin-top: 1rem;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        @media (min-width: 600px) {
            flex-direction: row;
        }
    }
`;

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Nombre', flex: 1 },
  { field: 'last_name', headerName: 'Apellido', flex: 1 },
  { field: 'birth_date', headerName: 'Nacimiento', flex: 1 }
];


const ClientList = ({setIsInForm}: ClienteListProps) => {
    
    const [clientList, setClientList] = useState<Cliente[]>([]);
    const [average, setAverage] = useState<number | null>(null);
    
    useEffect(() => {
        setClientListData();
        setAverageClientsAge();
    }, [])

    async function setClientListData(){
        const data = await getClientList();
        setClientList(data);
    } 

    async function setAverageClientsAge(){
        const data = await getAverage();
        setAverage(data.avg);
    } 
    
    return (
        <ContainerList>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={clientList}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    disableColumnMenu
                />
            </div>
            <div className="promedio">
                <Typography variant="subtitle1" component="p" color={"#314a6d"} fontWeight="bold">
                    Edad Promedio: { average && average.toFixed(2) }
                </Typography>
                <Button variant="contained" disableElevation color='info'
                    onClick={ () => setIsInForm(true)}
                >
                    Regresar
                </Button>
            </div>
        </ContainerList>
        
    )
}

export default ClientList