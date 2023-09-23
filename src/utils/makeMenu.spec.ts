import { describe, it, expect, vi } from 'vitest';
import { makeMenu } from './makeMenu';
import prompts from 'prompts';
import { GitBranchOutput } from './getBranches';

vi.mock('prompts', () => {
  return {
    default: vi.fn(),
  };
});

describe('makeMenu', () => {
  it('should create a multiselect menu', () => {
    makeMenu(
      { branches: [], currentBranch: '', mainBranch: '' },
      { branches: [] }
    );
    expect(prompts).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'multiselect',
      })
    );
  });

  it('should invoke prompts with the right choices given some git branches', () => {
    const branches: GitBranchOutput = {
      branches: ['test0', 'test1', 'test2'],
      currentBranch: '',
      mainBranch: '',
    };
    makeMenu(branches, { branches: [] });
    expect(prompts).toHaveBeenCalledWith(
      expect.objectContaining({
        choices: [
          { title: 'test0', value: 'test0', disabled: false, selected: false },
          { title: 'test1', value: 'test1', disabled: false, selected: false },
          { title: 'test2', value: 'test2', disabled: false, selected: false },
        ],
      })
    );
  });

  it('should disable the current branch', () => {
    const branches: GitBranchOutput = {
      branches: ['test0', 'test1', 'test2'],
      currentBranch: 'test0',
      mainBranch: '',
    };
    makeMenu(branches, { branches: [] });
    expect(prompts).toHaveBeenCalledWith(
      expect.objectContaining({
        choices: [
          { title: 'test0', value: 'test0', disabled: true, selected: false },
          { title: 'test1', value: 'test1', disabled: false, selected: false },
          { title: 'test2', value: 'test2', disabled: false, selected: false },
        ],
      })
    );
  });

  it('should annotate and select merged branches', () => {
    const branches: GitBranchOutput = {
      branches: ['test0', 'test1', 'test2'],
      currentBranch: '',
      mainBranch: '',
    };
    makeMenu(branches, { branches: ['test1'] });
    expect(prompts).toHaveBeenCalledWith(
      expect.objectContaining({
        choices: [
          { title: 'test0', value: 'test0', disabled: false, selected: false },
          {
            title: 'test1 (merged)',
            value: 'test1',
            disabled: false,
            selected: true,
          },
          { title: 'test2', value: 'test2', disabled: false, selected: false },
        ],
      })
    );
  });
});
