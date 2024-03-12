import { Segment, Container, Grid, Menu, MenuItem, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

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
  marginBottom: '2%'
}

const GenerateButtonStyle = {
  width: '30%',
  marginLeft: '35%',
  marginRight: '35%',

  height: '20%',
  marginBottom: '10%',
}
  

export function LandingPage() {
  const [mapFilter, setMapFilter] = useState('geographic');
  
  return (
    <>
      <Segment raised textAlign='center' size='massive' style={TitleStyle}>
        Ikariam Map Viewer
      </Segment>

      <Segment style={TextBodyStyle}>
        Mussum Ipsum, cacilds vidis litro abertis.  Casamentiss faiz malandris se pirulitá. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Per aumento de cachacis, eu reclamis. Quem num gosta di mim que vai caçá sua turmis!
      </Segment>
      
      <Container>
        <Grid>
          <Grid.Row centered>
            <Grid.Column width={12} textAlign='center'>
              <Menu compact width={3} style={FilterMenuStyle}>
                <MenuItem header>FILTER:</MenuItem>
                <MenuItem id='asdasd'
                  name='geographic'
                  active={mapFilter === 'geographic'}
                  onClick={() => setMapFilter('geographic')}
                />
                <MenuItem 
                  name='luxury'
                  active={mapFilter === 'luxury'}
                  onClick={() => setMapFilter('luxury')}
                />
                <MenuItem 
                  name='population'
                  active={mapFilter === 'population'}
                  onClick={() => setMapFilter('population')}
                />
              </Menu>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>

      <Link to={`mapViewer/${mapFilter}`}>
        <Button 
          size='massive' 
          style={GenerateButtonStyle}>
          Generate Map
        </Button>
      </Link>
      
    </>
  );
}