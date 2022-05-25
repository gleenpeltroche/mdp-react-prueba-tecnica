export interface ClienteListProps {
    setIsInForm: React.Dispatch<React.SetStateAction<boolean>>
}

export interface Cliente {
    id:         number;
    name:       string;
    last_name:  string;
    birth_date: Date;
}