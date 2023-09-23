import { describe, it, expect, vi, Mock } from 'vitest';
import { bailIfGitNotFound } from './bailIfGitNotFound';
import { which, exit } from 'shelljs';

vi.mock('shelljs', () => {
  return {
    which: vi.fn(),
    exit: vi.fn(),
  };
});

vi.spyOn(global.console, 'log');

describe('bailIfGitNotFound', () => {
  it('should exit if git is not found', () => {
    (which as Mock).mockReturnValueOnce(false);
    bailIfGitNotFound();
    expect(exit).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith('This script requires git');
  });

  it('should not exit if git is found', () => {
    (which as Mock).mockReturnValueOnce(true);
    bailIfGitNotFound();
    expect(exit).not.toHaveBeenCalled();
    expect(console.log).not.toHaveBeenCalled();
  });
});
