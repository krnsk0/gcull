import { describe, it, expect, vi, Mock } from 'vitest';
import { bailIfGitNotFound } from './bailIfGitNotFound';
import { which, exit } from 'shelljs';

vi.mock('shelljs', () => {
  return {
    which: vi.fn(),
    exit: vi.fn(),
  };
});

describe('bailIfGitNotFound', () => {
  it('should exit if git is not found', () => {
    (which as Mock).mockReturnValueOnce(false);
    bailIfGitNotFound();
    expect(exit).toHaveBeenCalled();
  });

  it('should not exit if git is found', () => {
    (which as Mock).mockReturnValueOnce(true);
    bailIfGitNotFound();
    expect(exit).not.toHaveBeenCalled();
  });
});
