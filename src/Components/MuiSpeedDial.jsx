import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material"
import { Add as AddIcon, Delete as DeleteIcon, Edit, Edit as EditIcon } from "@mui/icons-material"

function handleAdd() {
    console.log('Add')
}

function handleEdit() {
    console.log('Edit')
}

function handleDelete() {
    console.log('Delete')
}

function MuiSpeedDial() {
  return (
    <SpeedDial ariaLabel="SpeedDial example" sx={{ position: 'absolute', bottom: 16, right: 16 }} icon={<SpeedDialIcon openIcon={<Edit />} />}>
        <SpeedDialAction
            key="Add"
            icon={<AddIcon />}
            tooltipTitle="Add"
            onClick={handleAdd}
        />
        <SpeedDialAction
            key="Edit"
            icon={<EditIcon />}
            tooltipTitle="Edit"
            onClick={handleEdit}
        />
        <SpeedDialAction
            key="Delete"
            icon={<DeleteIcon />}
            tooltipTitle="Delete"
            onClick={handleDelete}
        />
    </SpeedDial>
  )
}

export default MuiSpeedDial