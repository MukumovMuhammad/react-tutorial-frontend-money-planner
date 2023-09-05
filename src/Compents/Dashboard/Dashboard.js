import React from 'react'
import { styled } from 'styled-components'
import { InnerLayout } from '../../styles/Layouts';

function Dashboard() {
    return (
        <DashboardStyled>
            <InnerLayout>

            </InnerLayout>
        </DashboardStyled>
    )
}

const DashboardStyled = styled.div`
    text-align: center;
    justify-content: center;
`;

export default Dashboard