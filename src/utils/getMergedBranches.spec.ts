import { describe, it, expect, vi, Mock } from 'vitest';
import { getMergedBranches } from './getMergedBranches';
import { exec } from 'shelljs';

vi.mock('shelljs', () => {
  return {
    exec: vi.fn(),
  };
});

describe('getMergedBranches', () => {
  it('runs the right command given a main branch name', async () => {
    (exec as Mock).mockReturnValue({
      stdout: '',
    });
    await getMergedBranches('foo');
    expect(exec).toHaveBeenCalledWith('git branch --merged foo');
  });

  it('should exclude master and main', async () => {
    (exec as Mock).mockReturnValue({
      stdout: `master\nmain\ntest1\ntest2`,
    });
    expect((await getMergedBranches('foo')).branches).toEqual([
      'test1',
      'test2',
    ]);
  });

  it('should trim whitespace', async () => {
    (exec as Mock).mockReturnValue({
      stdout: `    test0 \n  test1    \n  test2   `,
    });
    expect((await getMergedBranches('foo')).branches).toEqual([
      'test0',
      'test1',
      'test2',
    ]);
  });

  it('should exclude empty lines', async () => {
    (exec as Mock).mockReturnValue({
      stdout: `test0\n\n\n\ntest1\n\ntest2\n\n\n`,
    });
    expect((await getMergedBranches('foo')).branches).toEqual([
      'test0',
      'test1',
      'test2',
    ]);
  });

  it('should remove * from current branch', async () => {
    (exec as Mock).mockReturnValue({
      stdout: `* test0\n  test1\n  test2`,
    });
    expect((await getMergedBranches('foo')).branches).toEqual([
      'test0',
      'test1',
      'test2',
    ]);
  });
});
