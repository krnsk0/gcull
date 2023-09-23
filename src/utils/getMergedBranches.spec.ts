import { describe, it, expect, vi, Mock } from 'vitest';
import { getMergedBranches } from './getMergedBranches';
import { exec } from 'shelljs';

vi.mock('shelljs', () => {
  return {
    exec: vi.fn(),
  };
});

describe('getMergedBranches', () => {
  it('runs the right command given a main branch name', () => {
    (exec as Mock).mockReturnValue({
      stdout: '',
    });
    getMergedBranches('foo');
    expect(exec).toHaveBeenCalledWith('git branch --merged foo');
  });

  it('should exclude master and main', () => {
    (exec as Mock).mockReturnValue({
      stdout: `master\nmain\ntest1\ntest2`,
    });
    expect(getMergedBranches('foo').branches).toEqual(['test1', 'test2']);
  });

  it('should trim whitespace', () => {
    (exec as Mock).mockReturnValue({
      stdout: `    test0 \n  test1    \n  test2   `,
    });
    expect(getMergedBranches('foo').branches).toEqual([
      'test0',
      'test1',
      'test2',
    ]);
  });

  it('should exclude empty lines', () => {
    (exec as Mock).mockReturnValue({
      stdout: `test0\n\n\n\ntest1\n\ntest2\n\n\n`,
    });
    expect(getMergedBranches('foo').branches).toEqual([
      'test0',
      'test1',
      'test2',
    ]);
  });

  it('should remove * from current branch', () => {
    (exec as Mock).mockReturnValue({
      stdout: `* test0\n  test1\n  test2`,
    });
    expect(getMergedBranches('foo').branches).toEqual([
      'test0',
      'test1',
      'test2',
    ]);
  });
});
