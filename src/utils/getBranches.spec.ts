import { describe, it, expect, vi, Mock } from 'vitest';
import { getBranches } from './getBranches';
import { exec } from 'shelljs';

vi.mock('shelljs', () => {
  return {
    exec: vi.fn(),
  };
});

describe('getBranches', () => {
  it('should exclude master and main', async () => {
    (exec as Mock).mockReturnValue({
      stdout: `master\nmain\ntest1\ntest2`,
    });
    expect((await getBranches()).branches).toEqual(['test1', 'test2']);
  });

  it('should remove * from current branch', async () => {
    (exec as Mock).mockReturnValue({
      stdout: `* test0\ntest1\ntest2`,
    });
    expect((await getBranches()).branches).toEqual(['test0', 'test1', 'test2']);
  });

  it('should trim whitespace', async () => {
    (exec as Mock).mockReturnValue({
      stdout: `    test0 \n  test1    \n  test2   `,
    });
    expect((await getBranches()).branches).toEqual(['test0', 'test1', 'test2']);
  });

  it('should exclude empty lines', async () => {
    (exec as Mock).mockReturnValue({
      stdout: `test0\ntest1\n\ntest2\n\n\n`,
    });
    expect((await getBranches()).branches).toEqual(['test0', 'test1', 'test2']);
  });

  it('should identify the current branch', async () => {
    (exec as Mock).mockReturnValue({
      stdout: `test0\n* test1\n  test2`,
    });
    expect((await getBranches()).currentBranch).toBe('test1');
  });

  describe('should identify the main branch', () => {
    it('when it is master', async () => {
      (exec as Mock).mockReturnValue({
        stdout: `master\nmain\ntest1\ntest2`,
      });
      expect((await getBranches()).mainBranch).toBe('master');
    });

    it('when it is main', async () => {
      (exec as Mock).mockReturnValue({
        stdout: `main\nmaster\ntest1\ntest2`,
      });
      expect((await getBranches()).mainBranch).toBe('main');
    });
  });
});
