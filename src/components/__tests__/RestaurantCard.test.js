import { render, screen } from '@testing-library/react';
import RestroCard from '../../components/RestroCard';
import MOCK_DATA from '../mocks/resCardMock.json'
import '@testing-library/jest-dom'; //// TO read document, eg toBeInTheDocument() method

it('Should render Resto Card component with props data', () => {

    render(<RestroCard resData={MOCK_DATA} />)

    const name = screen.getByText('Res Name');

    expect(name).toBeInTheDocument();
});