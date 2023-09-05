import styled from 'styled-components';
import { MainLayout } from './styles/Layouts'
import Orb from './Compents/orb/orb';
import Novigation from './Compents/Novigation/Novigation';
import { useMemo, useState } from 'react';
import bg from './img/bg.png'
import Dashboard from './Compents/Dashboard/Dashboard';
import Incomes from './Compents/Incomes/Incomes';
import Expenses from './Compents/Expenses/Expenses';
import { useGlobalContext } from './context/globalContext';
function App() {
  const [active, setActive] = useState(1);

  const global = useGlobalContext()
  console.log(global);

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />
      case 2:
        return <Dashboard />
      case 3:
        return <Incomes />
      case 4:
        return <Expenses />
      default:
        return <Dashboard />
    }
  }

  const orbMemo = useMemo(() => {
    return <Orb />
  }, [])

  return (
    <AppStyled bg={bg} className="App">
      {orbMemo}
      <MainLayout>

        <Novigation active={active} setActive={setActive} />
        <main>
          {displayData()}
        </main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-color: url(${props => props.bg});
  position: relative;

  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow: auto;
    overflow-x: hidden;

    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;
export default App;
