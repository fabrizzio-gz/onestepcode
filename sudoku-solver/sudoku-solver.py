import numpy as np


def create_grid(puzzle_str):
    # Deleting whitespaces and newlines (\n)
    lines = puzzle_str.replace(' ','').replace('\n','')
    # Converting it to a list of digits
    digits = list(map(int, lines))
    # Turning it to a 9x9 numpy array
    grid = np.array(digits).reshape(9,9)
    return grid


def get_subgrids(grid):
    subgrids = []
    for box_i in range(3):
        for box_j in range(3):
            subgrid = []
            for i in range(3):
                for j in range(3):
                    subgrid.append(grid[3*box_i + i][3*box_j + j])
            subgrids.append(subgrid)
    return np.array(subgrids)


def get_candidates(grid):
    def subgrid_index(i, j):
        return (i//3) * 3 + j // 3
    subgrids = get_subgrids(grid)
    grid_candidates = []
    for i in range(9):
        row_candidates = []
        for j in range(9):
            # Row, column and subgrid digits
            row = set(grid[i])
            col = set(grid[:, j])
            sub = set(subgrids[subgrid_index(i, j)])
            common = row | col | sub
            candidates = set(range(10)) - common
            # If the case is filled take its value as the only candidate
            if not grid[i][j]:
                row_candidates.append(list(candidates))
            else:
                row_candidates.append([grid[i][j]])
        grid_candidates.append(row_candidates)
    return grid_candidates


def fill_singles(grid):
    grid = grid.copy()
    candidates = get_candidates(grid)
    any_fill = True
    while any_fill:
        any_fill = False
        for i in range(9):
            for j in range(9):
                if len(candidates[i][j]) == 1 and grid[i][j] == 0:
                    grid[i][j] = candidates[i][j][0]
                    candidates = get_candidates(grid)
                    any_fill = True
    return grid


def is_valid_grid(grid):
    candidates = get_candidates(grid)
    for i in range(9):
        for j in range(9):
            if len(candidates[i][j]) == 0:
                return False
    return True


def is_solution(grid):
    if np.all(np.sum(grid, axis=1) == 45) and \
       np.all(np.sum(grid, axis=0) == 45) and \
       np.all(np.sum(get_subgrids(grid), axis=1) == 45):
        return True
    return False


def make_guess(grid):
    grid = grid.copy()
    candidates = get_candidates(grid)
    # Getting the shortest number of candidates > 1:
    min_len = sorted(list(set(map(
        len, np.array(candidates).reshape(1,81)[0]))))[1]
    for i in range(9):
        for j in range(9):
            if len(candidates[i][j]) == min_len:
                for guess in candidates[i][j]:
                    grid[i][j] = guess
                    solution = solve(grid)
                    if solution is not None:
                        return solution
                    # Discarding a wrong guess
                    grid[i][j] = 0


def solve(grid):
    grid = fill_singles(grid)
    if is_solution(grid):
        return grid
    if not is_valid_grid(grid):
        return None
    return make_guess(grid)


def pp(grid):
    for row in grid:
        print(row)

# grid 4
simple_puzzle = """043080250
                   600000000
                   000001094
                   900004070
                   000608000
                   010200003
                   820500000
                   000000005
                   034090710"""

simple_grid = create_grid(simple_puzzle)
solve(simple_grid)
