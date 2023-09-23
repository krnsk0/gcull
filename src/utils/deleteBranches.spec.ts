import { describe, expect, it, vi, Mock } from 'vitest';
import { deleteBranches } from './deleteBranches';
import { exec } from 'shelljs';

vi.mock('shelljs', () => {
  return {
    exec: vi.fn(),
  };
});

vi.spyOn(global.console, 'log');

describe('deleteBranches', () => {
  it('should delete the passed-in branches, logging on success', () => {
    (exec as Mock).mockReturnValue({ code: 0 });
    deleteBranches(['test1', 'test2']);
    expect(exec).toHaveBeenCalledWith('git branch -D test1 test2');
    expect(console.log).toHaveBeenCalledWith('Deleted:\ntest1\ntest2');
  });

  it('should log on failure', () => {
    (exec as Mock).mockReturnValue({ code: 1 });
    deleteBranches(['test1', 'test2']);
    expect(console.log).toHaveBeenCalledWith('Failed to delete:\ntest1\ntest2');
  });

  it('should do nothing if no branches are passed in', () => {
    deleteBranches([]);
    expect(exec).not.toHaveBeenCalled();
    expect(console.log).not.toHaveBeenCalled();
  });
});
