import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import DesignArchitectureComponent from './DesignArchitectureComponent';

jest.mock('./external-dependency', () => ({
  useExternalService: jest.fn(),
}));

describe('Design Architecture Component Tests', () => {
  const mockUseExternalService = require('./external-dependency').useExternalService;

  beforeEach(() => {
    mockUseExternalService.mockClear();
  });

  test('renders without crashing', () => {
    render(<DesignArchitectureComponent />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  test('handles user interaction with buttons', async () => {
    const { getByText } = render(<DesignArchitectureComponent />);

    fireEvent.click(getByText('Submit'));

    await waitFor(() => {
      expect(mockUseExternalService).toHaveBeenCalled();
    });
  });

  test('displays error message when external service fails', async () => {
    mockUseExternalService.mockImplementation(() => ({ data: null, error: new Error('Failed to fetch') }));

    render(<DesignArchitectureComponent />);

    await waitFor(() => {
      expect(screen.getByText(/failed/i)).toBeInTheDocument();
    });
  });

  test('displays loading state while fetching data', async () => {
    mockUseExternalService.mockImplementation(() => ({ isLoading: true, error: null, data: undefined }));

    render(<DesignArchitectureComponent />);

    await waitFor(() => {
      expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });
  });

  test('ensures component is accessible', () => {
    render(<DesignArchitectureComponent />);
    
    const heading = screen.getByRole('heading');
    expect(heading).toHaveAccessibleName();

    const button = screen.getByRole('button', { name: /submit/i });
    expect(button).toBeEnabled();
    expect(button).toHaveAttribute('aria-label');
  });

  test('handles edge cases such as empty data', async () => {
    mockUseExternalService.mockImplementation(() => ({ isLoading: false, error: null, data: [] }));

    render(<DesignArchitectureComponent />);

    await waitFor(() => {
      expect(screen.getByText(/no data available/i)).toBeInTheDocument();
    });
  });

});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import DesignArchitectureComponent from './DesignArchitectureComponent';

jest.mock('./external-dependency', () => ({
  useExternalService: jest.fn(),
}));

describe('Design Architecture Component Tests', () => {
  const mockUseExternalService = require('./external-dependency').useExternalService;

  beforeEach(() => {
    mockUseExternalService.mockClear();
  });

  test('renders without crashing', () => {
    render(<DesignArchitectureComponent />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  test('handles user interaction with buttons', async () => {
    const { getByText } = render(<DesignArchitectureComponent />);

    fireEvent.click(getByText('Submit'));

    await waitFor(() => {
      expect(mockUseExternalService).toHaveBeenCalled();
    });
  });

  test('displays error message when external service fails', async () => {
    mockUseExternalService.mockImplementation(() => ({ data: null, error: new Error('Failed to fetch') }));

    render(<DesignArchitectureComponent />);

    await waitFor(() => {
      expect(screen.getByText(/failed/i)).toBeInTheDocument();
    });
  });

  test('displays loading state while fetching data', async () => {
    mockUseExternalService.mockImplementation(() => ({ isLoading: true, error: null, data: undefined }));

    render(<DesignArchitectureComponent />);

    await waitFor(() => {
      expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });
  });

  test('ensures component is accessible', () => {
    render(<DesignArchitectureComponent />);
    
    const heading = screen.getByRole('heading');
    expect(heading).toHaveAccessibleName();

    const button = screen.getByRole('button', { name: /submit/i });
    expect(button).toBeEnabled();
    expect(button).toHaveAttribute('aria-label');
  });

  test('handles edge cases such as empty data', async () => {
    mockUseExternalService.mockImplementation(() => ({ isLoading: false, error: null, data: [] }));

    render(<DesignArchitectureComponent />);

    await waitFor(() => {
      expect(screen.getByText(/no data available/i)).toBeInTheDocument();
    });
  });

});