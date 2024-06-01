    package gantt.proyecto.DTOS;

    public class AreaDTO {
        private long id;
        private String nombre;
        private String color;

        public AreaDTO() {
        }

        public AreaDTO(String nombre, long id, String color) {
            this.nombre = nombre;
            this.color = color;
        }
        

        public String getNombre() {
            return nombre;
        }

        public void setNombre(String nombre) {
            this.nombre = nombre;
        }

        public long getId() {
            return id;
        }

        public void setId(long id) {
            this.id = id;
        }

        public String getColor() {
            return color;
        }

        public void setColor(String color) {
            this.color = color;
        }
        
        
        
    }
