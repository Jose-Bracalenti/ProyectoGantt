import TimelineComponent from "../../../components/TimelineComponent";
import { useContext } from "react";
import { FiltroActividadesContext } from "../hooks/FiltroActividadesProvider";


const DiagramasGantt = () => {
    const {
        filteredPoliticas,
        areas
    } = useContext(FiltroActividadesContext);
    return (
        <div>
            {filteredPoliticas && filteredPoliticas.map((politica, index) => (
                <div key={politica.id} style={{ display: 'flex', marginTop: "2rem", justifyContent: 'center' }}>
                    <TimelineComponent activities={politica.actividades} dataArea={areas} />
                </div>
            ))}
        </div>
    );
}
export default DiagramasGantt;

