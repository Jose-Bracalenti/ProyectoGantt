import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import PropTypes from 'prop-types';

const SelectList = ({list ,stateComponent, setState, name }) => {

  const handleChange = (event) => {
    setState(event.target.value);
  };
  const id1 = 'demo-simple-select-standard-label-' + name;
  return (
    <div>
      <FormControl fullWidth sx={{marginY: 1, minWidth: 120 }}>
        <InputLabel id={id1}>{name}</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id={id1}
          value={stateComponent}
          onChange={handleChange}
          label={name}
          
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {list.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.name}
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
  name: PropTypes.string,
  list: PropTypes.array
};
export default SelectList;