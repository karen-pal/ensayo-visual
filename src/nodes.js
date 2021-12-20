
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
        targetPosition:'top',
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
        data: { label:'"Espacios demarcados"' },
        style: {padding: 10, backgroundColor:'#ffffff' },
        position: { x: 0, y: -50 },
        targetPosition:'bottom',
      },
      {
        id: 's1',
        type: 'output',
        data: { label: 'Olfato' },
        position: { x: 650, y: 25 },
        targetPosition: 'left',
      },
      {
        id: 's2',
        type: 'output',
        data: { label: 'Tacto' },
        position: { x: 650, y: 50 },
        targetPosition: 'left',
      },
      {
        id: 's3',
        type: 'output',
        data: { label: 'Gusto' },
        position: { x: 650, y: 75 },
        targetPosition: 'left',
      },
      {
        id: 's4',
        type: 'output',
        data: { label: 'Vista' },
        position: { x: 650, y: 100 },
        targetPosition: 'left',
      },
      {
        id: 's5',
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
        label:'Doble rol',
        labelBgBorderRadius: 14,
        labelBgStyle: { fill: '#cccccc', color: '#fff', fillOpacity: 0.7 },
      },
      {
        id: 'e2-s1',
        source: '2',
        target: 's1',
        animated:'true',
      },
      {
        id: 'e2-s2',
        source: '2',
        target: 's2',
        animated:'true',
      },
      {
        id: 'e2-s3',
        source: '2',
        target: 's3',
        animated:'true',
      },
      {
        id: 'e2-6s4',
        source: '2',
        target: 's4',
        animated:'true',
      },
      {
        id: 'e7-s5',
        source: '2',
        target: 's5',
        animated:'true',
      },
      {
        id: 'e1-3',
        source: '1',
        target: '3',
        animated:'true',
        arrowHeadType: 'arrowclosed',
      },
      {
        id: 'e3-2',
        source: '2',
        target: '3',
        animated:'true',
        arrowHeadType: 'arrowclosed',
      },



    ]
