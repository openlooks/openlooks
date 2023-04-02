import Paper from '../../components/Paper.lite';
import Table from '../../components/Table.lite';
import Text from '../../components/Text.lite';
import Title from '../../components/Title.lite';
import DocPage from '../components/DocPage.lite';
import Prism from '../components/Prism.lite';

export default function TablePage() {
  return (
    <DocPage title="Table" description="Render table with theme styles">
      <Title order={2}>Usage</Title>
      <Text mb="xl">Table data for all examples:</Text>
      <Prism language="js">{`const elements = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];`}</Prism>
      <Paper p="xl" withBorder>
        <Table>
          <thead>
            <tr>
              <th>Element position</th>
              <th>Element name</th>
              <th>Symbol</th>
              <th>Atomic mass</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>6</td>
              <td>Carbon</td>
              <td>C</td>
              <td>12.011</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Nitrogen</td>
              <td>N</td>
              <td>14.007</td>
            </tr>
            <tr>
              <td>39</td>
              <td>Yttrium</td>
              <td>Y</td>
              <td>88.906</td>
            </tr>
            <tr>
              <td>56</td>
              <td>Barium</td>
              <td>Ba</td>
              <td>137.33</td>
            </tr>
            <tr>
              <td>58</td>
              <td>Cerium</td>
              <td>Ce</td>
              <td>140.12</td>
            </tr>
          </tbody>
        </Table>
      </Paper>
      <Prism language="jsx">{`import { Table } from '@openlooks/react';

function Demo() {
  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>{element.position}</td>
      <td>{element.name}</td>
      <td>{element.symbol}</td>
      <td>{element.mass}</td>
    </tr>
  ));

  return (
    <Table>
      <thead>
        <tr>
          <th>Element position</th>
          <th>Element name</th>
          <th>Symbol</th>
          <th>Atomic mass</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}`}</Prism>
    </DocPage>
  );
}
