export default questions = {
  tipoDePersona: {
    key: 'tipoDePersona',
    fields: [
      {
        type: 'radio',
        label: 'Tipo De Persona',
        options: [
          {
            label: 'Natural',
            value: 'natural',
          },
          {
            label: 'Jurídica',
            value: 'juridica',
            children: [
              {
                type: 'dropdown',
                label: 'Tipos de Sociedad',
                options: [
                  {
                    label: 'Sociedad Limitada',
                    value: 'sociedadLimitada',
                  },
                  {
                    label: 'Sociedad Anónima',
                    value: 'sociedadAnonima',
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
  datosPersonales: {
    key: 'datosPersonales',
    fields: [
      {
        type: 'text',
        label: 'Nombre de la Empresa',
        placeholder: 'Nombre de la Empresa',
        required: true,
      },
      {
        type: 'text',
        label: 'Actividad Económica',
        placeholder: 'Actividad Económica',
        required: true,
      },
      {
        type: 'text',
        label: 'Representante Legal',
        placeholder: 'Representante Legal',
        required: true,
      },
      {
        type: 'text',
        label: 'Correo Electrónico',
        placeholder: 'Correo Electrónico',
        required: true,
      },
      {
        type: 'text',
        label: 'Número Telefónico',
        placeholder: 'Número Telefónico',
        required: true,
      },
      {
        type: 'text',
        label: 'Número Celular',
        placeholder: 'Número Celular',
        required: true,
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
        options: [
          {
            label: 'Si',
            value: 'si',
            children: [
              {
                type: 'text',
                label: '¿En qué juzgado se encuentra la demanda?',
                placeholder: '¿En qué juzgado se encuentra la demanda?',
                required: true,
              },
              {
                type: 'radio',
                label: '¿Sabe en qué etapa va la demanda?',
                options: [
                  {
                    label: 'Si',
                    value: 'si',
                    children: [
                      {
                        type: 'text',
                        label: '¿Cuál?',
                        placeholder: '¿Cuál?',
                        required: true,
                      },
                    ],
                  },
                  {
                    label: 'No',
                    value: 'no',
                  },
                ],
                required: true,
              },
            ],
          },
          {
            label: 'No',
            value: 'no',
          },
        ],
        required: true,
      },
    ],
    back: 'datosPersonales',
    next: 'numeroEmpleados',
  },
  numeroEmpleados: {
    key: 'numeroEmpleados',
    fields: [
      {
        type: 'radio',
        label: 'Actualmente su empresa cuenta con:',
        options: [
          {
            label: 'Menos de 5 empleados',
            value: 'menosDe5',
          },
          {
            label: 'Más de 5 y menos de 10 empleados',
            value: 'masDe5menosDe10',
            children: [
              {
                type: 'radio',
                label: '¿Actualmente cuenta con reglamento interno de trabajo?',
                options: [
                  {
                    label: 'Si',
                    value: 'si',
                    children: [
                      {
                        type: 'radio',
                        label: 'La última actualización fue:',
                        options: [
                          {
                            label: 'Menos de 2 años',
                            value: 'menosDe2',
                          },
                          {
                            label: 'Más de 2 años y menos de 5 años',
                            value: 'masDe2menosDe5',
                          },
                          {
                            label: 'Más de 5 años y menos de 10 años',
                            value: 'masDe5menosDe10',
                          },
                          {
                            label: 'Más de 10 años',
                            value: 'masDe10',
                          },
                        ],
                        required: true,
                      },
                    ],
                  },
                  {
                    label: 'No',
                    value: 'no',
                  },
                ],
                required: true,
              },
              {
                type: 'radio',
                label: '¿Actualmente cuenta con manual de procedimiento de descargos o sanciones?',
                options: [
                  {
                    label: 'Si',
                    value: 'si',
                    children: [
                      {
                        type: 'radio',
                        label: 'La última actualización fue:',
                        options: [
                          {
                            label: 'Menos de 2 años',
                            value: 'menosDe2',
                          },
                          {
                            label: 'Más de 2 años y menos de 5 años',
                            value: 'masDe2menosDe5',
                          },
                          {
                            label: 'Más de 5 años y menos de 10 años',
                            value: 'masDe5menosDe10',
                          },
                          {
                            label: 'Más de 10 años',
                            value: 'masDe10',
                          },
                        ],
                        required: true,
                      },
                    ],
                  },
                  {
                    label: 'No',
                    value: 'no',
                  },
                ],
                required: true,
              },
            ],
          },
          {
            label: 'Más de 10 y menos de 20 empleados',
            value: 'masDe10menosDe20',
            children: [
              {
                type: 'radio',
                label: '¿Actualmente cuenta con reglamento interno de trabajo?',
                options: [
                  {
                    label: 'Si',
                    value: 'si',
                    children: [
                      {
                        type: 'radio',
                        label: 'La última actualización fue:',
                        options: [
                          {
                            label: 'Menos de 2 años',
                            value: 'menosDe2',
                          },
                          {
                            label: 'Más de 2 años y menos de 5 años',
                            value: 'masDe2menosDe5',
                          },
                          {
                            label: 'Más de 5 años y menos de 10 años',
                            value: 'masDe5menosDe10',
                          },
                          {
                            label: 'Más de 10 años',
                            value: 'masDe10',
                          },
                        ],
                        required: true,
                      },
                    ],
                  },
                  {
                    label: 'No',
                    value: 'no',
                  },
                ],
                required: true,
              },
              {
                type: 'radio',
                label: '¿Actualmente cuenta con manual de procedimiento de descargos o sanciones?',
                options: [
                  {
                    label: 'Si',
                    value: 'si',
                    children: [
                      {
                        type: 'radio',
                        label: 'La última actualización fue:',
                        options: [
                          {
                            label: 'Menos de 2 años',
                            value: 'menosDe2',
                          },
                          {
                            label: 'Más de 2 años y menos de 5 años',
                            value: 'masDe2menosDe5',
                          },
                          {
                            label: 'Más de 5 años y menos de 10 años',
                            value: 'masDe5menosDe10',
                          },
                          {
                            label: 'Más de 10 años',
                            value: 'masDe10',
                          },
                        ],
                        required: true,
                      },
                    ],
                  },
                  {
                    label: 'No',
                    value: 'no',
                  },
                ],
                required: true,
              },
            ],
          },
          {
            label: 'Más de 20 y menos de 50 empleados',
            value: 'masDe20menosDe50',
            children: [
              {
                type: 'radio',
                label: '¿Actualmente cuenta con reglamento interno de trabajo?',
                options: [
                  {
                    label: 'Si',
                    value: 'si',
                    children: [
                      {
                        type: 'radio',
                        label: 'La última actualización fue:',
                        options: [
                          {
                            label: 'Menos de 2 años',
                            value: 'menosDe2',
                          },
                          {
                            label: 'Más de 2 años y menos de 5 años',
                            value: 'masDe2menosDe5',
                          },
                          {
                            label: 'Más de 5 años y menos de 10 años',
                            value: 'masDe5menosDe10',
                          },
                          {
                            label: 'Más de 10 años',
                            value: 'masDe10',
                          },
                        ],
                        required: true,
                      },
                    ],
                  },
                  {
                    label: 'No',
                    value: 'no',
                  },
                ],
                required: true,
              },
              {
                type: 'radio',
                label: '¿Actualmente cuenta con manual de procedimiento de descargos o sanciones?',
                options: [
                  {
                    label: 'Si',
                    value: 'si',
                    children: [
                      {
                        type: 'radio',
                        label: 'La última actualización fue:',
                        options: [
                          {
                            label: 'Menos de 2 años',
                            value: 'menosDe2',
                          },
                          {
                            label: 'Más de 2 años y menos de 5 años',
                            value: 'masDe2menosDe5',
                          },
                          {
                            label: 'Más de 5 años y menos de 10 años',
                            value: 'masDe5menosDe10',
                          },
                          {
                            label: 'Más de 10 años',
                            value: 'masDe10',
                          },
                        ],
                        required: true,
                      },
                    ],
                  },
                  {
                    label: 'No',
                    value: 'no',
                  },
                ],
                required: true,
              },
            ],
          },
          {
            label: 'Más de 50 y menos de 100 empleados',
            value: 'masDe50menosDe100',
            children: [
              {
                type: 'radio',
                label: '¿Actualmente cuenta con reglamento interno de trabajo?',
                options: [
                  {
                    label: 'Si',
                    value: 'si',
                    children: [
                      {
                        type: 'radio',
                        label: 'La última actualización fue:',
                        options: [
                          {
                            label: 'Menos de 2 años',
                            value: 'menosDe2',
                          },
                          {
                            label: 'Más de 2 años y menos de 5 años',
                            value: 'masDe2menosDe5',
                          },
                          {
                            label: 'Más de 5 años y menos de 10 años',
                            value: 'masDe5menosDe10',
                          },
                          {
                            label: 'Más de 10 años',
                            value: 'masDe10',
                          },
                        ],
                        required: true,
                      },
                    ],
                  },
                  {
                    label: 'No',
                    value: 'no',
                  },
                ],
                required: true,
              },
              {
                type: 'radio',
                label: '¿Actualmente cuenta con manual de procedimiento de descargos o sanciones?',
                options: [
                  {
                    label: 'Si',
                    value: 'si',
                    children: [
                      {
                        type: 'radio',
                        label: 'La última actualización fue:',
                        options: [
                          {
                            label: 'Menos de 2 años',
                            value: 'menosDe2',
                          },
                          {
                            label: 'Más de 2 años y menos de 5 años',
                            value: 'masDe2menosDe5',
                          },
                          {
                            label: 'Más de 5 años y menos de 10 años',
                            value: 'masDe5menosDe10',
                          },
                          {
                            label: 'Más de 10 años',
                            value: 'masDe10',
                          },
                        ],
                        required: true,
                      },
                    ],
                  },
                  {
                    label: 'No',
                    value: 'no',
                  },
                ],
                required: true,
              },
            ],
          },
          {
            label: 'Más de 100 y menos de 200 empleados',
            value: 'masDe100menosDe200',
            children: [
              {
                type: 'radio',
                label: '¿Actualmente cuenta con reglamento interno de trabajo?',
                options: [
                  {
                    label: 'Si',
                    value: 'si',
                    children: [
                      {
                        type: 'radio',
                        label: 'La última actualización fue:',
                        options: [
                          {
                            label: 'Menos de 2 años',
                            value: 'menosDe2',
                          },
                          {
                            label: 'Más de 2 años y menos de 5 años',
                            value: 'masDe2menosDe5',
                          },
                          {
                            label: 'Más de 5 años y menos de 10 años',
                            value: 'masDe5menosDe10',
                          },
                          {
                            label: 'Más de 10 años',
                            value: 'masDe10',
                          },
                        ],
                        required: true,
                      },
                    ],
                  },
                  {
                    label: 'No',
                    value: 'no',
                  },
                ],
                required: true,
              },
              {
                type: 'radio',
                label: '¿Actualmente cuenta con manual de procedimiento de descargos o sanciones?',
                options: [
                  {
                    label: 'Si',
                    value: 'si',
                    children: [
                      {
                        type: 'radio',
                        label: 'La última actualización fue:',
                        options: [
                          {
                            label: 'Menos de 2 años',
                            value: 'menosDe2',
                          },
                          {
                            label: 'Más de 2 años y menos de 5 años',
                            value: 'masDe2menosDe5',
                          },
                          {
                            label: 'Más de 5 años y menos de 10 años',
                            value: 'masDe5menosDe10',
                          },
                          {
                            label: 'Más de 10 años',
                            value: 'masDe10',
                          },
                        ],
                        required: true,
                      },
                    ],
                  },
                  {
                    label: 'No',
                    value: 'no',
                  },
                ],
                required: true,
              },
            ],
          },
          {
            label: 'Más de 200 empleados',
            value: 'masDe200',
            children: [
              {
                type: 'radio',
                label: '¿Actualmente cuenta con reglamento interno de trabajo?',
                options: [
                  {
                    label: 'Si',
                    value: 'si',
                    children: [
                      {
                        type: 'radio',
                        label: 'La última actualización fue:',
                        options: [
                          {
                            label: 'Menos de 2 años',
                            value: 'menosDe2',
                          },
                          {
                            label: 'Más de 2 años y menos de 5 años',
                            value: 'masDe2menosDe5',
                          },
                          {
                            label: 'Más de 5 años y menos de 10 años',
                            value: 'masDe5menosDe10',
                          },
                          {
                            label: 'Más de 10 años',
                            value: 'masDe10',
                          },
                        ],
                        required: true,
                      },
                    ],
                  },
                  {
                    label: 'No',
                    value: 'no',
                  },
                ],
                required: true,
              },
              {
                type: 'radio',
                label: '¿Actualmente cuenta con manual de procedimiento de descargos o sanciones?',
                options: [
                  {
                    label: 'Si',
                    value: 'si',
                    children: [
                      {
                        type: 'radio',
                        label: 'La última actualización fue:',
                        options: [
                          {
                            label: 'Menos de 2 años',
                            value: 'menosDe2',
                          },
                          {
                            label: 'Más de 2 años y menos de 5 años',
                            value: 'masDe2menosDe5',
                          },
                          {
                            label: 'Más de 5 años y menos de 10 años',
                            value: 'masDe5menosDe10',
                          },
                          {
                            label: 'Más de 10 años',
                            value: 'masDe10',
                          },
                        ],
                        required: true,
                      },
                    ],
                  },
                  {
                    label: 'No',
                    value: 'no',
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
  contratoLaboral: {
    key: 'contratoLaboral',
    fields: [
      {
        type: 'radio',
        label: '¿Actualmente todos sus empleados cuentan con contrato laboral por escrito?',
        options: [
          {
            label: 'Si',
            value: 'si',
          },
          {
            label: 'No',
            value: 'no',
          },
        ],
        required: true,
      },
    ],
    back: 'numeroEmpleados',
    next: 'seguridadSocial',
  },
  seguridadSocial: {
    key: 'seguridadSocial',
    fields: [
      {
        type: 'radio',
        label: 'Actualmente la empresa está inmersa en procesos con:',
        options: [
          {
            label: 'UGPP',
            value: 'ugpp',
          },
          {
            label: 'Dian',
            value: 'dian',
          },
          {
            label: 'Fiscalía',
            value: 'fiscalia',
          },
          {
            label: 'Procuraduría',
            value: 'procuraduria',
          },
          {
            label: 'Contraloría',
            value: 'contraloria',
          },
          {
            label: 'Administración Municipal',
            value: 'administracionMunicipal',
          },
          {
            label: 'Dian',
            value: 'dian',
          },
          {
            label: 'Dian',
            value: 'dian',
          },
          {
            label: 'Dian',
            value: 'dian',
          },
        ],
        required: true,
      },
    ],
    back: 'numeroEmpleados',
    next: '',
  },
}
