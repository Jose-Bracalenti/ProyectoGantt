package gantt.proyecto.DTOS;

import java.util.List;

public class FiltroDTO{
    private List<SecretariaDTO> secretarias;
    private List<EjeDTO> ejes;
    private List<ObjetivoDTO> objetivos;
    private List<AreaDTO> areas;
   
    

    public FiltroDTO() {
    }

    public FiltroDTO(List<EjeDTO> ejes, List<AreaDTO> areas, List<SecretariaDTO> secretarias, List<ObjetivoDTO> objetivos) {
        this.ejes = ejes;
        this.areas = areas;
        this.secretarias = secretarias;
        this.objetivos = objetivos;
    }

    public List<EjeDTO> getEjes() {
        return ejes;
    }

    public void setEjes(List<EjeDTO> ejes) {
        this.ejes = ejes;
    }

    public List<AreaDTO> getAreas() {
        return areas;
    }

    public void setAreas(List<AreaDTO> areas) {
        this.areas = areas;
    }

    public List<SecretariaDTO> getSecretarias() {
        return secretarias;
    }

    public void setSecretarias(List<SecretariaDTO> secretarias) {
        this.secretarias = secretarias;
    }

    public List<ObjetivoDTO> getObjetivos() {
        return objetivos;
    }

    public void setObjetivos(List<ObjetivoDTO> objetivos) {
        this.objetivos = objetivos;
    }
    
}