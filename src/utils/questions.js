const questions = {
  tipoDePersona: {
    key: 'tipoDePersona',
    nitField: {
      type: 'text',
      label: 'NIT o Cédula',
      name: 'Documento',
      placeholder: 'NIT o Cédula',
      isNumeric: true,
    },
    tipoDePersonaField: {
      type: 'radio',
      label: 'Tipo De Persona',
      name: 'Persona',
      options: [
        {
          label: 'Natural',
          value: 'Natural',
        },
        {
          label: 'Jurídica',
          value: 'Jurídica',
          showChildren: true,
        },
      ],
    },
    juridicaChildrenField: {
      label: 'Tipo de Sociedad',
      name: 'Sociedad',
      options: [
        {
          label: 'Sociedad Limitada',
          value: 'Sociedad Limitada',
        },
        {
          label: 'Sociedad Anónima',
          value: 'Sociedad Anónima',
        },
      ]
    },
    next: 'datosPersonales',
  },
  datosPersonales: {
    key: 'datosPersonales',
    fields: [
      {
        type: 'text',
        label: 'Nombre de la Empresa',
        name: 'Nombre Empresa',
        placeholder: 'Nombre de la Empresa',
      },
      {
        type: 'text',
        label: 'Actividad Económica',
        name: 'Actividad Económica',
        placeholder: 'Actividad Económica',
      },
      {
        type: 'text',
        label: 'Representante Legal',
        name: 'Representante Legal',
        placeholder: 'Representante Legal',
      },
      {
        type: 'text',
        label: 'Correo Electrónico',
        name: 'Email',
        placeholder: 'Correo Electrónico',
        isEmail: true,
      },
      {
        type: 'text',
        label: 'Número Telefónico',
        name: 'Número Telefónico',
        placeholder: 'Número Telefónico',
        isNumeric: true,
      },
      {
        type: 'text',
        label: 'Número Celular',
        name: 'Número Celular',
        placeholder: 'Número Celular',
        isNumeric: true,
      },
    ],
    back: 'tipoDePersona',
    next: 'demandasLaborales',
  },
  demandasLaborales: {
    key: 'demandasLaborales',
    fields: [
      {
        type: 'radio',
        label: '¿Actualmente tiene demandas laborales en contra de su empresa?',
        name: 'Demandas Laborales',
        options: [
          {
            label: 'Si',
            value: 'Si',
            showChildren: true,
            flag: 'red',
          },
          {
            label: 'No',
            value: 'No',
            flag: 'green',
          },
        ],

      },
    ],
    juzgadoField: {
      type: 'text',
      label: '¿En qué juzgado se encuentra la demanda?',
      name: 'Juzgado',
      placeholder: '¿En qué juzgado se encuentra la demanda?',

    },
    etapaField: {
      type: 'radio',
      label: '¿Sabe en qué etapa va la demanda?',
      name: 'Estado Demanda',
      options: [
        {
          label: 'Si',
          value: 'Si',
          showChildren: true,
        },
        {
          label: 'No',
          value: 'No',
        },
      ],

    },
    etapaChildrenField: {
      type: 'text',
      label: '¿Cuál?',
      name: '¿Cuál?',
      placeholder: '¿Cuál?',

    },
    back: 'datosPersonales',
    next: 'numeroEmpleados',
  },
  numeroEmpleados: {
    key: 'numeroEmpleados',
    fields: [
      {
        type: 'radio',
        label: 'Actualmente su empresa cuenta con:',
        name: 'Número Empleados',
        options: [
          {
            label: 'Menos de 5 empleados',
            value: 'Menos de 5 empleados',
          },
          {
            label: 'Más de 5 y menos de 10 empleados',
            value: 'Más de 5 y menos de 10 empleados',
            showChildren: true,
          },
          {
            label: 'Más de 10 y menos de 20 empleados',
            value: 'Más de 10 y menos de 20 empleados',
            showChildren: true,
          },
          {
            label: 'Más de 20 y menos de 50 empleados',
            value: 'Más de 20 y menos de 50 empleados',
            showChildren: true,
          },
          {
            label: 'Más de 50 y menos de 100 empleados',
            value: 'Más de 50 y menos de 100 empleados',
            showChildren: true,
          },
          {
            label: 'Más de 100 y menos de 200 empleados',
            value: 'Más de 100 y menos de 200 empleados',
            showChildren: true,
          },
          {
            label: 'Más de 200 empleados',
            value: 'Más de 200 empleados',
            showChildren: true,
          },
        ],
      },
    ],
    reglamentoInternoField: {
      type: 'radio',
      label: '¿Actualmente cuenta con reglamento interno de trabajo?',
      name: 'Reglamento Interno',
      options: [
        {
          label: 'Si',
          value: 'Si',
          flag: 'green',
          showChildren: true,
        },
        {
          label: 'No',
          value: 'No',
          flag: 'red',
        },
      ],
    },
    reglamentoInteroChildren: {
      type: 'radio',
      label: 'Última actualización del Reglamento Interno:',
      name: 'Reglamento Interno Actualización',
      options: [
        {
          label: 'Menos de 2 años',
          value: 'Menos de 2 años',
          flag: 'green',
        },
        {
          label: 'Más de 2 años y menos de 5 años',
          value: 'Más de 2 años y menos de 5 años',
          flag: 'orange',
        },
        {
          label: 'Más de 5 años y menos de 10 años',
          value: 'Más de 5 años y menos de 10 años',
          flag: 'red',
        },
        {
          label: 'Más de 10 años',
          value: 'Más de 10 años',
          flag: 'red',
        },
      ],

    },
    manualSancionesField: {
      type: 'radio',
      label: '¿Actualmente cuenta con manual de procedimiento de descargos o sanciones?',
      name: 'Manual de Sanciones',
      options: [
        {
          label: 'Si',
          value: 'Si',
          flag: 'green',
          showChildren: true,
        },
        {
          label: 'No',
          value: 'No',
          flag: 'red',
        },
      ],
    },
    manualSancionesChildren: {
      type: 'radio',
      label: 'Última actualización del Manual de Sanciones:',
      name: 'Manual de Sanciones Actualización',
      options: [
        {
          label: 'Menos de 2 años',
          value: 'Menos de 2 años',
          flag: 'green',
        },
        {
          label: 'Más de 2 años y menos de 5 años',
          value: 'Más de 2 años y menos de 5 años',
          flag: 'orange',
        },
        {
          label: 'Más de 5 años y menos de 10 años',
          value: 'Más de 5 años y menos de 10 años',
          flag: 'red',
        },
        {
          label: 'Más de 10 años',
          value: 'Más de 10 años',
          flag: 'red',
        },
      ],

    },
    back: 'demandasLaborales',
    next: 'contratoLaboral',
  },
  contratoLaboral: {
    key: 'contratoLaboral',
    fields: [
      {
        type: 'radio',
        label: '¿Actualmente todos sus empleados cuentan con contrato laboral por escrito?',
        name: 'Contrato Laboral Escrito',
        options: [
          {
            label: 'Si',
            value: 'Si',
            flag: 'green',
          },
          {
            label: 'No',
            value: 'No',
            flag: 'red',
          },
        ],
      },
      {
        type: 'radio',
        label: '¿Actualmente paga usted seguridad social a sus empleados?',
        name: 'Paga Seguridad Social',
        options: [
          {
            label: 'Si',
            value: 'Si',
            flag: 'green',
          },
          {
            label: 'No',
            value: 'No',
            flag: 'red',
          },
        ],
      },
    ],
    back: 'numeroEmpleados',
    next: 'procesosAbiertos',
  },
  procesosAbiertos: {
    key: 'procesosAbiertos',
    fields: [
      {
        type: 'radio',
        label: 'Actualmente la empresa está inmersa en procesos con:',
        name: 'Procesos Con',
        options: [
          {
            label: 'UGPP',
            value: 'UGPP',
            flag: 'red',
          },
          {
            label: 'Dian',
            value: 'Dian',
            flag: 'red',
          },
          {
            label: 'Fiscalía',
            value: 'Fiscalía',
            flag: 'red',
          },
          {
            label: 'Procuraduría',
            value: 'Procuraduría',
            flag: 'red',
          },
          {
            label: 'Contraloría',
            value: 'Contraloría',
            flag: 'red',
          },
          {
            label: 'Administración Municipal',
            value: 'Administración Municipal',
            flag: 'red',
          },
          {
            label: 'Seccional de Salud Departamental',
            value: 'Seccional de Salud Departamental',
            flag: 'red',
          },
          {
            label: 'Corporación Autónoma Regional',
            value: 'Corporación Autónoma Regional',
            flag: 'red',
          },
          {
            label: 'Otras Entidades del Estado',
            value: 'Otras Entidades del Estado',
            flag: 'red',
          },
          {
            label: 'Ninguna',
            value: 'Ninguna',
            flag: 'green',
          },
        ],
      },
    ],
    back: 'contratoLaboral',
    next: 'SUBMIT',
  },
}

export default questions
