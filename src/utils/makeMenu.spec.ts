import { describe, it, expect, vi } from 'vitest';
import { makeMenu } from './makeMenu';
import prompts from 'prompts';
import { GitBranches } from './getGitBranches';

vi.mock('prompts', () => {
  return {
    default: vi.fn(),
  };
});

describe('makeMenu', () => {
  it('should invoke prompts with the right choices given some git branches', () => {
    const branches: GitBranches = {
      branches: ['test0', 'test1', 'test2'],
      currentBranch: '',
    };
    makeMenu(branches);
    expect(prompts).toHaveBeenCalledWith(
      expect.objectContaining({
        choices: [
          { title: 'test0', value: 'test0', disabled: false },
          { title: 'test1', value: 'test1', disabled: false },
          { title: 'test2', value: 'test2', disabled: false },
        ],
      })
    );
  });

  it('should disable the current branch', () => {
    const branches: GitBranches = {
      branches: ['test0', 'test1', 'test2'],
      currentBranch: 'test0',
    };
    makeMenu(branches);
    expect(prompts).toHaveBeenCalledWith(
      expect.objectContaining({
        choices: [
          { title: 'test0', value: 'test0', disabled: true },
          { title: 'test1', value: 'test1', disabled: false },
          { title: 'test2', value: 'test2', disabled: false },
        ],
      })
    );
  });
});
