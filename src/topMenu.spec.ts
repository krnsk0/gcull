import { exec } from 'shelljs';
import { menu as topMenu } from './topMenu';
import { describe, expect, it, vi, Mock } from 'vitest';
import prompts from 'prompts';

vi.mock('shelljs', () => {
  return {
    exec: vi.fn(),
    which: vi.fn(),
  };
});

vi.spyOn(global.process, 'exit');

vi.mock('prompts', () => {
  return {
    default: vi.fn(),
  };
});

describe('topMenu', () => {
  it('should exit early when no branches are found', () => {
    (exec as Mock).mockReturnValue({ stdout: '' });
    expect(() => topMenu()).not.toThrow();
  });

  it('should not throw during a happy-path test', () => {
    (exec as Mock).mockReturnValue({ stdout: 'master\ntest1\n* test2' });
    (prompts as unknown as Mock).mockReturnValue({ branches: ['test1'] });
    expect(() => topMenu()).not.toThrow();
  });
});
