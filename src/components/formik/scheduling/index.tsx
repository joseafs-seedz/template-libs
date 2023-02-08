import { Field, Form, Formik, FormikProps } from 'formik'
import React, { useRef, useState } from 'react'
import { memo } from 'react'
import { InputText } from '../../../components/inputs/text'
import { Grid } from '../../../components/blocks/grid'
import { ButtonText } from '../../../components/buttons/text'

export const SchedulingInitial = {
  name: '',
}

const OgFormikScheduling = ({}) => {
  const formRef = useRef<FormikProps<any>>(null)

  const [data, setData] = useState({})

  const handlerSubmit = (values: any) => {
    if (!values) return
    setData(values)
    console.log('handlerSubmit', values)
  }

  const handlerValidate = (values: any) => {
    // const handlerValidate = (values: TpSchedulingItem) => {
    if (!values) return
    // setValues(values);
    console.log('handlerValidate', values)
  }

  return (
    <Formik
      innerRef={formRef}
      initialValues={SchedulingInitial}
      onSubmit={handlerSubmit}
      validate={handlerValidate}
    >
      <Form>
        <Field
          component={InputText}
          id="name"
          name="name"
          placeholder="Qualquer coisa"
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
      </Form>
    </Formik>
  )
}

export const FormikScheduling = memo(OgFormikScheduling)
