import { menu as topMenu } from './topMenu';
import { describe, expect, it } from 'vitest';

describe('menu', () => {
  it('should pass', () => {
    expect(topMenu).toBe(topMenu);
  });
});
