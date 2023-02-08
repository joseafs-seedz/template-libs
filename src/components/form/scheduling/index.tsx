import React, { useState } from 'react'
import { memo } from 'react'
import { InputText } from '~/components/inputs/text'
import { Grid } from '~/components/blocks/grid'
import { ButtonText } from '~/components/buttons/text'

export const SchedulingInitial = {
  name: '',
}

const OgFormSimple = ({}) => {
  const [data, setData] = useState({})

  const handlerSubmit = (event: any) => {
    event.preventDefault()
    console.log('handlerSubmit', data)
  }

  return (
    <form onSubmit={handlerSubmit}>
      <InputText
        name="name"
        placeholder="Form simples"
        onChange={(e) => setData(e.target.value)}
      />
      <Grid flex mgn={[2, 1]}>
        <ButtonText color="primary" text="Agendar" type="submit" />
      </Grid>
      <Grid flex mgn={[2, 1]}>
        {data && (
          <>
            <br />
            <br />
            <br />
            Simulação de Valores enviados:
            {JSON.stringify(data)}
          </>
        )}
      </Grid>
    </form>
  )
}

export const FormSimple = memo(OgFormSimple)
