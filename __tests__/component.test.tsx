import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./ExternalDependency', () => ({
  useExternalService: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  test('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
  });

  test('handles user interactions correctly', async () => {
    const mockUseExternalService = (useExternalService as jest.Mock).mockImplementation(() => ({
      data: { id: '123', name: 'Test Data' },
      error: null,
      isLoading: false,
      fetchData: jest.fn(),
    }));

    render(<CoreFunctionalityComponent />);
    fireEvent.click(screen.getByText(/fetch data/i));
    await waitFor(() => expect(mockUseExternalService().fetchData).toHaveBeenCalled());
  });

  test('displays loading state', async () => {
    const mockUseExternalService = (useExternalService as jest.Mock).mockImplementation(() => ({
      data: null,
      error: null,
      isLoading: true,
      fetchData: jest.fn(),
    }));

    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });

  test('displays error message when an error occurs', async () => {
    const mockUseExternalService = (useExternalService as jest.Mock).mockImplementation(() => ({
      data: null,
      error: new Error('Failed to fetch'),
      isLoading: false,
      fetchData: jest.fn(),
    }));

    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/failed to fetch/i)).toBeInTheDocument();
  });

  test('ensures accessibility features are implemented', () => {
    const { container } = render(<CoreFunctionalityComponent />);
    expect(container.querySelector('[role="button"]')).toHaveAttribute('aria-label');
    expect(container).toBeAccessible(); // assumes use of axe-core or similar
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./ExternalDependency', () => ({
  useExternalService: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  test('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
  });

  test('handles user interactions correctly', async () => {
    const mockUseExternalService = (useExternalService as jest.Mock).mockImplementation(() => ({
      data: { id: '123', name: 'Test Data' },
      error: null,
      isLoading: false,
      fetchData: jest.fn(),
    }));

    render(<CoreFunctionalityComponent />);
    fireEvent.click(screen.getByText(/fetch data/i));
    await waitFor(() => expect(mockUseExternalService().fetchData).toHaveBeenCalled());
  });

  test('displays loading state', async () => {
    const mockUseExternalService = (useExternalService as jest.Mock).mockImplementation(() => ({
      data: null,
      error: null,
      isLoading: true,
      fetchData: jest.fn(),
    }));

    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });

  test('displays error message when an error occurs', async () => {
    const mockUseExternalService = (useExternalService as jest.Mock).mockImplementation(() => ({
      data: null,
      error: new Error('Failed to fetch'),
      isLoading: false,
      fetchData: jest.fn(),
    }));

    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/failed to fetch/i)).toBeInTheDocument();
  });

  test('ensures accessibility features are implemented', () => {
    const { container } = render(<CoreFunctionalityComponent />);
    expect(container.querySelector('[role="button"]')).toHaveAttribute('aria-label');
    expect(container).toBeAccessible(); // assumes use of axe-core or similar
  });
});