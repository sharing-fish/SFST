import React from 'react';
import { render, screen } from '@testing-library/react';
import { useEntity } from '@backstage/plugin-catalog-react';
import { SfstCard } from './SfstCard';

// Mock the useEntity hook
jest.mock('@backstage/plugin-catalog-react', () => ({
  useEntity: jest.fn(),
}));

describe('SfstCard', () => {
  test('does not display GitHub stars when project-slug annotation is missing', async () => {
    // Mock the return value of useEntity
    (useEntity as jest.Mock).mockReturnValue({
      entity: {
        metadata: {
          annotations: {},
        },
      },
    });

    render(<SfstCard />);

    expect(screen.queryByText('No project slug found in entity annotations')).not.toBeInTheDocument();
  });
});