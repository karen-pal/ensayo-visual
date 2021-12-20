
export const n = [
  { id: '1', data: { label: 'Cuerpos' }, position: { x: 250, y: 5 } },
  // you can also pass a React component as a label
  { id: '2', data: { label: <div>Experiencias sensoriales</div> }, position: { x: 100, y: 100 } },
  { id: 'e1-2', source: '1', target: '2', animated: true },
];

export const other = 
    [{
        id: '1',
        data: { label: 'Cuerpos' },
        position: { x: 0, y: 50 },
        sourcePosition: 'right',
      },
      {
        id: '2',
        data: { label:'"Experiencias sensoriales"' },
        style: { border: '1px solid #ff0072', padding: 10, backgroundColor:'#ff0072' },
        position: { x: 300, y: 50 },
        targetPosition:'left',
      },
      {
        id: '3',
        type: 'output',
        data: { label: 'Olfato' },
        position: { x: 650, y: 25 },
        targetPosition: 'left',
      },
      {
        id: '4',
        type: 'output',
        data: { label: 'Tacto' },
        position: { x: 650, y: 50 },
        targetPosition: 'left',
      },
      {
        id: '5',
        type: 'output',
        data: { label: 'Gusto' },
        position: { x: 650, y: 75 },
        targetPosition: 'left',
      },
      {
        id: '6',
        type: 'output',
        data: { label: 'Vista' },
        position: { x: 650, y: 100 },
        targetPosition: 'left',
      },
      {
        id: '7',
        type: 'output',
        data: { label: 'Oido' },
        position: { x: 650, y: 125 },
        targetPosition: 'left',
      },
      {
        id: 'e1-2',
        source: '1',
        target: '2',
        arrowHeadType: 'arrowclosed',
      },
      {
        id: 'e2-3',
        source: '2',
        target: '3',
        animated:'true',
      },
      {
        id: 'e2-4',
        source: '2',
        target: '4',
        animated:'true',
      },
      {
        id: 'e2-5',
        source: '2',
        target: '5',
        animated:'true',
      },
      {
        id: 'e2-6',
        source: '2',
        target: '6',
        animated:'true',
      },
      {
        id: 'e7-2',
        source: '2',
        target: '7',
        animated:'true',
      },



    ]
