import styled from 'styled-components';
import { Segment, Menu, MenuItem, Button } from 'semantic-ui-react';

import { useState } from 'react';

// const StyledApp = styled.div`
//   // Your style here
//   background-color: #1050A0;
// `;

const TitleStyle = {
  marginLeft: '20%',
  marginRight: '20%',
  marginBottom: '5%',

  position: 'relative',
  top: '5vh'
}

const TextBodyStyle = {
  marginLeft: '20%',
  marginRight: '20%',
  marginBottom: '5%',
}

const FilterMenuStyle = {
  marginLeft: '40%',
  marginRight: '40%',
  marginBottom: '2%'
}

const GenerateButtonStyle = {
  width: '30%',
  marginLeft: '35%',
  marginRight: '35%',

  height: '20%',
  marginBottom: '10%',
}
  

export function App() {
  const [mapFilter, setMapFilter] = useState('geographic');
  
  return (
    <>
      <Segment raised textAlign='center' size='massive' style={TitleStyle}>
        Ikariam Map Viewer
      </Segment>

      <Segment style={TextBodyStyle}>
        Mussum Ipsum, cacilds vidis litro abertis.  Casamentiss faiz malandris se pirulitá. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Per aumento de cachacis, eu reclamis. Quem num gosta di mim que vai caçá sua turmis!
      </Segment>

      <Menu compact width={3} style={FilterMenuStyle}>
        <MenuItem header>FILTER:</MenuItem>
        <MenuItem
          name='geographic'
          active={mapFilter === 'geographic'}
          onClick={() => setMapFilter('geographic')}
          // style={FilterItemStyle}
        />
        <MenuItem 
          name='luxury'
          active={mapFilter === 'luxury'}
          onClick={() => setMapFilter('luxury')}
          // style={FilterItemStyle}
        />
        <MenuItem 
          name='population'
          active={mapFilter === 'population'}
          onClick={() => setMapFilter('population')}
          // style={FilterItemStyle}
        />
      </Menu>

      <Button size='massive' style={GenerateButtonStyle}>
        Generate Map
      </Button>
    </>
  );
}

export default App;
