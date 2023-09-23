import { describe, it, expect, vi, Mock } from 'vitest';
import { getGitBranches } from './getGitBranches';
import { exec } from 'shelljs';

vi.mock('shelljs', () => {
  return {
    exec: vi.fn(),
  };
});

describe('getGitBranches', () => {
  it('should exclude master and main', async () => {
    (exec as Mock).mockReturnValue({
      stdout: `master\nmain\ntest1\ntest2`,
    });
    expect((await getGitBranches()).branches).toEqual(['test1', 'test2']);
  });

  it('should remove * from current branch', async () => {
    (exec as Mock).mockReturnValue({
      stdout: `* test0\ntest1\ntest2`,
    });
    expect((await getGitBranches()).branches).toEqual([
      'test0',
      'test1',
      'test2',
    ]);
  });

  it('should trim whitespace', async () => {
    (exec as Mock).mockReturnValue({
      stdout: `    test0 \n  test1    \n  test2   `,
    });
    expect((await getGitBranches()).branches).toEqual([
      'test0',
      'test1',
      'test2',
    ]);
  });

  it('should exclude empty lines', async () => {
    (exec as Mock).mockReturnValue({
      stdout: `test0\ntest1\n\ntest2\n\n\n`,
    });
    expect((await getGitBranches()).branches).toEqual([
      'test0',
      'test1',
      'test2',
    ]);
  });

  it('should identify the current branch', async () => {
    (exec as Mock).mockReturnValue({
      stdout: `test0\n* test1\n  test2`,
    });
    expect((await getGitBranches()).currentBranch).toBe('test1');
  });

  describe('should identify the main branch', () => {
    it('when it is master', async () => {
      (exec as Mock).mockReturnValue({
        stdout: `master\nmain\ntest1\ntest2`,
      });
      expect((await getGitBranches()).mainBranch).toBe('master');
    });

    it('when it is main', async () => {
      (exec as Mock).mockReturnValue({
        stdout: `main\nmaster\ntest1\ntest2`,
      });
      expect((await getGitBranches()).mainBranch).toBe('main');
    });
  });
});
