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
                console.log(politica.actividades),
                <div style={{ display: 'flex',marginTop:"2rem" ,justifyContent:'center',}}>
                <TimelineComponent activities={politica.actividades} dataArea={areas} />
                </div>))
                }
        </div>
    );
}
export default DiagramasGantt;