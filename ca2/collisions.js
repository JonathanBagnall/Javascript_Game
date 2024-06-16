let collisions_map1 = [
    
    [1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083],
    [1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083],
    [1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083],
    [1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083],
    [1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083],
    [1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083],
    [1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083],
    [1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083],
    [1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083],
    [1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 0, 0, 0],
    [0, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 0, 0, 0],
    [0, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 1083, 1083, 1083, 0, 1083, 1083, 1083, 1083, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 0, 0, 0],
    [0, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 0, 0, 0],
    [0, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 0, 0, 0],
    [0, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 0, 0, 0],
    [0, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 0, 0, 0],
    [0, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 1083, 0, 0, 0],
    [0, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 0, 0],
    [0, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 1083, 0, 55, 0, 0, 0, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 0, 0],
    [0, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 55, 55, 55, 55, 0, 0, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 0, 0],
    [1083, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 0, 0, 0, 0, 0, 0, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 0, 0],
    [1672, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 1083, 103, 0, 103, 1083, 1083, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 0, 0],
    [1672, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 0, 0],
    [1083, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 0, 0],
    [0, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 0, 0],
    [0, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 0, 0],
    [0, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 0, 0],
    [0, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 1083, 1083, 0, 1083, 1083, 0],
    [0, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 1083, 1083, 0, 1083, 1083, 1083, 0, 0],
    [0, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

    let collisions_map2 = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 541, 541, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 0, 0, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 1083, 1083, 1083, 0, 0, 0, 0, 0, 1083, 1083, 1083, 0, 0, 0, 0, 0, 0, 1083, 1083, 1083, 1083, 0],
        [0, 0, 0, 0, 0, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 0, 0, 0, 0, 0, 1083, 1083, 1083, 0, 0, 0, 0, 0, 0, 1083, 1083, 1083, 1083, 0],
        [0, 0, 0, 0, 0, 1083, 1083, 1083, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 0],
        [0, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 0],
        [0, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 0],
        [0, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 1083, 1083, 0],
        [0, 1083, 0, 0, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 0],
        [0, 1083, 0, 0, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083],
        [0, 1083, 0, 0, 0, 0, 0, 1083, 1083, 1083, 0, 1083, 1083, 1083, 0, 0, 1083, 1083, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 1083, 1083],
        [0, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 1083, 1083],
        [0, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 494],
        [0, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 1083, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 494],
        [0, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 0, 0, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 0, 0, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 0, 0, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 1083, 0, 0, 1083, 1083, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1083, 1083, 1083, 1083, 1083, 1083, 0, 0, 0, 0, 0, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1083, 0, 0, 0, 0, 0, 0, 0, 1083, 1083, 1083, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

    let collisions_map2_5 = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 541, 541, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 0, 0, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 1083, 1083, 1083, 0, 0, 0, 0, 0, 1083, 1083, 1083, 0, 0, 0, 0, 0, 0, 1083, 1083, 1083, 1083, 0],
        [0, 0, 0, 0, 0, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 0, 0, 0, 0, 0, 1083, 1083, 1083, 0, 0, 0, 0, 0, 0, 1083, 1083, 1083, 1083, 0],
        [0, 0, 0, 0, 0, 1083, 1083, 1083, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 0],
        [0, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 0],
        [0, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 0],
        [0, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 1083, 1083, 0],
        [0, 1083, 0, 0, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 0],
        [0, 1083, 0, 0, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083],
        [0, 1083, 0, 0, 0, 0, 0, 1083, 1083, 1083, 0, 1083, 1083, 1083, 0, 0, 1083, 1083, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 1083, 1083],
        [0, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 1083, 1083],
        [0, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 494],
        [0, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 1083, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 494],
        [0, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 0, 0, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 0, 0, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 0, 0, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 1083, 0, 0, 1083, 1083, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1083, 1083, 587, 587, 1083, 1083, 0, 0, 0, 0, 0, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1083, 0, 0, 0, 0, 0, 0, 0, 1083, 1083, 1083, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

    let collisions_map3 = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 1083, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 453, 453, 453, 1083],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1083, 1083, 0, 0, 0, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 0, 0, 0, 0, 1083, 1083, 1083, 1083, 1083, 1083, 0, 0, 0, 1083, 1083, 1083, 1083],
        [1083, 1083, 0, 0, 0, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 0, 0, 0, 0, 1083, 1083, 1083, 1083, 1083, 1083, 0, 0, 0, 1083, 1083, 1083, 1083],
        [1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 549, 549, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 0, 0, 0]
    ];

    let collisions_map4 = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 1083, 1083, 1083, 0, 0, 0, 0, 0, 1083, 1083, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 1083, 1083, 0, 0, 0, 453, 0, 0, 1083, 1083, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 1083, 1083, 0, 0, 0, 0, 0, 0, 0, 1083, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 0, 1083, 0, 0, 0, 0, 0, 0, 0, 1083, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1083, 1083, 1083, 1083, 1083, 77, 77, 1083, 1083, 1083, 1083, 1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

    let collisions_map5 = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083],
        [1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083],
        [1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083],
        [1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083],
        [1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083],
        [1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083],
        [1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083],
        [1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083],
        [1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083],
        [1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083],
        [1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083],
        [1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083],
        [1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083],
        [1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083],
        [1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083],
        [1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083],
        [1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083],
        [1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083],
        [1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083],
        [1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083],
        [1083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1083],
        [1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083, 1083]
    ];