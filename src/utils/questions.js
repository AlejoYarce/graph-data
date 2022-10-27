const questions = [
  {
    key: 'tipoDePersona',
    fields: [
      {
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
            children: [
              {
                type: 'dropdown',
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
                ],
                required: true,
              },
            ],
          },
        ],
        required: true,
      },
    ],
    next: 'datosPersonales',
  },
  {
    key: 'datosPersonales',
    fields: [
      {
        type: 'text',
        label: 'Nombre de la Empresa',
        name: 'Nombre Empresa',
        placeholder: 'Nombre de la Empresa',
        required: true,
      },
      {
        type: 'text',
        label: 'Actividad Económica',
        name: 'Actividad Económica',
        placeholder: 'Actividad Económica',
        required: true,
      },
      {
        type: 'text',
        label: 'Representante Legal',
        name: 'Representante Legal',
        placeholder: 'Representante Legal',
        required: true,
      },
      {
        type: 'email',
        label: 'Correo Electrónico',
        name: 'Email',
        placeholder: 'Correo Electrónico',
        required: true,
      },
      {
        type: 'text',
        label: 'Número Telefónico',
        name: 'Número Telefónico',
        placeholder: 'Número Telefónico',
        required: true,
      },
      {
        type: 'text',
        label: 'Número Celular',
        name: 'Número Celular',
        placeholder: 'Número Celular',
        required: true,
      },
    ],
    back: 'tipoDePersona',
    next: 'demandasLaborales',
  },
  {
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
            children: [
              {
                type: 'text',
                label: '¿En qué juzgado se encuentra la demanda?',
                name: 'Juzgado',
                placeholder: '¿En qué juzgado se encuentra la demanda?',
                required: true,
              },
              {
                type: 'radio',
                label: '¿Sabe en qué etapa va la demanda?',
                name: 'Estado Demanda',
                options: [
                  {
                    label: 'Si',
                    value: 'Si',
                    children: [
                      {
                        type: 'text',
                        label: '¿Cuál?',
                        name: '¿Cuál?',
                        placeholder: '¿Cuál?',
                        required: true,
                      },
                    ],
                  },
                  {
                    label: 'No',
                    value: 'No',
                  },
                ],
                required: true,
              },
            ],
          },
          {
            label: 'No',
            value: 'No',
          },
        ],
        required: true,
      },
    ],
    back: 'datosPersonales',
    next: 'numeroEmpleados',
  },
  {
    key: 'numeroEmpleados',
    fields: [
      {
        type: 'radio',
        label: 'Actualmente su empresa cuenta con:',
        name: 'Número Empleados',
        options: [
          {
            label: 'Menos de 5 empleados',
            value: '< 5',
          },
          {
            label: 'Más de 5 y menos de 10 empleados',
            value: '> 5 < 10',
            children: [
              {
                type: 'radio',
                label: '¿Actualmente cuenta con reglamento interno de trabajo?',
                name: 'Reglamento Interno',
                options: [
                  {
                    label: 'Si',
                    value: 'Si',
                    children: [
                      {
                        type: 'radio',
                        label: 'La última actualización fue:',
                        name: 'Última Actualización',
                        options: [
                          {
                            label: 'Menos de 2 años',
                            value: '< 2',
                          },
                          {
                            label: 'Más de 2 años y menos de 5 años',
                            value: '> 2 < 5',
                          },
                          {
                            label: 'Más de 5 años y menos de 10 años',
                            value: '> 5 < 10',
                          },
                          {
                            label: 'Más de 10 años',
                            value: '> 10',
                          },
                        ],
                        required: true,
                      },
                    ],
                  },
                  {
                    label: 'No',
                    value: 'No',
                  },
                ],
                required: true,
              },
              {
                type: 'radio',
                label: '¿Actualmente cuenta con manual de procedimiento de descargos o sanciones?',
                name: 'Manual de Sanciones',
                options: [
                  {
                    label: 'Si',
                    value: 'Si',
                    children: [
                      {
                        type: 'radio',
                        label: 'La última actualización fue:',
                        name: 'Últimos Cambios',
                        options: [
                          {
                            label: 'Menos de 2 años',
                            value: '< 2',
                          },
                          {
                            label: 'Más de 2 años y menos de 5 años',
                            value: '> 2 < 5',
                          },
                          {
                            label: 'Más de 5 años y menos de 10 años',
                            value: '> 5 < 10',
                          },
                          {
                            label: 'Más de 10 años',
                            value: '> 10',
                          },
                        ],
                        required: true,
                      },
                    ],
                  },
                  {
                    label: 'No',
                    value: 'No',
                  },
                ],
                required: true,
              },
            ],
          },
          {
            label: 'Más de 10 y menos de 20 empleados',
            value: '> 10 < 20',
            children: [
              {
                type: 'radio',
                label: '¿Actualmente cuenta con reglamento interno de trabajo?',
                name: 'Reglamento Interno',
                options: [
                  {
                    label: 'Si',
                    value: 'Si',
                    children: [
                      {
                        type: 'radio',
                        label: 'La última actualización fue:',
                        name: 'Última Actualización',
                        options: [
                          {
                            label: 'Menos de 2 años',
                            value: '< 2',
                          },
                          {
                            label: 'Más de 2 años y menos de 5 años',
                            value: '> 2 < 5',
                          },
                          {
                            label: 'Más de 5 años y menos de 10 años',
                            value: '> 5 < 10',
                          },
                          {
                            label: 'Más de 10 años',
                            value: '> 10',
                          },
                        ],
                        required: true,
                      },
                    ],
                  },
                  {
                    label: 'No',
                    value: 'No',
                  },
                ],
                required: true,
              },
              {
                type: 'radio',
                label: '¿Actualmente cuenta con manual de procedimiento de descargos o sanciones?',
                name: 'Manual de Sanciones',
                options: [
                  {
                    label: 'Si',
                    value: 'Si',
                    children: [
                      {
                        type: 'radio',
                        label: 'La última actualización fue:',
                        name: 'Últimos Cambios',
                        options: [
                          {
                            label: 'Menos de 2 años',
                            value: '< 2',
                          },
                          {
                            label: 'Más de 2 años y menos de 5 años',
                            value: '> 2 < 5',
                          },
                          {
                            label: 'Más de 5 años y menos de 10 años',
                            value: '> 5 < 10',
                          },
                          {
                            label: 'Más de 10 años',
                            value: '> 10',
                          },
                        ],
                        required: true,
                      },
                    ],
                  },
                  {
                    label: 'No',
                    value: 'No',
                  },
                ],
                required: true,
              },
            ],
          },
          {
            label: 'Más de 20 y menos de 50 empleados',
            value: '> 20 < 50',
            children: [
              {
                type: 'radio',
                label: '¿Actualmente cuenta con reglamento interno de trabajo?',
                name: 'Reglamento Interno',
                options: [
                  {
                    label: 'Si',
                    value: 'Si',
                    children: [
                      {
                        type: 'radio',
                        label: 'La última actualización fue:',
                        name: 'Última Actualización',
                        options: [
                          {
                            label: 'Menos de 2 años',
                            value: '< 2',
                          },
                          {
                            label: 'Más de 2 años y menos de 5 años',
                            value: '> 2 < 5',
                          },
                          {
                            label: 'Más de 5 años y menos de 10 años',
                            value: '> 5 < 10',
                          },
                          {
                            label: 'Más de 10 años',
                            value: '> 10',
                          },
                        ],
                        required: true,
                      },
                    ],
                  },
                  {
                    label: 'No',
                    value: 'No',
                  },
                ],
                required: true,
              },
              {
                type: 'radio',
                label: '¿Actualmente cuenta con manual de procedimiento de descargos o sanciones?',
                name: 'Manual de Sanciones',
                options: [
                  {
                    label: 'Si',
                    value: 'Si',
                    children: [
                      {
                        type: 'radio',
                        label: 'La última actualización fue:',
                        name: 'Últimos Cambios',
                        options: [
                          {
                            label: 'Menos de 2 años',
                            value: '< 2',
                          },
                          {
                            label: 'Más de 2 años y menos de 5 años',
                            value: '> 2 < 5',
                          },
                          {
                            label: 'Más de 5 años y menos de 10 años',
                            value: '> 5 < 10',
                          },
                          {
                            label: 'Más de 10 años',
                            value: '> 10',
                          },
                        ],
                        required: true,
                      },
                    ],
                  },
                  {
                    label: 'No',
                    value: 'No',
                  },
                ],
                required: true,
              },
            ],
          },
          {
            label: 'Más de 50 y menos de 100 empleados',
            value: '> 50 < 100',
            children: [
              {
                type: 'radio',
                label: '¿Actualmente cuenta con reglamento interno de trabajo?',
                name: 'Reglamento Interno',
                options: [
                  {
                    label: 'Si',
                    value: 'Si',
                    children: [
                      {
                        type: 'radio',
                        label: 'La última actualización fue:',
                        name: 'Última Actualización',
                        options: [
                          {
                            label: 'Menos de 2 años',
                            value: '< 2',
                          },
                          {
                            label: 'Más de 2 años y menos de 5 años',
                            value: '> 2 < 5',
                          },
                          {
                            label: 'Más de 5 años y menos de 10 años',
                            value: '> 5 < 10',
                          },
                          {
                            label: 'Más de 10 años',
                            value: '> 10',
                          },
                        ],
                        required: true,
                      },
                    ],
                  },
                  {
                    label: 'No',
                    value: 'No',
                  },
                ],
                required: true,
              },
              {
                type: 'radio',
                label: '¿Actualmente cuenta con manual de procedimiento de descargos o sanciones?',
                name: 'Manual de Sanciones',
                options: [
                  {
                    label: 'Si',
                    value: 'Si',
                    children: [
                      {
                        type: 'radio',
                        label: 'La última actualización fue:',
                        name: 'Últimos Cambios',
                        options: [
                          {
                            label: 'Menos de 2 años',
                            value: '< 2',
                          },
                          {
                            label: 'Más de 2 años y menos de 5 años',
                            value: '> 2 < 5',
                          },
                          {
                            label: 'Más de 5 años y menos de 10 años',
                            value: '> 5 < 10',
                          },
                          {
                            label: 'Más de 10 años',
                            value: '> 10',
                          },
                        ],
                        required: true,
                      },
                    ],
                  },
                  {
                    label: 'No',
                    value: 'No',
                  },
                ],
                required: true,
              },
            ],
          },
          {
            label: 'Más de 100 y menos de 200 empleados',
            value: '> 100 < 200',
            children: [
              {
                type: 'radio',
                label: '¿Actualmente cuenta con reglamento interno de trabajo?',
                name: 'Reglamento Interno',
                options: [
                  {
                    label: 'Si',
                    value: 'Si',
                    children: [
                      {
                        type: 'radio',
                        label: 'La última actualización fue:',
                        name: 'Última Actualización',
                        options: [
                          {
                            label: 'Menos de 2 años',
                            value: '< 2',
                          },
                          {
                            label: 'Más de 2 años y menos de 5 años',
                            value: '> 2 < 5',
                          },
                          {
                            label: 'Más de 5 años y menos de 10 años',
                            value: '> 5 < 10',
                          },
                          {
                            label: 'Más de 10 años',
                            value: '> 10',
                          },
                        ],
                        required: true,
                      },
                    ],
                  },
                  {
                    label: 'No',
                    value: 'No',
                  },
                ],
                required: true,
              },
              {
                type: 'radio',
                label: '¿Actualmente cuenta con manual de procedimiento de descargos o sanciones?',
                name: 'Manual de Sanciones',
                options: [
                  {
                    label: 'Si',
                    value: 'Si',
                    children: [
                      {
                        type: 'radio',
                        label: 'La última actualización fue:',
                        name: 'Últimos Cambios',
                        options: [
                          {
                            label: 'Menos de 2 años',
                            value: '< 2',
                          },
                          {
                            label: 'Más de 2 años y menos de 5 años',
                            value: '> 2 < 5',
                          },
                          {
                            label: 'Más de 5 años y menos de 10 años',
                            value: '> 5 < 10',
                          },
                          {
                            label: 'Más de 10 años',
                            value: '> 10',
                          },
                        ],
                        required: true,
                      },
                    ],
                  },
                  {
                    label: 'No',
                    value: 'No',
                  },
                ],
                required: true,
              },
            ],
          },
          {
            label: 'Más de 200 empleados',
            value: '> 200',
            children: [
              {
                type: 'radio',
                label: '¿Actualmente cuenta con reglamento interno de trabajo?',
                name: 'Reglamento Interno',
                options: [
                  {
                    label: 'Si',
                    value: 'Si',
                    children: [
                      {
                        type: 'radio',
                        label: 'La última actualización fue:',
                        name: 'Última Actualización',
                        options: [
                          {
                            label: 'Menos de 2 años',
                            value: '< 2',
                          },
                          {
                            label: 'Más de 2 años y menos de 5 años',
                            value: '> 2 < 5',
                          },
                          {
                            label: 'Más de 5 años y menos de 10 años',
                            value: '> 5 < 10',
                          },
                          {
                            label: 'Más de 10 años',
                            value: '> 10',
                          },
                        ],
                        required: true,
                      },
                    ],
                  },
                  {
                    label: 'No',
                    value: 'No',
                  },
                ],
                required: true,
              },
              {
                type: 'radio',
                label: '¿Actualmente cuenta con manual de procedimiento de descargos o sanciones?',
                name: 'Manual de Sanciones',
                options: [
                  {
                    label: 'Si',
                    value: 'Si',
                    children: [
                      {
                        type: 'radio',
                        label: 'La última actualización fue:',
                        name: 'Últimos Cambios',
                        options: [
                          {
                            label: 'Menos de 2 años',
                            value: '< 2',
                          },
                          {
                            label: 'Más de 2 años y menos de 5 años',
                            value: '> 2 < 5',
                          },
                          {
                            label: 'Más de 5 años y menos de 10 años',
                            value: '> 5 < 10',
                          },
                          {
                            label: 'Más de 10 años',
                            value: '> 10',
                          },
                        ],
                        required: true,
                      },
                    ],
                  },
                  {
                    label: 'No',
                    value: 'No',
                  },
                ],
                required: true,
              },
            ],
          },
        ],
        required: true,
      },
    ],
    back: 'demandasLaborales',
    next: 'contratoLaboral',
  },
  {
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
          },
          {
            label: 'No',
            value: 'No',
          },
        ],
        required: true,
      },
      {
        type: 'radio',
        label: '¿Actualmente paga usted seguridad social a sus empleados?',
        name: 'Paga Seguridad Social',
        options: [
          {
            label: 'Si',
            value: 'Si',
          },
          {
            label: 'No',
            value: 'No',
          },
        ],
        required: true,
      },
    ],
    back: 'numeroEmpleados',
    next: 'procesosAbiertos',
  },
  {
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
          },
          {
            label: 'Dian',
            value: 'Dian',
          },
          {
            label: 'Fiscalía',
            value: 'Fiscalía',
          },
          {
            label: 'Procuraduría',
            value: 'Procuraduría',
          },
          {
            label: 'Contraloría',
            value: 'Contraloría',
          },
          {
            label: 'Administración Municipal',
            value: 'Administración Municipal',
          },
          {
            label: 'Seccional de Salud Departamental',
            value: 'Seccional de Salud Departamental',
          },
          {
            label: 'Corporación Autónoma Regional',
            value: 'Corporación Autónoma Regional',
          },
          {
            label: 'Otras Entidades del Estado',
            value: 'Otras Entidades del Estado',
          },
          {
            label: 'Ninguna',
            value: 'Ninguna',
          },
        ],
        required: true,
      },
    ],
    back: 'contratoLaboral',
    next: 'SUBMIT',
  },
]

export default questions
