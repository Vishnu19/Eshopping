import * as React from 'react';
import { DataTable, Button, Card, Title, Paragraph } from 'react-native-paper';

const CartCard = (props) => (

    <Card>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>ITEM</DataTable.Title>
          <DataTable.Title numeric>Count</DataTable.Title>
          <DataTable.Title numeric>Cost</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>Laptop</DataTable.Cell>
          <DataTable.Cell numeric>1</DataTable.Cell>
          <DataTable.Cell numeric>16000.0</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Refridgerator</DataTable.Cell>
          <DataTable.Cell numeric>2</DataTable.Cell>
          <DataTable.Cell numeric>28000.0</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Pagination
          page={1}
          numberOfPages={3}
          onPageChange={(page) => { console.log(page); }}
          label="1-2 of 6"
        />
      </DataTable>
      </Card>
    );
    export default CartCard;