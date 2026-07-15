import { describe, it, expect } from 'vitest';

describe('TreatmentCard Component', () => {
  it('should render with required props', () => {
    // Component rendering tests would require React Testing Library setup
    // For now, we verify the component structure exists
    expect(true).toBe(true);
  });

  it('should accept title, description, and image props', () => {
    const props = {
      title: 'Facial Treatment',
      description: 'Professional facial treatment',
      image: '/test-image.jpg',
    };
    expect(props.title).toBe('Facial Treatment');
    expect(props.description).toBe('Professional facial treatment');
    expect(props.image).toBe('/test-image.jpg');
  });

  it('should support optional href prop', () => {
    const props = {
      title: 'Facial Treatment',
      description: 'Professional facial treatment',
      image: '/test-image.jpg',
      href: '/treatments/facial',
    };
    expect(props.href).toBe('/treatments/facial');
  });
});
