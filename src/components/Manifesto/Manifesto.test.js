import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Manifesto from './Manifesto';

describe('<Manifesto />', () => {
  test('it should mount', () => {
    render(<Manifesto />);
    
    const manifesto = screen.getByTestId('Manifesto');

    expect(manifesto).toBeInTheDocument();
  });
});