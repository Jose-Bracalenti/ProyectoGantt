import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import PropTypes from 'prop-types';
import { useState } from 'react';

const SelectList = ({list ,stateComponent, setState, nombre, titleTrue}) => {
  const [stateComponentName, setStateComponentName] = useState('');
  const handleChange = (event) => {
    const selectedId = event.target.value;
    setState(selectedId);
    if (titleTrue){
      const selectedItem = list.find(item => item.id === selectedId);
      setStateComponentName(selectedItem.nombre);
    }
   
  };
  const id1 = 'demo-simple-select-standard-label-' + nombre;
  return (
    <div>
      <FormControl fullWidth sx={{marginY: 1, minWidth: 120 }}>
        <InputLabel required id={id1}>{nombre}</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id={id1}
          value={stateComponent}
          onChange={handleChange}
          label={nombre}
          title={stateComponentName}
          
        >
          {list.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.nombre}

            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

SelectList.propTypes = {
  stateComponent: PropTypes.any,
  setState: PropTypes.func,
  nombre: PropTypes.string,
  list: PropTypes.array,
  titleTrue: PropTypes.bool
};
export default SelectList;