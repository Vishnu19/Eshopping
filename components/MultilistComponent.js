import * as React from 'react';
import { Divider,List, Checkbox } from 'react-native-paper';

class MultilistComponent extends React.Component {
  state = {
    expanded: true
  }

  _handlePress = () =>
    this.setState({
      expanded: !this.state.expanded
    });

  render() {
    return (
      <List.Section>
        <List.Accordion
          title="Gaming Laptops"
          left={props => <List.Icon {...props} icon="folder" />}
        >
          <List.Item title="Intel" />
          <List.Item title="AMD" />
        </List.Accordion>

        <List.Accordion
          title="Home Equipments"
          expanded={this.state.expanded}
          onPress={this._handlePress}
        >
          <List.Item title="Automation" />
          <Divider />
          <List.Item title="TV" />
        </List.Accordion>
        <List.Accordion
          title="Speakers"
          left={props => <List.Icon {...props} icon="folder" />}
        >
          <List.Item title="Wireless" ></List.Item>
          <List.Item title="Wired" />
        </List.Accordion>
      </List.Section>
      
    );
  }
}

export default MultilistComponent;