import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Autocomplete, TextField, FormControl } from '@mui/material';

const ListaDesplegable = ({ list, stateComponent, setState, nombre, noneOption, onChange }) => {
  
  if (noneOption) {
    list = [{ id: '', nombre: 'Ninguno' }, ...list];
  }
  const [inputValue, setInputValue] = React.useState('');

  const handleChange = (event, newValue) => {
    setState(newValue);
    if (onChange) onChange(newValue);
  };



  const memoizedOptions = useMemo(() => list, [list]);

  const id1 = 'demo-simple-select-standard-label-' + nombre;


  return (
    <div>
      <FormControl fullWidth sx={{ marginY: 1, minWidth: 120 }}>
        <Autocomplete
          disablePortal
          id={id1}
          options={memoizedOptions}
          value={stateComponent}

          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}

          onChange={handleChange}
          isOptionEqualToValue={(option, value) => option?.id === value?.id} // handle null value gracefully
          getOptionLabel={(option) => option.nombre || ''}
          renderInput={(params) => <TextField {...params} label={nombre} variant="outlined" />}
        />
      </FormControl>
    </div>
  );
}

ListaDesplegable.propTypes = {
  stateComponent: PropTypes.any,
  setState: PropTypes.func.isRequired,
  nombre: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  titleTrue: PropTypes.bool,
  noneOption: PropTypes.bool,
  onChange: PropTypes.func
};

export default ListaDesplegable;
