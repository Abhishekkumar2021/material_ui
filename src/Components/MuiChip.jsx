import { Done } from '@mui/icons-material';
import { Avatar, Chip, Stack } from '@mui/material'
import React from 'react'

function MuiChip() {
    const [chipData, setChipData] = React.useState([ { key: 0, label: 'Angular' }, { key: 1, label: 'jQuery' }, { key: 2, label: 'Polymer' }, { key: 3, label: 'React' }, { key: 4, label: 'Vue.js' }, ]);
    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    const handleDelete2 = (chipToDelete) => {
        const newChipData = chipData.filter((chip) => chip.key !== chipToDelete.key);
        setChipData(newChipData);
    };

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

  return (
    <Stack direction="row" spacing={2} padding={2} margin={2}>
        <Chip label="Basic" />
        <Chip label="Clickable" onClick={handleClick} />
        <Chip label="Deletable" onDelete={handleDelete} />
        <Chip label="Clickable deletable" onClick={handleClick} onDelete={handleDelete} />
        <Chip avatar={<Avatar>M</Avatar>} label="Clickable deletable" onClick={handleClick} onDelete={handleDelete} />
        <Chip label="Custom delete icon" onClick={handleClick} onDelete={handleDelete} deleteIcon={<Done />} />
        <Chip label="Clickable Link" component="a" href="#chip" clickable /> 
        <Chip label="Clickable Link" component="a" href="#chip" clickable />
        <Chip label="Primary clickable" onClick={handleClick} color="primary" />
        <Chip label="Secondary clickable" onClick={handleClick} color="secondary" />
        <Chip label="Primary clickable" onClick={handleClick} color="primary" />
        <Chip label="Secondary clickable" onClick={handleClick} color="secondary" />
        <Chip label="Primary clickable" onClick={handleClick} color="primary" />
        <Chip label="Secondary clickable" onClick={handleClick} color="secondary" />
        <Chip label="Primary clickable" onClick={handleClick} color="primary" />
        <Chip label="Secondary clickable" onClick={handleClick} color="secondary" />

        {chipData.map((data) => {
            let icon;

            if (data.label === 'React') {
                icon = <Done />;
            }

            return (
                <Chip
                    key={data.key}
                    icon={icon}
                    label={data.label}
                    onDelete={data.label === 'React' ? undefined : () => handleDelete2(data) }
                    color="primary"
                />
            );

        })
        }

    </Stack>
  )
}

export default MuiChip