import { DatePicker } from "@mui/x-date-pickers"
import React from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs, { Dayjs } from "dayjs";
import { TextField } from "@mui/material";

function MuiDateAndTimePicker() {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17'));
    return (
      <DemoContainer components={['DatePicker']}>
          <DatePicker label="Basic date picker" />
      </DemoContainer>

    )
}

export default MuiDateAndTimePicker