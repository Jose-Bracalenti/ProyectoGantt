import { useContext } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,

} from "@mui/material";
import { FiltroActividadesContext } from "../hooks/FiltroActividadesProvider";

const PoliticasTable = ({politicas}) => {
    const {
        filteredPoliticas,
    } = useContext(FiltroActividadesContext);
    return (
        <div>
            <TableContainer component={Paper}>
                <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Secretaria</TableCell>
                        <TableCell>Objetivo</TableCell>
                        <TableCell>Costo</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filteredPoliticas.map((politica) => (
                        <TableRow key={politica.id}>
                            <TableCell>{politica.nombre}</TableCell>
                            <TableCell>{politica.secretaria}</TableCell>
                            <TableCell>{politica.objetivo}</TableCell>
                            <TableCell>{politica.costo}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};
export default PoliticasTable;