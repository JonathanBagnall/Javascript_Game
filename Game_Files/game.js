

let canvas;
let context;

let fps_interval = 1000 / 30;
let now;
let then = Date.now();
let request_id;

let enemies = [];

let slime_killed = 0;
let goblin_killed = 0


let boss1_attack_counter = 0;
let sign_check = false;



let slime = {
    name: "slime",
    type: "slime",
    x: 50,
    y: 200,
    start_x: 50,
    start_y: 200,
    size: 16,
    sChange: 1,
    start_health: 3,
    health: 3,
    isDefeated: false,
    isSpawned: false,
    xSize: 16,
    ySize: 16
};

let goblin_Fanatic = {
    name: "goblin",
    type: "goblin",
    x: 70,
    y: 250,
    start_x: 70,
    start_y: 250,
    start_x2: 325,
    start_y2: 328,
    size: 16,
    sChange: 1,
    start_health: 5,
    health: 5,
    isDefeated: false,
    isSpawned: false,
    xSize: 16,
    ySize: 16
};

let goblin_Fanatic2 = {
    name: "goblin2",
    type: "goblin",
    x: 95,
    y: 400,
    start_x: 95,
    start_y: 400,
    start_x2: 186,
    start_y2: 242,
    size: 16,
    sChange: 1,
    start_health: 5,
    health: 5,
    isDefeated: false,
    isSpawned: false,
    xSize: 16,
    ySize: 16
};

let goblin_Fanatic3 = {
    type: "goblin",
    name: "goblin3",
    x: 240,
    y: 450,
    start_x: 240,
    start_y: 450,
    start_x2: 364,
    start_y2: 230,
    size: 16,
    sChange: 1,
    start_health: 5,
    health: 5,
    isDefeated: false,
    isSpawned: false,
    xSize: 16,
    ySize: 16
};

let boss1 = {
    name: "boss1",
    x: 250,
    y: 250,
    start_x: 250,
    start_y: 250,
    size: 32,
    sChange: 1,
    health: 10,
    isDefeated: false,
    isSpawned: false,
    attack_counter: 0,
    attacking: false
};

let map_one = new Image();
map_one.src = "static/maps/map1_CA2.png";
let map_two = new Image();
map_two.src = "static/maps/map2_CA2.png";
let map_two_5 = new Image();
map_two_5.src = "static/maps/map2.5_CA2.png";
let map_three = new Image();
map_three.src = "static/maps/map3_CA2.png";
let map_four = new Image();
map_four.src = "static/maps/map4_CA2.png";
let map_five = new Image();
map_five.src = "static/maps/map5_.png";



let element = document.getElementById('gameCanvas');
let current_collision = collisions_map1;

let has_boss_key = false;
let boss1_defeated = false;


let player = {
    x: 255,
    y: 326,
    size: 16,
    xChange: 4,
    yChange: 4,
    health: 6,
    max_health: 12,
    heartX: 0,
    heartY: 0

}



let player_moving = new Image();
player_moving.src = "static/game_sprites/Character_Run.png"

let player_attack = new Image();
player_attack.src = "static/game_sprites/Character_AttackSword1.png"

let slime_walk = new Image();
slime_walk.src = "static/game_sprites/Enemy_Slime_Walk.png"
let slime_animation_1 = 0

let goblin_animate = new Image();
goblin_animate.src = "static/game_sprites/GoblinFanaticIdleSide.png"
let goblin_Fanatic_animation = 0;
let goblin_Fanatic2_animation = 0;
let goblin_Fanatic3_animation = 0;



let heart = new Image();
heart.src = "static/game_sprites/life_hearts.png"

let npc = new Image();
npc.src = "static/game_sprites/NPC_1_a.png";


let current_map = map_one

let animationCounter = 0;
let currentAnimation = 0;
let animationSpeed = 10;

let moveLeft = false;
let moveRight = false;
let moveUp = false;
let moveDown = false;
let attacking = false;
let attackInProgress;
let lastButtonPressed = "up";
let talking = false;
let npc_check = false;

document.addEventListener("DOMContentLoaded", function () {
    canvas = document.getElementById("gameCanvas");
    context = canvas.getContext("2d");



    document.getElementById("gameCanvas").onwheel = function (event) {
        event.preventDefault();
    };

    document.getElementById("gameCanvas").onmousewheel = function (event) {
        event.preventDefault();
    };
    createStartButton();

    function createStartButton() {
        startButton = document.createElement("button");
        startButton.textContent = "Start";
        startButton.style.position = "absolute";
        startButton.style.top = "50%";
        startButton.style.left = "50%";
        startButton.style.transform = "translate(-50%, -50%)";
        startButton.style.backgroundColor = "green";
        startButton.style.color = "black";
        startButton.style.border = "2px solid black";
        startButton.style.padding = "10px 20px";
        startButton.style.cursor = "pointer";
        startButton.addEventListener("click", startGame);
        document.body.appendChild(startButton);
    }



    function startGame() {
        document.body.removeChild(startButton);
        init();
    }

});

function dialogue1() {
    dialogue_box = document.createElement("button");
    dialogue_box.textContent = "Find the key, by the sea, to kill the boss between the trees.(stand on the different coloured square)";
    dialogue_box.style.position = "absolute";
    dialogue_box.style.top = "50%";
    dialogue_box.style.left = "50%";
    dialogue_box.style.transform = "translate(-50%, -50%)";
    dialogue_box.style.backgroundColor = "green";
    dialogue_box.style.color = "black";
    dialogue_box.style.border = "2px solid black";
    dialogue_box.style.padding = "10px 20px";
    dialogue_box.style.cursor = "pointer";
    document.body.appendChild(dialogue_box);
}

function dialogue2() {
    dialogue_box = document.createElement("button");
    dialogue_box.textContent = "Killing three of any monster will earn you a heart!";
    dialogue_box.style.position = "absolute";
    dialogue_box.style.top = "50%";
    dialogue_box.style.left = "50%";
    dialogue_box.style.transform = "translate(-50%, -50%)";
    dialogue_box.style.backgroundColor = "green";
    dialogue_box.style.color = "black";
    dialogue_box.style.border = "2px solid black";
    dialogue_box.style.padding = "10px 20px";
    dialogue_box.style.cursor = "pointer";
    document.body.appendChild(dialogue_box);
}

function init() {
    window.addEventListener("keydown", activate, false);
    window.addEventListener("keyup", deactivate, false);


    load_assets([
       
        { "var": player_moving, "url": "static/game_sprites/Character_Run.png" },
        { "var": map_one, "url": "static/maps/map1_CA2.png" },
        { "var": map_two, "url": "static/maps/map2_CA2.png" },
        { "var": map_two_5, "url": "static/maps/map2.5_CA2.png" },
        { "var": map_three, "url": "static/maps/map3_CA2.png" },
        { "var": map_four, "url": "static/maps/map4_CA2.png" },
        { "var": slime_walk, "url": "static/game_sprites/Enemy_Slime_Walk.png" },
        { "var": goblin_animate, "url": "static/game_sprites/GoblinFanaticIdleSide.png" },
      
        { "var": npc, "url": "static/game_sprites/NPC_1_a.png" },
        { "var": heart, "url": "static/game_sprites/life_hearts.png" }



    ], map_1);
}

function test_boss() {
    current_collision = collisions_map5;
    current_map = map_five;
    has_boss_key = true;
    player.x = 250;
    element.style.backgroundImage = "url('static/maps/map5_.png')";
    map_5();
}

function map_1() {


    request_id = window.requestAnimationFrame(map_1);
    now = Date.now();
    let elapsed = now - then;

    if (elapsed <= fps_interval) {
        return;
    }

    next_to_npc();
    next_to_sign();
    then = now - (elapsed % fps_interval);
    if (!talking) {
        checkPlayerDamage();
        checkEnemyDamage();
        mapCheck(player.x, player.y, current_collision);
        drawPlayer();
        drawEnemies();

    }

}

function map_2() {


    request_id = window.requestAnimationFrame(map_2);
    now = Date.now();
    let elapsed = now - then;

    if (elapsed <= fps_interval) {
        return;
    }

    then = now - (elapsed % fps_interval);



    checkPlayerDamage();
    checkEnemyDamage();
    mapCheck(player.x, player.y, current_collision);
    drawPlayer();
    drawEnemies();




}

function map_2_5() {


    request_id = window.requestAnimationFrame(map_2_5);
    now = Date.now();
    let elapsed = now - then;

    if (elapsed <= fps_interval) {
        return;
    }

    then = now - (elapsed % fps_interval);



    checkPlayerDamage();
    checkEnemyDamage();
    mapCheck(player.x, player.y, current_collision);
    drawPlayer();
    drawEnemies();




}

function map_3() {


    request_id = window.requestAnimationFrame(map_3);
    now = Date.now();
    let elapsed = now - then;

    if (elapsed <= fps_interval) {
        return;
    }

    then = now - (elapsed % fps_interval);



    checkPlayerDamage();
    checkEnemyDamage();
    mapCheck(player.x, player.y, current_collision);
    drawPlayer();
    drawEnemies();




}

function map_4() {


    request_id = window.requestAnimationFrame(map_4);
    now = Date.now();
    let elapsed = now - then;

    if (elapsed <= fps_interval) {
        return;
    }

    then = now - (elapsed % fps_interval);


    checkPlayerDamage();
    keyCheck(player.x, player.y, collisions_map4);


    checkEnemyDamage();
    mapCheck(player.x, player.y, current_collision);
    drawPlayer();
    drawEnemies();




}

function map_5() {


    request_id = window.requestAnimationFrame(map_5);
    now = Date.now();
    let elapsed = now - then;

    if (elapsed <= fps_interval) {
        return;
    }

    then = now - (elapsed % fps_interval);


    if (has_boss_key === false) {
        keyCheck(player.x, player.y, collisions_map5);
    }
    checkPlayerDamage();
    checkEnemyDamage();
    drawPlayer();
    drawEnemies();
    mapCheck();





}


function activate(event) {
    event.preventDefault();
    let key = event.key;
    if (key === "ArrowLeft") {
        moveLeft = true;

    } else if (key === "ArrowRight") {
        moveRight = true;

    } else if (key === "ArrowDown") {
        moveDown = true;

    } else if (key === "ArrowUp") {
        moveUp = true;

    }
}

function deactivate(event) {
    event.preventDefault();
    let key = event.key;
    if (key === "ArrowLeft") {
        lastButtonPressed = "left";
        moveLeft = false;
    } else if (key === "ArrowRight") {
        lastButtonPressed = "right";
        moveRight = false;
    } else if (key === "ArrowDown") {
        lastButtonPressed = "down";
        moveDown = false;
    } else if (key === "ArrowUp") {
        moveUp = false;
        lastButtonPressed = "up";
    } else if (key === "z" && !attacking && !attackInProgress) {
        attacking = true;
        attackInProgress = true;
    } else if (key === " " && npc_check === true && !talking) {
        talking = true;
        dialogue1();
        npc_check = false;


    } else if (key === " " && sign_check === true && !talking) {
        talking = true;
        dialogue2();
        sign_check = false;


    }
    
    else if (key === " " && talking === true) {
        talking = false;
        document.body.removeChild(dialogue_box);
    }
}



function randint(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}


//FUNCTION FOR COLLISIONS

function collision(x, y, map) {
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            if (map[i][j] === 1083) {
                if (x <= j * 16 + 16 &&
                    x + 16 >= j * 16 &&
                    y + 16 <= i * 16 + 16 &&
                    y + 16 >= i * 16) {
                    return true;
                }
            }
        }
    }
    return false;
}
//END OF COLLISION FUNCTION

// FIRST BOSS KEY CHECK
function keyCheck(x, y, map) {
    if (!boss1_defeated) {
        for (let i = 0; i < map.length; i++) {
            for (let j = 0; j < map[i].length; j++) {
                if (map[i][j] === 453) {
                    if (x <= j * 16 + 16 &&
                        x + 16 >= j * 16 &&
                        y + 16 <= i * 16 + 16 &&
                        y + 16 >= i * 16) {
                        has_boss_key = true;

                    }
                }
            }
        }
    }
}
//END OF KEY CHECK

function next_to_npc() {
    if (player.x <= 232 &&
        player.x >= 200 &&
        player.y <= 332 &&
        player.y >= 300) {
        npc_check = true;
    }
    else {
        npc_check = false;
    }

}

function next_to_sign() {
    if (player.x <= 228 &&
        player.x >= 212 &&
        player.y <= 212 &&
        player.y >= 196) {
        sign_check = true;
    }
    else {
        sign_check = false;
    }

}

//MAP SWITCHING FUNCTIONS

function mapCheck(x, y, map) {
    if (current_map === map_one && !has_boss_key) {
        for (let i = 0; i < map.length; i++) {
            for (let j = 0; j < map[i].length; j++) {
                if (map[i][j] === 1672) {
                    if (x <= j * 16 + 16 &&
                        x + 16 >= j * 16 &&
                        y + 16 <= i * 16 + 16 &&
                        y + 16 >= i * 16) {
                        player.x = 479;
                        player.y = 354;
                        element.style.backgroundImage = "url('static/maps/map2_CA2.png')";
                        current_map = map_two;
                        current_collision = collisions_map2;
                        for (let key in enemies) {
                            let enemy = enemies[key];
                            if (enemy.isDefeated === true) {
                                enemy.isDefeated = false;
                            }
                            
                            enemy.x = enemy.start_x2;
                            enemy.y = enemy.start_y2;
                            enemy.health = enemy.start_health;
                        }

                        map_2();
                    }
                }
            }
        }
    } else if (current_map === map_one && has_boss_key) {
        for (let i = 0; i < map.length; i++) {
            for (let j = 0; j < map[i].length; j++) {
                if (map[i][j] === 1672) {
                    if (x <= j * 16 + 16 &&
                        x + 16 >= j * 16 &&
                        y + 16 <= i * 16 + 16 &&
                        y + 16 >= i * 16) {
                        player.x = 479;
                        player.y = 354;
                        element.style.backgroundImage = "url('static/maps/map2.5_CA2.png')";
                        current_map = map_two_5;
                        current_collision = collisions_map2_5;
                        for (let key in enemies) {
                            let enemy = enemies[key];
                            if (enemy.isDefeated === true) {
                                enemy.isDefeated = false;
                            }
                            
                            enemy.x = enemy.start_x2;
                            enemy.y = enemy.start_y2;
                            enemy.health = enemy.start_health;
                        }

                        map_2_5();
                    }
                }
            }
        }
    }
    else if (current_map === map_two) {
        for (let i = 0; i < map.length; i++) {
            for (let j = 0; j < map[i].length; j++) {
                if (map[i][j] === 494) {
                    if (x <= j * 16 + 16 &&
                        x + 16 >= j * 16 &&
                        y + 16 <= i * 16 + 16 &&
                        y + 16 >= i * 16) {
                        player.x = 24;
                        player.y = 351;
                        element.style.backgroundImage = "url('static/maps/map1_CA2.png')";
                        current_map = map_one;
                        current_collision = collisions_map1;
                        for (let key in enemies) {
                            let enemy = enemies[key];
                            if (enemy.isDefeated === true) {
                                enemy.isDefeated = false;
                            }
                            enemy.x = enemy.start_x;
                            enemy.y = enemy.start_y;
                            enemy.health = enemy.start_health;
                        }

                        map_1();
                    }
                } else if (map[i][j] === 541) {
                    if (x <= j * 16 + 16 &&
                        x + 16 >= j * 16 &&
                        y + 16 <= i * 16 + 16 &&
                        y + 16 >= i * 16) {
                        player.x = 265;
                        player.y = 476;
                        element.style.backgroundImage = "url('static/maps/map3_CA2.png')";
                        current_map = map_three;
                        current_collision = collisions_map3;
                        for (let key in enemies) {
                            let enemy = enemies[key];
                            if (enemy.isDefeated === true) {
                                enemy.isDefeated = false;
                            }
                            enemy.x = enemy.start_x;
                            enemy.y = enemy.start_y;
                            enemy.health = enemy.start_health;
                        }

                        map_3();
                    }
                }
            }
        }
    } else if (current_map === map_two_5) {
        for (let i = 0; i < map.length; i++) {
            for (let j = 0; j < map[i].length; j++) {
                if (map[i][j] === 494) {
                    if (x <= j * 16 + 16 &&
                        x + 16 >= j * 16 &&
                        y + 16 <= i * 16 + 16 &&
                        y + 16 >= i * 16) {
                        player.x = 24;
                        player.y = 351;
                        element.style.backgroundImage = "url('static/maps/map1_CA2.png')";
                        current_map = map_one;
                        current_collision = collisions_map1;
                        for (let key in enemies) {
                            let enemy = enemies[key];
                            if (enemy.isDefeated === true) {
                                enemy.isDefeated = false;
                            }
                            enemy.x = enemy.start_x;
                            enemy.y = enemy.start_y;
                            enemy.health = enemy.start_health;
                        }

                        map_1();
                    }
                } else if (map[i][j] === 541) {
                    if (x <= j * 16 + 16 &&
                        x + 16 >= j * 16 &&
                        y + 16 <= i * 16 + 16 &&
                        y + 16 >= i * 16) {
                        player.x = 265;
                        player.y = 476;
                        element.style.backgroundImage = "url('static/maps/map3_CA2.png')";
                        current_map = map_three;
                        current_collision = collisions_map3;
                        for (let key in enemies) {
                            let enemy = enemies[key];
                            if (enemy.isDefeated === true) {
                                enemy.isDefeated = false;
                            }
                            enemy.x = enemy.start_x;
                            enemy.y = enemy.start_y;
                            enemy.health = enemy.start_health;
                        }

                        map_3();
                    }
                } else if (map[i][j] === 587) {
                    if (x <= j * 16 + 16 &&
                        x + 16 >= j * 16 &&
                        y + 16 <= i * 16 + 16 &&
                        y + 16 >= i * 16) {
                        player.x = 265;
                        player.y = 476;
                        element.style.backgroundImage = "url('static/maps/map5_.png')";
                        current_map = map_five;
                        current_collision = collisions_map5;
                        for (let key in enemies) {
                            let enemy = enemies[key];
                            if (enemy.isDefeated === true) {
                                enemy.isDefeated = false;
                            }
                            enemy.x = enemy.start_x;
                            enemy.y = enemy.start_y;
                            enemy.health = enemy.start_health;
                        }

                        map_5();
                    }
                }
            }
        }
    }
    else if (current_map === map_three && has_boss_key === false) {
        for (let i = 0; i < map.length; i++) {
            for (let j = 0; j < map[i].length; j++) {
                if (map[i][j] === 549) {
                    if (x <= j * 16 + 16 &&
                        x + 16 >= j * 16 &&
                        y + 16 <= i * 16 + 16 &&
                        y + 16 >= i * 16) {
                        player.x = 264;
                        player.y = 175;
                        element.style.backgroundImage = "url('static/maps/map2_CA2.png')";
                        current_map = map_two;
                        current_collision = collisions_map2;
                        for (let key in enemies) {
                            let enemy = enemies[key];
                            if (enemy.isDefeated === true) {
                                enemy.isDefeated = false;
                            }
                           
                            enemy.x = enemy.start_x2;
                            enemy.y = enemy.start_y2;
                            enemy.health = enemy.start_health;
                        }

                        map_2();
                    }
                } else if (map[i][j] === 453) {
                    if (x <= j * 16 + 16 &&
                        x + 16 >= j * 16 &&
                        y + 16 <= i * 16 + 16 &&
                        y + 16 >= i * 16) {
                        player.x = 230;
                        player.y = 480;
                        element.style.backgroundImage = "url('static/maps/map4_CA2.png')";
                        current_map = map_four;
                        current_collision = collisions_map4;
                        for (let key in enemies) {
                            let enemy = enemies[key];
                            if (enemy.isDefeated === true) {
                                enemy.isDefeated = false;
                            }
                            enemy.x = enemy.start_x;
                            enemy.y = enemy.start_y;
                            enemy.health = enemy.start_health;
                        }

                        map_4();
                    }
                }
            }
        }
    } else if (current_map === map_three && has_boss_key === true) {
        for (let i = 0; i < map.length; i++) {
            for (let j = 0; j < map[i].length; j++) {
                if (map[i][j] === 549) {
                    if (x <= j * 16 + 16 &&
                        x + 16 >= j * 16 &&
                        y + 16 <= i * 16 + 16 &&
                        y + 16 >= i * 16) {
                        player.x = 264;
                        player.y = 175;
                        element.style.backgroundImage = "url('static/maps/map2.5_CA2.png')";
                        current_map = map_two_5;
                        current_collision = collisions_map2_5;
                        for (let key in enemies) {
                            let enemy = enemies[key];
                            if (enemy.isDefeated === true) {
                                enemy.isDefeated = false;
                            }
                           

                            enemy.x = enemy.start_x2;
                            enemy.y = enemy.start_y2;

                            enemy.health = enemy.start_health;
                        }

                        map_2_5();
                    }
                } else if (map[i][j] === 453) {
                    if (x <= j * 16 + 16 &&
                        x + 16 >= j * 16 &&
                        y + 16 <= i * 16 + 16 &&
                        y + 16 >= i * 16) {
                        player.x = 230;
                        player.y = 480;
                        element.style.backgroundImage = "url('static/maps/map4_CA2.png')";
                        current_map = map_four;
                        current_collision = collisions_map4;
                        for (let key in enemies) {
                            let enemy = enemies[key];
                            if (enemy.isDefeated === true) {
                                enemy.isDefeated = false;
                            }
                            enemy.x = enemy.start_x;
                            enemy.y = enemy.start_y;
                            enemy.health = enemy.start_health;
                        }

                        map_4();
                    }
                }
            }
        }
    }
    else if (current_map === map_four) {
        for (let i = 0; i < map.length; i++) {
            for (let j = 0; j < map[i].length; j++) {
                if (map[i][j] === 77) {
                    if (x <= j * 16 + 16 &&
                        x + 16 >= j * 16 &&
                        y + 16 <= i * 16 + 16 &&
                        y + 16 >= i * 16) {
                        player.x = 463;
                        player.y = 385;
                        element.style.backgroundImage = "url('static/maps/map3_CA2.png')";
                        current_map = map_three;
                        current_collision = collisions_map3;
                        for (let key in enemies) {
                            let enemy = enemies[key];
                            if (enemy.isDefeated === true) {
                                enemy.isDefeated = false;
                            }
                            enemy.x = enemy.start_x;
                            enemy.y = enemy.start_y;
                            enemy.health = enemy.start_health;
                        }

                        map_3();
                    }
                } else if (map[i][j] === 453 && boss1_defeated === false) {
                    if (x <= j * 16 + 16 &&
                        x + 16 >= j * 16 &&
                        y + 16 <= i * 16 + 16 &&
                        y + 16 >= i * 16) {
                        has_boss_key = true;



                    }
                }
            }
        }
    } else if (current_map === map_five) {
        if (boss1.isDefeated) {
            current_map = map_two;
            boss1_defeated = true;
            player.x = 145;
            player.y = 465;
            has_boss_key = false;
            element.style.backgroundImage = "url('static/maps/map2_CA2.png')";
            current_collision = collisions_map2;
            for (let key in enemies) {
                let enemy = enemies[key];
                if (enemy.isDefeated === true) {
                    enemy.isDefeated = false;
                }
                enemy.x = enemy.start_x;
                enemy.y = enemy.start_y;
                enemy.health = enemy.start_health;
            }
            map_2();

        }
    }


    return;
}

//DRAW PLAYER FUNCTION



function drawPlayer() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    let speed = 1;


    for (i = 0; i < player.health; i++) {
        context.drawImage(heart, 0, 0, 420, 350, player.heartX, player.heartY, 32, 32);
        player.heartX += 32;

    }
    player.heartX = 0;



    if (moveLeft && !collision(player.x - player.xChange, player.y, current_collision)) {

        player.x -= player.xChange;
        if (currentAnimation == 0) {
            context.drawImage(player_moving, 0, 48, 16, 16, player.x, player.y, 16, 16);
        }
        else if (currentAnimation == 1) {
            context.drawImage(player_moving, 16, 48, 16, 16, player.x, player.y, 16, 16);
        } else if (currentAnimation == 2) {
            context.drawImage(player_moving, 32, 48, 16, 16, player.x, player.y, 16, 16);
        } else if (currentAnimation == 3) {
            context.drawImage(player_moving, 48, 48, 16, 16, player.x, player.y, 16, 16);
        } else if (currentAnimation == 4) {
            context.drawImage(player_moving, 64, 48, 16, 16, player.x, player.y, 16, 16);
        } else if (currentAnimation == 5) {
            context.drawImage(player_moving, 80, 48, 16, 16, player.x, player.y, 16, 16);
        }
        if (animationCounter >= 6) {
            currentAnimation++;
            animationCounter = 0;
            if (currentAnimation > 5) {
                currentAnimation = 0;
            }
        }

    }


    else if (moveRight && !collision(player.x + player.xChange, player.y, current_collision)) {

        player.x += player.xChange;
        if (currentAnimation == 0) {
            context.drawImage(player_moving, 0, 16, 16, 16, player.x, player.y, 16, 16);
        } else if (currentAnimation == 1) {
            context.drawImage(player_moving, 16, 16, 16, 16, player.x, player.y, 16, 16);
        } else if (currentAnimation == 2) {
            context.drawImage(player_moving, 32, 16, 16, 16, player.x, player.y, 16, 16);
        } else if (currentAnimation == 3) {
            context.drawImage(player_moving, 48, 16, 16, 16, player.x, player.y, 16, 16);
        } else if (currentAnimation == 4) {
            context.drawImage(player_moving, 64, 16, 16, 16, player.x, player.y, 16, 16);
        } else if (currentAnimation == 5) {
            context.drawImage(player_moving, 80, 16, 16, 16, player.x, player.y, 16, 16);
        }
        if (animationCounter >= 6) {
            currentAnimation++;
            animationCounter = 0;
            if (currentAnimation > 5) {
                currentAnimation = 0;
            }
        }

    }
    else if (moveUp && !collision(player.x, player.y - player.yChange, current_collision)) {

        player.y -= player.yChange;
        if (currentAnimation == 0) {
            context.drawImage(player_moving, 0, 32, 16, 16, player.x, player.y, 16, 16);
        } else if (currentAnimation == 1) {
            context.drawImage(player_moving, 16, 32, 16, 16, player.x, player.y, 16, 16);
        } else if (currentAnimation == 2) {
            context.drawImage(player_moving, 32, 32, 16, 16, player.x, player.y, 16, 16);
        } else if (currentAnimation == 3) {
            context.drawImage(player_moving, 48, 32, 16, 16, player.x, player.y, 16, 16);
        } else if (currentAnimation == 4) {
            context.drawImage(player_moving, 64, 32, 16, 16, player.x, player.y, 16, 16);
        } else if (currentAnimation == 5) {
            context.drawImage(player_moving, 80, 32, 16, 16, player.x, player.y, 16, 16);
        }

        if (animationCounter >= 6) {
            currentAnimation++;
            animationCounter = 0;
            if (currentAnimation > 5) {
                currentAnimation = 0;
            }
        }

    }
    else if (moveDown && !collision(player.x, player.y + player.yChange, current_collision)) {

        player.y += player.yChange;
        if (currentAnimation == 0) {
            context.drawImage(player_moving, 0, 0, 16, 16, player.x, player.y, 16, 16);
        } else if (currentAnimation == 1) {
            context.drawImage(player_moving, 16, 0, 16, 16, player.x, player.y, 16, 16);
        } else if (currentAnimation == 2) {
            context.drawImage(player_moving, 32, 0, 16, 16, player.x, player.y, 16, 16);
        } else if (currentAnimation == 3) {
            context.drawImage(player_moving, 48, 0, 16, 16, player.x, player.y, 16, 16);
        } else if (currentAnimation == 4) {
            context.drawImage(player_moving, 64, 0, 16, 16, player.x, player.y, 16, 16);
        } else if (currentAnimation == 5) {
            context.drawImage(player_moving, 80, 0, 16, 16, player.x, player.y, 16, 16);
        }

        if (animationCounter >= 6) {
            currentAnimation++;
            animationCounter = 0;
            if (currentAnimation > 5) {
                currentAnimation = 0;
            }
        }

    }


    else {
        context.drawImage(player_moving, 0, 0, 16, 16, player.x, player.y, 16, 16);
        
    }

    if (attackInProgress) {
        let attackSize = 48;
        if (lastButtonPressed === "down") {
            if (currentAnimation == 0) {
                context.drawImage(player_attack, 0, 0, 48, 48, player.x - 16, player.y - 16, attackSize, attackSize);
            } else if (currentAnimation == 1) {
                context.drawImage(player_attack, 48, 0, 48, 48, player.x - 16, player.y - 16, attackSize, attackSize);
            } else if (currentAnimation == 2) {
                context.drawImage(player_attack, 96, 0, 48, 48, player.x - 16, player.y - 16, attackSize, attackSize);
            } else if (currentAnimation == 3) {
                context.drawImage(player_attack, 144, 0, 48, 48, player.x - 16, player.y - 16, attackSize, attackSize);
            }
            if (animationCounter >= 5) {
                currentAnimation++;
                animationCounter = 0;
                if (currentAnimation > 3) {
                    currentAnimation = 0;
                    attackInProgress = false;
                    attacking = false;
                }
            }
        } else if (lastButtonPressed === "right") {
            if (currentAnimation == 0) {
                context.drawImage(player_attack, 0, 48, 48, 48, player.x - 16, player.y - 16, attackSize, attackSize);
            } else if (currentAnimation == 1) {
                context.drawImage(player_attack, 48, 48, 48, 48, player.x - 16, player.y - 16, attackSize, attackSize);
            } else if (currentAnimation == 2) {
                context.drawImage(player_attack, 96, 48, 48, 48, player.x - 16, player.y - 16, attackSize, attackSize);
            } else if (currentAnimation == 3) {
                context.drawImage(player_attack, 144, 48, 48, 48, player.x - 16, player.y - 16, attackSize, attackSize);
            }
            if (animationCounter >= 5) {
                currentAnimation++;
                animationCounter = 0;
                if (currentAnimation > 3) {
                    currentAnimation = 0;
                    attackInProgress = false;
                    attacking = false;
                }
            }
        } else if (lastButtonPressed === "up") {
            if (currentAnimation == 0) {
                context.drawImage(player_attack, 0, 96, 48, 48, player.x - 16, player.y - 16, attackSize, attackSize);
            } else if (currentAnimation == 1) {
                context.drawImage(player_attack, 48, 96, 48, 48, player.x - 16, player.y - 16, attackSize, attackSize);
            } else if (currentAnimation == 2) {
                context.drawImage(player_attack, 96, 96, 48, 48, player.x - 16, player.y - 16, attackSize, attackSize);
            } else if (currentAnimation == 3) {
                context.drawImage(player_attack, 144, 96, 48, 48, player.x - 16, player.y - 16, attackSize, attackSize);
            }
            if (animationCounter >= 5) {
                currentAnimation++;
                animationCounter = 0;
                if (currentAnimation > 3) {
                    currentAnimation = 0;
                    attackInProgress = false;
                    attacking = false;
                }
            }
        } else if (lastButtonPressed === "left") {
            if (currentAnimation == 0) {
                context.drawImage(player_attack, 0, 144, 48, 48, player.x - 16, player.y - 16, attackSize, attackSize);
            } else if (currentAnimation == 1) {
                context.drawImage(player_attack, 48, 144, 48, 48, player.x - 16, player.y - 16, attackSize, attackSize);
            } else if (currentAnimation == 2) {
                context.drawImage(player_attack, 96, 144, 48, 48, player.x - 16, player.y - 16, attackSize, attackSize);
            } else if (currentAnimation == 3) {
                context.drawImage(player_attack, 144, 144, 48, 48, player.x - 16, player.y - 16, attackSize, attackSize);
            }
            if (animationCounter >= 5) {
                currentAnimation++;
                animationCounter = 0;
                if (currentAnimation > 3) {
                    currentAnimation = 0;
                    attackInProgress = false;
                    attacking = false;
                }
            }
        }

    }

    animationCounter++;

}


//END OF DRAW PLAYER FUNCTION




//LOAD ASSETS FUNCTION

function load_assets(assets, callback) {
    let num_assets = assets.length;
    let loaded = function () {
        console.log("loaded");
        num_assets = num_assets - 1;
        if (num_assets === 0) {
            callback();



        }
    };

    for (let asset of assets) {
        let element = asset.var;
        if (element instanceof HTMLImageElement) {
            console.log("img");
            element.addEventListener("load", loaded, false);



        }
        else if (element instanceof HTMLAudioElement) {
            console.log("audio");
            element.addEventListener("canplaythrough", loaded, false);
        }
        element.src = asset.url;
    }
}

//END OF ASSETS FUNCTION

function drawEnemies() {
    if (current_map === map_five) {
        if (!boss1.isDefeated) {
            boss1.isDefeated = false;
            boss1.isSpawned = true;
            enemies.push(boss1);






            let distanceX = boss1.x + (boss1.size / 2) - (player.x + player.size);
            let distanceY = (boss1.y + boss1.size) - (player.y + player.size);

            if (distanceX < -24) {
                boss1.x += boss1.sChange;
            } else if (distanceX > 16) {
                boss1.x -= boss1.sChange;
            }

            if (distanceY < -16) {
                boss1.y += boss1.sChange;
            } else if (distanceY > 16) {
                boss1.y -= boss1.sChange;
            }




            if (goblin_Fanatic_animation === 0) {
                context.drawImage(goblin_animate, 0, 0, 16, 16, boss1.x, boss1.y, 32, 32);
            } else if (goblin_Fanatic_animation === 1) {
                context.drawImage(goblin_animate, 16, 0, 16, 16, boss1.x, boss1.y, 32, 32);
            } else if (goblin_Fanatic_animation === 2) {
                context.drawImage(goblin_animate, 32, 0, 16, 16, boss1.x, boss1.y, 32, 32);
            } else if (goblin_Fanatic_animation === 3) {
                context.drawImage(goblin_animate, 48, 0, 16, 16, boss1.x, boss1.y, 32, 32);
            }

            goblin_Fanatic_animation++;


            if (goblin_Fanatic_animation > 3) {
                goblin_Fanatic_animation = 0;
            }
        }



    }


    if (current_map === map_one) {
        enemies.push(slime);
        enemies.push(goblin_Fanatic);
        enemies.push(goblin_Fanatic2);
        enemies.push(goblin_Fanatic3);


        context.drawImage(npc, 0, 0, 16, 16, 200, 300, 16, 16)

        if (!slime.isDefeated) {
            slime.isSpawned = true;

            let distanceX = slime.x - player.x;
            let distanceY = slime.y - player.y;


            if (Math.abs(distanceX) <= 48 && Math.abs(distanceY) <= 48) {

                if (distanceX < 0) {
                    slime.x += slime.sChange;
                } else if (distanceX > 0) {
                    slime.x -= slime.sChange;
                }

                if (distanceY < 0) {
                    slime.y += slime.sChange;
                } else if (distanceY > 0) {
                    slime.y -= slime.sChange;
                }
            } else {

                if (slime.x <= slime.start_x + 48 && slime.y === slime.start_y) {
                    slime.x += slime.sChange;
                } else if (slime.x >= slime.start_x + 48 && slime.y <= slime.start_y + 48) {
                    slime.y += slime.sChange;
                } else if (slime.y >= slime.start_y + 48 && slime.x > slime.start_x) {
                    slime.x -= slime.sChange;
                } else if (slime.y > slime.start_y) {
                    slime.y -= slime.sChange;
                }
            }


            if (slime_animation_1 === 0) {
                context.drawImage(slime_walk, 0, 0, 16, 16, slime.x, slime.y, 16, 16);
            } else if (slime_animation_1 === 1) {
                context.drawImage(slime_walk, 16, 0, 16, 16, slime.x, slime.y, 16, 16);
            } else if (slime_animation_1 === 2) {
                context.drawImage(slime_walk, 32, 0, 16, 16, slime.x, slime.y, 16, 16);
            } else if (slime_animation_1 === 3) {
                context.drawImage(slime_walk, 48, 0, 16, 16, slime.x, slime.y, 16, 16);
            } else if (slime_animation_1 === 4) {
                context.drawImage(slime_walk, 64, 0, 16, 16, slime.x, slime.y, 16, 16);
            } else if (slime_animation_1 === 5) {
                context.drawImage(slime_walk, 80, 0, 16, 16, slime.x, slime.y, 16, 16);
            }

            slime_animation_1 += 1;
            if (slime_animation_1 > 5) {
                slime_animation_1 = 0;
            }
        }

        if (!goblin_Fanatic2.isDefeated) {
            goblin_Fanatic2.isSpawned = true;



            let distanceX = goblin_Fanatic2.x - player.x;
            let distanceY = goblin_Fanatic2.y - player.y;
            let returnX = goblin_Fanatic2.x - goblin_Fanatic2.start_x;
            let returnY = goblin_Fanatic2.y - goblin_Fanatic2.start_y;

            if (Math.abs(distanceX) <= 64 && Math.abs(distanceY) <= 64) {

                if (distanceX < 0) {
                    goblin_Fanatic2.x += goblin_Fanatic2.sChange;
                } else if (distanceX > 0) {
                    goblin_Fanatic2.x -= goblin_Fanatic2.sChange;
                }

                if (distanceY < 0) {
                    goblin_Fanatic2.y += goblin_Fanatic2.sChange;
                } else if (distanceY > 0) {
                    goblin_Fanatic2.y -= goblin_Fanatic2.sChange;
                }
            } else {
                if (returnX < 0) {
                    goblin_Fanatic2.x += goblin_Fanatic2.sChange;
                } else if (returnX > 0) {
                    goblin_Fanatic2.x -= goblin_Fanatic2.sChange;
                }

                if (returnY < 0) {
                    goblin_Fanatic2.y += goblin_Fanatic2.sChange;
                } else if (returnY > 0) {
                    goblin_Fanatic2.y -= goblin_Fanatic2.sChange;
                }
            }

            if (goblin_Fanatic2_animation === 0) {
                context.drawImage(goblin_animate, 0, 0, 16, 16, goblin_Fanatic2.x, goblin_Fanatic2.y, 16, 16);
            } else if (goblin_Fanatic_animation === 1) {
                context.drawImage(goblin_animate, 16, 0, 16, 16, goblin_Fanatic2.x, goblin_Fanatic2.y, 16, 16);
            } else if (goblin_Fanatic_animation === 2) {
                context.drawImage(goblin_animate, 32, 0, 16, 16, goblin_Fanatic2.x, goblin_Fanatic2.y, 16, 16);
            } else if (goblin_Fanatic_animation === 3) {
                context.drawImage(goblin_animate, 48, 0, 16, 16, goblin_Fanatic2.x, goblin_Fanatic2.y, 16, 16);
            }

            goblin_Fanatic2_animation++;
            if (goblin_Fanatic2_animation > 3) {
                goblin_Fanatic2_animation = 0;
            }
        }

        if (!goblin_Fanatic3.isDefeated) {
            goblin_Fanatic3.isSpawned = true;



            let distanceX = goblin_Fanatic3.x - player.x;
            let distanceY = goblin_Fanatic3.y - player.y;
            let returnX = goblin_Fanatic3.x - goblin_Fanatic3.start_x;
            let returnY = goblin_Fanatic3.y - goblin_Fanatic3.start_y;

            if (Math.abs(distanceX) <= 64 && Math.abs(distanceY) <= 64) {

                if (distanceX < 0) {
                    goblin_Fanatic3.x += goblin_Fanatic3.sChange;
                } else if (distanceX > 0) {
                    goblin_Fanatic3.x -= goblin_Fanatic3.sChange;
                }

                if (distanceY < 0) {
                    goblin_Fanatic3.y += goblin_Fanatic3.sChange;
                } else if (distanceY > 0) {
                    goblin_Fanatic3.y -= goblin_Fanatic3.sChange;
                }
            } else {
                if (returnX < 0) {
                    goblin_Fanatic3.x += goblin_Fanatic3.sChange;
                } else if (returnX > 0) {
                    goblin_Fanatic3.x -= goblin_Fanatic3.sChange;
                }

                if (returnY < 0) {
                    goblin_Fanatic3.y += goblin_Fanatic3.sChange;
                } else if (returnY > 0) {
                    goblin_Fanatic3.y -= goblin_Fanatic3.sChange;
                }
            }

            if (goblin_Fanatic3_animation === 0) {
                context.drawImage(goblin_animate, 0, 0, 16, 16, goblin_Fanatic3.x, goblin_Fanatic3.y, 16, 16);
            } else if (goblin_Fanatic_animation === 1) {
                context.drawImage(goblin_animate, 16, 0, 16, 16, goblin_Fanatic3.x, goblin_Fanatic3.y, 16, 16);
            } else if (goblin_Fanatic_animation === 2) {
                context.drawImage(goblin_animate, 32, 0, 16, 16, goblin_Fanatic3.x, goblin_Fanatic3.y, 16, 16);
            } else if (goblin_Fanatic_animation === 3) {
                context.drawImage(goblin_animate, 48, 0, 16, 16, goblin_Fanatic3.x, goblin_Fanatic3.y, 16, 16);
            }

            goblin_Fanatic3_animation++;
            if (goblin_Fanatic3_animation > 3) {
                goblin_Fanatic3_animation = 0;
            }
        }

        if (!goblin_Fanatic.isDefeated) {
            goblin_Fanatic.isSpawned = true;

            let distanceX = goblin_Fanatic.x - player.x;
            let distanceY = goblin_Fanatic.y - player.y;
            let returnX = goblin_Fanatic.x - goblin_Fanatic.start_x;
            let returnY = goblin_Fanatic.y - goblin_Fanatic.start_y;

            if (Math.abs(distanceX) <= 64 && Math.abs(distanceY) <= 64) {

                if (distanceX < 0) {
                    goblin_Fanatic.x += goblin_Fanatic.sChange;
                } else if (distanceX > 0) {
                    goblin_Fanatic.x -= goblin_Fanatic.sChange;
                }

                if (distanceY < 0) {
                    goblin_Fanatic.y += goblin_Fanatic.sChange;
                } else if (distanceY > 0) {
                    goblin_Fanatic.y -= goblin_Fanatic.sChange;
                }
            } else {
                if (returnX < 0) {
                    goblin_Fanatic.x += goblin_Fanatic.sChange;
                } else if (returnX > 0) {
                    goblin_Fanatic.x -= goblin_Fanatic.sChange;
                }

                if (returnY < 0) {
                    goblin_Fanatic.y += goblin_Fanatic.sChange;
                } else if (returnY > 0) {
                    goblin_Fanatic.y -= goblin_Fanatic.sChange;
                }
            }

            if (goblin_Fanatic_animation === 0) {
                context.drawImage(goblin_animate, 0, 0, 16, 16, goblin_Fanatic.x, goblin_Fanatic.y, 16, 16);
            } else if (goblin_Fanatic_animation === 1) {
                context.drawImage(goblin_animate, 16, 0, 16, 16, goblin_Fanatic.x, goblin_Fanatic.y, 16, 16);
            } else if (goblin_Fanatic_animation === 2) {
                context.drawImage(goblin_animate, 32, 0, 16, 16, goblin_Fanatic.x, goblin_Fanatic.y, 16, 16);
            } else if (goblin_Fanatic_animation === 3) {
                context.drawImage(goblin_animate, 48, 0, 16, 16, goblin_Fanatic.x, goblin_Fanatic.y, 16, 16);
            }

            goblin_Fanatic_animation++;
            if (goblin_Fanatic_animation > 3) {
                goblin_Fanatic_animation = 0;
            }
        }
    }
    if (current_map === map_two) {
        
        enemies.push(goblin_Fanatic);
        enemies.push(goblin_Fanatic2);
        enemies.push(goblin_Fanatic3);


        if (!goblin_Fanatic2.isDefeated) {
            goblin_Fanatic2.isSpawned = true;



            let distanceX = goblin_Fanatic2.x - player.x;
            let distanceY = goblin_Fanatic2.y - player.y;
            let returnX = goblin_Fanatic2.x - goblin_Fanatic2.start_x2;
            let returnY = goblin_Fanatic2.y - goblin_Fanatic2.start_y2;

            if (Math.abs(distanceX) <= 64 && Math.abs(distanceY) <= 64) {

                if (distanceX < 0) {
                    goblin_Fanatic2.x += goblin_Fanatic2.sChange;
                } else if (distanceX > 0) {
                    goblin_Fanatic2.x -= goblin_Fanatic2.sChange;
                }

                if (distanceY < 0) {
                    goblin_Fanatic2.y += goblin_Fanatic2.sChange;
                } else if (distanceY > 0) {
                    goblin_Fanatic2.y -= goblin_Fanatic2.sChange;
                }
            } else {
                if (returnX < 0) {
                    goblin_Fanatic2.x += goblin_Fanatic2.sChange;
                } else if (returnX > 0) {
                    goblin_Fanatic2.x -= goblin_Fanatic2.sChange;
                }

                if (returnY < 0) {
                    goblin_Fanatic2.y += goblin_Fanatic2.sChange;
                } else if (returnY > 0) {
                    goblin_Fanatic2.y -= goblin_Fanatic2.sChange;
                }
            }

            if (goblin_Fanatic2_animation === 0) {
                context.drawImage(goblin_animate, 0, 0, 16, 16, goblin_Fanatic2.x, goblin_Fanatic2.y, 16, 16);
            } else if (goblin_Fanatic_animation === 1) {
                context.drawImage(goblin_animate, 16, 0, 16, 16, goblin_Fanatic2.x, goblin_Fanatic2.y, 16, 16);
            } else if (goblin_Fanatic_animation === 2) {
                context.drawImage(goblin_animate, 32, 0, 16, 16, goblin_Fanatic2.x, goblin_Fanatic2.y, 16, 16);
            } else if (goblin_Fanatic_animation === 3) {
                context.drawImage(goblin_animate, 48, 0, 16, 16, goblin_Fanatic2.x, goblin_Fanatic2.y, 16, 16);
            }

            goblin_Fanatic2_animation++;
            if (goblin_Fanatic2_animation > 3) {
                goblin_Fanatic2_animation = 0;
            }
        }

        if (!goblin_Fanatic3.isDefeated) {
            goblin_Fanatic3.isSpawned = true;



            let distanceX = goblin_Fanatic3.x - player.x;
            let distanceY = goblin_Fanatic3.y - player.y;
            let returnX = goblin_Fanatic3.x - goblin_Fanatic3.start_x2;
            let returnY = goblin_Fanatic3.y - goblin_Fanatic3.start_y2;

            if (Math.abs(distanceX) <= 64 && Math.abs(distanceY) <= 64) {

                if (distanceX < 0) {
                    goblin_Fanatic3.x += goblin_Fanatic3.sChange;
                } else if (distanceX > 0) {
                    goblin_Fanatic3.x -= goblin_Fanatic3.sChange;
                }

                if (distanceY < 0) {
                    goblin_Fanatic3.y += goblin_Fanatic3.sChange;
                } else if (distanceY > 0) {
                    goblin_Fanatic3.y -= goblin_Fanatic3.sChange;
                }
            } else {
                if (returnX < 0) {
                    goblin_Fanatic3.x += goblin_Fanatic3.sChange;
                } else if (returnX > 0) {
                    goblin_Fanatic3.x -= goblin_Fanatic3.sChange;
                }

                if (returnY < 0) {
                    goblin_Fanatic3.y += goblin_Fanatic3.sChange;
                } else if (returnY > 0) {
                    goblin_Fanatic3.y -= goblin_Fanatic3.sChange;
                }
            }

            if (goblin_Fanatic3_animation === 0) {
                context.drawImage(goblin_animate, 0, 0, 16, 16, goblin_Fanatic3.x, goblin_Fanatic3.y, 16, 16);
            } else if (goblin_Fanatic_animation === 1) {
                context.drawImage(goblin_animate, 16, 0, 16, 16, goblin_Fanatic3.x, goblin_Fanatic3.y, 16, 16);
            } else if (goblin_Fanatic_animation === 2) {
                context.drawImage(goblin_animate, 32, 0, 16, 16, goblin_Fanatic3.x, goblin_Fanatic3.y, 16, 16);
            } else if (goblin_Fanatic_animation === 3) {
                context.drawImage(goblin_animate, 48, 0, 16, 16, goblin_Fanatic3.x, goblin_Fanatic3.y, 16, 16);
            }

            goblin_Fanatic3_animation++;
            if (goblin_Fanatic3_animation > 3) {
                goblin_Fanatic3_animation = 0;
            }
        }

        if (!goblin_Fanatic.isDefeated) {
            goblin_Fanatic.isSpawned = true;

            let distanceX = goblin_Fanatic.x - player.x;
            let distanceY = goblin_Fanatic.y - player.y;
            let returnX = goblin_Fanatic.x - goblin_Fanatic.start_x2;
            let returnY = goblin_Fanatic.y - goblin_Fanatic.start_y2;

            if (Math.abs(distanceX) <= 64 && Math.abs(distanceY) <= 64) {

                if (distanceX < 0) {
                    goblin_Fanatic.x += goblin_Fanatic.sChange;
                } else if (distanceX > 0) {
                    goblin_Fanatic.x -= goblin_Fanatic.sChange;
                }

                if (distanceY < 0) {
                    goblin_Fanatic.y += goblin_Fanatic.sChange;
                } else if (distanceY > 0) {
                    goblin_Fanatic.y -= goblin_Fanatic.sChange;
                }
            } else {
                if (returnX < 0) {
                    goblin_Fanatic.x += goblin_Fanatic.sChange;
                } else if (returnX > 0) {
                    goblin_Fanatic.x -= goblin_Fanatic.sChange;
                }

                if (returnY < 0) {
                    goblin_Fanatic.y += goblin_Fanatic.sChange;
                } else if (returnY > 0) {
                    goblin_Fanatic.y -= goblin_Fanatic.sChange;
                }
            }

            if (goblin_Fanatic_animation === 0) {
                context.drawImage(goblin_animate, 0, 0, 16, 16, goblin_Fanatic.x, goblin_Fanatic.y, 16, 16);
            } else if (goblin_Fanatic_animation === 1) {
                context.drawImage(goblin_animate, 16, 0, 16, 16, goblin_Fanatic.x, goblin_Fanatic.y, 16, 16);
            } else if (goblin_Fanatic_animation === 2) {
                context.drawImage(goblin_animate, 32, 0, 16, 16, goblin_Fanatic.x, goblin_Fanatic.y, 16, 16);
            } else if (goblin_Fanatic_animation === 3) {
                context.drawImage(goblin_animate, 48, 0, 16, 16, goblin_Fanatic.x, goblin_Fanatic.y, 16, 16);
            }

            goblin_Fanatic_animation++;
            if (goblin_Fanatic_animation > 3) {
                goblin_Fanatic_animation = 0;
            }
        }
    }
    if (current_map === map_two_5) {
        
        enemies.push(goblin_Fanatic);
        enemies.push(goblin_Fanatic2);
        enemies.push(goblin_Fanatic3);


        if (!goblin_Fanatic2.isDefeated) {
            goblin_Fanatic2.isSpawned = true;



            let distanceX = goblin_Fanatic2.x - player.x;
            let distanceY = goblin_Fanatic2.y - player.y;
            let returnX = goblin_Fanatic2.x - goblin_Fanatic2.start_x2;
            let returnY = goblin_Fanatic2.y - goblin_Fanatic2.start_y2;

            if (Math.abs(distanceX) <= 64 && Math.abs(distanceY) <= 64) {

                if (distanceX < 0) {
                    goblin_Fanatic2.x += goblin_Fanatic2.sChange;
                } else if (distanceX > 0) {
                    goblin_Fanatic2.x -= goblin_Fanatic2.sChange;
                }

                if (distanceY < 0) {
                    goblin_Fanatic2.y += goblin_Fanatic2.sChange;
                } else if (distanceY > 0) {
                    goblin_Fanatic2.y -= goblin_Fanatic2.sChange;
                }
            } else {
                if (returnX < 0) {
                    goblin_Fanatic2.x += goblin_Fanatic2.sChange;
                } else if (returnX > 0) {
                    goblin_Fanatic2.x -= goblin_Fanatic2.sChange;
                }

                if (returnY < 0) {
                    goblin_Fanatic2.y += goblin_Fanatic2.sChange;
                } else if (returnY > 0) {
                    goblin_Fanatic2.y -= goblin_Fanatic2.sChange;
                }
            }

            if (goblin_Fanatic2_animation === 0) {
                context.drawImage(goblin_animate, 0, 0, 16, 16, goblin_Fanatic2.x, goblin_Fanatic2.y, 16, 16);
            } else if (goblin_Fanatic_animation === 1) {
                context.drawImage(goblin_animate, 16, 0, 16, 16, goblin_Fanatic2.x, goblin_Fanatic2.y, 16, 16);
            } else if (goblin_Fanatic_animation === 2) {
                context.drawImage(goblin_animate, 32, 0, 16, 16, goblin_Fanatic2.x, goblin_Fanatic2.y, 16, 16);
            } else if (goblin_Fanatic_animation === 3) {
                context.drawImage(goblin_animate, 48, 0, 16, 16, goblin_Fanatic2.x, goblin_Fanatic2.y, 16, 16);
            }

            goblin_Fanatic2_animation++;
            if (goblin_Fanatic2_animation > 3) {
                goblin_Fanatic2_animation = 0;
            }
        }

        if (!goblin_Fanatic3.isDefeated) {
            goblin_Fanatic3.isSpawned = true;



            let distanceX = goblin_Fanatic3.x - player.x;
            let distanceY = goblin_Fanatic3.y - player.y;
            let returnX = goblin_Fanatic3.x - goblin_Fanatic3.start_x2;
            let returnY = goblin_Fanatic3.y - goblin_Fanatic3.start_y2;

            if (Math.abs(distanceX) <= 64 && Math.abs(distanceY) <= 64) {

                if (distanceX < 0) {
                    goblin_Fanatic3.x += goblin_Fanatic3.sChange;
                } else if (distanceX > 0) {
                    goblin_Fanatic3.x -= goblin_Fanatic3.sChange;
                }

                if (distanceY < 0) {
                    goblin_Fanatic3.y += goblin_Fanatic3.sChange;
                } else if (distanceY > 0) {
                    goblin_Fanatic3.y -= goblin_Fanatic3.sChange;
                }
            } else {
                if (returnX < 0) {
                    goblin_Fanatic3.x += goblin_Fanatic3.sChange;
                } else if (returnX > 0) {
                    goblin_Fanatic3.x -= goblin_Fanatic3.sChange;
                }

                if (returnY < 0) {
                    goblin_Fanatic3.y += goblin_Fanatic3.sChange;
                } else if (returnY > 0) {
                    goblin_Fanatic3.y -= goblin_Fanatic3.sChange;
                }
            }

            if (goblin_Fanatic3_animation === 0) {
                context.drawImage(goblin_animate, 0, 0, 16, 16, goblin_Fanatic3.x, goblin_Fanatic3.y, 16, 16);
            } else if (goblin_Fanatic_animation === 1) {
                context.drawImage(goblin_animate, 16, 0, 16, 16, goblin_Fanatic3.x, goblin_Fanatic3.y, 16, 16);
            } else if (goblin_Fanatic_animation === 2) {
                context.drawImage(goblin_animate, 32, 0, 16, 16, goblin_Fanatic3.x, goblin_Fanatic3.y, 16, 16);
            } else if (goblin_Fanatic_animation === 3) {
                context.drawImage(goblin_animate, 48, 0, 16, 16, goblin_Fanatic3.x, goblin_Fanatic3.y, 16, 16);
            }

            goblin_Fanatic3_animation++;
            if (goblin_Fanatic3_animation > 3) {
                goblin_Fanatic3_animation = 0;
            }
        }

        if (!goblin_Fanatic.isDefeated) {
            goblin_Fanatic.isSpawned = true;

            let distanceX = goblin_Fanatic.x - player.x;
            let distanceY = goblin_Fanatic.y - player.y;
            let returnX = goblin_Fanatic.x - goblin_Fanatic.start_x2;
            let returnY = goblin_Fanatic.y - goblin_Fanatic.start_y2;

            if (Math.abs(distanceX) <= 64 && Math.abs(distanceY) <= 64) {

                if (distanceX < 0) {
                    goblin_Fanatic.x += goblin_Fanatic.sChange;
                } else if (distanceX > 0) {
                    goblin_Fanatic.x -= goblin_Fanatic.sChange;
                }

                if (distanceY < 0) {
                    goblin_Fanatic.y += goblin_Fanatic.sChange;
                } else if (distanceY > 0) {
                    goblin_Fanatic.y -= goblin_Fanatic.sChange;
                }
            } else {
                if (returnX < 0) {
                    goblin_Fanatic.x += goblin_Fanatic.sChange;
                } else if (returnX > 0) {
                    goblin_Fanatic.x -= goblin_Fanatic.sChange;
                }

                if (returnY < 0) {
                    goblin_Fanatic.y += goblin_Fanatic.sChange;
                } else if (returnY > 0) {
                    goblin_Fanatic.y -= goblin_Fanatic.sChange;
                }
            }

            if (goblin_Fanatic_animation === 0) {
                context.drawImage(goblin_animate, 0, 0, 16, 16, goblin_Fanatic.x, goblin_Fanatic.y, 16, 16);
            } else if (goblin_Fanatic_animation === 1) {
                context.drawImage(goblin_animate, 16, 0, 16, 16, goblin_Fanatic.x, goblin_Fanatic.y, 16, 16);
            } else if (goblin_Fanatic_animation === 2) {
                context.drawImage(goblin_animate, 32, 0, 16, 16, goblin_Fanatic.x, goblin_Fanatic.y, 16, 16);
            } else if (goblin_Fanatic_animation === 3) {
                context.drawImage(goblin_animate, 48, 0, 16, 16, goblin_Fanatic.x, goblin_Fanatic.y, 16, 16);
            }

            goblin_Fanatic_animation++;
            if (goblin_Fanatic_animation > 3) {
                goblin_Fanatic_animation = 0;
            }
        }
    }
}





function checkEnemyDamage() {
    if (attacking) {
        let collisionDistance = 28;
        let enemyValues = Object.values(enemies);
        for (let i = 0; i < enemyValues.length; i++) {
            let enemy = enemyValues[i];
            if (enemy.isSpawned && !enemy.isDefeated) {

                if (lastButtonPressed === "right" || lastButtonPressed === "down") { }
                if (
                    player.x - player.size < enemy.x + enemy.size &&
                    player.x + player.size > enemy.x &&
                    player.y - player.size < enemy.y + enemy.size &&
                    player.y + player.size > enemy.y
                ) {

                    enemy.health -= 1;
                    attacking = false;
                    playSound("sounds/RetroSwooosh02.wav");
                    bounce_back(enemy.name);
                    
                    if (enemy.health <= 0) {
                        enemy.isDefeated = true;
                        enemies.slice(enemy);
                        playSound("sounds/enemyDeath.wav");
                        if (enemy.type === "slime") {
                            slime_killed += 1;
                            if (slime_killed >= 3 && player.health <= player.max_health) {
                                player.health += 1;
                                slime_killed = 0;
                            }
                        } else if (enemy.type === "goblin" && player.health <= player.max_health) {
                            goblin_killed += 1;
                            if (goblin_killed >= 3) {
                                player.health += 1;
                                goblin_killed = 0;
                            }
                        }

                        
                    }
                } else if (lastButtonPressed === "left" || lastButtonPressed === "up") {
                    if (
                        player.x - player.size < enemy.x + enemy.size &&
                        player.x + player.size > enemy.x &&
                        player.y - player.size < enemy.y + enemy.size &&
                        player.y + player.size > enemy.y
                    ) {

                        enemy.health -= 1;
                        attacking = false;
                        playSound("static/sounds/RetroSwooosh02.wav");
                        bounce_back(enemy.name);
                      
                        if (enemy.health <= 0) {
                            enemy.isDefeated = true;
                            enemies.slice(enemy);
                            playSound("static/sounds/enemyDeath.wav");
                            if (enemy.type === "slime") {
                                slime_killed += 1;
                                if (slime_killed >= 3) {
                                    player.health += 1;
                                    slime_killed = 0;
                                }
                            } else if (enemy.type === "goblin") {
                                goblin_killed += 1;
                                if (goblin_killed >= 3) {
                                    player.health += 1;
                                    goblin_killed = 0;
                                }
                            }
                        }
                        
                    }
                }
            }




            attacking = false;
        }
    }
    if (boss1.health <= 0) {
        boss1.isDefeated = true;
        let outcome = "YOU WIN";
                    stop(outcome);
    }
}


function checkPlayerDamage() {
    let collisionDistance = 0;
    let enemyValues = Object.values(enemies);
    for (let i = 0; i < enemyValues.length; i++) {
        let enemy = enemyValues[i];
        if (enemy.isSpawned && !enemy.isDefeated) {


            if (



                Math.abs(player.x - enemy.x) <= collisionDistance &&
                Math.abs(player.y - enemy.y) <= collisionDistance
            ) {

                player.health -= 1;

                bounce_back_player();
                
                if (player.health <= 0) {
                    let outcome = "GAME OVER";
                    stop(outcome);
                }
            }

        }
    }

}


function bounce_back(name) {
    let enemyValues = Object.values(enemies);
    for (let i = 0; i < enemyValues.length; i++) {
        let enemy = enemyValues[i];
        if (enemy.name === name) {
            if (lastButtonPressed === "up") {
                if (!collision(enemy.x - 16, enemy.y - 16, current_collision)) {
                    enemy.y -= 16;
                    return;
                }
            } else if (lastButtonPressed === "down") {
                if (!collision(enemy.x + 16, enemy.y + 16, current_collision)) {
                    enemy.y += 16;
                    return;
                }
            } else if (lastButtonPressed === "right") {
                if (!collision(enemy.x + 16, enemy.y + 16, current_collision)) {
                    enemy.x += 16;
                    return;
                }
            } else if (lastButtonPressed === "left") {
                if (!collision(enemy.x - 16, enemy.y - 16, current_collision)) {
                    enemy.x -= 16;
                    return;
                }
            }
        }
    }
}

function bounce_back_player() {
    if (lastButtonPressed === "up") {
        if (!collision(player.x - 16, player.y - 16, current_collision)) {
            player.y += 24;
        }
    } else if (lastButtonPressed === "down") {
        if (!collision(player.x + 16, player.y + 16, current_collision)) {
            player.y -= 24;
        }
    } else if (lastButtonPressed === "right") {
        if (!collision(player.x + 16, player.y + 16, current_collision)) {
            player.x -= 24;
        }
    } else if (lastButtonPressed === "left") {
        if (!collision(player.x - 16, player.y - 16, current_collision)) {
            player.x += 24;
        }
    }
}

function stop(outcome) {
    context.fillStyle = "red";
    context.font = "30px Arial";
    context.fillText(outcome, canvas.width / 2 - 100, canvas.height / 2);
    window.removeEventListener("keydown", activate, false);
    window.removeEventListener("keyup", deactivate, false);
    window.cancelAnimationFrame(request_id);
    createStartButton();
}

function playSound(source) {
    let sound = new Audio();
    sound.src = source;
    sound.play();
}
